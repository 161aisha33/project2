// backend/controller/performanceCon.js
import { pool } from '../config1/db.js';

export const getPerformanceReviews = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM performancereviews");
    res.status(200).json(rows);
  } catch (err) {
    console.error("Error fetching performance reviews:", err);
    res.status(500).json({ error: "Failed to fetch performance reviews" });
  }
};

