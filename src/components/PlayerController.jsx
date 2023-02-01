import React from "react";
import { Stack, IconButton, Typography, Slider } from "@mui/material";
import { SkipPrevious, SkipNext, PlayArrow } from "@mui/icons-material";

const PlayerController = ({ player, is_paused, duration, progress }) => {
  return (
    <Stack
      spacing={2}
      sx={{ width: "100%" }}
      justifyContent="center"
      alignItems="center">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}>
        <IconButton
          onClick={() => {
            player.previousTrack();
          }}>
          <SkipPrevious
            size="small"
            sx={{ width: 28, height: 28, color: "text.primary" }}
          />
        </IconButton>
        <IconButton
          onClick={() => {
            player.togglePlay();
          }}>
          <PlayArrow
            size="small"
            sx={{ width: 38, height: 38, color: "text.primary" }}
          />
        </IconButton>
        <IconButton
          onClick={() => {
            player.nextTrack();
          }}>
          <SkipNext
            size="small"
            sx={{ width: 28, height: 28, color: "text.primary" }}
          />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ width: "75%" }}>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: 12 }}>
          1:23
        </Typography>
        <Slider size="medium" />
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: 12 }}>
          3:23
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PlayerController;
