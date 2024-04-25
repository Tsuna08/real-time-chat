import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";

import Loader from "../components/Loader/Loader";
import { Context } from "../main";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      {user
        ? privateRoutes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))
        : publicRoutes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
    </Routes>
  );
};

export default AppRouter;
