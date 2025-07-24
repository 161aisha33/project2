import {getEI} from "../model/employeeInfo.js"


const getEmployeeCon =async(req,res)=>{
    res.json({
        employee_information: await getEI()
    })
}
export{getEmployeeCon}