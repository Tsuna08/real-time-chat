import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { DocumentData } from "firebase/firestore";
import { FC } from "react";

import classes from "./Message.module.scss";

interface MessageProps {
  message: DocumentData;
  userId?: string;
}

export const Message: FC<MessageProps> = ({ message, userId }) => {
  const cardStyle =
    userId === message.uid ? classes.cardCurrentUser : classes.cardOtherUser;

  const createdAt = message?.createdAt?.toLocaleString("en-GB");

  return (
    <Card className={`${classes.card} ${cardStyle}`}>
      <CardHeader
        className={classes.cardHeader}
        avatar={<Avatar aria-label="user-avatar" src={message.photoURL} />}
        title={message.displayName}
        subheader={createdAt}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" color="text.secondary">
          {message.text}
        </Typography>
      </CardContent>
    </Card>
  );
};
