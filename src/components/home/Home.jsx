import React from 'react'
import { Box,styled } from '@mui/material';
import Navbar from './Navbar';
import Banner from './Banner';

const WrapperBox = styled(Box)`
  padding:0px 15px;

`


const Home = () => {
  return (
    <>


    <WrapperBox>
    <Navbar/>
    <Banner />
    </WrapperBox>
   
 


    </>
  )
}

export default Home;