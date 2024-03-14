import { ROUTES } from "./utils/routes";
import { Login } from "./pages/Login";
import { ChatPage } from "./pages/ChatPage";

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
    element: <ChatPage />,
  },
  {
    path: "*",
    element: <ChatPage />,
  },
];
