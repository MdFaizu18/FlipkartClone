import React from 'react';
import { useState,useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box,Button ,styled,Typography} from '@mui/material';
import LoginDialog from './login/LoginDialog';
import { DataContext } from '../context/DataProvider';
import Profile from './Profile';

const WrapperBox = styled(Box)`
  display:flex;
  margin:0 3% 0 auto;
  & > button, & > p, & > div {
    margin-right:40px;
    font-size:16px;
    align-items:center;
  }
`
const WrapperBox2 = styled(Box)`
     display:flex;
`
const WrapperLoginButton = styled(Button)`
     background:#ffffff;
     color:#2874f0;
     text-transform:none;
     padding:5px 40px;
     border-radius:2px;
     box-shadow:none;
     font-weight:600;
     &:hover {
     background:#ffffff;
     color:#2874f0;
  }
`

const CustomButton = () => {
     const[open,setOpen]=useState(false);
     const{account2 ,setAccount2}=useContext(DataContext);
     
     const openDialog =()=>{
      setOpen(true);
     }

  return (
    <div>
      <WrapperBox>
       {
        account2?<Profile account2={account2} setAccount2={setAccount2}/>:
        <WrapperLoginButton variant='container' onClick={()=>openDialog()}>Login</WrapperLoginButton>
      }
        <Typography style={{marginTop:5 ,width:135}}>Became a Seller</Typography>
        <Typography style={{marginTop:5 }}>More</Typography>
      
        <WrapperBox2>
        <ShoppingCartIcon/>
        <Typography>Cart</Typography>
        </WrapperBox2>
        <LoginDialog open={open} setOpen={setOpen}/>
      </WrapperBox>
    </div>
  )
}

export default CustomButton;
