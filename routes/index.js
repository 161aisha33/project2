import express from "express";
import { getPayroll, getPayrollById } from "../controller/payrollCon.js"; // ⬅️ Import the new function
import { getPerformanceReviews } from "../controller/performanceCon.js";
import { putLeave } from "../controller/leaveCon.js";
import { loginUser } from '../controller/authCon.js';

import {
  getAttendance,
  postAttendance,
  putAttendance,
  delAttendance
} from "../controller/attendanceCon.js";
import { getLeave } from "../controller/leaveCon.js";

const router = express.Router();

// Attendance routes
router.get("/attendance/:id", getAttendance);
router.post("/attendance", postAttendance);
router.put("/attendance/:id", putAttendance);
router.delete("/attendance/:id", delAttendance);

// Leave route
router.get("/leave/:id", getLeave);
router.put("/leave/:id", putLeave);

// Payroll routes
router.get("/payroll", getPayroll); // All payroll records
router.get("/payroll/:id", getPayrollById); // ⬅ Single employee's payroll

//Performance route
router.get("/performance", getPerformanceReviews);

//login route
router.post('/login', loginUser);

export default router;
