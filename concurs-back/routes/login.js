import express from "express";
import { pool } from "../data/data.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const [rows] = await pool.query(
      "SELECT * FROM students WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = rows[0];

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({
      message: "Login successful",
      user: {
        email: user.email,
        username: user.username,
      },
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;