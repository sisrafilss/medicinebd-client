import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Details from "./Details";
import SideImage from "./SideImage";

const NewsLetterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background: rgb(254, 193, 130);
  background: linear-gradient(
    50deg,
    rgba(254, 193, 130, 1) 20%,
    rgba(254, 160, 142, 1) 100%
  );
`;

const NewsletterStyled = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  position: relative;
  background-color: rgba(255, 255, 255, 0.2);
`;

const Newsletter = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <NewsLetterContainer>
          <NewsletterStyled>
            <Details />
            <SideImage />
          </NewsletterStyled>
        </NewsLetterContainer>
      </Container>
    </Box>
  );
};

export default Newsletter;
