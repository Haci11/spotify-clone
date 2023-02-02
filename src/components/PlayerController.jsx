import React, { useEffect, useState } from "react";
import { Stack, IconButton, Typography, Slider } from "@mui/material";
import { SkipPrevious, SkipNext, PlayArrow, Pause } from "@mui/icons-material";
import { formatTime } from "../utils/formatTime";
const PlayerController = ({ player, is_paused, duration, progress }) => {
  const [currentProgress, setCurrentProgress] = useState(progress / 1000);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!is_paused && player) {
        setCurrentProgress((c) => c + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [is_paused, player]);

  useEffect(() => {
    setCurrentProgress(progress / 1000);
  }, [progress]);

  return (
    <Stack sx={{ width: "100%" }} justifyContent="center" alignItems="center">
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
          {is_paused ? (
            <PlayArrow
              size="small"
              sx={{ width: 38, height: 38, color: "text.primary" }}
            />
          ) : (
            <Pause sx={{ width: 38, height: 38, color: "text.primary" }} />
          )}
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
          {formatTime(progress)}
        </Typography>
        <Slider
          size="medium"
          min={0}
          value={currentProgress}
          max={duration / 1000}
          onChange={(_, v) => {
            setCurrentProgress(v);
          }}
          onChangeCommitted={(_, v) => {
            player.seek(v * 1000);
          }}
        />
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: 12 }}>
          {formatTime(duration)}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PlayerController;
