import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ServiceSummary = () => {
  return (
    <Box sx={{ flexGrow: 1, background: "#F6F6F6" }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid sx={{ mt: 4, mb: 6 }} item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Total Brands
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "orange", fontWeight: "bold" }}>
                    20+
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ mt: 4, mb: 6 }} item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Total Brands
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "orange", fontWeight: "bold" }}>
                    20+
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ mt: 4, mb: 6 }} item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Total Brands
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "orange", fontWeight: "bold" }}>
                    20+
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
