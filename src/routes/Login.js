import styled from "@emotion/styled";
import {Button, TextField, Typography} from "@mui/material";
import {Box} from "@mui/system";
import React, {useEffect, useState} from "react";
import {createClient, createDesigner, getClients, getDesigners} from "../apis/apis";
import {Link} from "react-router-dom";


const StyledButton = styled(Button)({
    color: 'white',
    width: '400px',
    backgroundColor: "black",
    marginTop: "20px",
    marginBottom: "20px",

    '&:hover': {
        opacity: '0.6',
        backgroundColor: "#9D1CE5",
    },
})

const StyledTextField = styled(TextField)({
    ' .MuiOutlinedInput-root': {

        '& fieldset': {
            margin: 'auto 0',
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

function Login() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (e) => {
        if (e.target.id === "user") {
            setUser(e.target.value);
        } else if (e.target.id === "password") {
            setPassword(e.target.value);
        }
    }

    const onClick = async (e) => {
        if (e.target.id === "1") {
            const data = {
                loginId: user,
                password: password
            }

            console.log(data)
            createDesigner(data);
            setPassword("");
            setUser("");


        } else if (e.target.id === "2") {
            const data = {
                loginId: user,
                password: password
            }
            createClient(data);
            setPassword("");
            setUser("");

        } else if (e.target.id === "3") {
            const data = {
                loginId: user,
                password: password
            }

            client = await getClients(data);

            console.log(client.id);


            setPassword("");
            setUser("");
            loginStatus = "member";


        } else if (e.target.id === "4") {
            const data = {
                loginId: user,
                password: password
            }

            designer = await getDesigners(data);

            console.log(designer.id);

            setPassword("");
            setUser("");
            loginStatus = "designer";
        }
    }
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: "0",
            width: "50%",
            height: "50%",
            margin: "150px auto",
        }}>
            <Box sx={{border: 0, display: {md: 'block', xs: 'none'}}}>
                <Box component="img" src="img/lastlogin.png" width="400px"></Box>
            </Box>
            <Box sx={{
                gridArea: 'loginPart',
                border: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 2
            }}>

                <StyledTextField sx={{width: '400px'}} id="user" value={user} onChange={onChange} placeholder="이메일"/>
                <StyledTextField sx={{width: '400px'}} id="password" value={password} onChange={onChange}
                                 placeholder="비밀번호"/>

                <StyledButton id="1" component={Link} to="/login" onClick={onClick} sx={{mt: 2}}>Sign up as
                    designer</StyledButton>
                <StyledButton id="2" component={Link} to="/login" onClick={onClick}>Sign up as client</StyledButton>
                <StyledButton id="3" component={Link} to="/" onClick={onClick}>Log in as client</StyledButton>
                <StyledButton id="4" component={Link} to="/" onClick={onClick}>Log in as designer</StyledButton>

                <Typography variant="caption" sx={{color: 'lightgray', mt: 2}}>아이디 찾기&nbsp;&nbsp; ㅣ &nbsp;&nbsp;비밀번호
                    찾기</Typography>

            </Box>
        </Box>

    );
}

export default Login;
