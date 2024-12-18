import express from "express";
import mysql from "mysql2";
import bcrypt from "bcryptjs";
import cors from "cors";

const app = express();
const port = 5000;

// Allow requests from your frontend
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
    methods: ["GET", "POST"], // Specify allowed HTTP methods
    credentials: true, // Allow cookies or authentication headers
  })
);

// Middleware to parse JSON
app.use(express.json());

//MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "journey",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: ", err);
    return;
  }
  console.log("Connected to MySQL!");
});

// Route to send data to the frontend
app.get("/", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

//Registration Route
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, hashedPassword],
      (err) => {
        if (err) {
          if (err.code === "ER_DUP_ENTRY") {
            // Duplicate email error
            res.status(400).send("Email is already registered.");
          } else {
            console.error(err);
            res
              .status(500)
              .send("An error occurred while registering the user.");
          }
        } else {
          res.status(201).send("User registered successfully!");
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while registering the user.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
