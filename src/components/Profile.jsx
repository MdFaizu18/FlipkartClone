import { Typography,Box,Menu,MenuItem ,styled} from '@mui/material'
import React, { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const WrapperMenu = styled(Menu)`
    margin-top:5px;
`
const WrapperTypography = styled(Typography)`
    margin-left:10px;
    font-size:14px;
`

const Profile = ({account2,setAccount2}) => {
    const [open,setOpen]=useState(false);

    const handleClick =(event)=>{
        setOpen(event.currentTarget);
    }
    const handleClose =()=>{
        setOpen(false);
    }
    const logoutUser =()=>{
         setAccount2('');
    }

  return ( 
    <div>
    <Box onClick={handleClick}>
        <Typography style={{marginTop:2 , cursor:'pointer'}}>{account2}</Typography>
              <WrapperMenu
                  anchorEl={open}
                  open={open}
                  onClose={handleClose}
                
              >
            
                  <MenuItem onClick={()=>{handleClose(); logoutUser()}}>
                  <PowerSettingsNewIcon fontSize='small' />
                      <WrapperTypography>Logout</WrapperTypography>
                  </MenuItem>
              </WrapperMenu>
    </Box>


    </div>
  )
}

export default Profile