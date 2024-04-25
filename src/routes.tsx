import { ChatPage } from "./pages/ChatPage";
import { Login } from "./pages/Login";
import { routes } from "./utils/routes";

export const publicRoutes = [
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: "*",
    element: <Login />,
  },
];

export const privateRoutes = [
  {
    path: routes.chat,
    element: <ChatPage />,
  },
  {
    path: "*",
    element: <ChatPage />,
  },
];
