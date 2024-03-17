import React from 'react';
import { useState,useContext } from 'react';
import { Dialog ,Box,TextField,Typography,Button,styled} from '@mui/material';
import { authenticateUserSignup ,authenticateLogin} from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const WrapperMainBox = styled(Box)`
   height:70vh;
   width:90vh;
   display:flex;
   
`
const WrapperImage = styled(Box)`
   height:96.2%;
   width:40%;
   background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
   padding:10px ;
   & > p,& > h5 {
    color:#ffffff;
    padding:0px 15px;
   }
   & > h5{
    padding-top:15px;
    font-weight:600;
   }
`
const WrapperBox2 = styled(Box)`
   display:flex;
   flex-direction:column;
   padding:25px 55px;
   flex:1;
   & > div, & > button , & > p{
    margin-top:20px;
   }
`
const WrapperButton = styled(Button)`
   ${'' /* text-transform:none; */}
   color:#fff;
   background:#FB641B;
   border-radius:2px;
   height:48px;
   &:hover{
      color:#fff;
   background:#FB641B;
   }
`
const WrapperOTPButton = styled(Button)`
   color:#2874f0;
   background:#fff;
   border-radius:2px;
   height:48px;
   box-shadow:0 2px 4px 0 rgb(0,0,0,.20);
`
const WrapperText = styled(Typography)`
   font-size:12px;
   color:#878787;
`
const WrapperCreateAccount = styled(Typography)`
   font-size:15px;
   text-align:center;
   color:#2874f0;
   cursor:pointer;
   font-wright:600;
`
const WrapperTypography2 = styled(Typography)`
   font-size:10px;
   color:#ff6161;
   line-height:0;
   margin-top:10px;
   font-weight:600;
`

const accountIntialize = () => ({
    login: {
        view: 'login',
        heading: 'Login',
        subheading:'Get access to your Ordres, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading:"Looks like you're new here",
        subheading:'Sign up with your mobile number to get started'
    }
});

const signupIntialize = () => ({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
});
const loginIntialize =()=>({
   username:'',
   password:''
})


// login button  function 
const LoginDialog = ({open,setOpen}) => {
   const [account,toggleAccount] = useState(accountIntialize().login);
   const [signup, setSignup] = useState(signupIntialize());
   const [login, setLogin] = useState(loginIntialize());
   const [error,setError] = useState(false);

   const {account2, setAccount2} = useContext(DataContext)

   const handleClose =()=>{
     setOpen(false);
     toggleAccount(accountIntialize().login);
   }
   const createAccount =()=>{
     toggleAccount(accountIntialize().signup);
   }
   const onInputChange =(e)=>{
    setSignup({...signup,[e.target.name]:e.target.value});
   }
   const onValueChange=(e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
   }
   const signupUser = async()=>{
     let response = await authenticateUserSignup(signup);  
     if(!response) return;
     handleClose();
     setAccount2(signup.firstname)
   }
   const loginUser = async () => {
      let response;
      try {
         response = await authenticateLogin(login);
         if (response && response.status === 200) {
            handleClose();
            setAccount2(response.data.data.firstname);
         } else {
            setError(true);
         }
      } catch (error) {
         // Handle any errors that occur during the API call
         console.error("Error during login:", error);
         setError(true);
      }
   };


  return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx:{maxWidth:'unset'}}} >
      <WrapperMainBox>
        <WrapperImage> 
          <Typography variant='h5'>{account.heading}</Typography>
          <Typography style={{marginTop:20}}>{account.subheading}</Typography>

        </WrapperImage>

      {account.view === 'login' ?
      <WrapperBox2>
            <TextField variant='standard' onChange={(e) => onValueChange(e)} name='username'  label='Enter the Email/Mobile Number'/>
            {error && <WrapperTypography2>Please enter the valid user name</WrapperTypography2>}
            <TextField variant='standard' onChange={(e) => onValueChange(e)} name='password'  label='Enter the Password'/>
            <WrapperText>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy</WrapperText>
            <WrapperButton onClick={()=>loginUser()}>Login</WrapperButton>
            <Typography style={{textAlign:'center'}}>OR</Typography>
            <WrapperOTPButton>Request OTP</WrapperOTPButton>
            <WrapperCreateAccount onClick={()=>createAccount()}>New to Flipkart? Create an Account</WrapperCreateAccount>
        </WrapperBox2>
        : 
        <WrapperBox2>
            <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='firstname' label='Enter the First Name'/>
            <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='lastname' label='Enter the Last Name'/>
            <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='username' label='Enter the User Name'/>
            <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='email' label='Enter the Email'/>
            <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='password' label='Enter the Password'/>
            <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='phone' label='Enter the Phone'/>
           
            <WrapperButton onClick={()=>signupUser()}>Continue</WrapperButton>
            
        </WrapperBox2>
        }
      </WrapperMainBox>
    </Dialog>
  )
}

export default LoginDialog;