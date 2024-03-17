import React from 'react';
import { Box ,styled,Typography} from '@mui/material';
import { navData } from '../../constants/data';

const WrapperNabarBox = styled(Box)`
   display:flex;
   justify-content:space-around;
   margin:70px 0px 20px 0px;
   flex-wrap:wrap;
   background:white;
   padding:5px 60px;
   width:90vw;
`
const WrapperNabarBox2 = styled(Box)`
 padding:12px 10px;
 text-align:center;
 `
const WrapperTypography = styled(Typography)`
font-size:14px;
text-align:center;
font-weight:600;
font-family:inherit;
`

const Navbar = () => {
  return (
    <div>
      <WrapperNabarBox>
        {navData.map((data) => (
          <WrapperNabarBox2 key={data.id}>
            <img src={data.url} alt="images" style={{width:74}} />
            <WrapperTypography>{data.text}</WrapperTypography>
          </WrapperNabarBox2>
        ))}
      </WrapperNabarBox>
    </div>
  );
};

export default Navbar;
