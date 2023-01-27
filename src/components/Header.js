import styled from "@emotion/styled";
import React, { useState } from "react";
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';
import { Box, Button, Paper, Select, Typography } from "@mui/material";
import "../fonts/fonts.css";
import { Link } from "react-router-dom";
const AlignedBox = styled(Box)((props) => ({
    display:'flex',
    alignItems:'center',
    marginLeft : props.marginl,
}));

const StyledButton = styled(Button)({
    color: 'black',
    fontFamily:'BarlowCondensed-Medium',
    fontSize: '17px',
    fontWeight:'bold'
})

const NotionFreeButton = styled(Button)({
    backgroundColor: 'purple',
    color: 'white',
    borderRadius:'5px',
    '&:hover': {
        backgroundColor: 'gray',
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
    height: '40px'

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
                <FontDownloadOutlinedIcon sx={{color: 'purple' , fontSize:'30px'}}/>
                <Typography variant="h5" sx={{fontFamily:'BarlowCondensed' , mr:3 , fontWeight:'bold' }}>Noriton</Typography>  
            </AlignedBox>
            <AlignedBox >
                {/* <StyledButton>Product</StyledButton>
                <StyledButton>Download</StyledButton>
                <StyledButton>Solution</StyledButton>
                <StyledButton>Contens</StyledButton>
                <StyledButton>Costs</StyledButton> */}


                {/* navigation */}
                <Link to="../" style={{ textDecoration:'inherit' , color:'inherit'}}>
                    <StyledButton>Home</StyledButton>
                </Link>
                <Link to="./list" style={{ textDecoration:'inherit' , color:'inherit'}}>
                    <StyledButton>List</StyledButton>
                </Link>
                <Link to="./designer" style={{ textDecoration:'inherit' , color:'inherit'}}>
                    <StyledButton>Designer</StyledButton>
                </Link>
                <Link to="./like" style={{ textDecoration:'inherit' , color:'inherit'}}>
                    <StyledButton>Like</StyledButton>
                </Link>
                <Link to="./manage" style={{ textDecoration:'inherit' , color:'inherit'}}>
                <StyledButton>Manager</StyledButton>    
                </Link>
                
                
                
            </AlignedBox>

            <AlignedBox >
                <StyledButton>Question</StyledButton>
                <Link to="./login" style={{ textDecoration:'inherit' , color:'inherit'}}>
                    <StyledButton>Log In</StyledButton>
                </Link>
                <Link to={toggle === "http://localhost:3000/list" ? "../" : "./list"} onClick={onClick} style={{textDecoration:'inherit' , color:'inherit'}}>
                    <NotionFreeButton>Noriton</NotionFreeButton>
                    </Link>
                
            </AlignedBox>
        </HeaderBox>
    );
}

export default Header;