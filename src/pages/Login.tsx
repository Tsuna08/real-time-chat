import { Grid, Box, Button } from "@mui/material";
import { FC, useContext } from "react";
import { Context } from "../main";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const Login: FC = () => {
  const { auth, provider } = useContext(Context);

  const login = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("result: ", result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log("user: ", user);
      })
      .catch((error) => {
        console.log("error: ", error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <Grid
      container
      style={{ width: 400, background: "lightgreen" }}
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
