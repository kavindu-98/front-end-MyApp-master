import axios from "axios"

const logIn=async({employeeId,password})=>{
    console.log('Reached')
    const config={headers:{'Content-Type':'application/json'}}
const response=await axios.post(`http://10.0.2.2:5000/api/users/login`,{employeeId,password},config)
console.log(response)
return response.data
}
const signUp=async(object)=>{
    console.log('Reached')
    const config={headers:{'Content-Type':'application/json'}}
const response=await axios.post(`http://10.0.2.2:5000/api/users/login`,object,config)
console.log(response)
return response.data
}
const userService={logIn,signUp}
export default userService