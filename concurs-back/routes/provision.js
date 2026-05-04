import express from "express";
import { pool } from "../data/data.js";

const router = express.Router();

router.get("/provision/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM provisions WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Provision not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});


router.post("/provision", async (req, res) => {
  const { header, context } = req.body;


  if (!header || !context) {
    return res.status(400).json({ message: "Header and context are required" });
  }

  try {
    const [result] = await pool.query(
      "INSERT INTO provisions (header, context) VALUES (?, ?)",
      [header, context]
    );

    res.status(201).json({
      message: "Provision created",
      id: result.insertId,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;