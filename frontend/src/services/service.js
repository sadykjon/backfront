
import axios from "axios"

axios.defaults.baseURL="http://localhost:5555/api/"

// create user

const registerService = (data)=>{
    return axios.post("auth/register",data)
}

const loginService=(data)=>{
    return axios.post("auth/login",data)
}

const createTodo= (text,userId)=>{
    return axios.post("todo/add", {text, userId})
}

const todoGet=(userId)=>{
    return axios.get("todo",{
        params:{
            userId:userId
        }   
    })
}

const deleteTodo= (id)=>{
    return axios.delete(`todo/delete/${id}`,id)
}

const todoCompleted=(id)=>{
    return axios.patch(`todo/completed/${id}`,id)
}
const todoImportant=(id)=>{
    return axios.patch(`todo/important/${id}`,id)
}

const services = {
    registerService,
    loginService,
    createTodo,
    todoGet,
    deleteTodo,
    todoCompleted,
    todoImportant
    
}

export default services
