import { pool } from "../Config/db.js";

export const getLeaveByEmployee = async (employeeId) => {
  const [rows] = await pool.query(
    `SELECT * FROM leaverequests WHERE Employee_Information_ID = ? ORDER BY date DESC`,
    [employeeId]
  );
  return rows;
};