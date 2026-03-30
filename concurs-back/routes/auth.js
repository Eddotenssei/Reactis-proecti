import express from "express";
import { z } from "zod";
import { pool } from "../data/data.js";

const router = express.Router();


router.get("/students", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM students");
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/students", async (req, res) => {
  try {
    const validated = studentSchema.parse(req.body);

    const {
      first_name,
      last_name,
      email,
      phone,
      class: studentClass,
      region,
      username,
      password,
    } = validated;

    const sql = `
      INSERT INTO students 
      (first_name, last_name, email, phone, class, region, username, password) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await pool.query(sql, [
      first_name,
      last_name,
      email,
      phone,
      studentClass,
      region,
      username,
      password,
    ]);

    res.status(201).json({ message: "Student inserted successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Invalid data" });
  }
});

export default router;