import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { privateRoutes, publicRoutes } from "../routes";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../main";

const AppRouter = () => {
  const { auth } = useContext(Context);
  const user = useAuthState(auth);

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
