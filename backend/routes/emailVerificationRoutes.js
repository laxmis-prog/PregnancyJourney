import express from "express";
// Correct import path to go up one level and reference verification.js
import { verifyEmail } from "../verification.js"; // Update the import path

const router = express.Router();

// Email verification route
router.get("/api/verify-email", (req, res) => {
  const token = req.query.token; // Extract token from query parameters

  if (!token) {
    return res
      .status(400)
      .json({ success: false, message: "Token is required" });
  }

  verifyEmail(token, (error, message) => {
    if (error) {
      return res.status(400).json({ success: false, message: error });
    }

    res.status(200).json({ success: true, message: message });
  });
});

export default router;
