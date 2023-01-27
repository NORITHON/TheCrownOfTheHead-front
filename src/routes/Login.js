import styled from "@emotion/styled";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, {useEffect, useState} from "react";
import {createClient, createDesigner, getClients, getDesigners} from "../apis/apis";


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

export let client;
export let designer;

function Login(){


    const [user, setUser] = useState("");
    const [password , setPassword] = useState("");

    const onChange = (e) => {
        if(e.target.id==="user"){
            setUser(e.target.value);
        }
        else if(e.target.id ==="password"){
            setPassword(e.target.value);
        }
    }

    const onClick = async (e) =>{
        if(e.target.id ==="1"){
            const data = {
                loginId : user,
                password : password
            }

            console.log(data)
            createDesigner(data);
            setPassword("");
            setUser("");
        } else if(e.target.id ==="2"){
            const data ={
                loginId : user,
                password : password
            }
            createClient(data);
            setPassword("");
            setUser("");

        }else if(e.target.id ==="3"){
            const data ={
                loginId : user,
                password : password
            }


           client = await getClients(data);

            console.log(client.id);

            setPassword("");
            setUser("");

        }else if(e.target.id ==="4"){
            const data ={
                loginId : user,
                password : password
            }

            designer = await getDesigners(data);

            console.log(designer.id);

            setPassword("");
            setUser("");
        }
    }
    return(
        <Box sx={{
            display: "grid",
            gap: "0",
            width:"100%",
            height:"100%",
            margin: "70px auto",
            gridTemplateAreas: `"imagePart loginPart"`,

            gridTemplateColumns: {md : "3fr 4fr" , xs: '0fr 1fr'}
           }}>
                <Box sx={{ gridArea: 'imagePart' , border:0 ,display:{md : 'block' , xs:'none'}}}>
                    <Box component="img" src="img/login.png" width="100%" height ="700px" ></Box>
                </Box>
                <Box sx={{height : "700px" , gridArea: 'loginPart', border:0 , display:'flex' , flexDirection:'column' , alignItems:'center' , justifyContent:'center'}}>
                    
                        <Typography variant="h3" sx={{mb:5}}>Login</Typography>
                        
                        <StyledTextField sx={{width:'400px'}} id="user" value={user} onChange={onChange} placeholder="Email address"/>
                        <StyledTextField sx={{width:'400px'}} id="password" value={password} onChange={onChange}placeholder="Password"/>

                        <StyledButton id="1" onClick={onClick}>Sign up as designer</StyledButton>
                    <StyledButton id="2" onClick={onClick}>Sign up as client</StyledButton>
                    <StyledButton id="3" onClick={onClick}>Log in as client</StyledButton>
                        <StyledButton id="4" onClick={onClick}>Log in as designer</StyledButton>

                        <Typography variant="caption" sx={{color:'green', textDecoration:'underline' }}>Already have an account?</Typography>
                    
                </Box>
        </Box>

    );
}

export default Login;
