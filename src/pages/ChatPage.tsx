import { Grid } from "@mui/material";
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { FC, KeyboardEvent, useState } from "react";
import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { Chat } from "../components/Chat/Chat";
import { Input } from "../components/Input";
import { Context } from "../main";

export const ChatPage: FC = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState<string>("");

  const messagesCollection = collection(firestore, "messages");
  const messagesQuery = query(messagesCollection, orderBy("createdAt"));
  const [data] = useCollectionData(messagesQuery);

  const messages = data?.map((message) => {
    if (message.createdAt && !(message.createdAt instanceof Date)) {
      message.createdAt = (message.createdAt as Timestamp).toDate();
    }
    return message;
  });

  const onKeyDown = (
    event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.code === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = async () => {
    if (user && value) {
      try {
        await addDoc(messagesCollection, {
          displayName: user.displayName,
          uid: user.uid,
          photoURL: user.photoURL,
          text: value,
          createdAt: serverTimestamp(),
        });
        setValue("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <Grid
      container
      display="flex"
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Chat messages={messages} userId={user?.uid} />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
        onClick={sendMessage}
      />
    </Grid>
  );
};
