import express from "express";
import { registerSchema } from "../validations/auth.js";
import { pool } from "../data/data.js";
import bcrypt from "bcrypt";

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
    const result = registerSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Validation error",
        errors: result.error.flatten().fieldErrors,
      });
    }

    const {
      first_name,
      last_name,
      email,
      phone,
      class: studentClass,
      region,
      username,
      password,
    } = result.data;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

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
      hashedPassword,
    ]);

    res.status(201).json({ message: "Student inserted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
