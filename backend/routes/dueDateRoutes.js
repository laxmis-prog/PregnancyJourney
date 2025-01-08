import express from "express";
import db from "../db.js";
import authenticateUser from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * ✅ Save or Update Due Date
 * POST /api/user/due-date
 */
router.post("/due-date", authenticateUser, (req, res) => {
  const { due_date } = req.body;
  const userId = req.user.id;

  if (!userId) {
    return res
      .status(401)
      .json({ error: "Unauthorized: Missing user ID in token" });
  }

  if (!due_date) {
    return res.status(400).json({ error: "Due date is required" });
  }

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
router.get("/due-date", authenticateUser, (req, res) => {
  const userId = req.user.id;

  if (!userId) {
    return res
      .status(401)
      .json({ error: "Unauthorized: Missing user ID in token" });
  }

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
