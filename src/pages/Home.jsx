import React from "react";
import { Box, Button } from "@mui/material";
const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 5,
      }}>
      <Button size="large" variant="contained">
        Hej spotify
      </Button>
    </Box>
  );
};

export default Home;
