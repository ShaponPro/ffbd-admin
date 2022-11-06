import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Grid from "@mui/material/Grid";

import SelectFieldComponent from "../inputs/SelectFieldComponent";
import TextFieldComponent from "../inputs/TextFieldComponent";
import MultiSelectFieldComponent from "../inputs/MultiSelectFieldComponent";

const parentGrid = css`
    margin-top: 20px;
`;

const textNFieldStyle = css`
    display: flex;
    align-items: baseline;
`;

const textGrid = css`
    white-space: nowrap;
    color: #000000;
    font-family: "Open Sans", sans-serif !important;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    margin-right: 10px;
`;

type Props = {
    userVideoFilter: Array<{
        id: number;
        title: string;
        type: string;
        menuItems: Array<{ id: number; title: string }>;
    }>;
};

const DynamicFilterComponent = (props: Props) => {
    return (
        <>
            <Grid container item lg={12} css={parentGrid} width={"100%"}>
                {props.userVideoFilter.map((eachItem, itemIndex) => {
                    return (
                        <Grid
                            key={itemIndex}
                            item
                            lg={4}
                            css={textNFieldStyle}
                            width={"100%"}
                            marginBottom={"20px"}
                            paddingRight={"10px"}
                        >
                            <Grid item css={textGrid}>
                                {eachItem.title}
                            </Grid>

                            {eachItem.type == "text" && (
                                <TextFieldComponent
                                    placeholder="Search and Filter"
                                    name={eachItem.title}
                                    menuItems={eachItem.menuItems}
                                ></TextFieldComponent>
                            )}

                            {eachItem.type == "select" && (
                                <SelectFieldComponent
                                    placeholder="Select Item"
                                    label="uploadPeriod"
                                    menuItems={eachItem.menuItems}
                                ></SelectFieldComponent>
                            )}

                            {eachItem.type == "multiselect" && (
                                <MultiSelectFieldComponent
                                    placeholder="Select Item"
                                    label="videoLength"
                                    menuItems={eachItem.menuItems}
                                ></MultiSelectFieldComponent>
                            )}
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};

export default DynamicFilterComponent;
