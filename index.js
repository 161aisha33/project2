import cors from 'cors';
import express from 'express';
import { config } from 'dotenv';
import { getEmployeeCon, addEmployeeCon, deleteEmployeeCon } from './controller/employeeCon.js';
import attendanceRoutes from './routes/index.js'; 
import { getLeaveByEmployee } from './model/leaveModel.js';     

config(); // Load .env variables

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 9090;

// Routes for employee operations
app.get('/employee_information', getEmployeeCon);
app.post('/employee_information', addEmployeeCon);
app.delete('/employee_information/:id', deleteEmployeeCon);

// Use shared routes (attendance, leave, payroll)
app.use(attendanceRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running: http://localhost:${PORT}`);
});
