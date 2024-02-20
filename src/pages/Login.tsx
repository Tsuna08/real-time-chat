import { Grid, Box, Button } from "@mui/material";
import { FC } from "react";

export const Login: FC = () => {
  return (
    <Grid
      container
      style={{ width: 400, background: "lightgreen" }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box p={5}>
        <Button variant="outlined">Log in with Google</Button>
      </Box>
    </Grid>
  );
};
