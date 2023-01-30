import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useRef, useState } from "react";
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

const TitleTextField = styled(TextField)({
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
    width:'100%'

})


const DescriptionTextField = styled(TextField)({
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
    width:'100%'

})

const TitleBox = styled(Box)({
    display:'flex' , 
    alignItems:'center', 
    width:'70%', 
    margin:'50px auto' , 
    borderBottom:"1.5px solid", 
    borderColor:'black', 
    paddingBottom:"7px",
})

const TitleText = styled(Typography)({
    fontFamily:'Lovera !important', 
    fontSize:'40px'
})

const UploadContainer = styled(Box)({
    width:'70%',
    margin:'0 auto',
    display:'flex'
})

const UploadImagePreview = styled(Box)({
    minWidth:'400px' ,
    height:'400px' ,
    border:"1px solid" ,
    borderColor:'lightgray',
    backgroundColor:'lightgray'
})

const UploadButtonContainer = styled(Box)({
    display: 'flex',
    minWidth:"200px" ,
    flexDirection:'column' ,
    justifyContent:'center' ,
    alignItems:'center'
})

const UploadButton = styled(Paper)({
    width:'55px' , 
    height:'55px' , 
    borderRadius:'50%'
})

const InputContainer = styled(Box)({
    display:'flex' ,
    flexDirection:'column' ,
    alignItems:'start' ,
    width:'100%' ,
    justifyContent:'space-between'
})

const SubmitButtonContainer = styled(Box)({
    width:'70%' , 
    margin:'0 auto' , 
    display:'flex' , 
    justifyContent:'right'
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
        <>
            <TitleBox>
                <TitleText>Upload Your work</TitleText>   
            </TitleBox>
            
            <UploadContainer>
                    <UploadImagePreview sx={{  display:{ md:'flex', sm : 'none' ,xs: 'none'  }}} component="img" src={leftImage} ></UploadImagePreview>
                    <UploadButtonContainer sx={{  display:{ md:'flex', sm : 'none',xs: 'none'  }}}>
                        <UploadButton elevation={3} >
                            <FileUploadIcon onClick={onUploadImageButtonClick} sx={{ border:0,borderRadius:"50%", p:2}} />
                        </UploadButton>
                        <Typography sx={{mt:2}}>이미지 업로드</Typography>
                    </UploadButtonContainer>
                    
                    <Box>
                        <input style={{display:'none'}} type="file" accept="image/*" ref={inputRef} onChange={onUploadImage} />
                    </Box>

                    <InputContainer>
                        <Typography variant="h6" >TITLE</Typography>
                        <TitleTextField id="title" value={title} onChange={onChange} />
                        <Typography variant="h6" sx={{my:1}}>DESCRIPTION</Typography>
                        <DescriptionTextField id="content" value={content} onChange={onChange} multiline rows={10}/>
                    </InputContainer>
            </UploadContainer>

            <SubmitButtonContainer>
                <StyledButton onClick={onSubmit}> UPLOAD </StyledButton>
            </SubmitButtonContainer>
        </>
    );
}

export default DesignerUpload;