import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function Like(){

    const [samples , setSamples] = useState([{
        name : "baraclaba",
        madeby : "Ian",
        image: "img/sample1.png",
        heart: 24,
    },
    {
        name : "baraclaba",
        madeby : "Ian",
        image: "img/sample2.png",
        heart: 321,
        
    },
    {
        name : "baraclaba",
        madeby : "Ian",
        image: "img/sample3.png",
        heart: 453
        
    },
    {
        name : "baraclaba",
        madeby : "Ian",
        image: "img/sample4.png",
        heart: 2444
        
    },
    {
        name : "baraclaba",
        madeby : "Ian",
        image: "img/sample1.png",
        heart: 24
        
    },
    {
        name : "baraclaba",
        madeby : "Ian",
        image: "img/sample2.png",
        heart: 241
        
    },
    {
        name : "baraclaba",
        madeby : "Ian",
        image: "img/sample3.png",
        heart: 2
    },
    {
        name : "baraclaba",
        madeby : "Ian",
        image: "img/sample4.png",
        heart: 0
    }])

    const onClickHeart = () => {  
        console.log("heartup");
    }

    return(
        <Box>
        <Grid container sx={{ paddingX:10, justifyContent:'space-between' , paddingBottom:'100px'}}>
            {samples.map( (sample , index) => (
                <Grid item key={index} sx={{width:'300px'}}>
                <Box sx={{width:'300px' ,height:'330px' , display:'flex' , flexDirection:'column' ,alignItems:'center' , mt : 10}}>
                    <Box sx={{ height:'60px' , border:1, width:'300px', display:'flex' , alignItems:'center' , justifyContent:'space-between', backgroundColor:'black'}}>
                        <Box sx={{ml:2 , mb:0}}>
                            <Typography variant="body1" color="white" >{sample.name}</Typography>
                            <Typography variant="body2" color="white" >{sample.madeby}</Typography>
                        </Box>
                        <Box sx={{display : 'flex' , alignItems:'center' , color:'white'}}>
                            <FavoriteBorderOutlinedIcon onClick={onClickHeart}/>
                            <Typography sx={{mx:1}}>{sample.heart}</Typography>
                        </Box>
                    </Box>
                    <Box component="img" src={sample.image} sx={{width:"300px" , height:"270px" }}></Box>  
                    
                </Box>
            </Grid>
            ))}
            
        </Grid>
        </Box>
    );
}

export default Like;