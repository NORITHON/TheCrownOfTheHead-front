import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, {useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {getSamples} from "../apis/apis";



function Like(){

    const [samples , setSamples] = useState([])
    //     [{
    //     name : "baraclaba",
    //     madeby : "Ian",
    //     image: "img/sample1.png",
    //     heart: 24,
    // },
    // {
    //     name : "baraclaba",
    //     madeby : "Ian",
    //     image: "img/sample2.png",
    //     heart: 321,
    //
    // },
    // {
    //     name : "baraclaba",
    //     madeby : "Ian",
    //     image: "img/sample3.png",
    //     heart: 453
    //
    // },
    // {
    //     name : "baraclaba",
    //     madeby : "Ian",
    //     image: "img/sample4.png",
    //     heart: 2444
    //
    // },
    // {
    //     name : "baraclaba",
    //     madeby : "Ian",
    //     image: "img/sample1.png",
    //     heart: 24
    //
    // },
    // {
    //     name : "baraclaba",
    //     madeby : "Ian",
    //     image: "img/sample2.png",
    //     heart: 241
    //
    // },
    // {
    //     name : "baraclaba",
    //     madeby : "Ian",
    //     image: "img/sample3.png",
    //     heart: 2
    // },
    // {
    //     name : "baraclaba",
    //     madeby : "Ian",
    //     image: "img/sample4.png",
    //     heart: 0
    // }]
    // )
    const [hearts , setHearts] = useState([]);


    useEffect( () => {
        const getAllSamples = async () =>{
            const data = await getSamples();

            setSamples(data);
        }
        getAllSamples();
    },[])

    const heartIconRef = useRef();

    const onClick = (sample,idx) => {

        let copiedSamples = [...samples];

        copiedSamples[idx].likeCount = sample.likeCount + 1;

        setSamples(copiedSamples);
    }


    return(
        <Box sx={{paddingX:10}}>
            <Box sx={{mt : 10, display:'flex' }}>
                <Typography variant="h5" sx={{mb:3 , fontWeight:'bold'}}>마음에 드는 작품에 like를 눌러주세요</Typography>
                {/* <Typography variant="h5" >Press like for your favorite work</Typography> */}
            </Box>
        <Grid container sx={{ justifyContent:'space-between' , paddingBottom:'100px'}}>
            {samples.map( (sample , index) => (
                <Grid item key={index} sx={{width:'300px' , mb:5}}>
                <Box sx={{width:'300px' ,height:'330px' , display:'flex' , flexDirection:'column' ,alignItems:'center' }}>
                    <Box sx={{ height:'50px' , border:1, width:'300px', display:'flex' , alignItems:'center' , justifyContent:'space-between', backgroundColor:'black'}}>
                        <Box sx={{ml:2 , mb:0}}>
                            <Typography variant="body1" color="white" >{sample.title}</Typography>
                            <Typography variant="body2" color="white" >{sample.designer.loginId}</Typography>
                        </Box>
                        <Box sx={{display : 'flex' , alignItems:'center' , color:'white'}}>
                            <FavoriteBorderOutlinedIcon  onClick={() => onClick(sample,index)}/>
                            <Typography sx={{mx:1}} ref={heartIconRef}>{sample.likeCount}</Typography>
                        </Box>
                    </Box>
                    <Paper elevation={2} component="img" src={sample.imageUrl} sx={{width:"300px" , height:"270px" , borderRadius:0 }}></Paper>
                    
                </Box>
            </Grid>
            ))}
            
        </Grid>
        </Box>
    );
}

export default Like;