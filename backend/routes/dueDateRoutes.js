import express from "express";
import db from "../db.js";
import authenticateToken from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * ✅ Save or Update Due Date
 * POST /api/user/due-date
 */
router.post("/due-date", authenticateToken, (req, res) => {
  const { due_date } = req.body; // Extract due_date from request body
  const userId = req.user.id; // Extract user ID from token

  // Validate required fields
  if (!due_date) {
    return res.status(400).json({ error: "Due date is required" });
  }

  // Use UPSERT to simplify logic
  const query = `
    INSERT INTO due_dates (user_id, due_date) 
    VALUES (?, ?) 
    ON DUPLICATE KEY UPDATE due_date = VALUES(due_date)
  `;

  db.query(query, [userId, due_date], (err) => {
    if (err) {
      console.error("Failed to save/update due date:", err);
      return res.status(500).json({ error: "Failed to save/update due date" });
    }
    return res.status(200).json({ message: "Due date saved successfully" });
  });
});

/**
 * ✅ Fetch Due Date
 * GET /api/user/due-date
 */
router.get("/due-date", authenticateToken, (req, res) => {
  const userId = req.user.id; // Extract user ID from token

  const query = "SELECT due_date FROM due_dates WHERE user_id = ?";
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error("Failed to fetch due date:", err);
      return res.status(500).json({ error: "Failed to fetch due date" });
    }

    if (results.length > 0) {
      return res.status(200).json({ due_date: results[0].due_date });
    } else {
      return res.status(200).json({ due_date: null });
    }
  });
});

export default router;
