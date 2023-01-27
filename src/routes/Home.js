import styled from "@emotion/styled";
import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {getItems} from "../apis/apis";

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
        const getAllItems = async () => {
            const data = await getItems();
            setItems(data);
        }
        getAllItems();
    } , [items])
    //     {
    //     name : 'Cashmere basic muffler (cashmere 100%)',
    //     price : 89000,
    //     image : "/img/clothes.png",
    //     content : "몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. ",
    //     from : 'Mongolia'
    //
    // },
    // {
    //     name : '상품2',
    //     price : '23000원',
    //     image : "/img/clothes.png",
    //     content : "몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. ",
    //     from : 'Mongolia'
    // },
    // {
    //     name : '상품3',
    //     price : '33000원',
    //     image : "/img/clothes.png",
    //     content : "몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. ",
    //     from : 'Mongolia'
    // },
    // {
    //     name : '상품4',
    //     price : '43000원',
    //     image : "/img/clothes.png",
    //     content : "몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. ",
    //     from : 'Mongolia'
    // },
    // {
    //     name : '상품5',
    //     price : '53000원',
    //     image : "/img/clothes.png",
    //     content : "몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. ",
    //     from : 'Mongolia'
    // },
    // {
    //     name : '상품6',
    //     price : '63000원',
    //     image : "/img/clothes.png",
    //     content : "몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. ",
    //     from : 'Mongolia'
    // },
    // {
    //     name : '상품7',
    //     price : '63000원',
    //     image : "/img/clothes.png",
    //     content : "몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. 몽골의 100% 고급 캐시미어로 제작된 Alto는 우아함과 따뜻함을 더해줍니다. ",
    //     from : 'Mongolia'
    // },
// ]);

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
                    }}>
                <Box sx={{width:'300px', display:'flex' , flexDirection:'column' , marginX:'auto'  }}>
                    
                    <Box component="img" src={item.sample.imageUrl} sx={{ height:"300px" , display:'flex' , justifyContent:'start' }}></Box>  
                    
                    <Box sx={{display:'flex', flexDirection:'column' , mt:3 }}>
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