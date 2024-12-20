import mysql from "mysql2/promise";

// Create and configure the database connection
const db = await mysql.createConnection({
  host: "localhost",
  user: "root", // Replace with your MySQL user
  password: "", // Replace with your MySQL password
  database: "journey", // Replace with your database name
});

// Test the database connection
try {
  await db.connect();
  console.log("Connected to MySQL!");
} catch (err) {
  console.error("Error connecting to MySQL:", err);
  throw err;
}

// Export the connection so it can be used in other files
export default db;
