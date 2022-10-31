import { Grid } from "@mui/material";
import React from "react";
import InputComponent from "./downloadCodeCodeListComponents/InputComponent";
import ListComponent from "./downloadCodeCodeListComponents/ListComponentCopy";
const DownloadCodeCodeList = () => {
  return (
    <>
      <Grid container>
        <Grid lg={12}>
          <InputComponent></InputComponent>
        </Grid>
        <Grid lg={12}>
          <ListComponent></ListComponent>
        </Grid>
      </Grid>
    </>
  );
};

export default DownloadCodeCodeList;
