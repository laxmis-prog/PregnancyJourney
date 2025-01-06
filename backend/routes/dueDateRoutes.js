import express from "express";
import db from "../db.js";
import authenticateToken from "../middlewares/authMiddleware.js";

const router = express.Router();

// ✅ Save Due Date
router.post("/due-date", authenticateToken, (req, res) => {
  const { due_date } = req.body;
  const userId = req.user.id; // Extracted from the token (user ID)

  if (!due_date) {
    return res.status(400).json({ error: "Due date is required" });
  }

  // Check if the user already has a due date set
  const checkQuery = "SELECT * FROM due_dates WHERE user_id = ?";
  db.query(checkQuery, [userId], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length > 0) {
      // Update existing due date
      const updateQuery = "UPDATE due_dates SET due_date = ? WHERE user_id = ?";
      db.query(updateQuery, [due_date, userId], (err) => {
        if (err) {
          console.error("Failed to update due date:", err);
          return res.status(500).json({ error: "Failed to update due date" });
        }
        return res.json({ message: "Due date updated successfully" });
      });
    } else {
      // Insert new due date
      const insertQuery =
        "INSERT INTO due_dates (user_id, due_date) VALUES (?, ?)";
      db.query(insertQuery, [userId, due_date], (err) => {
        if (err) {
          console.error("Failed to save due date:", err);
          return res.status(500).json({ error: "Failed to save due date" });
        }
        return res.json({ message: "Due date saved successfully" });
      });
    }
  });
});

export default router;
