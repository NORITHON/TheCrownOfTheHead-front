import styled from "@emotion/styled";
import React, { useState } from "react";
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';
import { Box, Button, Paper, Select, Typography } from "@mui/material";
import "../fonts/fonts.css";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const AlignedBox = styled(Box)((props) => ({
    display:'flex',
    alignItems:'center',
    marginLeft : props.marginl,
}));

const StyledButton = styled(Button)({
    color: 'black',
    fontFamily:'Pinterest-Logo-Font-55Rg',
    fontSize: '18px',
    '&:hover': {
       color: 'purple',
    },
})

const NotionFreeButton = styled(Button)({
    backgroundColor: 'purple',
    color: 'white',
    borderRadius:'5px',
    '&:hover': {
        backgroundColor: 'purple',
    },
    height:'30px'
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
            <AlignedBox>
                {/* <FontDownloadOutlinedIcon sx={{color: 'purple' , fontSize:'30px'}}/> */}
                <Box component="img" src="img/logo1.png" width="150px" sx={{position:'relative' , top:-10}}></Box>
                {/* <Typography variant="h5" sx={{fontFamily:'BarlowCondensed' , mr:3 , fontWeight:'bold' }}>Noriton</Typography>   */}
            </AlignedBox>
            <AlignedBox >
                {/* <StyledButton>Product</StyledButton>
                <StyledButton>Download</StyledButton>
                <StyledButton>Solution</StyledButton>
                <StyledButton>Contens</StyledButton>
                <StyledButton>Costs</StyledButton> */}

                
                {/* navigation */}
                
                


                <Link to="./about" style={{ textDecoration:'inherit' , color:'inherit'}}>
                    <StyledButton id="about" onClick={onClick} >ABOUT</StyledButton>
                </Link>
                <Link to="../" style={{ textDecoration:'inherit' , color:'inherit'}}>
                    <StyledButton id="home"  onClick={onClick}>Home</StyledButton>
                </Link>
                <Link to="./designer" id="hide_designer" style={{ textDecoration:'inherit' , color:'inherit'}}>
                    <StyledButton id="designer"  onClick={onClick}>Designer</StyledButton>
                </Link>
                <Link to="./like" style={{ textDecoration:'inherit' , color:'inherit'}}>
                    <StyledButton id="like"  onClick={onClick}>Like</StyledButton>
                </Link>
                <Link to="./manage" style={{ textDecoration:'inherit' , color:'inherit'}}>
                <StyledButton id="manager"  onClick={onClick}>Manager</StyledButton>    
                </Link>
                
                
                
            </AlignedBox>

            <AlignedBox >
                <Link to="./login" style={{ textDecoration:'inherit' , color:'inherit'}}>
                    <StyledButton>Log In</StyledButton>
                </Link>
                <Link to={toggle === "http://localhost:3000/list" ? "../" : "./list"} onClick={onClick} style={{textDecoration:'inherit' , color:'inherit'}}>
                    
                    </Link>
                    <SearchOutlinedIcon sx={{fontSize:'33px' , mx:1}}/>
                    <ShoppingCartOutlinedIcon sx={{fontSize:'30px' }}/>
            </AlignedBox>
        </HeaderBox>
    );
}

export default Header;