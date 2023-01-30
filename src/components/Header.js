import styled from "@emotion/styled";
import React, { useState } from "react";

import { Box, Button} from "@mui/material";
import "../fonts/fonts.css";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const AlignedBox = styled(Box)({
    display:'flex',
    alignItems:'center',
});

const LogoBox = styled(AlignedBox)({
})

const NavBox = styled(AlignedBox)({
})

const LoginBox = styled(AlignedBox)({
})

const InheritLink = styled(Link)({
    textDecoration:'inherit' , 
    color:'inherit'
})

const StyledButton = styled(Button)({
    color: 'black',
    fontFamily:'Pinterest-Logo-Font-55Rg',
    fontSize: '18px',
    '&:hover': {
       color: 'purple',
    },
})

const HeaderBox = styled(Box)({
    paddingLeft : '20px',
    paddingRight: '20px',
    justifyContent:'space-between',
    display:'flex',
    alignItems:'center',
    borderRadius: 0,
    height: '60px',
    backgroundColor: 'lightgray'

})

function Header(){

    const [toggle , setToggle] = useState(document.location.href);
    const onClick = (e) =>{
        const nextUrl = "http://localhost:3000/list";
        if(toggle === nextUrl) setToggle("http://localhost:3000/");
        else setToggle(nextUrl);
    }
    console.log(toggle);
    
    document.body.style.margin = '0';

    return(
        <HeaderBox elevation={5}>
            <LogoBox component={Link} to="/">
                <Box component="img" src="img/logo1.png" width="150px" sx={{position:'relative' , top:-10}}></Box>     
            </LogoBox>
            <NavBox >
                <StyledButton>ABOUT</StyledButton>
                
                <InheritLink to="../" >
                    <StyledButton >Home</StyledButton>
                </InheritLink>
                
                <InheritLink to="./designer" id= "hide_designer" >
                    <StyledButton >Designer</StyledButton>
                </InheritLink>
                
                <InheritLink to="./like">
                    <StyledButton >Like</StyledButton>
                </InheritLink>
            </NavBox>

            <LoginBox >
                <InheritLink to="./login">
                    <StyledButton>Log In</StyledButton>
                </InheritLink>
                
                <InheritLink to={toggle === "http://localhost:3000/list" ? "../" : "./list"} onClick={onClick}>    
                </InheritLink>

                <SearchOutlinedIcon sx={{fontSize:'33px' , mx:1}}/>
                <ShoppingCartOutlinedIcon sx={{fontSize:'30px' }}/>

            </LoginBox>
        </HeaderBox>
    );
}

export default Header;