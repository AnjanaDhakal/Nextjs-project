import mongoose from "mongoose";

const userScheme = new mongoose.Schema({

username:{
    type:String,
    required:[true,"Please provide your username"],
    unique:true
},
email:{
    type:String,
    required:[true,"Please provide your email"],
    unique:true
},
password:{
    type:String,
    required:[true,"Please provide your password"],
    unique:true
},
isVarified:{
    type:Boolean,
    default:false,
}, 
isAdmin:{
    type:Boolean,
    default:false,
},
forgotPasswordToken: String,
forgotPasswordTokenExpiry: Date,
varifyToken: String,
varifyTokenExpiry:Date,
})


const User = mongoose.models.users || mongoose.model("users", userScheme);


export default User;
