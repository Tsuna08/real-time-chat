import { Box, Button, Grid } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { FC, useContext } from "react";

import { Context } from "../main";

export const Login: FC = () => {
  const { auth, provider } = useContext(Context);

  const login = async () => {
    try {
      signInWithPopup(auth, provider);
    } catch (error) {
      console.log("Error during login: ", error);
    }
  };

  return (
    <Grid
      container
      sx={{ width: 400 }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box p={5}>
        <Button onClick={login} variant="outlined">
          Log in with Google
        </Button>
      </Box>
    </Grid>
  );
};
