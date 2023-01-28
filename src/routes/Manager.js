import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, {useEffect, useRef, useState} from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteIcon from '@mui/icons-material/Delete';
import BuildIcon from '@mui/icons-material/Build';
import styled from "@emotion/styled";
import CloseIcon from '@mui/icons-material/Close';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import {createItem, createOrder, getSamples, readItems, readOrders} from "../apis/apis";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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

const ApprovedButton = styled(Button)({
    color:'white', 
    width:'30px' ,
    backgroundColor:"gray" ,
    height:"30px",
    '&:hover': {
        backgroundColor:"gray" ,
        opacity:'0.7'
    },
})

function Manager(){

    const [isPopup , setIsPopup] = useState(false);

    const [popup , setPopup] = useState([]);

    const [samples , setSamples] = useState([]);
    

   

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
        setP1(sample.title);
        window.scrollTo(0, 0);
    }
    const onClickClosePopup = () => {
        setIsPopup(false);
    }


    const [popupName, setPopupName] = useState("");

    const [p1 , setP1] = useState("");
    const [p2 , setP2] = useState("");
    const [p3 , setP3] = useState("");
    const [p4, setP4] = useState("");

    const onchangep = (e) => {
        if(e.target.id==="p1"){
            setP1(e.target.value);
        }else if(e.target.id==="p2"){
            setP2(e.target.value);
        }else if(e.target.id ==="p3"){
            setP3(e.target.value);
        }else if(e.target.id ==="p4"){
            setP4(e.target.value);
        }
    }

    const onMakeItem = async () => {
        const data = {
            name : p1,
            laborCost : parseInt(p2),
            materialCost : parseInt(p3),
            circulationCost : 100,
            sampleId : popup.id,
            stockQuantity : parseInt(p4),
        }
        createItem(data);
        setIsPopup(false);
        setP1("");
        setP2("");
        setP3("");
        setP4("");

    }

    const sortByHeartDesc = (data) => {
        data.sort(function (a,b) {
            if(a.likeCount > b.likeCount) return -1;
            if(a.likeCount === b.likeCount) return 0;
            if(a.likeCount < b.likeCount) return 1;
            return 0;
        });
    };

    useEffect( () => {
        const getAllSample = async () =>{
            const data = await getSamples();
            await sortByHeartDesc(data);
            setSamples(data);
        }
        getAllSample();

    } , [samples])

    const [orders , setOrders] = useState([]);
    const [items , setItems] = useState([]);

    useEffect( () => {
        const readAllOrders = async() => {
            const ordersAllData = await readOrders();

             setOrders(ordersAllData);
        }
        readAllOrders();

        const readAllItems = async() => {
            const itemsAllData = await readItems();

             setItems(itemsAllData);
        }
         readAllItems();
    } , [orders,items])


    const onApprove = async(item) => {
        const data = {
            itemId : item.id,
        }

        createOrder(data);

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
                        <Typography variant="h4">About {popup.title}</Typography>

                        <Box sx={{display : 'flex' , width:'100%' ,height: "250px" ,borderBottom:2 , borderColor:'lightgray' , py:3 }}>
                            <Box component="img" src={popup.imageUrl} width="40%" sx={{ mr:2}}></Box>
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
                            <StyledTextField id="p1" value={p1} onChange={onchangep}/>
                            {/* <Typography variant="body1">{popup.rawMaterialCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography> */}
                        </Box>

                        <Box sx={{display : 'flex' , justifyContent:'space-between' , alignItems:'center',width:'100%' }}>
                            <Typography variant="body1">원자재 비용</Typography>
                            <StyledTextField id="p2" value={p2} onChange={onchangep} />
                            {/* <Typography variant="body1">{popup.rawMaterialCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography> */}
                        </Box>

                        <Box sx={{display : 'flex' , justifyContent:'space-between', width:'100%', alignItems:'center'}}>
                            <Typography variant="body1">공장 인건비</Typography>
                            {/* <Typography variant="body1"></Typography> */}
                            <StyledTextField id="p3" value={p3} onChange={onchangep}/>
                        </Box>

                        <Box sx={{display : 'flex' , justifyContent:'space-between', alignItems:'center', width:'100%' , pr:2}}>
                            <Typography>공모 모집 인원</Typography>
                            <StyledTextField id="p4" value={p4} onChange={onchangep}/>
                            {/* <Typography>{popup.distributionCost}</Typography> */}
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'end' , width:'100%'}}>
                            <StyledButton onClick={onMakeItem} sx={{backgroundColor:'gray' , color:'white', my:1}}>신청하기</StyledButton>
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
                                

           }}>
                <Box sx={{ gridArea: 'sidebar1' , border:0 , display:'flex' , alignItems:'start'}}>
                    <Typography variant="h5" sx={{ mr : 8 , mb:3}}>주문내역 확인</Typography>
                    <ArrowForwardIosIcon sx={{ mr : 8}} fontSize="large"/>
                </Box>
                <Box sx={{ gridArea: 'main1', border:0 , width:'75%' , minWidth:'550px'}}>
                
                <TableContainer component={Paper} elevation={5}>
                    <Table sx={{}} size="small" aria-label="a dense table">
                        <TableHead>
                        <TableRow>
                            <TableCell sx={{ backgroundColor:'lightgray' , border:0}} align="center" >주문 번호</TableCell>
                            <TableCell sx={{ backgroundColor:'lightgray' , border:0}} align="center" >상품 이름</TableCell>
                            <TableCell sx={{backgroundColor:'lightgray'}} align="center">가격</TableCell>
                            <TableCell sx={{backgroundColor:'lightgray'}} align="center">공모 인원 현황</TableCell>
                            <TableCell sx={{backgroundColor:'lightgray'}} align="center">현재 필요 인원</TableCell>
                            <TableCell sx={{backgroundColor:'lightgray'}} align="center">주문 상태</TableCell>
                            <TableCell sx={{backgroundColor:'lightgray'}} align="center"></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {items.map((item,index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                            <TableCell align="center" component="th" scope="row">
                                {item.id}
                            </TableCell>
                            <TableCell align="center">{item.name}</TableCell>
                            <TableCell align="center">{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                            <TableCell align="center">{item.count}</TableCell>
                            <TableCell align="center">{item.stockQuantity}</TableCell>
                            <TableCell align="center">waiting</TableCell>
                            <TableCell > <ApprovedButton onClick={() => onApprove(item)}>승인</ApprovedButton></TableCell>
                            
                            
                            
                            </TableRow>
                        ))}





                            {orders.map((order,index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="center" component="th" scope="row">
                                {order.id}
                            </TableCell>
                            <TableCell align="center">{order.item.name}</TableCell>
                            <TableCell align="center">{order.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                            <TableCell align="center">{order.count}</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">Approved</TableCell>
                            <TableCell align="center"> 
                            
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

            <Box sx={{gridArea : 'main2' , border: 0 , width:'75%' , minWidth:'550px'}}>
                <Box sx={{borderBottom:2 , borderColor:"lightgray" , pb:1}}>
                    <Typography variant="h6">상품명</Typography>
                </Box>
                
                <Grid container sx={{ justifyContent:'space-between' , alignItems:'center' }}>
                {samples.map( (sample, index) => (
                        <Grid key={index} item md={3.5}  sx={{my:5 , minWidth:'300px'}}>
                            <Box component="img" src={sample.imageUrl} sx={{width:"100%" ,height:"300px"}}></Box>
                                <Box>
                                <Box sx={{display : 'flex' , justifyContent:"space-between" , alignItems:'center' , mt:1 ,mx:2 , mb:0.5 }}>
                                        <Typography variant="body1">{ sample.title.length >= 15 ? sample.title.slice(0,15) + "..." : sample.title }</Typography>
                                        <Box sx={{display:'flex'}}>
                                            {/* <Button id="승인" onClick={onClick} sx={{backgroundColor:'white', opacity:'0.7' , color:'black', borderRadius:0 , border:1 , height:"25px" ,borderColor:'lightgray' , width:"40px"}}>승인</Button>    */}
                                            {/* <Button id="미승인" onClick={onClick} sx={{backgroundColor:'white', opacity:'0.7' , color:'black', borderRadius:0 , border:1 , height:"25px" ,borderColor:'lightgray'}}>미승인</Button>    */}
                                        </Box>
                                </Box>
                                <Box onClick={ () => onClickDetail(sample)} sx={{ mx:2,display : 'flex' ,justifyContent:'space-between' ,alignItems:'center'  , mt:1}}>
                                    <Box sx={{display:'flex' , alignItems:'center'}}>
                                        <Typography variant="body2" sx={{color:'gray'}}>상세보기 </Typography>
                                        <ArrowForwardIosIcon sx={{fontSize:'13px' , mb:0.3 , ml:1 , color:'gray'}}/>
                                    </Box>
                                    <Box sx={{display : 'flex' , alignItems:'center'}}>
                                        <FavoriteBorderIcon sx={{fontSize:'20px' , mr:1 , color:'red'}} />
                                        <Typography sx={{color:'red'}}>{sample.likeCount}</Typography>
                                    </Box>
                                </Box>
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