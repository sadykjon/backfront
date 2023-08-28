import { Schema,model, Types } from "mongoose";

const TodoSchema = Schema ({
    owner:{
        type:Types.ObjectId,
        ref:"User"
    },
    text:{
        type:String,
        
    },
    completed:{
        type:Boolean,
        default:false
    },
    important:{
        type:Boolean,
        default:false
    }
})

export default model("Todo" ,TodoSchema)