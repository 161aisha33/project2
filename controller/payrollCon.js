import { pool } from "../config/db.js";

export const getPayroll = async (req, res) => {
  try {
    const [rows] = await pool.query(`
  SELECT 
    e.Employee_Information_ID AS employeeId,
    e.name AS name,
    p.hours_worked AS hoursWorked,
    p.leave_deductions AS leaveDeductions,
    p.final_salary AS finalSalary
  FROM payroll p
  JOIN employee_information e ON p.Employee_Information_ID = e.Employee_Information_ID
`);
    res.status(200).json(rows);
  } catch (err) {
    console.error("Error fetching payroll:", err);
    res.status(500).json({ error: "Failed to fetch payroll data" });
  }
};


export const getPayrollById = async (req, res) => {
  const employeeId = req.params.id;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM payroll WHERE Employee_Information_ID = ?",
      [employeeId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(rows[0]); // Return single object
  } catch (err) {
    console.error("Error fetching employee payroll:", err);
    res.status(500).json({ error: "Failed to fetch employee payroll" });
  }
};
