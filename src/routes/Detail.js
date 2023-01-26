import { Label } from "@mui/icons-material";
import { Button, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
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

            // marginY:'auto'
          },
          '&:hover fieldset': {
            // borderColor: 'gray',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'gray',
          },
    },

})

function Detail(){

    const totalCost = 89000;

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
                    <Box sx={{ gridArea : 'infoPart'  ,display:'flex' , flexDirection:'column', justifyContent:' space-around' , height:'80%'}}>
                        <Box>
                            <Typography variant="h5">{clothes.name}</Typography>
                            <Typography variant="h5" sx={{fontWeight:'bold' , my:2}}>{clothes.price}</Typography>
                        </Box>
                        
                        <Box sx={{borderTop: 1 , borderBottom: 1 , py: 4, borderColor : 'lightGray'}}>
                            <Typography variant="body2">{clothes.content}</Typography>
                        </Box>
                        <Box sx={{display:'flex' , flexDirection:'column'}}>
                            <Typography variant="body2" sx={{my:2}}>원산지 {clothes.from}</Typography>
                            <Typography variant="body2" sx={{mb:2}}>배송정보 택배 (해외배송)</Typography>
                            <Typography variant="body2">배송비 10000원 (100,000원 이상 무료배송)</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ gridArea: 'imagePart' , border:0, height:"500px"}}><Box component="img" src={clothes.image} width="100%" height="100%"></Box></Box>
                    <Box sx={{ gridArea: 'orderPart', border:0 }}>
                        <form>
                            <Box sx={{display : 'flex' ,justifyContent:'space-between' , alignItems:'center'}}>
                                <Typography variant="body2">수량</Typography>
                                <Box sx={{display : 'flex' , alignItems:'center'}}>
                                    <Button onClick={onClick} id="-" sx={{color:'black' }}><RemoveIcon sx={{fontSize:'15px'}}/></Button>
                                    <Box >{num}</Box>
                                    <Button onClick={onClick} id="+" sx={{color:'black'}}><AddIcon sx={{fontSize:'15px'}}/></Button>
                                </Box>

                                
                            </Box>
                            <Box sx={{display : 'flex' , justifyContent:'space-between' , alignItems:'center'}}>
                                    <Typography variant="body2">배송지 입력</Typography>
                                    <Box sx={{display:'flex' , alignItems:'center'}}>
                                        <StyledTextField sx={{width : '120px' , mr:2}}></StyledTextField>
                                        <Button sx={{backgroundColor:'lightGray', opacity:'0.8' , color:'black'}}>우편번호 검색</Button>
                                    </Box>
                            </Box>

                            <Box sx={{display:'flex' , justifyContent:'right'}}> 
                                <StyledTextField sx={{float:'right'}}/> 
                            </Box>
                            <Box sx={{display:"flex" , alignItems:'center' , justifyContent:'space-between' }}>
                                <Typography variant="body2">상세주소</Typography>
                                <StyledTextField/>
                            </Box>
                            <Box sx={{display:"flex" , alignItems:'center' , justifyContent:'space-between' }}>
                                <Typography variant="body2">연락처</Typography>
                                <Box>
                                <StyledTextField sx={{width:'60px' , mr:1}}/>
                                <StyledTextField sx={{width:'80px', mr:1}}/>
                                <StyledTextField sx={{width:'80px'}}/>
                                </Box>
                            </Box>

                            <Box sx={{borderTop:1 , borderColor:'lightgray' , mt:5}}>
                                <Box sx={{display : 'flex' ,my: 2 , justifyContent:'space-between' }}>
                                    <Typography variant="body2">총 상품금액</Typography>
                                    <Typography variant="body2">{totalCost}원</Typography>
                                </Box>
                                <Box sx={{display : 'flex' ,my: 2 , justifyContent:'space-between' }}>
                                    <Typography variant="body2">배송비</Typography>
                                    <Typography variant="body2">10,000원</Typography>
                                    
                                </Box>
                                <Box sx={{display : 'flex' , justifyContent:'space-between' }}>
                                    <Typography variant="body1" sx={{fontWeight:'bold'}}>총 상품금액</Typography>
                                    <Typography variant="body1" sx={{fontWeight: 'bold'}}>{totalCost + shippingFee}원</Typography>
                                </Box>
                                
                            </Box>
                        </form>
                    </Box>
            </Box>

        </Box>
    );
}

export default Detail;