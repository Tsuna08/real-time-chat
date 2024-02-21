import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button, Grid } from "@mui/material";
import { ROUTES } from "../utils/routes";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Context } from "../main";
import { useContext } from "react";

const Header: FC = () => {
  const { auth } = useContext(Context);
  const user = useAuthState(auth);

  const signOutButtonPressed = async () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid container justifyContent={"flex-end"}>
          {user ? (
            <Button onClick={signOutButtonPressed} variant="contained">
              Log out
            </Button>
          ) : (
            <Link to={ROUTES.login}>
              <Button variant="contained">Log in</Button>
            </Link>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
