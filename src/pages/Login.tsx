import { Grid, Box, Button } from "@mui/material";
import { FC, useContext } from "react";
import { Context } from "../main";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const Login: FC = () => {
  const { auth, provider } = useContext(Context);

  const login = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  return (
    <Grid
      container
      style={{ width: 400 }}
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
