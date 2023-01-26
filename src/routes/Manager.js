import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteIcon from '@mui/icons-material/Delete';
import BuildIcon from '@mui/icons-material/Build';
import styled from "styled-components";




function Manager(){

    
        
    

    const [samples , setSamples] = useState([{
        name : "yellow muffler",
        image : "img/sample1.png",
    },
    {
        name : "white baraclaba",
        image : "img/sample2.png",
    },
    
    {
        name : "cashmere knit",
        image : "img/sample3.png",
    },
    
    {
        name : "shirt-sleeved T",
        image : "img/sample4.png",
    },
    
    {
        name : "short-sleeved T",
        image : "img/sample4.png",
    },

    {
        name : "short-sleeved T",
        image : "img/sample4.png",
    },
    
])

    const [rows, setRows] = useState([{
        order_id: "1",
        order_date: "Mon Dec 12",
        total_cost: 100200,
        member_name: "Ian1", 
        state: "배송중",
    },
    {
        order_id: "2",
        order_date: "Feb May 21",
        total_cost: 99800,
        member_name: "Ian2", 
        state: "취소요청",
    },
    {
        order_id: "3",
        order_date: "Wed Jul 21",
        total_cost: 399800,
        member_name: "Ian3", 
        state: "취소요청",
    },
    {
        order_id: "4",
        order_date: "Thu Dec 23",
        total_cost: 499800,
        member_name: "Ian4", 
        state: "교환요청",
    },
    {
        order_id: "5",
        order_date: "Thu Jan 27",
        total_cost: 9649800,
        member_name: "Ian5", 
        state: "배송중",
    },
    {
        order_id: "6",
        order_date: "Mon May 21",
        total_cost: 99800,
        member_name: "Ian6", 
        state: "교환요청",
    },
    ])

    const onClick = (e) =>{
        if(e.target.id === "modify"){
            window.confirm("수정하시겠습니까?");
        }
        else if(e.target.id ==="delete"){
            window.confirm("삭제하시겠습니까?");
        }
        else if(e.target.id === "승인"){
            window.confirm("승인하시겠습니까?");
        }
        else if(e.target.id === "미승인"){
            window.confirm("미승인하시겠습니까?");
        }
    }

    return(
        <Box>
        
        <Box sx={{
            display: { md : "flex", sx: 'none'},
            gap: "1rem",
            width:"90%",
            margin: "100px auto",
            // gridTemplateAreas: {md :    `"sidebar1 main1"
            //                             "sidebar2 main2"`,
            //                     sm :    `"sidebar1"
            //                             "main1"
            //                             "sidebar2"
            //                             "main2"`},
            // gridTemplateColumns:`"200px 5fr"`,
                                

           }}>
                <Box sx={{ gridArea: 'sidebar1' , border:0 , display:'flex' , alignItems:'start'}}>
                    <Typography variant="h5" sx={{ mr : 8 , mb:3}}>주문내역 확인</Typography>
                    <ArrowForwardIosIcon sx={{ mr : 8}} fontSize="large"/>
                </Box>
                <Box sx={{ gridArea: 'main1', border:0 ,height:"300px" , width:'70%' , minWidth:'550px'}}>
                
                <TableContainer component={Paper} elevation={5}>
                    <Table sx={{}} size="small" aria-label="a dense table">
                        <TableHead>
                        <TableRow>
                            <TableCell sx={{ backgroundColor:'lightgray' , border:0,borderRight:1 , borderColor:'darkGray', maxWidth:"30%"}}>주문번호</TableCell>
                            <TableCell sx={{ backgroundColor:'lightgray' , border:0, borderRight:1 , borderColor:'darkGray', maxWidth:"30%"}}>주문일</TableCell>
                            <TableCell align="center">주문합계</TableCell>
                            <TableCell align="center">이름</TableCell>
                            <TableCell align="center">주문상태</TableCell>
                            <TableCell align="center">수정/삭제</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row,index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {row.order_id}
                            </TableCell>
                            <TableCell>{row.order_date}</TableCell>
                            <TableCell align="center">{row.total_cost}</TableCell>
                            <TableCell align="center">{row.member_name}</TableCell>
                            <TableCell align="center">{row.state}</TableCell>
                            <TableCell align="center"> 
                            <Box  sx={{display:'flex' , alignItems:'center' , justifyContent:'center' ,color:'gray'}}>
                                <BuildIcon id="modify" onClick={onClick} fontSize="small"/> 
                                <DeleteIcon id="delete" onClick={onClick} /> 
                            </Box>
                            </TableCell>
                            
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Box>
                    
                
        </Box>
        
        <Box sx={{
             display: { md : "flex", sx: 'none'},
             gap: "1rem",
             width:"90%",
             margin: "100px auto",
        }}>
            <Box sx={{ gridArea: 'sidebar2' , border:0 , display:'flex' , alignItems:'start'}}>
                        <Typography variant="h5" sx={{ mr : 2}}>디자이너 상품 승인</Typography>
                        <ArrowForwardIosIcon fontSize="large" sx={{ mr : 8}}/>
            </Box>

            <Box sx={{gridArea : 'main2' , border: 0 , width:'70%' , minWidth:'550px'}}>
                <Box sx={{borderBottom:2 , borderColor:"lightgray" , pb:1 , mb:3}}>
                    <Typography variant="body1">상품명</Typography>
                </Box>
                
                <Grid container sx={{justifyContent:'space-between'}}>
                {samples.map( (sample, index) => (
                        <Grid key={index} item md={3.5}  sx={{mb:5}}>
                            <Box component="img" src={sample.image} sx={{width:"100%" ,maxHeight:"400px"}}></Box>
                            <Box sx={{display : 'flex' , justifyContent:"space-between" , alignItems:'center' , mt:1 , mb:0.5}}>
                                <Typography variant="body1">{sample.name}</Typography>
                                <Box>
                                <Button id="승인" onClick={onClick} sx={{backgroundColor:'white', opacity:'0.7' , color:'black', borderRadius:0 , border:1 , height:"25px" ,borderColor:'lightgray'}}>승인</Button>   
                                <Button id="미승인" onClick={onClick} sx={{backgroundColor:'white', opacity:'0.7' , color:'black', borderRadius:0 , border:1 , height:"25px" ,borderColor:'lightgray'}}>미승인</Button>   
                                </Box>
                            </Box>
                            <Box sx={{display : 'flex' , alignItems:'center'}}>
                            <Typography variant="caption">상세보기 </Typography>
                            <ArrowForwardIosIcon sx={{fontSize:'15px' , mb:0.3 , ml:1}}/>
                            </Box>
                        </Grid>
                    ))}
                    
                </Grid>


            </Box>
        </Box>
        
        </Box>
    );
}

export default Manager;