import { getAttendanceByEmployee, addAttendance, updateAttendance, deleteAttendance } from "../model/attendanceModel.js";

export const getAttendance = async (req, res) => {
  try {
    const records = await getAttendanceByEmployee(req.params.id);
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postAttendance = async (req, res) => {
  try {
    const result = await addAttendance(req.body);
    res.json({ success: true, id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const putAttendance = async (req, res) => {
  try {
    await updateAttendance(req.params.id, req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const delAttendance = async (req, res) => {
  try {
    await deleteAttendance(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};