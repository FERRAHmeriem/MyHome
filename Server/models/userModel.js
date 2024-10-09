import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required : true,
        unique : true,
    },
    password: {
        type : String,
        required : true,
    },
    email: {
        type : String,
        required : true,
        unique : true,
    },
    avatar:{
        type:String,
        default:"https://th.bing.com/th/id/OIP.PKlD9uuBX0m4S8cViqXZHAHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            }
} , {timestamps : true} );

const User = mongoose.model('User-Project1' , userSchema);

export default User ;