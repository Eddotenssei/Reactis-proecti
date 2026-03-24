import express from "express";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "OrganisedChaos1!",
  database: "concrus-back",
  port: 3306,
});

const app = express();
app.use(express.json());

  app.get("/students", async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM students");

    res.json(rows);

  } catch (error) {
    console.log("error => ", error);
  }
});


app.post("/students", async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      class: studentClass,
      region,
      username,
      password
    } = req.body;

    const sql = `
      INSERT INTO students 
      (first_name, last_name, email, phone, class, region, username, password) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const result = await pool.query(sql, [
      first_name,
      last_name,
      email,
      phone,
      studentClass,
      region,
      username,
      password
    ]);

    res.status(201).json({ message: "Student inserted successfully"});
  } catch (error) {
    console.log("error => ", error);
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});