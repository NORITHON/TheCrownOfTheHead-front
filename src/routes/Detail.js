import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";


function Detail(){

    const location = useLocation();

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
                    <Box sx={{ gridArea: 'orderPart', border:1 }}> Order</Box>
            </Box>

        </Box>
    );
}

export default Detail;