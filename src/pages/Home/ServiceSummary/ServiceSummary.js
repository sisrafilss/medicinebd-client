import React from "react";
import Box from "@mui/material/Box";
import { CardMedia, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PreccriptionImg from "../../../assets/services-image/order_medicine.png";
import CallOrderImg from "../../../assets/services-image/call_to_order.png";
import HealthcareProductsImg from "../../../assets/services-image/healthcare_products.png";

const ServiceSummary = () => {
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
                  width: "70%",
                  height: "100%",
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
                  width: "70%",
                  height: "100%",
                  margin: "0 auto",
                  marginTop: "10px",
                  padding: "2px",
                }}
                image={CallOrderImg}
                alt="green iguana"
              />
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Call to Order
                  </span>
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
                  width: "70%",
                  height: "100%",
                  margin: "0 auto",
                  marginTop: "10px",
                  padding: "2px",
                }}
                image={HealthcareProductsImg}
                alt="green iguana"
              />
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    HealthCare Products
                  </span>
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
