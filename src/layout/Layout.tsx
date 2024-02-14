import { FC } from "react";
import NavBar from "../components/NavBar";
import AppRouter from "../components/AppRouter";
import App from "../App";

const Layout: FC = () => {
  return (
    <>
      <NavBar />
      <AppRouter />
      <App />
    </>
  );
};

export default Layout;
