import { Paper } from "@mui/material";
import { DocumentData } from "firebase/firestore";
import { FC } from "react";

import { Message } from "../Message/Message";
import classes from "./Chat.module.scss";

interface ChatProps {
  messages?: DocumentData[];
  userId?: string;
}

export const Chat: FC<ChatProps> = ({ messages, userId }) => {
  return (
    <Paper elevation={3} className={classes.pepper}>
      {messages?.map((message, index) => (
        <Message key={index} message={message} userId={userId} />
      ))}
    </Paper>
  );
};
