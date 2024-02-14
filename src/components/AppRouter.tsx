import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
  const user = false;

  return user ? (
    <Routes>
      {privateRoutes.map(({ path, element }) => (
        <Route path={path} element={element} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
