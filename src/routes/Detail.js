import { Label } from "@mui/icons-material";
import { Button, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "@emotion/styled";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {createFund} from "../apis/apis";
import {client} from "./Login";

const TotalContainer = styled(Box)({
    margin : "100px auto",
    display: "grid",
    gap: "2rem",
    width:"90%",
    // marginX: "auto",
      
})

const StyledButton = styled(Button)({
    color:'white', 
    width:'70px' ,
    backgroundColor:"green" ,
    marginTop: "20px",
    marginBottom: "20px",
    height:"30px",
    borderRadius:'0',
    
    '&:hover': {
        opacity:'0.6',
        backgroundColor:"green" ,
    },
})


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

const InfoPartBox = styled(Box)({
    gridArea : 'infoPart',
    display:'flex' , 
    flexDirection:'column', 
    justifyContent:'space-between' ,
    height:'100%'
})

const InfoSecondBox = styled(Box)({
    borderTop: "1px solid" , 
    borderBottom: "1px solid" , 
    paddingTop: "20px",
    paddingBottom: "20px",
    borderColor : 'lightGray'
})

const InfoThirdBox = styled(Box)({
    display:'flex' , 
    flexDirection:'column'
})

const InfoFourthBox = styled(Box)({
    borderTop:"1px solid" , 
    borderBottom:"1px solid" , 
    borderColor:'lightgray',
    paddingTop:'20px',
    paddingBottom:'20px'
})

const InfoLastBox = styled(Box)({
})

const LastBoxFirstLine = styled(Box)({
    display : 'flex' , 
    justifyContent:'space-between' , 
    alignItems:'center',
    marginTop : "20px"
})

const LastBoxRangeBar = styled(Box)({
    height:'5px', 
    backgroundColor:'beige'
})
const LastBoxLastLine = styled(Box)({
    display:'flex' , 
    justifyContent:'space-between' , 
    marginTop:"5px"
})

const ImagePartBox = styled(Box)({
    gridArea: 'imagePart', 
    border:0, 
    height:"650px"
})
const OrderPartBox = styled(Box)({
    gridArea: 'orderPart',
    display:'flex' ,
    flexDirection:'column',
    justifyContent:'space-between' ,
})

const OrderFirstBox = styled(Box)({
    display:'flex' ,
    flexDirection:'column',
    // justifyContent:'space-between' ,
})

const OrderSecondBox = styled(Box)({
    display : 'flex' , 
    justifyContent:'space-between' , 
    alignItems:'center'
})

const OrderThirdBox = styled(Box)({
    display:'flex' , 
    justifyContent:'right'
})
const OrderFourthBox = styled(Box)({
    display:"flex" , 
    alignItems:'center' , 
    justifyContent:'space-between'
})
const OrderFifthBox = styled(Box)({
    display:"flex" , 
    alignItems:'center' , 
    justifyContent:'space-between'
})
const OrderSixthBox = styled(Box)({
    display : 'flex' ,
    justifyContent:'space-between' , 
    alignItems:'center',
    borderTop:"1px solid" , 
    borderColor:'lightgray' , 
    paddingTop:"10px",
    marginTop:'30px'
})
const OrderSeventhBox = styled(Box)({
    borderTop:"1px solid" , 
    borderBottom:"1px solid" , 
    borderColor:'lightgray' , 
    marginTop:"10px",
    marginBottom:"20px",
    paddingBottom:'10px'
})

const OrderLastBox = styled(Box)({})

const PriceText = styled(Typography)({
    fontWeight:'bold',
    marginTop:"10px",
    marginBottom:'25px'
})

const ProductName = styled(Typography)({
})
const ProductContent = styled(Typography)({
    lineHeight: '170%'
})

const FlexBox = styled(Box)({
    display : 'flex'
})

const FlexVerticalAlignBox = styled(FlexBox)({
    alignItems:'center'
})

const PostSearchButton = styled(Button)({
    backgroundColor:'lightGray', 
    opacity:'0.8' , 
    color:'black'
})
const BuyButton = styled(Button)({
    backgroundColor:'white',
    opacity:'0.7' , 
    color:'black', 
    borderRadius:0 , 
    border:"1px solid", 
    height:"30px", 
    width:'105px', 
    borderColor:'lightgray'
})

const FlexSpaceBetweenBox = styled(FlexBox)({
    justifyContent:'space-between'
})

function Detail(){

    
    
    const [totalCost , setTotalCost] = useState(0);

    const shippingFee = 10000;

    const location = useLocation();

    const [num , setNum] = useState(0);
    const onClick = (e) =>{
        if(e.target.id === '-'){
            setNum(prev => prev-1);
        }
        else if(e.target.id === '+'){
            setNum(prev => prev+1);
        }
    }

    const clothes = {
        id : location.state?.id,
        name : location.state?.name,
        price : location.state?.price,
        image : location.state?.image,
        content : location.state?.content,
        stockQuantity : location.state?.stockQuantity,
        count : location.state?.count,
    }

    const completePercent =  Math.round((clothes.count*100) / (clothes.count + clothes.stockQuantity));
    useEffect( () => {
        if(num <= 0 ) setTotalCost(0);
        else setTotalCost( num * parseInt(clothes.price));
    } , [num])

    useEffect( () => {
        window.scrollTo(0, 0);
    } , [])



    const [address1 , setAddress1] = useState("");
    const [address2 , setAddress2] = useState("");
    const [address3 , setAddress3] = useState("");

    const [phone1 , setPhone1] = useState("");
    const [phone2 , setPhone2] = useState("");
    const [phone3 , setPhone3] = useState("");

    const onChangeCollection = (e) => {
        const { target : { value }} = e;
        const { target : { id }} = e;

        if(id === "address1"){
            setAddress1(value);
        }else if(id==="address2"){
            setAddress2(value);
        }else if(id==="address3"){
            setAddress3(value);
        }else if(id ==="phone1"){
            setPhone1(value);
        }else if(id ==="phone2"){
            setPhone2(value);
        }else if(id ==="phone3"){
            setPhone3(value);
        }
    }

    const onClickFund = async () =>{
        const data = {
            address : address1 + address2 + address3,
            size : "M",
            count : num,
            phoneNumber : phone1+ "-" +phone2 +"-" +phone3,
            memberId : parseInt(client.id) ,
            itemId : clothes.id
        }

        await createFund(data);

        setAddress1("");
        setAddress2("");
        setAddress3("");
        setPhone1("");
        setPhone2("");
        setPhone3("");
    }

    return(
        <>
            <TotalContainer sx={{
                gridTemplateAreas: {md :`"infoPart imagePart orderPart"`,
                                    sm : `"imagePart orderPart"`,
                                    xs : `"orderPart"`},
                                                        
                gridTemplateColumns:{md : "300px 1fr 320px" ,
                                        sm : "1fr 320px",
                                        xs : "1fr"             
                                                  }
            }}>
                    <InfoPartBox sx={{ display : {md:'flex' , sm : 'none' , xs:'none'}}}>
                        <Box>
                            <ProductName variant="h5">{clothes.name}</ProductName>
                            <PriceText variant="h5" >{clothes.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원</PriceText>
                        </Box>
                        
                        <InfoSecondBox >
                            <ProductContent variant="body2">{clothes.content}</ProductContent>
                        </InfoSecondBox>

                        <InfoThirdBox >
                            <FlexBox>
                                <Typography variant="body2" sx={{my:1.5 , mr:4}}>원산지 </Typography>
                                <Typography variant="body2" sx={{my:1.5}}>Mogolian</Typography>
                            </FlexBox>
                            <FlexBox>
                                <Typography variant="body2" sx={{mb:1.5 , mr:2.5}}>배송정보</Typography>
                                <Typography variant="body2" sx={{mb:1.5}}>택배 (해외배송)</Typography>
                            </FlexBox>
                            <FlexBox>
                                <Typography variant="body2" sx={{mb: 1.5,mr:4}}>배송비 </Typography>
                                <Typography variant="body2"> {shippingFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 (90,000원 이상 무료배송)</Typography>
                            </FlexBox>
                        </InfoThirdBox>
                        
                            <InfoFourthBox>
                                <FlexBox>
                                    <Typography variant="body2" sx={{ mr:5}}>리뷰</Typography>
                                    <Typography variant="body2">(17)</Typography>
                                </FlexBox>

                                <FlexBox>
                                    <Typography variant="body2" sx={{mt:1.5, mr:4.5}}>Q&A</Typography>
                                    <Typography variant="body2"sx={{mt:1.5}}>(2)</Typography>
                                </FlexBox>
                            </InfoFourthBox>
                            <InfoLastBox>
                                <LastBoxFirstLine>
                                    <Typography variant="caption">18일 남음</Typography>
                                    <Typography variant="h6" sx={{color:'green'}}>{completePercent}%</Typography>
                                </LastBoxFirstLine>
                                <LastBoxRangeBar>
                                    <Box sx={{width:`${completePercent}%` , backgroundColor:'green' , height:'100%'}}>&nbsp;</Box>
                                </LastBoxRangeBar>
                                <LastBoxLastLine >
                                    <Typography variant="caption" sx={{color:'gray'}}>1,000,000원 목표</Typography>
                                    <Typography variant="body2" sx={{color:'gray'}} >1,299,900원</Typography>
                                </LastBoxLastLine>
                            </InfoLastBox>
                    </InfoPartBox>

                    <ImagePartBox sx={{ display : {sm:'flex', xs:'none'}}}>
                        <Box component="img" src={clothes.image} width="100%" height="100%"></Box>
                    </ImagePartBox>
                    <OrderPartBox>
                            <OrderFirstBox >
                                <FlexVerticalAlignBox>
                                    <CalendarTodayIcon fontSize="small" sx={{mb:0.3}} />
                                    <Typography variant="body1" sx={{ml:1}}>결제 및 발송 예정일</Typography>
                                </FlexVerticalAlignBox>
                                
                                <Typography variant="caption" sx={{my:1, ml:2 , color:'gray'}}>100% 달성 시에만 아래 지정일에 결제됩니다.</Typography>
                                <Typography variant="caption" sx={{ml:0.5 }}>1차 결제일: 2023년 2월 3일, 예상 발송일: 2023년 2월 16일</Typography>
                                <Typography variant="caption" sx={{ml:0.5,mb:1 }}>2차 결제일: 2023년 2월 20일, 예상 발송일: 2023년 2월 28일</Typography>
                                
                            </OrderFirstBox>
                            
                            <OrderSecondBox>
                                    <Typography variant="body2">배송지 입력</Typography>
                                    <FlexVerticalAlignBox >
                                        <StyledTextField id="address1" value={address1} onChange={onChangeCollection} sx={{width : '120px' , mr:2}} />
                                        <PostSearchButton >우편번호 검색</PostSearchButton>
                                    </FlexVerticalAlignBox>
                            </OrderSecondBox>

                            <OrderThirdBox > 
                                <StyledTextField id="address2" value={address2} onChange={onChangeCollection} sx={{float:'right'}}/>
                            </OrderThirdBox>

                            <OrderFourthBox>
                                <Typography variant="body2">상세주소</Typography>
                                <StyledTextField id="address3" value={address3} onChange={onChangeCollection}/>
                            </OrderFourthBox>

                            <OrderFifthBox>
                                <Typography variant="body2">연락처</Typography>
                                <Box>
                                <StyledTextField id="phone1" value={phone1} onChange={onChangeCollection} sx={{width:'60px' , mr:1}}/>
                                <StyledTextField id="phone2" value={phone2} onChange={onChangeCollection} sx={{width:'80px', mr:1}}/>
                                <StyledTextField id="phone3" value={phone3} onChange={onChangeCollection} sx={{width:'80px'}}/>
                                </Box>
                            </OrderFifthBox>

                            <OrderSixthBox>
                                <Typography variant="body2">수량</Typography>
                                <FlexVerticalAlignBox>
                                    <Button onClick={onClick} id="-" sx={{color:'black'}}>
                                        <RemoveIcon sx={{fontSize:'15px'}}/>
                                    </Button>
                                    <Box>{num}</Box>
                                    <Button onClick={onClick} id="+" sx={{color:'black'}}>
                                        <AddIcon sx={{fontSize:'15px'}}/>
                                    </Button>
                                </FlexVerticalAlignBox>
                            </OrderSixthBox>
                            <OrderSeventhBox>
                                <FlexSpaceBetweenBox sx={{my: 2 }}>
                                    <Typography variant="body2">총 상품금액</Typography>
                                    <Typography variant="body2">{totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Typography>
                                </FlexSpaceBetweenBox>

                                <FlexSpaceBetweenBox sx={{my: 2}}>
                                    <Typography variant="body2">배송비</Typography>
                                    <Typography variant="body2">{shippingFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Typography>
                                </FlexSpaceBetweenBox>
                                
                                <FlexSpaceBetweenBox>
                                    <Typography variant="body1" sx={{fontWeight:'bold'}}>총 상품금액</Typography>
                                    <Typography variant="body1" sx={{fontWeight: 'bold'}}>{ (totalCost + shippingFee)===10000 ? 0 : (totalCost + shippingFee).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Typography>
                                </FlexSpaceBetweenBox>
                            </OrderSeventhBox>
                            
                            <OrderLastBox>
                                <FlexSpaceBetweenBox sx={{alignItems:'center' , mt:1}}>
                                    <Typography variant="body1">결제방식</Typography>
                                    <Box>
                                        <BuyButton >장바구니 담기</BuyButton>
                                        <BuyButton >구매하기</BuyButton>   
                                    </Box>
                                </FlexSpaceBetweenBox>
                                <Box sx={{display:'flex' , justifyContent:'end'}}>
                                    <StyledButton component={Link} to="/" onClick={onClickFund}>펀딩하기</StyledButton>
                                </Box>
                            </OrderLastBox>
                    </OrderPartBox>
            </TotalContainer>
        </>
    );
}

export default Detail;