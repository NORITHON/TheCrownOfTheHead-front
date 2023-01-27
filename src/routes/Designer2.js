import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";

function Designer(){

    const [categories , setCategories] = useState([ "KNITWEAR" , "TOP" , "ACC" , "OUTWEAR" , "BOTTOM" , "MUFFLER" , "COAT" , "DRESS" , "GLOVES"]);


    return(
        <Box>
            <Box sx={{display:'flex' , alignItems:'center', justifyContent:'center' , mt:10 , width:'70%', marginX:'auto' , borderBottom:3 , borderColor:'lightgray' , pb:2 , mb:13}}>
                <Typography>상품 카테고리 선택</Typography>
                <ArrowForwardIosIcon fontSize="small" sx={{mx:4, color:'gray'}}/>
                <Typography sx={{color:'gray'}}>상품 디자인 업로드</Typography>
            </Box>

            <Grid container sx={{width:'80%' , marginX:'auto'}}>
                {categories.map( (category,index) => (
                    <Grid item key={index} sx={{borderTop:3 , borderColor:'gray' , width:"28%" , height:'230px' , margin:'0 auto'}}>
                    <Link to="../upload" style={{ textDecoration:'inherit' , color:'inherit'}} state={{
                        category : category
                    }}>
                        
                            <Typography variant="h3" sx={{mt:2}}>{category}</Typography>
                        
                    </Link> 
                    </Grid>
                ) )}
                
            </Grid>
        </Box>
    );
}

export default Designer;