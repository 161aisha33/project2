import { getLeaveByEmployee } from "../model/leaveModel.js";
import { updateLeaveByEmployee } from "../model/leaveModel.js";

export const getLeave = async (req, res) => {
  try {
    const records = await getLeaveByEmployee(req.params.id);
    res.json(records); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const putLeave = async (req, res) => {
  try {
    await updateLeaveByEmployee(req.params.id, req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};