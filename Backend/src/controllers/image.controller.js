import pool from "../config/db.js";

export const getImages = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM images");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getImageById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM images WHERE id = $1", [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Image not found" });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
