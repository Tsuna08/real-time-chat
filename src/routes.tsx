import { ROUTES } from "./utils/routes";
import { Login } from "./pages/Login";
import { Chat } from "./pages/Chat";
import { App } from "./pages/App/App";

export const publicRoutes = [
  {
    path: ROUTES.login,
    element: <Login />,
  },
  {
    path: "*",
    element: <Login />,
  },
];

export const privateRoutes = [
  {
    path: ROUTES.main,
    element: <App />,
  },
  {
    path: ROUTES.chat,
    element: <Chat />,
  },
];
