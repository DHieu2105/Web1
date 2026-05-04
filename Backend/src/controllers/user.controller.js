import pool from "../config/db.js";

export const getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, email, created_at FROM users");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT id, name, email, created_at FROM users WHERE id = $1", [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "User not found" });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
