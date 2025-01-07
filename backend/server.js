import database from "./db.js";
import express from "express";
import bcrypt from "bcryptjs";
import cors from "cors";
import { sendVerificationEmail } from "./mail.js";
import { generateVerificationToken, verifyEmail } from "./verification.js";
import emailVerificationRoutes from "./routes/emailVerificationRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dueDateRoutes from "./routes/dueDateRoutes.js"; // Import dueDateRoutes
import eventRoutes from "./routes/eventRoutes.js"; // Import eventsRoutes

const app = express();
const port = 5000;

// Middleware for parsing JSON
app.use(express.json());

// Allow requests from your frontend
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
    methods: ["GET", "POST"], // Specify allowed HTTP methods
    credentials: true, // Allow cookies or authentication headers
  })
);

// Routes
app.use("/api/email-verification", emailVerificationRoutes); // Email verification routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/due-date", dueDateRoutes); // Add Due Date Routes here
app.use("/api/events", eventRoutes); // Add Events Routes here

// Route to send data to the frontend
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

// Registration Route
app.post("/api/register", async (req, res) => {
  const { email, username, password } = req.body;
  const verificationToken = generateVerificationToken(); // Generate a verification token

  try {
    // Check if username or email already exists
    database.query(
      "SELECT * FROM users WHERE email = ? OR username = ?",
      [email, username],
      (err, result) => {
        if (result.length > 0) {
          return res.status(400).send("Email or Username already exists.");
        }

        // Hash the password
        bcrypt.hash(password, 10, (err, hashedPassword) => {
          if (err) {
            console.error(err);
            return res.status(500).send("Error hashing password.");
          }

          // Insert new user with email, username, password, and confirmed set to false
          const sql =
            "INSERT INTO users (email, username, password, confirmed, verificationToken) VALUES (?, ?, ?, ?, ?)";
          database.query(
            sql,
            [email, username, hashedPassword, false, verificationToken],
            (err) => {
              if (err) {
                console.error(err);
                return res
                  .status(500)
                  .send("An error occurred while registering the user.");
              }

              // Send verification email
              sendVerificationEmail(email, verificationToken);
              res
                .status(201)
                .send(
                  "User registered successfully! Please check your email for verification."
                );
            }
          );
        });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while registering the user.");
  }
});

// Email verification route
app.get("/verify/:token", (req, res) => {
  const token = req.params.token;

  // Verify the email using the verification token
  verifyEmail(token, (err, message) => {
    if (err) {
      return res.status(400).send(err); // Invalid or expired token
    }
    res.status(200).send(message); // Successful confirmation
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
