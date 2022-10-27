import React, { useState } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import SubMenuComponent from "./SubMenuComponent";
import FilterComponent from "./FilterComponent";

const outerBox = css`
  background-color: #ffffff;
  width: 100% !important;
  height: 1008px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 5px 20px rgba(22, 31, 41, 0.1);
  margin: 0;
  @media (max-width: 120px) {
    height: 1141px !important;
  }
`;

const UserVideosCustomizedComponent = () => {
  const [isCustomized, setIsCustomized] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }} css={outerBox}>
        <SubMenuComponent isCustomized={isCustomized} setIsCustomized={setIsCustomized}></SubMenuComponent>

        {isCustomized && <FilterComponent></FilterComponent>}
      </Box>
    </>
  );
};

export default UserVideosCustomizedComponent;
