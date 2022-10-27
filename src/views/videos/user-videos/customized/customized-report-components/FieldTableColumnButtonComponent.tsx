import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Grid } from "@mui/material";

//prop types
type buttonProps = {
  label: string;
};

const fieldButton = css`
  width: 136px;
  margin: 0px !important;
  padding: 0px !important;
  padding-left: 10px !important;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  padding-right: 10px !important;
  color: #161f29 !important;
  margin-bottom: 2px !important;
  font-family: "Open Sans", sans-serif !important;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize !important;
  border-radius: 0px !important;
  justify-content: flex-start;
  white-space: nowrap;
`;

const buttonGrid = css`
  width: 100%;
  padding: 0px !important;
  margin: 0px !important;
  &:nth-of-type(odd) {
    background: rgba(22, 31, 41, 0.03) !important;
  }
  &:nth-of-type(even) {
    background: rgba(22, 31, 41, 0.07) !important;
  }
`;

const FieldTableColumnButtonComponent = (props: buttonProps) => {
  return (
    <>
      <Grid css={buttonGrid}>
        <Button variant='text' css={fieldButton} disabled>
          {props.label}
        </Button>
      </Grid>
    </>
  );
};

export default FieldTableColumnButtonComponent;
