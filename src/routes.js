import { CHAT, LOGIN } from "./utils/constants";
import Login from "./components/Login";
import Chat from "./components/Chat";

export const publicRoutes = [
  {
    path: LOGIN,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: CHAT,
    Component: Chat,
  },
];
