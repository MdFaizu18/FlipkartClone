import React from 'react'
import {Toolbar,Box} from '@mui/material';
import { WrapperAppbar, WrapperBox, WrapperTypo, WrapperImg, WrapperLoginBox } from '../assests/wrappers/Header.js';
import CustomButton from './CustomButton.jsx';
import Search from './Search.jsx';

const Header = () => {
    // to import the logo url ---
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png'
   
    return (
     <WrapperAppbar>
     {/* for navbar appbar and toolbar */ }
     <Toolbar style={{minHeight:55}}> 
         {/* for flipkart logo container  */}
         <WrapperBox>
            {/* flipkart logo  */}
             <img src={logoURL} alt="flipkar logo" style={{ width: 75,}} /> 
            <Box style={{display:'flex'}}>
                <WrapperTypo> Explore&nbsp;
                            <Box component="span" style={{ color: '#FFE500' }}>Plus</Box>
                </WrapperTypo>
             <WrapperImg src={subURL} alt="plus logo" />
            </Box>
         </WrapperBox>
         {/* for search input box  */}
         <Search/>
         {/* for login button  */}
         <WrapperLoginBox>
         <CustomButton/>
         </WrapperLoginBox>
        </Toolbar>

    </WrapperAppbar>
  )
}

export default Header;
