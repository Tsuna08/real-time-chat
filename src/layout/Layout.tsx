import { Container, Grid } from "@mui/material";
import { FC } from "react";

import AppRouter from "../components/AppRouter";
import Header from "../components/Header";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Grid
          container
          style={{ height: window.innerHeight - 50 }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <AppRouter />
        </Grid>
      </Container>
    </>
  );
};

export default Layout;
