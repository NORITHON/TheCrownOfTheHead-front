import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {getItems} from "../apis/apis";
import { loginStatus } from "./Login";

const ImageBox = styled(Box)({
    width: '100%' , 
    height: '100%',
    display:'flex' , 
    justifyContent:'center' , 
    margin:'40px auto',
})

const Item = styled(Box) ({
    width:'300px', 
    display:'flex' , 
    flexDirection:'column',
    margin:'0 auto'
})

const ItemImage = styled(Box)({
    height:"300px"
})

const ItemTextBox = styled(Box)({
    display:'flex', 
    flexDirection:'column' , 
    marginTop:"15px",
    marginRight:"10px",
    marginLeft:"10px"
})

const ItemName = styled(Typography)({})

const ItemDetailBox = styled(Box)({
    display:'flex' , 
    justifyContent:'space-between', 
    alignItems:'center',
    marginTop:"5px"
})

const FlexBox = styled(Box)({
    display: 'flex',
    alignItems:'center'
})

function Home(){

    const [items , setItems] = useState([]);

    useEffect(() => {

        if(loginStatus === "member"){
            console.log("member");
            document.getElementById("hide_designer").style.display = "none";
        }
        else{
            console.log("designer");
            document.getElementById("hide_designer").style.display = "block";
        }
        const getAllItems = async () => {
            const data = await getItems();
            setItems(data);
        }
        getAllItems();
    } , [items])

    return(
        <>
            <ImageBox elevation={10}>
                <Box component="img" src="img/logo3.png" width="100%"></Box>
            </ImageBox>

            <Grid container sx={{justifyContent:'space-evenly'}}>
                {items.map( (item , index) => (
                    <Grid item key={index} md={3} sm={3} xs={6} style={{minWidth:"300px", height:'400px',marginTop:"70px" }}>
                        <Link to="./detail" style={{textDecoration:'inherit' , color:'inherit'}} state={{
                            id : item.id,
                            name : item.name,
                            price : item.price,
                            image : item.sample.imageUrl,
                            content : item.sample.content,
                            stockQuantity : item.stockQuantity,
                            count : item.count
                        }}>
                    <Item>
                        <ItemImage component="img" src={item.sample.imageUrl}></ItemImage>  
                        <ItemTextBox>
                            <ItemName variant="body1" color="gray">{item.name}</ItemName>
                                <ItemDetailBox>
                                    <FlexBox>
                                        <Typography variant="body2" sx={{color:"#9D1CE5" , mr:1}}>{ Math.round((item.count * 100)/(item.count + item.stockQuantity))}% 달성</Typography>
                                        <Typography variant="body2" >{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원</Typography>
                                    </FlexBox>
                                    <Typography variant="body2" sx={{color:'gray'}}>10일 남음</Typography>
                                </ItemDetailBox>
                            </ItemTextBox>                        
                        </Item>
                    </Link>
                </Grid>
                ))}
                
            </Grid>
        </>
    );
}

export default Home;