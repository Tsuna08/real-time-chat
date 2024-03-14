import { FC, ChangeEvent, KeyboardEvent } from "react";
import { OutlinedInput, InputAdornment, IconButton, Icon } from "@mui/material";
import sendIcon from "../assets/send.svg";

interface InputAndButtonProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClick: () => void;
}

export const InputAndButton: FC<InputAndButtonProps> = ({
  value,
  onChange,
  onKeyDown,
  onClick,
}) => {
  return (
    <OutlinedInput
      fullWidth
      value={value}
      onChange={(e) => onChange(e)}
      onKeyDown={(e) => onKeyDown(e)}
      endAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="send button" onClick={onClick}>
            <Icon>
              <img src={sendIcon} alt="Send Icon" />
            </Icon>
          </IconButton>
        </InputAdornment>
      }
      inputProps={{
        "aria-label": "weight",
      }}
    />
  );
};
