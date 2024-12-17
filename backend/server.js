import express from "express";
const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());

// Route to send data to the frontend
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
