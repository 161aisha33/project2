import { getEI, addEI, deleteEI } from "../model/employeeInfo.js";

const getEmployeeCon = async (req, res) => {
    try {
        const employees = await getEI();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addEmployeeCon = async (req, res) => {
    try {
        const result = await addEI(req.body);
        res.json({ success: true, id: result.insertId });
    } catch (error) {
        console.error("Controller error:", error); // Add this line
        res.status(500).json({ error: error.message });
    }
};

const deleteEmployeeCon = async (req, res) => {
    try {
        await deleteEI(req.params.id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { getEmployeeCon, addEmployeeCon, deleteEmployeeCon };