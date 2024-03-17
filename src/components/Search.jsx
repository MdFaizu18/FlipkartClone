import React from 'react'
import {styled, InputBase ,Box} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// styled componets for the CSS 
const SearchContainer = styled(Box)`
   background:#fff;
   width: 210%;
   border-radius:2px;
   margin-left:10px;
   display:flex;
`
const InputBaseContainer = styled(InputBase)`
  width:100%;
  padding-left:20px;
  font-size:unset;
`
const SearchIconBox = styled(Box)`
 color:blue;
 padding:5px;
 display:flex;
`

const Search = () => {
  return (
    <div>

    <SearchContainer>
       <InputBaseContainer placeholder='Search for Products, Brands and More'/>
       {/* for search icon  */}
       <SearchIconBox> 
       <SearchIcon/>
       </SearchIconBox>
    </SearchContainer>
    </div>
  )
}

export default Search
