import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button, Grid } from "@mui/material";
import { ROUTES } from "../utils/routes";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const user = false;
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid container justifyContent={"flex-end"}>
          {user ? (
            <Button variant="contained">Log out</Button>
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
