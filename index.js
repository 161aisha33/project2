import express from 'express'
import { config } from 'dotenv'
import { getEmployeeCon } from './controller/employeeCon.js'
config()

const app = express()

const PORT = process.env.PORT

app.get('/employee_information',getEmployeeCon)
    


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    
})