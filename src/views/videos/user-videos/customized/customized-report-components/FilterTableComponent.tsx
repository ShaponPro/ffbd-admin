import React, { useState } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Grid } from "@mui/material";
import FilterTableButtonComponent from "./FilterTableButtonComponent";

const filterButton = css`
  margin: 0px !important;
  padding: 0px !important;
  color: #161f29 !important;
  background: rgba(22, 31, 41, 0.07);
  margin-bottom: 2px !important;
  margin-right: 2px !important;
  width: 136px !important;
  height: 36px;
  font-family: "Open Sans", sans-serif !important;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize !important;
  border-radius: 0px !important;
`;

const filterHeaderButton = css`
  ${filterButton};
  font-weight: 700 !important;
`;

const FilterTableComponent = () => {
  const [selectedFiltersState, setSelectedFiltersState] = useState([
    { id: 0, label: "Upload Period" },
    { id: 1, label: "Uploaded Country" },
    { id: 2, label: "User ID/Name" },
    { id: 3, label: "Video Length Group" },
    { id: 4, label: "Engagement" },
    { id: 5, label: "AD & Monetization" },
  ]);

  return (
    <>
      {/* Selected Filters header Grid */}

      <Grid>
        <Button variant="text" css={filterHeaderButton} disabled>
          Selected Filters
        </Button>

        <Button variant="text" css={filterHeaderButton} disabled>
          -
        </Button>
      </Grid>

      {/* Selected Filters Data Grid */}
      <Grid>
        {selectedFiltersState.map((eachSelectedFiltersState) => {
          return (
            <FilterTableButtonComponent
              key={eachSelectedFiltersState.id}
              label={eachSelectedFiltersState.label}
              selectedFiltersState={selectedFiltersState}
              setSelectedFiltersState={setSelectedFiltersState}
            ></FilterTableButtonComponent>
          );
        })}
      </Grid>
    </>
  );
};

export default FilterTableComponent;
