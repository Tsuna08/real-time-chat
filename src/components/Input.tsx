import { Icon, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { ChangeEvent, FC, KeyboardEvent } from "react";

import { SendIcon } from "../assets/send";

interface InputAndButtonProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClick: () => void;
}

export const Input: FC<InputAndButtonProps> = ({
  value,
  onChange,
  onKeyDown,
  onClick,
}) => {
  return (
    <OutlinedInput
      fullWidth
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      endAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="send button" onClick={onClick}>
            <Icon>
              <SendIcon />
            </Icon>
          </IconButton>
        </InputAdornment>
      }
      inputProps={{ "aria-label": "weight" }}
    />
  );
};
