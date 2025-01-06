import jwt from "jsonwebtoken";

// Middleware to verify user authentication
export const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied: No Token Provided" });
  }

  try {
    const decoded = jwt.verify(token, "your_jwt_secret"); // Replace with your actual JWT secret key
    req.user = decoded; // Attach user data to the request object
    next(); // Move to the next middleware/route handler
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Invalid Token" });
  }
};

export default authenticateUser;
