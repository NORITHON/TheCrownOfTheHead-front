import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, {useEffect, useRef, useState} from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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

const PopupContainer = styled(Box)({
    display : 'flex' , 
    paddingTop:"20px", 
    justifyContent:'center' , 
    width:'100%' , 
    height:'830px' , 
    backgroundColor:'gray'
})

const StyledPopup = styled(Paper)({
    width : "50%" , 
    height:'85%' , 
    borderRadius:'4%' , 
    paddingLeft:"50px" , 
    paddingRight:"30px" , 
    paddingTop:"30px"
})

const PopupCloseBox = styled(Box)({
    display:'flex' , 
    justifyContent:'right'
})

const PopupSampleBox = styled(Box)({
    display:'flex' , 
    flexDirection:'column' , 
    alignItems:'start'
})

const PopupSampleName = styled(Typography)({})

const PopupSampleDetailBox = styled(Box) ({
    display : 'flex' , 
    width:'100%' ,
    height: "250px" ,
    borderBottom:"2px solid" , 
    borderColor:'lightgray' , 
    padding:'30px 0' 
})

const PopupFlexAlignBox = styled(Box)({
    display : 'flex' , 
    justifyContent:'space-between' , 
    alignItems:'center',
    width:'100%',
})

const PopupLastBox = styled(Box)({
    display:'flex', 
    justifyContent:'end' , 
    width:'100%'
})

const OrderContainer = styled(Box)({
    gap: "1rem",
    width:"90%",
    margin: "100px auto",
})

const OrderSidebar = styled(Box)({
    gridArea: 'sidebar1' , 
    display:'flex' , 
    alignItems:'start'
})

const OrderMain = styled(Box)({
    gridArea: 'main1' , 
    width:'75%' , 
    minWidth:'800px'
})

const SampleContainer = styled(Box)({
    gap: "1rem",
    width:"90%",
    margin: "100px auto",
})

const SampleSidebar = styled(Box)({
    gridArea: 'sidebar2' ,  
    display:'flex' , 
    alignItems:'start'
})

const SampleMain = styled(Box)({
    gridArea : 'main2' , 
    width:'75%' , 
    minWidth:'480px'
})

const SampleFlexAlignBox = styled(Box)({
    display:'flex',
    alignItems:'center',

})

const SampleFlexAlignBetweenBox = styled(SampleFlexAlignBox)({
    justifyContent:"space-between"
})

const SampleItem = styled(Grid)({
    minWidth:'300px'
})

const SampleImage = styled(Box)({
    width:"100%" ,
    height:"300px"
})
const SampleContent = styled(Box)({})

function Manager(){

    const [isPopup , setIsPopup] = useState(false);

    const [popup , setPopup] = useState([]);

    const [samples , setSamples] = useState([]);

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
                
        {isPopup ? 
        <Box>
            <PopupContainer >
                <StyledPopup>
                    <PopupCloseBox>
                        <CloseIcon onClick={onClickClosePopup} fontSize="large"/>
                    </PopupCloseBox>
                    <PopupSampleBox >
                        <PopupSampleName variant="h4">About {popup.title}</PopupSampleName>

                        <PopupSampleDetailBox>
                            <Box component="img" src={popup.imageUrl} width="40%" sx={{ mr:2}}></Box>
                            <Box>
                                <Box sx={{display:'flex' , alignItems:'center'}}>
                                    <ArticleOutlinedIcon sx={{mr:1}} />
                                    <Typography variant="h5">Product Information</Typography>
                                </Box>
                                <Typography sx={{mt:2}}>{popup.content}</Typography>
                            </Box>
                        </PopupSampleDetailBox>
                        <PopupFlexAlignBox sx={{pt:2 }}>
                            <Typography variant="body1">제품명</Typography>
                            <StyledTextField id="p1" value={p1} onChange={onchangep}/>
                        </PopupFlexAlignBox>

                        <PopupFlexAlignBox>
                            <Typography variant="body1">원자재 비용</Typography>
                            <StyledTextField id="p2" value={p2} onChange={onchangep} />
                        </PopupFlexAlignBox>

                        <PopupFlexAlignBox >
                            <Typography variant="body1">공장 인건비</Typography>
                            <StyledTextField id="p3" value={p3} onChange={onchangep}/>
                        </PopupFlexAlignBox>

                        <PopupFlexAlignBox sx={{pr:2}}>
                            <Typography>공모 모집 인원</Typography>
                            <StyledTextField id="p4" value={p4} onChange={onchangep}/>
                        </PopupFlexAlignBox>
                        <PopupLastBox>
                            <StyledButton onClick={onMakeItem} sx={{mt:1.5}}>신청하기</StyledButton>
                        </PopupLastBox>
                    </PopupSampleBox>
                </StyledPopup>
            </PopupContainer>
        </Box> :
            <Box>
            <OrderContainer sx={{display: { md : "flex", xs: 'none'}}}>
                <OrderSidebar >
                    <Typography variant="h5" sx={{ mr : 8 , mb:3}}>주문내역 확인</Typography>
                    <ArrowForwardIosIcon sx={{ mr : 8}} fontSize="large"/>
                </OrderSidebar>
                <OrderMain >
                
                <TableContainer component={Paper} elevation={5}>
                    <Table size="small" aria-label="a dense table">
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
                </OrderMain>
        </OrderContainer>
        <SampleContainer sx={{
             display: { md : "flex", sx: 'none'},
        }}>
            <SampleSidebar>
                        <Typography variant="h5" sx={{ mr : 2 , mb:3}}>디자이너 상품 승인</Typography>
                        <ArrowForwardIosIcon fontSize="large" sx={{ mr : 8}}/>
            </SampleSidebar>

            <SampleMain >
                <Box sx={{borderBottom:2 , borderColor:"lightgray" , pb:1}}>
                    <Typography variant="h6">상품명</Typography>
                </Box>
                
                <Grid container sx={{ justifyContent:{ md : 'space-between' , xs:'space-evenly'} , alignItems:'center' }}>
                {samples.map( (sample, index) => (
                        <SampleItem key={index} item md={3.5}  sx={{my:5}}>
                            <SampleImage component="img" src={sample.imageUrl}></SampleImage>
                                <SampleContent>
                                    <SampleFlexAlignBetweenBox sx={{mt:1 ,mx:2 , mb:0.5 }}>
                                            <Typography variant="body1">{ sample.title.length >= 15 ? sample.title.slice(0,15) + "..." : sample.title }</Typography>
                                    </SampleFlexAlignBetweenBox>
                                    <SampleFlexAlignBetweenBox onClick={ () => onClickDetail(sample)} sx={{ mx:2, mt:1}}>
                                        <SampleFlexAlignBox>
                                            <Typography variant="body2" sx={{color:'gray'}}>상세보기 </Typography>
                                            <ArrowForwardIosIcon sx={{fontSize:'13px' , mb:0.3 , ml:1 , color:'gray'}}/>
                                        </SampleFlexAlignBox>
                                        <SampleFlexAlignBox>
                                            <FavoriteBorderIcon sx={{fontSize:'20px' , mr:1 , color:'red'}} />
                                            <Typography sx={{color:'red'}}>{sample.likeCount}</Typography>
                                        </SampleFlexAlignBox>
                                    </SampleFlexAlignBetweenBox>
                                </SampleContent>
                        </SampleItem>
                    ))}
                </Grid>
            </SampleMain>
        </SampleContainer> 
        </Box>
        }
        
        </Box>
    );
}

export default Manager;