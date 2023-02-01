import React from "react";
import { Grid, Stack, Slider } from "@mui/material";
import { VolumeDown } from "@mui/icons-material";

const PlayerVolume = () => {
  return (
    <Grid
      item
      xs={3}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}>
      <Stack spacing={2} sx={{ width: 150, color: "text.secondary" }}></Stack>
      <VolumeDown />
      <Slider min={0} max={100} step={1} />
    </Grid>
  );
};

export default PlayerVolume;
