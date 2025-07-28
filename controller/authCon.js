import { pool } from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await pool.query('SELECT * FROM login_page WHERE email = ?', [email]);

    if (rows.length === 0) return res.status(401).json({ error: 'User not found' });

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(401).json({ error: 'Invalid credentials' });

    // Issue JWT token
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET || 'secret-key',
      { expiresIn: '2h' }
    );

    res.status(200).json({ token, role: user.role });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
