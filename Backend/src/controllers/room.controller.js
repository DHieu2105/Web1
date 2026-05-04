import pool from "../config/db.js";

export const getRooms = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM rooms");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getRoomById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM rooms WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Room not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};