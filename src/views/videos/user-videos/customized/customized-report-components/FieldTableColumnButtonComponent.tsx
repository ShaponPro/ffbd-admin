import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Grid } from "@mui/material";

//prop types
type buttonProps = {
  label: string;
};

const fieldButton = css`
  margin: 0px !important;
  padding: 0px !important;
  color: #161f29 !important;
  margin-bottom: 2px !important;
  width: 136px;
  height: 36px;
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

const fieldBodyButton = css`
  ${fieldButton};
  padding-left: 5px !important;
`;

const nestedOddEvenStyle = css`
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
      <Grid css={nestedOddEvenStyle}>
        <Button variant="text" css={fieldBodyButton} disabled>
          {props.label}
        </Button>
      </Grid>
    </>
  );
};

export default FieldTableColumnButtonComponent;
