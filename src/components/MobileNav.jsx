import React from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, List } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const MobileNav = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: { xs: "block", md: "none" } }} showLabels>
      <BottomNavigation sx={{ bgcolor: "background.paper" }}>
        <BottomNavigationAction
          label="Home"
          icon={<Home />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          label="Ditt biblotek"
          icon={<List />}
          onClick={() => navigate("/library")}
        />
      </BottomNavigation>
    </Box>
  );
};

export default MobileNav;
