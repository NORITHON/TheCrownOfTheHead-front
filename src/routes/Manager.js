import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteIcon from '@mui/icons-material/Delete';
import BuildIcon from '@mui/icons-material/Build';
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

const StyledTextField = styled(TextField)({
    ' .MuiOutlinedInput-root': {
        '& fieldset': {
            margin:'auto 0',
            borderColor: 'lightGray',
            height: '40px',
          },
          '&:hover fieldset': {
          },
          '&.Mui-focused fieldset': {
            borderColor: 'gray',
          },
    },
    
})

const StyledButton = styled(Button)({
    color:'white', 
    width:'70px' ,
    backgroundColor:"gray" ,
    marginBottom: "30px",
    height:"40px",
    
    '&:hover': {
        backgroundColor:"gray" ,
    },
})

function Manager(){

    const [isPopup , setIsPopup] = useState(false);

    const [popup , setPopup] = useState();

    const [samples , setSamples] = useState([{
        name : "yellow muffler",
        image : "img/sample1.png",
        content: "This is very good!"
    },
    {
        name : "white baraclaba",
        image : "img/sample2.png",
        content: "This is very good!"
    },
    
    {
        name : "cashmere knit",
        image : "img/sample3.png",
        content: "This is very good!"
    },
    
    {
        name : "shirt-sleeved T",
        image : "img/sample4.png",
        content: "This is very good!"
    },
    
    {
        name : "short-sleeved T",
        image : "img/sample4.png",
        content: "This is very good!"
    },

    {
        name : "short-sleeved T",
        image : "img/sample4.png",
        content: "This is very good!"
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

    const scrollRef = useRef();

    const onClickDetail = (sample) =>{
        setPopup(sample);
        setIsPopup(true);
        setPopupName(sample.name);
        window.scrollTo(0, 0);
    }
    const onClickClosePopup = () => {
        setIsPopup(false);
    }


    const [popupName, setPopupName] = useState("");

    const onChangePopupName = (e) => {
        setPopupName(e.target.value);
    }

    

    return(
        

            <Box ref={scrollRef}>
                
        {isPopup ? <Box>
            <Box sx={{display : 'flex' , pt:3, justifyContent:'center' , width:'100%' , height:'800px' , backgroundColor:'gray'}}>
                <Paper sx={{width : "50%" , height:'85%' , borderRadius:'5%' , pl : 7 , pr:3 , pt:3}}>
                    <Box sx={{display:'flex' , justifyContent:'right'}}>
                        <CloseIcon onClick={onClickClosePopup} fontSize="large"/>
                    </Box>
                    <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'start'}}>
                        <Typography variant="h4">About {popup.name}</Typography>

                        <Box sx={{display : 'flex' , width:'100%' ,height: "250px" ,borderBottom:2 , borderColor:'lightgray' , py:3 }}>
                            <Box component="img" src={popup.image} width="40%" sx={{ mr:2}}></Box>
                            <Box>
                                <Box sx={{display:'flex' , alignItems:'center'}}>
                                <ArticleOutlinedIcon sx={{mr:1}} />
                                <Typography variant="h5">Product Information</Typography>
                                </Box>
                                <Typography sx={{mt:2}}>{popup.content}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{display : 'flex' , justifyContent:'space-between' , alignItems:'center',width:'100%', pt:2 }}>
                            <Typography variant="body1">제품명</Typography>
                            <StyledTextField onChange={onChangePopupName} value={popupName}/>
                            {/* <Typography variant="body1">{popup.rawMaterialCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography> */}
                        </Box>

                        <Box sx={{display : 'flex' , justifyContent:'space-between' , alignItems:'center',width:'100%' }}>
                            <Typography variant="body1">원자재 비용</Typography>
                            <StyledTextField />
                            {/* <Typography variant="body1">{popup.rawMaterialCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography> */}
                        </Box>

                        <Box sx={{display : 'flex' , justifyContent:'space-between', width:'100%', alignItems:'center'}}>
                            <Typography variant="body1">공장 인건비</Typography>
                            {/* <Typography variant="body1"></Typography> */}
                            <StyledTextField />
                        </Box>

                        <Box sx={{display : 'flex' , justifyContent:'space-between', alignItems:'center', width:'100%' , pr:2}}>
                            <Typography>공모 모집 인원</Typography>
                            <StyledTextField />
                            {/* <Typography>{popup.distributionCost}</Typography> */}
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'end' , width:'100%'}}>
                            <StyledButton sx={{backgroundColor:'gray' , color:'white', my:1}}>신청하기</StyledButton>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Box> :
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
                <Box sx={{borderBottom:2 , borderColor:"lightgray" , pb:1 , mb:5}}>
                    <Typography variant="body1">상품명</Typography>
                </Box>
                
                <Grid container sx={{justifyContent:'space-between'}}>
                {samples.map( (sample, index) => (
                        <Grid key={index} item md={3.5}  sx={{mb:5}}>
                            <Box component="img" src={sample.image} sx={{width:"100%" ,maxHeight:"350px"}}></Box>
                            <Box sx={{display : 'flex' , justifyContent:"space-between" , alignItems:'center' , mt:1 , mb:0.5}}>
                                <Typography variant="body1">{sample.name}</Typography>
                                <Box>
                                <Button id="승인" onClick={onClick} sx={{backgroundColor:'white', opacity:'0.7' , color:'black', borderRadius:0 , border:1 , height:"25px" ,borderColor:'lightgray'}}>승인</Button>   
                                <Button id="미승인" onClick={onClick} sx={{backgroundColor:'white', opacity:'0.7' , color:'black', borderRadius:0 , border:1 , height:"25px" ,borderColor:'lightgray'}}>미승인</Button>   
                                </Box>
                            </Box>
                            <Box onClick={ () => onClickDetail(sample)} sx={{display : 'flex' , alignItems:'center'}}>
                            <Typography variant="caption" sx={{color:'gray'}}>상세보기 </Typography>
                            <ArrowForwardIosIcon sx={{fontSize:'13px' , mb:0.3 , ml:1 , color:'gray'}}/>
                            </Box>
                        </Grid>
                    ))}
                    
                </Grid>


            </Box>
    
        </Box> 
        </Box>
        }
        
        </Box>
    );
}

export default Manager;