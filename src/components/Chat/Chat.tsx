import { FC } from "react";
import { Paper } from "@mui/material";
import { DocumentData } from "firebase/firestore";
import { Message } from "../Message/Message";
import "./style.css";

interface ChatProps {
  messages?: DocumentData[];
  userId?: string;
}

export const Chat: FC<ChatProps> = ({ messages, userId }) => {
  return (
    <Paper elevation={3} className="pepper">
      {messages?.map((message, index) => (
        <Message key={index} message={message} userId={userId} />
      ))}
    </Paper>
  );
};
