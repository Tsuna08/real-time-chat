import { FC, useContext } from "react";
import { AppBar, Button, Toolbar, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { ROUTES } from "../utils/routes";
import { Context } from "../main";

const Header: FC = () => {
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid container justifyContent={"flex-end"}>
          {!loading &&
            (user ? (
              <Button onClick={() => auth.signOut()} variant="contained">
                Log out
              </Button>
            ) : (
              <Link to={ROUTES.login}>
                <Button variant="contained">Log in</Button>
              </Link>
            ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
