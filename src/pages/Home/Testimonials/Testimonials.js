import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import Review from "./Review";

const Testimonials = () => {
  const [allReviews, setAllReviews] = useState([]);

  //Get All Reviews
  useEffect(() => {
    fetch("./userReviews.json")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  });

  var settings = {
    dots: false,
    infinite: true,
    accessibility: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ flexGrow: 1, background: "#F6F6F6", pb: 8 }}>
      <Container>
        <Typography
          sx={{
            fontWeight: 900,
            pt: 8,
            color: "#1F1632",
            textAlign: "center",
          }}
          variant="h6"
          component="div"
        >
          Testimonials
        </Typography>
        <Grid>
          <Slider {...settings}>
            {allReviews.map((review) => (
              <Review key={review.id} review={review}></Review>
            ))}
          </Slider>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
