import styled from "@emotion/styled";
import { Button, TextField, ToggleButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, {useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
import {createClient, createDesigner, getClients, getDesigners} from "../apis/apis";



const SignUpButton = styled(Button)({
    color:'black', 
    width:'400px' ,
    backgroundColor:"white" ,
    marginTop: "20px",
    marginBottom: "20px",
    
    '&:hover': {
        opacity:'0.6',
    },
})


const LoginButton = styled(Button)({
    color:'white', 
    width:'400px' ,
    backgroundColor:"black" ,
    marginTop: "20px",
    marginBottom: "20px",
    
    
    '&:hover': {
        opacity:'0.6',
        backgroundColor:"#9D1CE5" ,
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
            borderColor: '#9D1CE5',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#9D1CE5',
          },
    },

})

export let client;
export let designer;
export let loginStatus;

function Login(){

    const signUpRef =  useRef();
    const loginRef = useRef();


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

    const onClick = async (e) => {
        if(e.target.id === "toggle" && isDesigner === false){
            // e.target.backgroundColor = "white";
            e.target.style.color = 'lightgray';
            signUpRef.current.id = 1;
            signUpRef.current.innerText = "Sign up as a designer"
            // signUpRef.current.style.backgroundColor = "lightgray"
            loginRef.current.style.backgroundColor = "#9D1CE5"
            loginRef.current.id = 4
            loginRef.current.innerText = "Log in as a designer"
            
            setIsDesigner(true);
        }else if(e.target.id ==="toggle" && isDesigner === true){
            // e.target.style.backgroundColor = 'white';
            e.target.style.color = 'black';
            signUpRef.current.id = 2;
            signUpRef.current.innerText = "Sign up as a client"
            // signUpRef.current.style.backgroundColor = "white"
            loginRef.current.style.backgroundColor = "black"
            loginRef.current.id = 3;
            loginRef.current.innerText = "Log in as a client"
            setIsDesigner(false);
        }
        

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
            loginStatus = "member";

        }else if(e.target.id ==="4"){
            const data ={
                loginId : user,
                password : password
            }

            designer = await getDesigners(data);

            console.log(designer.id);

            setPassword("");
            setUser("");
            loginStatus = "designer";
        }
    }


    const [isDesigner , setIsDesigner] = useState(false);

    return(
        <Box sx={{
            display: 'flex',
            flexDirection:'column',
            alignItems:'center',
            gap: "0",
            width:"50%",
            height:"50%",
            margin: "150px auto",
           }}>
                <Box sx={{border:0 ,display:{md : 'block' , xs:'none'}}}>
                    <Box component="img" src="img/lastlogin.png" width="400px"></Box>
                </Box>
                <Box sx={{ gridArea: 'loginPart', border:0 , display:'flex' , flexDirection:'column' , alignItems:'center' , justifyContent:'center', mt:2}}>
                        
                        <StyledTextField sx={{width:'400px'}} id="user" value={user} onChange={onChange} placeholder="이메일"/>
                        <StyledTextField sx={{width:'400px'}} id="password" value={password} onChange={onChange}placeholder="비밀번호"/>


                        <LoginButton ref={loginRef} component = {Link} to = "/" id="3" onClick={onClick}>Log in as client</LoginButton> 
                        <SignUpButton sx={{textDecoration:'underline'}}ref={signUpRef} id="2" onClick={onClick}>Sign up as client</SignUpButton>
                    
                    <ToggleButton id="toggle" onClick={onClick} value="android">Who are u?</ToggleButton>
                        

                        <Typography variant="caption" sx={{color:'lightgray' , mt:2}}>아이디 찾기&nbsp;&nbsp; ㅣ &nbsp;&nbsp;비밀번호 찾기</Typography>
                    
                </Box>
        </Box>

    );
}

export default Login;
