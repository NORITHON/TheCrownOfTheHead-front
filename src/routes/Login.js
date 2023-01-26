import styled from "@emotion/styled";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const StyledButton = styled(Button)({
    color:'white', 
    width:'400px' ,
    backgroundColor:"green" ,
    marginTop: "20px",
    marginBottom: "20px",
    
    '&:hover': {
        opacity:'0.6',
        backgroundColor:"green" ,
    },
})

const StyledTextField = styled(TextField)({
    ' .MuiOutlinedInput-root': {
        
        '& fieldset': {
            margin:'auto 0',
            borderColor: 'lightGray',
            height: '40px',
          },
          '&:hover fieldset': {
            borderColor: 'green',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'green',
          },
    },

})

function Login(){
    return(
        <Box sx={{
            display: "grid",
            gap: "0",
            width:"100%",
            height:"100%",
            margin: "50px auto",
            gridTemplateAreas: `"imagePart loginPart"`,

            gridTemplateColumns: {md : "3fr 4fr" , xs: '0fr 1fr'}
           }}>
                <Box sx={{ gridArea: 'imagePart' , border:0 ,display:{md : 'block' , xs:'none'}}}>
                    <Box component="img" src="img/login.png" width="100%" height="700px"></Box>
                </Box>
                <Box sx={{ gridArea: 'loginPart', border:0 , display:'flex' , flexDirection:'column' , alignItems:'center' , justifyContent:'center'}}>
                    
                        <Typography variant="h3" sx={{mb:5}}>Login</Typography>
                        
                        <StyledTextField sx={{width:'400px'}} placeholder="Email address"/>
                        <StyledTextField sx={{width:'400px'}} placeholder="Password"/>
                        <StyledButton >Sign up</StyledButton>

                        <Typography variant="caption" sx={{color:'green', textDecoration:'underline' }}>Already have an account?</Typography>
                    
                </Box>
        </Box>

    );
}

export default Login;