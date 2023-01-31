import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import SongTable from "../components/SongTable";
const Playlist = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", flex: 1, overflowY: "auto" }}>
      <Box
        p={{ xs: 3, md: 4 }}
        sx={{
          width: "100%",
          display: "flex",
          background: "linear-gradient(#121212, #Ff45)",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 3,
          boxSizing: "border-box",
        }}>
        <Avatar
          variant="square"
          src="https://upload.wikimedia.org/wikipedia/en/b/b9/Myworld2.jpg"
          sx={{
            boxShadow: 15,
            width: { sx: "100%", md: 235 },
            height: { sx: "100%", md: 235 },
          }}
        />
        <Box>
          <Typography
            sx={{ fontSize: 18, fontWeight: "bold", color: "text.primary" }}>
            Playlist
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 42, md: 72 },
              fontWeight: "bold",
              color: "text.primary",
            }}>
            My World 2.0
          </Typography>
        </Box>
      </Box>
      <SongTable />
    </Box>
  );
};

export default Playlist;
