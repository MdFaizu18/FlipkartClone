import axios from "axios";

const URL = 'http://localhost:8000'

export const authenticateUserSignup = async(data)=>{
    try{
        return await axios.post(`${URL}/signup`,data);
    }catch(error){
        console.log('error while calling the signup api',error)
    }
}

export const authenticateLogin = async(data)=>{
    try{
        return await axios.post(`${URL}/login`,data);
    }catch(error){
        console.log('error while calling the signup api',error)
        return error.response;
    }
}