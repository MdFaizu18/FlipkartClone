import {styled} from '@mui/material';
import {AppBar,Box,Typography} from '@mui/material';

const WrapperAppbar = styled(AppBar)`
  background:#2874f0;
  ${'' /* background:white; */}
  height:55px;
  margin-bottom:15px;

`
const WrapperBox = styled(Box)`
  margin-left:12%;
  line-height:0;

`
const WrapperTypo = styled(Typography)`
  font-size:10px;
  font-style:italic;
 

`
const WrapperImg = styled('img')`
 width:10px;
 height:10px;
 margin-left:4px;
 padding-top:2px;


`

const WrapperLoginBox = styled(Box)`
padding-left:20%;
margin:0 5% 0 auto;
`

export {WrapperAppbar,WrapperBox,WrapperTypo,WrapperImg,WrapperLoginBox};