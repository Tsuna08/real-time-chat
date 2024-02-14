import { ROUTES } from "./utils/routes";
import { Login } from "./pages/Login";
import { Chat } from "./pages/Chat";

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
    path: ROUTES.chat,
    element: <Chat />,
  },
];
