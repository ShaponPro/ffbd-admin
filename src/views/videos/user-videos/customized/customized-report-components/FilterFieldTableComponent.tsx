import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Grid from "@mui/material/Grid";
import FilterTableComponent from "./FilterTableComponent";
import FieldTableComponent from "./FieldTableComponent";

const dataGrid = css`
  margin: 0px !important;
  padding: 0px !important;
  margin-top: 25px !important;
  width: 100% !important;
`;

const filterGrid = css`
  margin: 0px !important;
  padding: 0px !important;
  // width: 136px !important;
  margin-right: 10px !important;
  @media (min-width: 1200px) {
    flex-basis: 0 !important;
  }
  margin-bottom: 28px !important;
`;

const fieldGrid = css`
  margin: 0px !important;
  padding: 0px !important;
  // width: 1329px !important;
`;

const FilterFieldTableComponent = () => {
  return (
    <>
      <Grid container item lg={12} css={dataGrid}>
        <Grid container item lg={2} md={12} sm={12} xs={12} css={filterGrid}>
          <FilterTableComponent></FilterTableComponent>
        </Grid>
        <Grid item lg={10} md={14} sm={12} xs={12} css={fieldGrid}>
          <FieldTableComponent></FieldTableComponent>
        </Grid>
      </Grid>
    </>
  );
};

export default FilterFieldTableComponent;
