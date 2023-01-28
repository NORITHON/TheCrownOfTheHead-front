import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useRef, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { designer } from './Login.js';
import {createSample} from "../apis/apis";
import styled from "@emotion/styled";

const StyledButton = styled(Button)({
    marginTop:"10px" ,
    borderRadius:0,
    color:'white', 
    width:'100px' ,
    marginBottom: "30px",
    height:"30px",
    backgroundColor:'#9D1CE5',
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
            borderColor : '#9D1CE5'
          },
          '&.Mui-focused fieldset': {
            borderColor:  '#9D1CE5',
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
            borderColor : '#9D1CE5'
          },
          '&.Mui-focused fieldset': {
            borderColor: '#9D1CE5',
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

const onSubmit = async (e) => {
    const data ={
        title : title,
        imageUrl : leftImage,
        //imageUrl : "img/"+ e.target.files[0].name,
        content : content,
        designerId : designer.id
    }

    await createSample(data);

    setTitle("");
    setContent("");

}


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

    return(
        <Box>
            <Box sx={{display:'flex' , alignItems:'center', mt:10 , width:'70%', marginX:'auto' , borderBottom:1.5, borderColor:'black', pb:1  , mb:13}}>
                <Typography sx={{ fontFamily:'Lovera' , fontSize:'40px'}}>Upload Your work</Typography>
                
            </Box>
            <Box sx={{width:'70%' , marginX:'auto', display:'flex'}}>

                    <Box component="img" src={leftImage} sx={{width:'500px' , height:'400px' , border:2 , borderColor:'lightgray', backgroundColor:'lightgray' }}>
                        
                    </Box>
                    <Box sx={{display: 'flex', width:"300px" , flexDirection:'column' , justifyContent:'center' , alignItems:'center'}}>
                        <Paper elevation={3} sx={{width:'55px' , height:'55px' , borderRadius:'50%'}}><FileUploadIcon onClick={onUploadImageButtonClick} sx={{ border:0,borderRadius:"50%", p:2}} /></Paper>
                        <Typography sx={{mt:2}}>이미지 업로드</Typography>
                    </Box>
                    <Box>
                    <input style={{display:'none'}} type="file" accept="image/*" ref={inputRef} onChange={onUploadImage} />
                    
                    {/* <Button label="이미지 업로드" onClick={onUploadImageButtonClick} /> */}
                    </Box>


                    <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'start' , width:'50%' , border:0 , justifyContent:'space-between'}}>
                        <Typography variant="h6" >TITLE</Typography>
                        <StyledTextField1 id="title" value={title} onChange={onChange} sx={{width:'100%'}}/>
                        <Typography variant="h6" sx={{my:1 }}>DESCRIPTION</Typography>
                        <StyledTextField2 id="content" value={content} onChange={onChange} sx={{width:'100%'}} multiline rows={10}/>
                    </Box> 


            </Box>
            <Box sx={{width:'70%' , marginX:'auto' , display:'flex' , justifyContent:'right'}}>
                <StyledButton onClick={onSubmit}> UPLOAD </StyledButton>
            </Box>
        </Box>
    );
}

export default DesignerUpload;