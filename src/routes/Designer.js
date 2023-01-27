import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function Designer(){

    return(
        <Box sx={{display:'flex' , flexDirection:'column' , justifyContent:'center' , width:"100%" }}>
            <Box component="img" src="img/designer.png" width="90%" sx={{marginX:'auto'}}></Box>
            <Link to="../upload" sx={{textDecoration:'none' , color:'inherit' ,display:'flex' , justifyContent:'center'}}><Box component="img" src="img/go.png" sx={{width:"130px" ,position:"relative",left:"48%", top:-220}}></Box></Link>
        </Box>
    );
}

export default Designer;