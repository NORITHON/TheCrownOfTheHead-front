import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, {useEffect, useRef, useState} from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {getSamples, readAlreadyLiked, setLike, setUnLike} from "../apis/apis";
import {client} from "./Login";
import styled from "styled-components";

const Container = styled(Box)({
    padding:'0 50px'
})

const TextBox = styled(Box)({
    
    margin :'30px 0',
    marginTop : '80px',
    display:'flex'
})

const GridItem = styled(Grid)({
    width:'300px' ,
    height:'330px' , 
    display:'flex' , 
    flexDirection:'column' ,
    alignItems:'center'
})

const Item = styled(Box)({})

const ItemDetailBox = styled(Box)({
    height:'50px' , 
    border:"1px solid", 
    width:'300px', 
    display:'flex' , 
    alignItems:'center' , 
    justifyContent:'space-between', 
    backgroundColor:'black'
})

const ItemTextBox = styled(Box)({

})

const ItemHeartBox = styled(Box)({
    display : 'flex' , 
    alignItems:'center' ,
    color:'white'
})

const ItemImage = styled(Paper)({
    width:"300px" , 
    height:"270px" , 
    borderRadius:0
})

function Like(){

    const [samples , setSamples] = useState([]);

    useEffect( () => {
        const getAllSamples = async () =>{
            const data = await getSamples();

            setSamples(data);
        }
        getAllSamples();
    },[])

    const heartIconRef = useRef();

    const onClick = async (sample,idx) => {

        let copiedSamples = [...samples];

        const data = {
            memberId : client.id,
            sampleId : sample.id,
        }

        const allAlreadyLikedData = await readAlreadyLiked(client.id);
        
        const result = allAlreadyLikedData.filter( (element , index) => element.sample.id === sample.id );
        
        if(result.length === 0){
            copiedSamples[idx].likeCount = sample.likeCount + 1
            await setLike(data);
        } 
        else{
            await setUnLike(data);
            copiedSamples[idx].likeCount = sample.likeCount - 1
        }
        setSamples(copiedSamples);
    }


    return(
        <Container>
            <TextBox sx={{justifyContent:{ md:'start' ,xs:'center'}}} >
                <Typography variant="h5" sx={{ fontWeight:'bold'}}>마음에 드는 작품에 like를 눌러주세요</Typography>
            </TextBox>
            <Grid container sx={{justifyContent:{ md:'space-between' , sm:'space-evenly' ,xs:'space-evenly'},paddingBottom:'100px'}}>
                {samples.map( (sample , index) => (
                    <GridItem item key={index} sx={{mb:5}}>

                    <Item>
                        <ItemDetailBox >
                            <ItemTextBox sx={{ml:2 , mb:0}}>
                                <Typography variant="body1" color="white" >{sample.title}</Typography>
                                <Typography variant="body2" color="white" >{sample.designer.loginId}</Typography>
                            </ItemTextBox>
                            <ItemHeartBox>
                                <FavoriteBorderOutlinedIcon  onClick={() => onClick(sample,index)}/>
                                <Typography sx={{mx:1}} ref={heartIconRef}>{sample.likeCount}</Typography>
                            </ItemHeartBox>
                        </ItemDetailBox>
                        <ItemImage elevation={2} component="img" src={sample.imageUrl}></ItemImage>
                    </Item>
                </GridItem>
                ))}
                
            </Grid>
        </Container>
    );
}

export default Like;