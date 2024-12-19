import db from "./db.js"; // Database connection

// Function to generate a random verification token (you can use a library like uuid or crypto)
export const generateVerificationToken = () => {
  return Math.random().toString(36).substring(2); // Simple random string for the token
};

// Function to verify the token and update the user's 'confirmed' status in the database
export const verifyEmail = (token, callback) => {
  // Find the user with the matching token
  db.query(
    "SELECT * FROM users WHERE verificationToken = ?",
    [token],
    (err, result) => {
      if (err || result.length === 0) {
        callback("Invalid or expired token", null);
      } else {
        // Update the user's confirmed status to true
        const userId = result[0].id;
        db.query(
          "UPDATE users SET confirmed = true WHERE id = ?",
          [userId],
          (err) => {
            if (err) {
              callback("Error updating confirmation status", null);
            } else {
              callback(null, "Email successfully confirmed");
            }
          }
        );
      }
    }
  );
};
