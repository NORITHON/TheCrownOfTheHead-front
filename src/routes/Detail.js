import { Label } from "@mui/icons-material";
import { Button, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "@emotion/styled";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

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
    gridArea : 'infoPart'  ,
    display:'flex' , 
    flexDirection:'column', 
    justifyContent:' space-around' ,
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

const ImagePartBox = styled(Box)({
    gridArea: 'imagePart', 
    border:0, 
    height:"650px"
})
const OrderPartBox = styled(Box)({
    gridArea: 'orderPart'
})
const OrderFirstBox = styled(Box)({
    display : 'flex' ,
    justifyContent:'space-between' , 
    alignItems:'center',
    borderTop:"1px solid" , 
    borderColor:'lightgray' , 
    paddingTop:"10px",
    marginTop:'30px'
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
    borderTop:"1px solid" , 
    borderBottom:"1px solid" , 
    borderColor:'lightgray' , 
    marginTop:"10px",
    marginBottom:"20px",
    paddingBottom:'10px'
})

function Detail(){

    const completePercent = 50;
    
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
        name : location.state?.name,
        price : location.state?.price,
        image : location.state?.image,
        content : location.state?.content,
        from : location.state?.from
    }

    useEffect( () => {
        if(num <= 0 ) setTotalCost(0);
        else setTotalCost( num * parseInt(clothes.price));
    } , [num])
    

    return(
        <Box>
            <Box sx={{
                paddingY : "100px",
                display: "grid",
                gap: "2rem",
                width:"90%",
                margin: "auto",
                gridTemplateAreas: `"infoPart imagePart orderPart"`,
                gridTemplateColumns: "280px 1fr 320px"                 
            }}>
                    <InfoPartBox >
                        <Box>
                            <Typography variant="h5">{clothes.name}</Typography>
                            <Typography variant="h5" sx={{fontWeight:'bold' , my:2}}>{clothes.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Typography>
                        </Box>
                        
                        <InfoSecondBox>
                            <Typography variant="body2">{clothes.content}</Typography>
                        </InfoSecondBox>

                        <InfoThirdBox >
                            <Box sx={{display :'flex'}}>
                            <Typography variant="caption" sx={{my:1.5 , mr:4}}>원산지 </Typography>
                            <Typography variant="caption" sx={{my:1.5}}>{clothes.from}</Typography>
                            </Box>
                            <Box sx={{display :'flex'}}>
                            <Typography variant="caption" sx={{mb:1.5 , mr:2.5}}>배송정보</Typography>
                            <Typography variant="caption" sx={{mb:1.5}}>택배 (해외배송)</Typography>
                            </Box>
                            <Box sx={{display:'flex'}}>
                            <Typography variant="caption" sx={{mb: 1.5,mr:4}}>배송비 </Typography>
                            <Typography variant="caption"> {shippingFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 (100,000원 이상 무료배송)</Typography>
                            </Box>
                        </InfoThirdBox>
                        
                            <Box sx={{borderTop:1 , borderBottom:1 , borderColor:'lightgray'}}>
                                <Box sx={{display:'flex'}}>
                                    <Typography variant="caption" sx={{my:1 ,mr:5}}>리뷰</Typography>
                                    <Typography variant="caption"sx={{my:1}}>(17)</Typography>
                                </Box>

                                <Box sx={{display:'flex'}}>
                                    <Typography variant="caption" sx={{mb:2, mr:5}}>Q&A</Typography>
                                    <Typography variant="caption">(2)</Typography>
                                </Box>
                        </Box>
                        <Box>
                            <Box sx={{mt:5}}>
                                <Box sx={{display : 'flex' , justifyContent:'space-between' , alignItems:'center'}}>
                                <Typography variant="caption">18일 남음</Typography>
                                <Typography variant="h6" sx={{color:'green'}}>{completePercent}%</Typography>
                                </Box>
                            </Box>
                            <Box sx={{height:'5px', backgroundColor:'beige'}}>
                                <Box sx={{width:`${completePercent}%` , backgroundColor:'green' , height:'100%'}}>&nbsp;</Box>
                            </Box>
                            <Box sx={{display:'flex' , justifyContent:'space-between' , mt:1}}>
                                <Typography variant="caption" sx={{color:'gray'}}>1,000,000원 목표</Typography>
                                <Typography variant="body2" sx={{color:'gray'}} >1,299,900원</Typography>
                            </Box>
                        </Box>

                    </InfoPartBox>
                    <ImagePartBox >
                        <Box component="img" src={clothes.image} width="100%" height="100%"></Box>
                    </ImagePartBox>
                    <OrderPartBox>
                        <form>
                            
                            <Box sx={{display:'flex' , flexDirection:'column'}}>
                                <Box sx={{ display:'flex' , alignItems:'center'}}>
                                <CalendarTodayIcon fontSize="small" sx={{mb:0.3}} /><Typography variant="body1" sx={{ml:1}}>
                                    결제 및 발송 예정일
                                    </Typography>
                                </Box>
                                <Typography variant="caption" sx={{my:1, ml:2 , color:'gray'}}>100% 달성 시에만 아래 지정일에 결제됩니다.</Typography>
                                <Typography variant="caption" sx={{ml:0.5 }}>1차 결제일: 2023년 2월 3일, 예상 발송일: 2023년 2월 16일</Typography>
                                <Typography variant="caption" sx={{ml:0.5,mb:1 }}>2차 결제일: 2023년 2월 20일, 예상 발송일: 2023년 2월 28일</Typography>
                                
                            </Box>
                            <OrderSecondBox>
                                    <Typography variant="body2">배송지 입력</Typography>
                                    <Box sx={{display:'flex' , alignItems:'center'}}>
                                        <StyledTextField sx={{width : '120px' , mr:2}}></StyledTextField>
                                        <Button sx={{backgroundColor:'lightGray', opacity:'0.8' , color:'black'}}>우편번호 검색</Button>
                                    </Box>
                            </OrderSecondBox>

                            <OrderThirdBox > 
                                <StyledTextField sx={{float:'right'}}/> 
                            </OrderThirdBox>

                            <OrderFourthBox>
                                <Typography variant="body2">상세주소</Typography>
                                <StyledTextField/>
                            </OrderFourthBox>

                            <OrderFifthBox>
                                <Typography variant="body2">연락처</Typography>
                                <Box>
                                <StyledTextField sx={{width:'60px' , mr:1}}/>
                                <StyledTextField sx={{width:'80px', mr:1}}/>
                                <StyledTextField sx={{width:'80px'}}/>
                                </Box>
                            </OrderFifthBox>

                            <OrderFirstBox>
                                <Typography variant="body2">수량</Typography>
                                <Box sx={{display : 'flex' , alignItems:'center'}}>
                                    <Button onClick={onClick} id="-" sx={{color:'black' }}><RemoveIcon sx={{fontSize:'15px'}}/></Button>
                                    <Box >{num}</Box>
                                    <Button onClick={onClick} id="+" sx={{color:'black'}}><AddIcon sx={{fontSize:'15px'}}/></Button>
                                </Box>
                            </OrderFirstBox>

                            <OrderSixthBox>
                                <Box sx={{display : 'flex' ,my: 2 , justifyContent:'space-between' }}>
                                    <Typography variant="body2">총 상품금액</Typography>
                                    <Typography variant="body2">{totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Typography>
                                </Box>

                                <Box sx={{display : 'flex' ,my: 2 , justifyContent:'space-between' }}>
                                    <Typography variant="body2">배송비</Typography>
                                    <Typography variant="body2">{shippingFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Typography>
                                </Box>
                                
                                <Box sx={{display : 'flex' , justifyContent:'space-between' }}>
                                    <Typography variant="body1" sx={{fontWeight:'bold'}}>총 상품금액</Typography>
                                    <Typography variant="body1" sx={{fontWeight: 'bold'}}>{ (totalCost + shippingFee)===10000 ? 0 : (totalCost + shippingFee).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Typography>
                                </Box>

                                
                            </OrderSixthBox>
                            
                            <Box>
                                <Box sx={{display : 'flex', justifyContent:'space-between',alignItems:'center' , mt:2}}>
                                    <Typography variant="body1">결제방식</Typography>
                                    <Box>
                                        <Button sx={{backgroundColor:'white', opacity:'0.7' , color:'black', borderRadius:0 , border:1, height:"30px", width:'130px', borderColor:'lightgray'}}>장바구니 담기</Button>
                                        <Button sx={{backgroundColor:'white', opacity:'0.7' , color:'black', borderRadius:0 , border:1 , height:"30px", width:'70px' ,borderColor:'lightgray'}}>구매하기</Button>   
                                    </Box>
                                </Box>

                                <Box sx={{display:'flex' , justifyContent:'end'}}>
                                    <StyledButton>펀딩하기</StyledButton>
                                </Box>
                            </Box>
                        
                        </form>
                    </OrderPartBox>
            </Box>

        </Box>
    );
}

export default Detail;