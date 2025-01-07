import express from "express";
const router = express.Router();

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Current Directory:", __dirname); // This will log the absolute path of the current directory
import db from "../db.js"; // Assuming you have a db module for database connection

// Route to save an event
router.post("/save", async (req, res) => {
  const { title, start, end } = req.body;

  const query = "INSERT INTO events (title, start, end) VALUES (?, ?, ?)";

  try {
    // Using async/await to run the query
    await db.execute(query, [title, start, end]);
    res
      .status(201)
      .json({ status: "success", message: "Event created successfully" });
  } catch (err) {
    console.error("Error inserting event:", err);
    res
      .status(500)
      .json({ status: "error", message: "Failed to create event" });
  }
});

// Route to get all events from the database
router.get("/all", async (req, res) => {
  const query = "SELECT * FROM events ORDER BY start";

  try {
    // Using async/await to fetch events
    const [results] = await db.execute(query);
    res.status(200).json(results); // Send all events to the frontend
  } catch (err) {
    console.error("Error fetching events:", err);
    res
      .status(500)
      .json({ status: "error", message: "Failed to retrieve events" });
  }
});

export default router;
