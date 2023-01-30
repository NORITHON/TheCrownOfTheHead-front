import { Box, Button, styled, Typography } from '@mui/material';
import "../fonts/fonts.css";
const StyledFooterTypo = styled(Typography)({
  color: 'text.primary',
  fontFamily: 'BarlowCondensed-Medium',
  display: 'flex', 
  justifyContent: 'center', 
});

const StyledButton = styled(Button)({
    color: 'gray',
    fontFamily:'BarlowCondensed-Medium'
})

const FooterBox = styled(Box)({
    padding: "5px 15px",
    margin: "0 15px",
    marginTop: "50px",
    color: 'gray',
    borderTop: "2px solid gray",
    borderColor: 'gray',
})

function Footer() {
  return (
    <>
      <FooterBox>
        <StyledFooterTypo variant="body2" sx={{float: { xs: 'center', md: 'left' }}} >
          <StyledButton>© 2023 Noriton team 9-The Crown Of The Head </StyledButton>
        </StyledFooterTypo>


          <StyledFooterTypo variant="body2" sx={{ float: { xs: 'left', md: 'right' } }}>
            <StyledButton>Terms of service terms of use</StyledButton>
          </StyledFooterTypo>

          <StyledFooterTypo
            variant="body2"
            sx={{ float: { xs: 'right', md: 'right' }, mr: { xs: 0, md: 10 } }}
          >
            <StyledButton>privacy policy</StyledButton>
          </StyledFooterTypo>
      </FooterBox>
    </>
  );
}

export default Footer;