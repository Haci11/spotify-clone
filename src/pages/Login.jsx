import React from "react";
import { Box, Button } from "@mui/material";
import { accessUrl } from "../config";
const Login = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        bgcolor: "background.paper",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Button href={accessUrl} size="large" variant="contained">
        Login to Spotify
      </Button>
    </Box>
  );
};

export default Login;
