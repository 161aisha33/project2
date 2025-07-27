import { pool } from "../Config/db.js"

const getEI = async () => {
    try {
        const [rows] = await pool.query(
            `SELECT 
                Employee_Information_ID AS employeeId,
                name,
                position,
                department_id AS department,
                salary,
                contact_email AS email,
                image_url AS imageUrl,
                phone_number,
                hire_date
            FROM employee_information`
        );
        return rows;
    } catch (error) {
        // Log the error for debugging!
        console.error(error);
        return 'err';
    }
}

const addEI = async (employee) => {
        console.log("Employee received for insert:", employee); 
    const { name, position, department, salary, email, phone_number, hire_date, imageUrl } = employee;
    const [result] = await pool.query(
        `INSERT INTO employee_information 
        (name, position, department_id, salary, contact_email, phone_number, hire_date, image_url)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [name, position, department, salary, email, phone_number, hire_date, imageUrl]
    );
    return result;
};

const deleteEI = async (id) => {
    await pool.query(
        `DELETE FROM employee_information WHERE Employee_Information_ID = ?`,
        [id]
    );
};

export { getEI, addEI, deleteEI };