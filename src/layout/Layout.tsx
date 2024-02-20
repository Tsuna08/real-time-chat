import { FC } from "react";
import Header from "../components/Header";
import AppRouter from "../components/AppRouter";
import { Container, Grid } from "@mui/material";

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
