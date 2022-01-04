import React from "react";
import Box from "@mui/material/Box";
import { CardMedia, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PreccriptionImg from "../../../assets/services-image/order_medicine.png";
import CallOrderImg from "../../../assets/services-image/call_to_order.png";
import HealthcareProductsImg from "../../../assets/services-image/healthcare_products.png";
 
const ServiceSummary = () => {
  const useStyle = makeStyles({
    navBtn: {
      color: "#000",
      textDecoration: "none",
    },
    btnColor: {
      background: "#251D58 !important",
      color: "#fff !important",
      textTransform: "none !important",
    },
  }); 

  const { navBtn, btnColor } = useStyle();
  return (
    <Box sx={{ flexGrow: 1, background: "#ebe8e8" }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid sx={{ mt: 4, mb: 6 }} item xs={4} sm={4} md={4}>
            <Card
              sx={{
                minWidth: 275,
                border: 0,
                boxShadow: 2,
                borderRadius: "15px",
              }}
            >
              <CardMedia
                component="img"
                style={{
                  width: "40%",
                  height: "80%",
                  margin: "0 auto",
                  marginTop: "10px",
                  padding: "10px",
                }}
                image={PreccriptionImg}
                alt="green iguana"
              />
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h5"
                  component="div"
                >
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Upload Preccription
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center", mt: 2 }}
                  variant="p"
                  component="div"
                >
                  <span style={{ color: "grey", fontWeight: "500" }}>
                    User can order medicine by uploading their preccription.
                  </span>
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    mb: 1,
                    textAlign: "center",
                  }}
                >
                  <NavLink className={navBtn} to="">
                    <Button className={btnColor}>Upload Preccription</Button>
                  </NavLink>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ mt: 4, mb: 6 }} item xs={4} sm={4} md={4}>
            <Card
              sx={{
                minWidth: 275,
                border: 0,
                boxShadow: 2,
                borderRadius: "15px",
              }}
            >
              <CardMedia
                component="img"
                style={{
                  width: "40%",
                  height: "80%",
                  margin: "0 auto",
                  marginTop: "10px",
                  padding: "10px",
                }}
                image={CallOrderImg}
                alt="green iguana"
              />
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h5"
                  component="div"
                >
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Call to Order
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center", mt: 2 }}
                  variant="p"
                  component="div"
                >
                  <span style={{ color: "grey", fontWeight: "500" }}>
                    User can order medicine by phone call [10 AM - 10 PM].
                  </span>
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    mb: 1,
                    textAlign: "center",
                  }}
                >
                  <NavLink className={navBtn} to="">
                    <Button className={btnColor}>Call to Order</Button>
                  </NavLink>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ mt: 4, mb: 6 }} item xs={4} sm={4} md={4}>
            <Card
              sx={{
                minWidth: 275,
                border: 0,
                boxShadow: 2,
                borderRadius: "15px",
              }}
            >
              <CardMedia
                component="img"
                style={{
                  width: "40%",
                  height: "80%",
                  margin: "0 auto",
                  marginTop: "10px",
                  padding: "10px",
                }}
                image={HealthcareProductsImg}
                alt="green iguana"
              />
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h5"
                  component="div"
                >
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    HealthCare Products
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center", mt: 2 }}
                  variant="p"
                  component="div"
                >
                  <span style={{ color: "grey", fontWeight: "500" }}>
                    User can order medicine by added product inside Add to Cart.
                  </span>
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    mb: 1,
                    textAlign: "center",
                  }}
                >
                  <NavLink className={navBtn} to="">
                    <Button className={btnColor}>View All Products</Button>
                  </NavLink>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceSummary;
