import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Grid from "@mui/material/Grid";
import FilterTableComponent from "./FilterTableComponent";
import FieldTableComponent from "./FieldTableComponent";

const filterGrid = css`
  margin: 0px !important;
  padding: 0px !important;
  width: 100% !important;
  margin-right: 10px !important;
  @media (min-width: 1200px) {
    flex-basis: 0 !important;
  }
  margin-bottom: 28px !important;
  margin-top: 30px !important;
  height: max-content;
`;

const fieldGrid = css`
  margin: 0px !important;
  padding: 0px !important;
  margin-top: 30px !important;
`;

const FilterFieldTableComponent = () => {
  return (
    <>
      <Grid container>
        <Grid item xl={2} lg={2} md={12} sm={12} xs={12} css={filterGrid}>
          <FilterTableComponent></FilterTableComponent>
        </Grid>
        <Grid item xl={10} lg={10} md={12} sm={12} xs={12} css={fieldGrid}>
          <FieldTableComponent></FieldTableComponent>
        </Grid>
      </Grid>
    </>
  );
};

export default FilterFieldTableComponent;
