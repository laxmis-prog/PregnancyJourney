import express from "express";
import db from "../db.js";
import authenticateUser from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * ✅ Save or Update Due Date
 * POST /api/user/due-date
 */
router.post("/due-date", authenticateUser, async (req, res) => {
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

  try {
    const query = `
    INSERT INTO due_dates (user_id, due_date) 
    VALUES (?, ?) 
    ON DUPLICATE KEY UPDATE due_date = VALUES(due_date)
  `;
    const [results] = await db.execute(query, [userId, due_date]);
    if (results.affectedRows > 0) {
      return res.status(200).json({ message: "Due date saved successfully" });
    } else {
      return res.status(500).json({ error: "Failed to save/update due date" });
    }
  } catch (err) {
    console.error("Failed to save/update due date:", err);
    return res.status(500).json({ error: "Failed to save/update due date" });
  }
});

/**
 * ✅ Fetch Due Date
 * GET /api/user/due-date
 */
router.get("/due-date", authenticateUser, async (req, res) => {
  const userId = req.user.id;

  if (!userId) {
    return res
      .status(401)
      .json({ error: "Unauthorized: Missing user ID in token" });
  }

  const query = "SELECT due_date FROM due_dates WHERE user_id = ?";
  try {
    const [results] = await db.execute(query, [userId]);
    if (results.length > 0) {
      res.status(200).json({ due_date: results[0].due_date });
    } else {
      res.status(200).json({ due_date: null });
    }
  } catch (err) {
    console.error("Failed to fetch due date:", err);
    return res.status(500).json({ error: "Failed to fetch due date" });
  }
});

export default router;
