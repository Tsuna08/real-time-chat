import "./style.scss";

import { Grid } from "@mui/material";
import { FC } from "react";

const Loader: FC = () => {
  return (
    <Grid
      container
      sx={{ width: 400 }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <div className="lds-ripple" aria-label="loading">
        <div></div>
        <div></div>
      </div>
    </Grid>
  );
};

export default Loader;
