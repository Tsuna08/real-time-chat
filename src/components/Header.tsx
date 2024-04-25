import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import { FC, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Context } from "../main";

const Header: FC = () => {
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid container justifyContent={"flex-end"}>
          {!loading && (
            <Button
              onClick={user ? handleLogout : undefined}
              variant="contained"
              aria-label={user ? "Log out" : "Log in"}
            >
              {user ? "Log out" : "Log in"}
            </Button>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
