import styled from "@emotion/styled";
import { Grid, Paper, Typography } from "@mui/material";
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
    // border:"1px solid black" ,
    margin:'40px auto',
    // marginBottom : '200px'
})

const Item = styled(Box)({

})


function Home(){

    const [items , setItems] = useState([]);

    useEffect(() => {

        if(loginStatus == "member"){
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
        <Box>
            <ImageBox elevation={10}>
                <Box component="img" src="img/logo3.png" width="100%"></Box>
            </ImageBox>

        <Grid container sx={{ paddingX:10}}>
            {items.map( (item , index) => (
                <Grid item key={index} md={3} sm={3} xs={6} style={{ minWidth:"300px", height:'400px',marginTop:"70px" }}>
                    <Link to="./detail" style={{textDecoration:'inherit' , color:'inherit'}} state={{
                        id : item.id,
                        name : item.name,
                        price : item.price,
                        image : item.sample.imageUrl,
                        content : item.sample.content,
                        stockQuantity : item.stockQuantity,
                        count : item.count
                    }}>
                <Box sx={{width:'300px', display:'flex' , flexDirection:'column' , marginX:'auto'  }}>
                    
                    <Box component="img" src={item.sample.imageUrl} sx={{ height:"300px" , display:'flex' , justifyContent:'start' }}></Box>  
                    
                    <Box sx={{display:'flex', flexDirection:'column' , mt:3,  mx:2 }}>
                        <Typography variant="body1" color="gray">{item.name}</Typography>
                        <Box sx={{display:'flex' , justifyContent:'space-between', alignItems:'center',mt:1}}>
                            <Box sx ={{display:'flex' , alignItems:'center'}}>
                            <Typography variant="body2" sx={{color:"#9D1CE5" , mr:1}}>{ Math.round((item.count * 100)/(item.count + item.stockQuantity))}% 달성</Typography>
                            <Typography variant="body2" >{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원</Typography>
                        </Box>
                        <Typography variant="body2" sx={{color:'gray'}}>10일 남음</Typography>
                        </Box>
                        
                    <Box>
                       
                        </Box>
                    </Box>
                </Box>
                    </Link>
            </Grid>
            ))}
            
        </Grid>
        </Box>
    );
}

export default Home;