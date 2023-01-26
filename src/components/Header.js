import styled from "@emotion/styled";
import React, { useState } from "react";
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';
import { Box, Button, Select, Typography } from "@mui/material";
import "../fonts/fonts.css";
import { Link } from "react-router-dom";
const AlignedBox = styled(Box)((props) => ({
    display:'flex',
    alignItems:'center',
    marginLeft : props.marginl
}));

const StyledButton = styled(Button)({
    color: 'gray',
    fontFamily:'BarlowCondensed-Medium'
})

const NotionFreeButton = styled(Button)({
    backgroundColor: 'tomato',
    color: 'white',
    borderRadius:'5px',
    '&:hover': {
        backgroundColor: 'gray',
    },
    height:'30px'
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
        <AlignedBox sx={{ mx: 3}}>
            <AlignedBox>
                <FontDownloadOutlinedIcon sx={{color: 'red' , fontSize:'30px'}}/>
                <Typography variant="h5" sx={{fontFamily:'BarlowCondensed' , mr:3 , }}>Notion</Typography>  
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
                <Link to="./detail" style={{ textDecoration:'inherit' , color:'inherit'}}>
                    <StyledButton>Detail</StyledButton>
                </Link>
                <Link to="./form" style={{ textDecoration:'inherit' , color:'inherit'}}>
                    <StyledButton>Form</StyledButton>
                </Link>
                
                
            </AlignedBox>

            <AlignedBox marginl="auto">
                <StyledButton>Question</StyledButton>
                <StyledButton>Log In</StyledButton>
                <Link to={toggle === "http://localhost:3000/list" ? "../" : "./list"} onClick={onClick} style={{textDecoration:'inherit' , color:'inherit'}}>
                    <NotionFreeButton>Notion 무료 체험</NotionFreeButton>
                    </Link>
                
            </AlignedBox>
        </AlignedBox>
    );
}

export default Header;