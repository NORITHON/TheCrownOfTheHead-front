import styled from "@emotion/styled";
import { Button, TextField, ToggleButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, {useRef, useState} from "react";
import { Link } from "react-router-dom";
import {createClient, createDesigner, getClients, getDesigners} from "../apis/apis";


const SignUpButton = styled(Button)({
    color:'black',
    width:'400px',
    backgroundColor:"white",
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

          width:'400px'
    },

})

export let client;
export let designer;
export let loginStatus;

const FlexContainer = styled(Box)({

    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    gap: "0",
    width:"50%",
    height:"50%",
    margin: "130px auto",
    
})

const LoginInputPart = styled(Box)({
    
    gridArea: 'loginPart',
    display:'flex' , 
    flexDirection:'column' , 
    alignItems:'center' , 
    justifyContent:'center', 
    marginTop:"20px"
})

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
            e.target.style.color = 'lightgray';
            signUpRef.current.id = 1;
            signUpRef.current.innerText = "Sign up as a designer"
            loginRef.current.style.backgroundColor = "#9D1CE5"
            loginRef.current.id = 4
            loginRef.current.innerText = "Log in as a designer"
            
            setIsDesigner(true);
        }else if(e.target.id ==="toggle" && isDesigner === true){
            e.target.style.color = 'black';
            signUpRef.current.id = 2;
            signUpRef.current.innerText = "Sign up as a client"
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
        <FlexContainer>
                
                <Box component="img" src="img/lastlogin.png" width="400px"></Box>
                
                <LoginInputPart>
                    <StyledTextField id="user" value={user} onChange={onChange} placeholder="이메일"/>
                    <StyledTextField id="password" value={password} onChange={onChange}placeholder="비밀번호"/>

                    <LoginButton ref={loginRef} component = {Link} to = "/" id="3" onClick={onClick}>Log in as client</LoginButton> 
                    <SignUpButton sx={{textDecoration:'underline'}}ref={signUpRef} id="2" onClick={onClick}>Sign up as client</SignUpButton>
                    <ToggleButton id="toggle" onClick={onClick} value="android">Who are u?</ToggleButton>

                    <Typography variant="caption" sx={{color:'lightgray' , mt:2}}>아이디 찾기&nbsp;&nbsp; ㅣ &nbsp;&nbsp;비밀번호 찾기</Typography>
                </LoginInputPart>
        </FlexContainer>

    );
}

export default Login;
