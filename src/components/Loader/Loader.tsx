import { FC } from "react";
import { Grid } from "@mui/material";
import "./style.css";

const Loader: FC = () => {
  return (
    <Grid
      container
      style={{ width: 400 }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </Grid>
  );
};

export default Loader;
