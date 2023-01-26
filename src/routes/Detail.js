import { Label } from "@mui/icons-material";
import { Button, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "@emotion/styled";

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
    height:'80%'
})

const InfoSecondBox = styled(Box)({
    borderTop: "1px solid" , 
    borderBottom: "1px solid" , 
    py: 4,
    borderColor : 'lightGray'
})

const InfoThirdBox = styled(Box)({
    display:'flex' , 
    flexDirection:'column'
})

const ImagePartBox = styled(Box)({
    gridArea: 'imagePart', 
    border:0, 
    height:"500px"
})
const OrderPartBox = styled(Box)({
    gridArea: 'orderPart'
})
const OrderFirstBox = styled(Box)({
    display : 'flex' ,
    justifyContent:'space-between' , 
    alignItems:'center'
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
    borderColor:'lightgray' , 
    marginTop:"30px"
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
        name : location.state?.name,
        price : location.state?.price,
        image : location.state?.image,
        content : location.state?.content,
        from : location.state?.from
    }

    useEffect( () => {
        if(num <= 0 ) setTotalCost(0);
        else setTotalCost( num * parseInt(clothes.price) + shippingFee);
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
                        
                        <InfoSecondBox sx={{borderTop: 1 , borderBottom: 1 , py: 4, borderColor : 'lightGray'}}>
                            <Typography variant="body2">{clothes.content}</Typography>
                        </InfoSecondBox>

                        <InfoThirdBox >
                            <Typography variant="body2" sx={{my:2}}>원산지 {clothes.from}</Typography>
                            <Typography variant="body2" sx={{mb:2}}>배송정보 택배 (해외배송)</Typography>
                            <Typography variant="body2">배송비 {shippingFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 (100,000원 이상 무료배송)</Typography>
                        </InfoThirdBox>

                    </InfoPartBox>
                    <ImagePartBox >
                        <Box component="img" src={clothes.image} width="100%" height="100%"></Box>
                    </ImagePartBox>
                    <OrderPartBox>
                        <form>
                            <OrderFirstBox>
                                <Typography variant="body2">수량</Typography>
                                <Box sx={{display : 'flex' , alignItems:'center'}}>
                                    <Button onClick={onClick} id="-" sx={{color:'black' }}><RemoveIcon sx={{fontSize:'15px'}}/></Button>
                                    <Box >{num}</Box>
                                    <Button onClick={onClick} id="+" sx={{color:'black'}}><AddIcon sx={{fontSize:'15px'}}/></Button>
                                </Box>
                            </OrderFirstBox>

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

                                <Box sx={{display : 'flex', justifyContent:'end' , mt:2}}>
                                    
                                    <Button sx={{backgroundColor:'white', opacity:'0.7' , color:'black', borderRadius:0}}>장바구니 담기</Button>
                                    <Button sx={{backgroundColor:'lightGray', opacity:'0.7' , color:'black', borderRadius:0}}>구매하기</Button>
                                    
                                </Box>
                            </OrderSixthBox>

                        
                        </form>
                    </OrderPartBox>
            </Box>

        </Box>
    );
}

export default Detail;