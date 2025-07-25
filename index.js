import cors from 'cors';
import express from 'express';
import { config } from 'dotenv';
import { getEmployeeCon, addEmployeeCon, deleteEmployeeCon } from './controller/employeeCon.js';
import attendanceRoutes from './routes/index.js'; 
import { getLeaveByEmployee } from './model/leaveModel.js';     
config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.get('/employee_information', getEmployeeCon);
app.post('/employee_information', addEmployeeCon);
app.delete('/employee_information/:id', deleteEmployeeCon);

app.use(attendanceRoutes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});