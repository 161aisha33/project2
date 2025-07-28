import { pool } from "../Config/db.js";

export const getLeaveByEmployee = async (employeeId) => {
  const [rows] = await pool.query(
    `SELECT Employee_Information_ID, from_date, to_date, reason, status FROM leaverequests WHERE Employee_Information_ID = ? ORDER BY from_date DESC`,
    [employeeId]
  );
  return rows;
};

// Update leave requests for an employee
export const updateLeaveByEmployee = async (employeeId, leaveRequests) => {
  // Remove all existing leave requests for the employee
  await pool.query(
    `DELETE FROM leaverequests WHERE Employee_Information_ID = ?`,
    [employeeId]
  );
  // Insert new leave requests
  for (const req of leaveRequests) {
    await pool.query(
      `INSERT INTO leaverequests (Employee_Information_ID, from_date, to_date, reason, status) VALUES (?, ?, ?, ?, ?)`,
      [employeeId, req.from_date, req.to_date, req.reason, req.status]
    );
  }
};