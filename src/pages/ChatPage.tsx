import { FC, useState, KeyboardEvent } from "react";
import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  serverTimestamp,
  collection,
  addDoc,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { Grid } from "@mui/material";
import { Context } from "../main";
import { Chat } from "../components/Chat/Chat";
import { InputAndButton } from "../components/InputAndButton";

export const ChatPage: FC = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");

  const messagesColection = collection(firestore, "messages");
  const messagesQuery = query(messagesColection, orderBy("createdAt"));
  const [data] = useCollectionData(messagesQuery);

  const messages = data?.map((message) => {
    if (message.createdAt && typeof message.createdAt !== "string") {
      message.createdAt = (message.createdAt as Timestamp)
        .toDate()
        .toLocaleString("en-GB");
    }
    return message;
  });

  const onKeyDown = (
    e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.code === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = async () => {
    if (value) {
      await addDoc(messagesColection, {
        displayName: user?.displayName,
        uid: user?.uid,
        photoURL: user?.photoURL,
        text: value,
        createdAt: serverTimestamp(),
      });
      setValue("");
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
      <InputAndButton
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => onKeyDown(e)}
        onClick={sendMessage}
      />
    </Grid>
  );
};
