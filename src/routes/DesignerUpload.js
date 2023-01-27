import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useRef, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from "styled-components";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { designer } from './Login.js';
import {createSample} from "../apis/apis";


const StyledButton = styled(Button)({
    color:'white', 
    width:'100px' ,
    backgroundColor:"gray" ,
    marginBottom: "30px",
    height:"30px",
    borderRadius:0,
    
    '&:hover': {
        backgroundColor:"gray" ,
    },
});

const StyledTextField1 = styled(TextField)({
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


const StyledTextField2 = styled(TextField)({
    ' .MuiOutlinedInput-root': {
        '& fieldset': {
            margin:'auto 0',
            borderColor: 'lightGray',
            height: '265px',
          },
          '&:hover fieldset': {
          },
          '&.Mui-focused fieldset': {
            borderColor: 'gray',
          },
    },

})


function DesignerUpload(){

    const [title , setTitle] = useState("");
    const [content, setContent] = useState("");

    const onChange = (e) => {
        if(e.target.id==="title"){
            setTitle(e.target.value);
        }else if(e.target.id ==="content"){
            setContent(e.target.value);
        }
    }

    const onSubmit = async () => {
        const data ={
            title : title,
            imageUrl : "img/sample1.png",
            content : content,
            designerId : designer.id
        }

        createSample(data);

        setTitle("");
        setContent("");

    }



// 수정

const [leftImage, setLeftImage] = useState("");

const inputRef = useRef(null);
    
    const onUploadImage = useCallback((e) => {
      if (!e.target.files) {
        return;
      }
      setLeftImage( "img/"+e.target.files[0].name);
    }, []);

    
    const onUploadImageButtonClick = useCallback(() => {
      if (!inputRef.current) {
        return;
      }
      inputRef.current.click();
    }, []);



///////////////////////////////////////

    return(
        <Box>
            <Box sx={{display:'flex' , alignItems:'center', justifyContent:'center' , mt:10 , width:'70%', marginX:'auto' , borderBottom:3 , borderColor:'lightgray' , pb:2 , mb:13}}>
                <Typography sx={{ color: 'gray'}}>상품 카테고리 선택</Typography>
                <ArrowForwardIosIcon fontSize="small" sx={{mx:4 , color:'gray'}}/>
                <Typography>상품 디자인 업로드</Typography>
            </Box>
            <Box sx={{width:'70%' , marginX:'auto' , display:'flex'}}>

                    <Box component="img" src={leftImage} sx={{width:'500px' , height:'400px' , border:2 , borderColor:'lightgray'}}>
                        
                    </Box>
                        <FileUploadIcon onClick={onUploadImageButtonClick} sx={{mx:3 , marginY:'auto' , border:1,borderRadius:"50%",color:"#9D1CE5" , p:2}} />
                    <Box>
                    <input style={{display:'none'}} type="file" accept="image/*" ref={inputRef} onChange={onUploadImage} />
                    {/* <Button label="이미지 업로드" onClick={onUploadImageButtonClick} /> */}
                    </Box>


                    <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'start' , width:'50%' , border:0 , justifyContent:'end'}}>
                        <Typography variant="body1" sx={{fontWeight:'bold'}}>디자인 이름</Typography>
                        <StyledTextField1 id="title" value={title} onChange={onChange} sx={{width:'100%'}}/>
                        <Typography variant="body1" sx={{my:1 , fontWeight:'bold'}}>상품 설명</Typography>
                        <StyledTextField2 id="content" value={content} onChange={onChange} sx={{width:'100%'}} multiline rows={10}/>
                    </Box> 


            </Box>
            <Box sx={{width:'70%' , marginX:'auto' , display:'flex' , justifyContent:'right'}}>
                <StyledButton sx={{mt:2 ,color:'inherit', backgroundColor:'inherit'}}> 상품 올리기 </StyledButton>
            </Box>
        </Box>
    );
}

export default DesignerUpload;