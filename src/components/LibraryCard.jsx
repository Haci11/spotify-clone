import React from "react";
import { Card, Grid, Avatar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const LibraryCard = (album) => {
  const navigate = useNavigate();
  console.log(album);

  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card
        onClick={() => navigate(`/playlist/${album?.id}`)}
        sx={{
          borderRadius: 2,
          padding: 3,
          boxSizing: "border-box",
          bgcolor: "#222",
        }}>
        <Avatar
          src={album?.images?.[0]?.url}
          variant="square"
          width={60}
          height={60}
        />

        <Typography sx={{ color: "text.primary", fontSize: 18 }}>
          {album.name}
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: 14,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}>
          {album.description}
        </Typography>
      </Card>
    </Grid>
  );
};

export default LibraryCard;
