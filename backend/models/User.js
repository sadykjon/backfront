import { Schema, Types, model } from "mongoose";

const UserSchema=new Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    todos:[{
        type:Types.ObjectId,
        ref:"Todo"
    }]
},{timestamps:true})


export default model("User",UserSchema)