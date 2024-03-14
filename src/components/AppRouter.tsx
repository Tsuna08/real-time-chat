import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { privateRoutes, publicRoutes } from "../routes";
import { Context } from "../main";
import Loader from "../components/Loader/Loader";

const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return user ? (
    <Routes>
      {privateRoutes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
