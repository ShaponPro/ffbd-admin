import React, { useState } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";

import SelectFieldComponent from "../inputs/SelectFieldComponent";
import TextFieldComponent from "../inputs/TextFieldComponent";
import MultiSelectFieldComponent from "../inputs/MultiSelectFieldComponent";

type props = {
    title: string;
    userVideosTextState: Array<{ id: number; text: string }>;
};

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

const upLoadPeriodMenuItems = [
    {
        id: 0,
        title: "Today",
    },
    {
        id: 1,
        title: "Last 7 Days",
    },
    {
        id: 2,
        title: "Last 15 Days",
    },
    {
        id: 3,
        title: "Last 30 Days",
    },
    {
        id: 4,
        title: "Last 60 Days",
    },
    {
        id: 5,
        title: "Last 90 Days",
    },
];

const videoLengthMenuItems = [
    {
        id: 0,
        title: "Upto 30s",
    },
    {
        id: 1,
        title: "31s - 60s",
    },
    {
        id: 2,
        title: "61s - 180s",
    },
    {
        id: 3,
        title: "181s - 300s",
    },
    {
        id: 4,
        title: "Above 300s",
    },
];

const engagementMenuItems = [
    {
        id: 0,
        title: "Likes",
    },
    {
        id: 1,
        title: "Comments",
    },
    {
        id: 2,
        title: "Shares",
    },
    {
        id: 3,
        title: "Downloads",
    },
];

const monetizationMenuItems = [
    {
        id: 0,
        title: "Awareness AD",
    },
    {
        id: 1,
        title: "Product Added",
    },
    {
        id: 2,
        title: "Active Awareness",
    },
    {
        id: 3,
        title: "Active Product",
    },
];

const currentStatusMenuItems = [
    {
        id: 0,
        title: "Published",
    },
    {
        id: 1,
        title: "Failed",
    },
    {
        id: 2,
        title: "Uploading",
    },
    {
        id: 3,
        title: "Suspended",
    },
    {
        id: 4,
        title: "Deleted",
    },
];

const rightSellingMenuItems = [
    {
        id: 0,
        title: "Free",
    },
    {
        id: 1,
        title: "Sold",
    },
    {
        id: 2,
        title: "Processing",
    },
    {
        id: 3,
        title: "Claimed",
    },
];

const DynamicFilterComponent = (props: props) => {
    // User ID/Name handler
    const [userIDorName, setUserIDorName] = useState("");
    const onChangeUserIDorNameHandler = (e: any) => {
        setUserIDorName(e.target.value);
    };

    // Country handler
    const [country, setCountry] = useState("");
    const onChangeCountryHandler = (e: any) => {
        setCountry(e.target.value);
    };

    // Upload period handler
    const [selectValue, setSelectValue] = useState("");
    const handleChangeSelect = (event: SelectChangeEvent) => {
        setSelectValue(event.target.value as string);
    };

    // Video length handler
    const [videoLength, setVideoLength] = React.useState<string[]>([]);
    const handleChangeVideoLength = (
        event: SelectChangeEvent<typeof videoLength>
    ) => {
        const {
            target: { value },
        } = event;
        setVideoLength(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };

    // Engagement handler
    const [engagement, setEngagement] = React.useState<string[]>([]);
    const handleChangeEngagement = (
        event: SelectChangeEvent<typeof engagement>
    ) => {
        const {
            target: { value },
        } = event;
        setEngagement(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };

    // Monetization handler
    const [monetization, setMonetization] = React.useState<string[]>([]);
    const handleChangeMonetization = (
        event: SelectChangeEvent<typeof monetization>
    ) => {
        const {
            target: { value },
        } = event;
        setMonetization(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };

    // Video contest handler
    const [videoContest, setVideoContest] = useState("");
    const onChangeVideoContestHandler = (e: any) => {
        setVideoContest(e.target.value);
    };

    // Music Creator handler
    const [musicCreator, setMusicCreator] = useState("");
    const onChangeMusicCreatorHandler = (e: any) => {
        setMusicCreator(e.target.value);
    };

    // Current Status handler
    const [currentStatus, setCurrentStatus] = React.useState<string[]>([]);
    const handleChangeCurrentStatus = (
        event: SelectChangeEvent<typeof monetization>
    ) => {
        const {
            target: { value },
        } = event;
        setCurrentStatus(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };

    // Right Selling handler
    const [rightSelling, setRightSelling] = React.useState<string[]>([]);
    const handleChangeRightSelling = (
        event: SelectChangeEvent<typeof rightSelling>
    ) => {
        const {
            target: { value },
        } = event;
        setRightSelling(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };

    return (
        <>
            <Grid container item lg={12} css={parentGrid} width={"100%"}>
                <Grid
                    item
                    lg={4}
                    display={"flex"}
                    css={textNFieldStyle}
                    width={"100%"}
                    marginBottom={"20px"}
                    paddingRight={"10px"}
                >
                    <Grid item css={textGrid}>
                        User ID/Name
                    </Grid>
                    <TextFieldComponent
                        placeholder="Search and Filter"
                        name="userIDorName"
                        value={userIDorName}
                        onChange={onChangeUserIDorNameHandler}
                    ></TextFieldComponent>
                </Grid>

                <Grid
                    item
                    lg={4}
                    css={textNFieldStyle}
                    width={"100%"}
                    marginBottom={"20px"}
                    paddingRight={"10px"}
                >
                    <Grid css={textGrid}>Uploaded Country</Grid>
                    <TextFieldComponent
                        placeholder="Search and Filter"
                        name="uploadedCountry"
                        value={country}
                        onChange={onChangeCountryHandler}
                    ></TextFieldComponent>
                </Grid>

                <Grid
                    item
                    lg={4}
                    css={textNFieldStyle}
                    width={"100%"}
                    marginBottom={"20px"}
                >
                    <Grid css={textGrid}>Upload Period</Grid>

                    <SelectFieldComponent
                        placeholder="Select Item"
                        label="uploadPeriod"
                        value={selectValue}
                        onChange={handleChangeSelect}
                        menuItems={upLoadPeriodMenuItems}
                    ></SelectFieldComponent>
                </Grid>

                <Grid
                    item
                    lg={4}
                    css={textNFieldStyle}
                    width={"100%"}
                    marginBottom={"20px"}
                    paddingRight={"10px"}
                >
                    <Grid css={textGrid}>Video Length Group</Grid>

                    <MultiSelectFieldComponent
                        placeholder="Select Item"
                        label="videoLength"
                        value={videoLength}
                        onChange={handleChangeVideoLength}
                        menuItems={videoLengthMenuItems}
                    ></MultiSelectFieldComponent>
                </Grid>

                <Grid
                    item
                    lg={4}
                    css={textNFieldStyle}
                    width={"100%"}
                    marginBottom={"20px"}
                    paddingRight={"10px"}
                >
                    <Grid css={textGrid}>Engagement</Grid>
                    <MultiSelectFieldComponent
                        placeholder="Select Item"
                        label="videoLength"
                        value={engagement}
                        onChange={handleChangeEngagement}
                        menuItems={engagementMenuItems}
                    ></MultiSelectFieldComponent>
                </Grid>

                <Grid
                    item
                    lg={4}
                    css={textNFieldStyle}
                    width={"100%"}
                    marginBottom={"20px"}
                >
                    <Grid css={textGrid}>AD & Monetization</Grid>
                    <MultiSelectFieldComponent
                        placeholder="Select Item"
                        label="videoLength"
                        value={monetization}
                        onChange={handleChangeMonetization}
                        menuItems={monetizationMenuItems}
                    ></MultiSelectFieldComponent>
                </Grid>

                <Grid
                    item
                    lg={4}
                    css={textNFieldStyle}
                    width={"100%"}
                    marginBottom={"20px"}
                    paddingRight={"10px"}
                >
                    <Grid css={textGrid}>Video Contest</Grid>
                    <TextFieldComponent
                        placeholder="Search and Filter"
                        name="videoContest"
                        value={videoContest}
                        onChange={onChangeVideoContestHandler}
                    ></TextFieldComponent>
                </Grid>

                <Grid
                    item
                    lg={4}
                    css={textNFieldStyle}
                    width={"100%"}
                    marginBottom={"20px"}
                    paddingRight={"10px"}
                >
                    <Grid css={textGrid}>Music Creator</Grid>
                    <TextFieldComponent
                        placeholder="Search and Filter"
                        name="musicCreator"
                        value={musicCreator}
                        onChange={onChangeMusicCreatorHandler}
                    ></TextFieldComponent>
                </Grid>

                <Grid
                    item
                    lg={4}
                    css={textNFieldStyle}
                    width={"100%"}
                    marginBottom={"20px"}
                >
                    <Grid css={textGrid}>Current Status</Grid>
                    <MultiSelectFieldComponent
                        placeholder="Select Item"
                        label="videoLength"
                        value={currentStatus}
                        onChange={handleChangeCurrentStatus}
                        menuItems={currentStatusMenuItems}
                    ></MultiSelectFieldComponent>
                </Grid>

                <Grid
                    item
                    lg={4}
                    css={textNFieldStyle}
                    width={"100%"}
                    marginBottom={"20px"}
                >
                    <Grid css={textGrid}>Right Selling Status</Grid>
                    <MultiSelectFieldComponent
                        placeholder="Select Item"
                        label="videoLength"
                        value={rightSelling}
                        onChange={handleChangeRightSelling}
                        menuItems={rightSellingMenuItems}
                    ></MultiSelectFieldComponent>
                </Grid>
            </Grid>
        </>
    );
};

export default DynamicFilterComponent;
