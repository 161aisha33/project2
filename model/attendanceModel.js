import { pool } from "../config1/db.js";

// Get all attendance records for an employee
const getAttendanceByEmployee = async (employeeId) => {
  const [rows] = await pool.query(
    `SELECT * FROM attendance WHERE Employee_Information_ID = ? ORDER BY attendance_date DESC`,
    [employeeId]
  );
  return rows;
};

// Add a new attendance record
const addAttendance = async (record) => {
  const { Employee_Information_ID, attendance_date, status } = record;
  const [result] = await pool.query(
    `INSERT INTO attendance (Employee_Information_ID, attendance_date, status)
    VALUES (?, ?, ?)`,
    [Employee_Information_ID, attendance_date, status]
  );
  return result;
};

// Update an attendance record
const updateAttendance = async (attendance_id, record) => {
  const { status, remarks } = record;
  const [result] = await pool.query(
    `UPDATE attendance SET status = ?, remarks = ? WHERE attendance_id = ?`,
    [status, remarks, attendance_id]
  );
  return result;
};

// Delete an attendance record
const deleteAttendance = async (attendance_id) => {
  await pool.query(
    `DELETE FROM attendance WHERE attendance_id = ?`,
    [attendance_id]
  );
};

export { getAttendanceByEmployee, addAttendance, updateAttendance, deleteAttendance };