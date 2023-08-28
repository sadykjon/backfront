import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { register, login } from "./routes/auth-routes.js"
import {body   } from "express-validator"
import { createTodo, getTodo, deleteTodo,important,completed } from "./routes/todo-routes.js"


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://admin:admin@cluster0.4yhlqel.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("DB ok"))
    .catch((err) => console.log("DB  error", err))

app.post("/api/auth/register", [
    body("email", "Некоректный Email").isEmail(),
    body("password", "Пароль должен быть  минимум 5 символов").isLength({ min: 5 })
],
    register
)

app.post("/api/auth/login",login);

// todo requests

app.post("/api/todo/add", createTodo)
app.get("/api/todo", getTodo)
app.delete("/api/todo/delete/:id",deleteTodo )
app.patch("/api/todo/important/:id",important)
app.patch("/api/todo/completed/:id",completed)



//http://localhost:5555/api/auth/register   

const PORT = 5555;




app.listen(PORT, () => {
    console.log(`app listen on port ${PORT}`);
})



















