import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 1,
        max: 20
    },
    username: {
        type: String,
        required: true,
        index:true,
        unique:true,
        lowercase:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
});

const user = mongoose.model('user',UserSchema);
export default user;