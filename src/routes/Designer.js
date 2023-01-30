import styled from "@emotion/styled";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const ImageBoxContainer = styled(Box) ({
    display:'flex' , 
    flexDirection:'column' , 
    justifyContent:'center' , 
    width:"100%",
})

const ImageBox = styled(Box)({
    margin:'0 auto',
    
})

const GoLink = styled(Link)({
    textDecoration:'none' ,
    color:'inherit' ,
    display:'flex' , 
    justifyContent:'center',
})

const GoImage = styled(Box)({
    width:"10%" ,
    // position:"absolute",
    top: "80%"
})

function Designer(){

    return(
        <ImageBoxContainer>
            <ImageBox component="img" src="img/designerreal.png" width="90%" ></ImageBox>
            <GoLink to="../upload" >
                <GoImage component="img" src="img/go.png" >
                </GoImage>
            </GoLink>
        </ImageBoxContainer>
    );
}

export default Designer;