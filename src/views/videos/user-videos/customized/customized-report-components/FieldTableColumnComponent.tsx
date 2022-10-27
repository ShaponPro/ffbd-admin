import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Grid } from "@mui/material";
import FieldTableColumnButtonComponent from "./FieldTableColumnButtonComponent";

//prop types
type props = {
  label: string;
  childData: Array<{ id: number; label: string }>;
};

const fieldButton = css`
  width: 136px;
  margin: 0px !important;
  padding: 0px !important;
  padding: 10px !important;
  color: #161f29 !important;
  background: rgba(22, 31, 41, 0.07);
  margin-bottom: 2px !important;
  font-family: "Open Sans", sans-serif !important;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize !important;
  border-radius: 0px !important;
  justify-content: flex-start;
`;

const buttonGrid = css`
  padding: 0px !important;
  margin: 0px !important;
  width: 100%;
`;

const nestedHeaderButton = css`
  ${fieldButton};
  justify-content: center !important;
`;

const nestedColumns = css`
  margin-right: 2px !important;
  margin-bottom: 10px !important;
`;

const nestedColumnsBody = css`
  padding: 0px !important;
  margin: 0px !important;
`;

const FieldTableColumnComponent = (props: props) => {
  return (
    <>
      <Grid css={nestedColumns}>
        <Grid css={buttonGrid}>
          <Button variant='text' css={nestedHeaderButton} disabled>
            {props.label}
          </Button>
        </Grid>

        <Grid css={nestedColumnsBody}>
          {props.childData.map(eachChildData => {
            const label = eachChildData.label;

            return (
              <FieldTableColumnButtonComponent key={eachChildData.id} label={label}></FieldTableColumnButtonComponent>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default FieldTableColumnComponent;
