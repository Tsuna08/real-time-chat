import { FC } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
} from "@mui/material";
import { DocumentData } from "firebase/firestore";
import "./style.css";

interface MessageProps {
  message: DocumentData;
  userId?: string;
}

export const Message: FC<MessageProps> = ({ message, userId }) => {
  return (
    <Card
      className="card"
      style={{
        marginLeft: userId === message.uid ? "auto" : "10px",
      }}
    >
      <CardHeader
        className="cardHeader"
        avatar={<Avatar aria-label="recipe" src={message.photoURL} />}
        title={message.displayName}
        subheader={message.createdAt}
      />
      <CardContent className="cardContent">
        <Typography variant="body2" color="text.secondary">
          {message.text}
        </Typography>
      </CardContent>
    </Card>
  );
};
