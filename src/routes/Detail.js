import { Box } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";


function Detail(){

    const location = useLocation();

    const clothes = {
        name : location.state?.name,
        price : location.state?.price,
        image : location.state?.image,
    }


    return(
        <Box>
            <Box sx={{
                display: "grid",
                gap: "1rem",
                width:"85%",
                margin: "auto",
                gridTemplateAreas: `"infoPart imagePart orderPart"`,
                gridTemplateColumns: "300px 1fr 300px"                 
            }}>
                    <Box sx={{ gridArea : 'infoPart' , border:1 }}>infor</Box>
                    <Box sx={{ gridArea: 'imagePart' , border:1, height:"500px"}}><Box component="img" src={clothes.image}></Box></Box>
                    <Box sx={{ gridArea: 'orderPart', border:1 }}> Order</Box>
            </Box>

        </Box>
    );
}

export default Detail;