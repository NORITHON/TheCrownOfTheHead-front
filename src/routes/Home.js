import styled from "@emotion/styled";
import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ImageBox = styled(Box)({
    width: '100%' , 
    height: '400px' , 
    display:'flex' , 
    justifyContent:'center' , 
    // border:"1px solid black" ,
    margin:'50px auto',
    // marginBottom : '200px'
})

const Item = styled(Box)({

})


function Home(){

    const [items , setItems] = useState([{
        name : 'Cashmere basic muffler (cashmere 100%)',
        price : '89,000원',
        image : "/img/clothes.png",
        content : "몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. ",
        from : 'Mongolia'
    
    },
    {
        name : '상품2',
        price : '23000원',
        image : "/img/clothes.png",
        content : "몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. ",
        from : 'Mongolia'
    },
    {
        name : '상품3',
        price : '33000원',
        image : "/img/clothes.png",
        content : "몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. ",
        from : 'Mongolia'
    },
    {
        name : '상품4',
        price : '43000원',
        image : "/img/clothes.png",
        content : "몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. ",
        from : 'Mongolia'
    },
    {
        name : '상품5',
        price : '53000원',
        image : "/img/clothes.png",
        content : "몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. ",
        from : 'Mongolia'
    },
    {
        name : '상품6',
        price : '63000원',
        image : "/img/clothes.png",
        content : "몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. ",
        from : 'Mongolia'
    },
    {
        name : '상품7',
        price : '63000원',
        image : "/img/clothes.png",
        content : "몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. ",
        from : 'Mongolia'
    },
]);

    return(
        <Box>
            <ImageBox elevation={10}>
                <Box component="img" src="img/yang.png" sx={{ width: "100%"}}></Box>
            </ImageBox>
        <Grid container sx={{ paddingX:10 , marginX:'auto', justifyContent:'space-around'}}>
            {items.map( (item , index) => (
                
                
                <Grid item key={index} md={3} sx={3} xs={6} style={{ minWidth:"300px" , marginY:'0px' }}>
                    <Link to="./detail" style={{textDecoration:'inherit' , color:'inherit'}} state={{
                        name : item.name,
                        price : item.price,
                        image : item.image,
                        content : item.content,
                        from : item.from
                    }}>
                <Box elevation={5} sx={{width:'100%' , height:'350px' , display:'flex' , flexDirection:'column' ,alignItems:'center' , mt : 10}}>
                    <Box component="img" src={item.image} sx={{width:"300px" , height:"300px" }}></Box>  
                    <Typography variant="caption" color="gray" >{item.name}</Typography>
                    <Typography variant="body2" >{item.price}</Typography>
                </Box>
                    </Link>
            </Grid>
            ))}
            
        </Grid>
        </Box>
    );
}

export default Home;