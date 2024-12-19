import mysql from "mysql2";

// Create and configure the database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Replace with your MySQL user
  password: "", // Replace with your MySQL password
  database: "journey", // Replace with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL!");
});

// Export the connection so it can be used in other files
export default db;
