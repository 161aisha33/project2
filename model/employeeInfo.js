import { pool } from "../Config/db.js"


//EI -employee_information, get employee function
const getEI=async()=>{
    try {
        let [row] = await pool.query('SELECT*FROM employee_information')
        return row
    } catch (error) {
        return 'err'
    }
}

console.log(await getEI());

export {getEI}