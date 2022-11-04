import React, { useState } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import {
    InputBase,
    Radio,
    InputLabel,
    MenuItem,
    TextField,
    OutlinedInput,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";

import ButtonComponentCopy from "./ButtonComponentCopy";
import TextFieldComponent from "../inputs/TextFieldComponent";

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

const itemStyle = css`
    background: #ffffff;
    padding: 0 !important;
    margin: 0 !important;
    display: flex;
    flex-direction: row;
    box-shadow: inset 1px 1.5px 5px rgba(22, 31, 41, 0.2) !important;
    justify-content: space-between;
`;

const placeHolderStyle = css`
    padding: 0 !important;
    margin: 0 !important;
    color: grey;
    .MuiInputBase-input {
        padding: 0 !important;
        padding-left: 10px !important;
        padding-bottom: 10px !important;
        padding-top: 10px !important;
        font-family: "Open Sans", sans-serif !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 12px !important;
    }
`;

const searchIconStyle = css`
    padding: 0 !important;
    margin: 0 !important;
    margin-top: 6px !important;
    margin-right: 10px !important;
`;

const periodTabHeader = css`
    color: #161f29;
    font-family: "Open Sans", sans-serif !important;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 2px !important;
    padding-left: 10px;
    padding-bottom: 10px;
`;

const menuItemStyle = css`
    height: 36px;
    color: #161f29;
    margin-bottom: 2px !important;
    font-family: "Open Sans", sans-serif !important;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    padding-top: 10px !important;
    padding-left: 10px !important;
    padding-bottom: 10px !important;
    &:hover {
        background-color: #f3f3f4;
    }

    .MuiButtonBase-root .MuiMenuItem-root .Mui-selected {
        flex-direction: column !important;
    }
`;

const dateRangeStyle = css`
    align-items: center;
`;

const buttonGridStyle = css`
    padding-left: 10px;
    margin-bottom: 15px;
    margin-top: 14px;
`;

const buttonGrid = css`
    margin-right: 20px;
`;

const selectStyle = css`
    .MuiOutlinedInput-notchedOutline {
        border: none !important;
    }

    .MuiInputBase-input {
        color: grey;
        font-family: "Open Sans", sans-serif !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 12px !important;
    }

    .MuiPaper-root .MuiMenu-paper .MuiPopover-paper {
        // padding: 0px !important;
    }

    .MuiSelect-select {
        padding: 0 !important;
        padding-left: 10px !important;
    }
`;

const multiSelectStyle = css`
    ${selectStyle};
    #videoLengthSelect,
    #engagementSelect,
    #monetizationSelect,
    #currentStatusSelect,
    #rightSellingSelect {
        display: flex !important;
    }

    .MuiSelect-select {
        // width: 70%;
    }

    .MuiButtonBase-root {
        display: none !important;
    }

    .MuiMenuItem-root {
        // height: 36px;
    }
`;

const dateInputField = css`
    .MuiInputBase-input {
        padding: 0 !important;
    }

    .MuiInputAdornment-root .MuiInputAdornment-positionEnd {
    }
`;

const dateTextField = css`
    .MuiButtonBase-root {
        padding: 0px !important;
        color: #161f29;
        font-size: 12px;
    }

    .MuiInputBase-input {
        padding-left: 8px;
        font-family: "Open Sans", sans-serif !important;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #161f29;
    }
    .MuiInputBase-adornedEnd {
        padding: 0px !important;
        padding-right: 12px !important;
    }

    .MuiSvgIcon-root {
        font-size: 20px !important;
    }
`;

const selectLabelStyle = css`
    position: absolute;
    top: -5px;
    font-family: "Open Sans", sans-serif !important;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgba(22, 31, 41, 0.25);
`;

const lengths = [
    "Upto 30s",
    "31s - 60s",
    "61s - 180s",
    "181s - 300s",
    "Above 300s",
];

const engagements = ["Likes", "Comments", "Shares", "Downloads"];

const monetizations = [
    "Awareness AD",
    "Product Added",
    "Active Awareness",
    "Active Product ",
];

const currentStatuses = [
    "Published",
    "Failed",
    "Uploading",
    "Suspended",
    "Deleted",
];

const rightSellings = ["Free", "Sold", "Processing", "Claimed"];

const dynamicFilterComponent = (props: props) => {
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
    const [uploadPeriod, setUploadPeriod] = useState("");
    const handleChangeUploadPeriod = (event: SelectChangeEvent) => {
        setUploadPeriod(event.target.value as string);
    };

    // Radio toggle for upload period
    const [period, setPeriod] = React.useState(false);
    const handleRadioClickPeriod = () => {
        setPeriod((period) => {
            return !period;
        });
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

    // Radio for video length
    const [videoLengthRadio, setVideoLengthRadio] = React.useState([
        false,
        false,
        false,
        false,
        false,
    ]);
    const handleLengthMenuClick = (lengthIndex: any) => {
        const updatedVideoLengthRadio = videoLengthRadio.map(
            (eachVideoLength, videoLengthIndex) => {
                if (videoLengthIndex == lengthIndex) {
                    return !eachVideoLength;
                } else {
                    return eachVideoLength;
                }
            }
        );

        setVideoLengthRadio(updatedVideoLengthRadio);
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

    // Radio for engagement
    const [engagementRadio, setEngagementRadio] = React.useState([
        false,
        false,
        false,
        false,
        false,
    ]);
    const handleEngagementMenuClick = (engagementIndex: any) => {
        const updatedEngagementRadio = engagementRadio.map(
            (eachEngagement, index) => {
                if (index == engagementIndex) {
                    return !eachEngagement;
                } else {
                    return eachEngagement;
                }
            }
        );

        setEngagementRadio(updatedEngagementRadio);
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

    // Radio for monetization
    const [monetizationRadio, setMonetizationRadio] = React.useState([
        false,
        false,
        false,
        false,
        false,
    ]);
    const handleMonetizationMenuClick = (monetizationIndex: any) => {
        const updatedMonetizationRadio = monetizationRadio.map(
            (eachMonetization, index) => {
                if (index == monetizationIndex) {
                    return !eachMonetization;
                } else {
                    return eachMonetization;
                }
            }
        );

        setMonetizationRadio(updatedMonetizationRadio);
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

    // Radio for current status
    const [currentStatusRadio, setCurrentStatusRadio] = React.useState([
        false,
        false,
        false,
        false,
        false,
    ]);
    const handleCurrentStatusMenuClick = (currentStatusIndex: any) => {
        const updatedCurrentStatusRadio = currentStatusRadio.map(
            (eachCurrentStatus, index) => {
                if (index == currentStatusIndex) {
                    return !eachCurrentStatus;
                } else {
                    return eachCurrentStatus;
                }
            }
        );

        setCurrentStatusRadio(updatedCurrentStatusRadio);
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

    // Radio for Right Selling
    const [rightSellingRadio, setRightSellingRadio] = React.useState([
        false,
        false,
        false,
        false,
        false,
    ]);
    const handleRightSellingMenuClick = (rightSellingIndex: any) => {
        const updatedRightSellingRadio = rightSellingRadio.map(
            (eachRightSelling, index) => {
                if (index == rightSellingIndex) {
                    return !eachRightSelling;
                } else {
                    return eachRightSelling;
                }
            }
        );

        setRightSellingRadio(updatedRightSellingRadio);
    };

    const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-07"));

    // const [textFieldState, setTextFieldState] = useState("");
    // const onChangeTextField = (e: any) => {
    //     console.log(e.target.name, e.target.value);
    //     setTextFieldState(e.target.value);
    // };

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
                    <Grid css={itemStyle} width={"100%"} overflow={"hidden"}>
                        <FormControl fullWidth>
                            <InputLabel
                                id="uploadPeriod"
                                css={selectLabelStyle}
                            >
                                Select Date
                            </InputLabel>
                            <Select
                                labelId="uploadPeriod"
                                id="uploadPeriodSelect"
                                value={uploadPeriod}
                                label="uploadPeriod"
                                onChange={handleChangeUploadPeriod}
                                css={selectStyle}
                                sx={{
                                    height: "36px",
                                }}
                            >
                                <Grid css={periodTabHeader}>Date Range</Grid>

                                <MenuItem value={"today"} css={menuItemStyle}>
                                    Today
                                </MenuItem>

                                <MenuItem
                                    value={"last 7 days"}
                                    css={menuItemStyle}
                                >
                                    Last 7 Days
                                </MenuItem>

                                <MenuItem
                                    value={"last 15 days"}
                                    css={menuItemStyle}
                                >
                                    Last 15 Days
                                </MenuItem>

                                <MenuItem
                                    value={"last 30 days"}
                                    css={menuItemStyle}
                                >
                                    Last 30 Days
                                </MenuItem>

                                <MenuItem
                                    value={"last 60 days"}
                                    css={menuItemStyle}
                                >
                                    Last 60 Days
                                </MenuItem>

                                <MenuItem
                                    value={"last 90 days"}
                                    css={menuItemStyle}
                                >
                                    Last 90 Days
                                </MenuItem>

                                <Grid
                                    container
                                    css={dateRangeStyle}
                                    alignItems={"baseline!important"}
                                >
                                    <Grid css={periodTabHeader}>
                                        Custom Range
                                    </Grid>
                                    <Grid>
                                        <Radio
                                            checked={period}
                                            onClick={() =>
                                                handleRadioClickPeriod()
                                            }
                                            value="a"
                                            name="radio-period"
                                            inputProps={{
                                                "aria-label": "A",
                                            }}
                                            icon={
                                                <CircleOutlinedIcon
                                                    sx={{
                                                        color: "#161F29",
                                                    }}
                                                ></CircleOutlinedIcon>
                                            }
                                            checkedIcon={
                                                <CheckCircleIcon
                                                    sx={{
                                                        color: "#57ce66!important",
                                                    }}
                                                ></CheckCircleIcon>
                                            }
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container width={"233.75px!important"}>
                                    {period == true && (
                                        <>
                                            <Grid container>
                                                <Grid
                                                    width={"50%"}
                                                    paddingLeft={"10px"}
                                                    paddingRight={"5px"}
                                                >
                                                    <LocalizationProvider
                                                        dateAdapter={
                                                            AdapterDayjs
                                                        }
                                                    >
                                                        <DatePicker
                                                            openTo="year"
                                                            views={[
                                                                "year",
                                                                "month",
                                                                "day",
                                                            ]}
                                                            label="From"
                                                            value={value}
                                                            onChange={(
                                                                newValue
                                                            ) => {
                                                                setValue(
                                                                    newValue
                                                                );
                                                            }}
                                                            renderInput={(
                                                                params
                                                            ) => (
                                                                <TextField
                                                                    {...params}
                                                                    helperText={
                                                                        null
                                                                    }
                                                                    css={
                                                                        dateTextField
                                                                    }
                                                                />
                                                            )}
                                                            css={dateInputField}
                                                        />
                                                    </LocalizationProvider>
                                                </Grid>

                                                <Grid
                                                    width={"50%"}
                                                    paddingLeft={"5px"}
                                                    paddingRight={"10px"}
                                                >
                                                    <LocalizationProvider
                                                        dateAdapter={
                                                            AdapterDayjs
                                                        }
                                                    >
                                                        <DatePicker
                                                            openTo="year"
                                                            views={[
                                                                "year",
                                                                "month",
                                                                "day",
                                                            ]}
                                                            label="To"
                                                            value={value}
                                                            onChange={(
                                                                newValue
                                                            ) => {
                                                                setValue(
                                                                    newValue
                                                                );
                                                            }}
                                                            renderInput={(
                                                                params
                                                            ) => (
                                                                <TextField
                                                                    {...params}
                                                                    helperText={
                                                                        null
                                                                    }
                                                                    css={
                                                                        dateTextField
                                                                    }
                                                                />
                                                            )}
                                                            css={dateInputField}
                                                        />
                                                    </LocalizationProvider>
                                                </Grid>
                                            </Grid>

                                            <Grid
                                                container
                                                css={buttonGridStyle}
                                            >
                                                <Grid css={buttonGrid}>
                                                    <ButtonComponentCopy
                                                        type="cancel"
                                                        title="cancel"
                                                    ></ButtonComponentCopy>
                                                </Grid>
                                                <Grid>
                                                    <ButtonComponentCopy
                                                        type="apply"
                                                        title="apply"
                                                    ></ButtonComponentCopy>
                                                </Grid>
                                            </Grid>
                                        </>
                                    )}
                                </Grid>
                            </Select>
                        </FormControl>
                    </Grid>
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
                    <Grid css={itemStyle} width={"100%"} overflow={"hidden"}>
                        <FormControl fullWidth>
                            <InputLabel id="videoLength" css={selectLabelStyle}>
                                Select Item
                            </InputLabel>
                            <Select
                                css={multiSelectStyle}
                                sx={{
                                    height: "36px",
                                }}
                                labelId="videoLength"
                                id="videoLengthSelect"
                                multiple
                                value={videoLength}
                                onChange={handleChangeVideoLength}
                                input={<OutlinedInput label="videoLength" />}
                            >
                                {lengths.map((length, lengthIndex) => (
                                    <MenuItem
                                        key={length}
                                        value={length}
                                        css={menuItemStyle}
                                        onClick={() =>
                                            handleLengthMenuClick(lengthIndex)
                                        }
                                    >
                                        <Grid
                                            container
                                            alignItems={"center"}
                                            justifyContent={"space-between"}
                                        >
                                            <Grid>{length}</Grid>
                                            <Grid>
                                                <Radio
                                                    id={length}
                                                    checked={
                                                        videoLengthRadio[
                                                            lengthIndex
                                                        ]
                                                    }
                                                    name="radio-buttons"
                                                    inputProps={{
                                                        "aria-label": "A",
                                                    }}
                                                    icon={
                                                        <CircleOutlinedIcon
                                                            sx={{
                                                                color: "#161F29",
                                                            }}
                                                        ></CircleOutlinedIcon>
                                                    }
                                                    checkedIcon={
                                                        <CheckCircleIcon
                                                            sx={{
                                                                color: "#57ce66!important",
                                                            }}
                                                        ></CheckCircleIcon>
                                                    }
                                                />
                                            </Grid>
                                        </Grid>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
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
                    <Grid css={itemStyle} width={"100%"} overflow={"hidden"}>
                        <FormControl fullWidth>
                            <InputLabel id="engagement" css={selectLabelStyle}>
                                Select Item
                            </InputLabel>
                            <Select
                                css={multiSelectStyle}
                                sx={{
                                    height: "36px",
                                }}
                                labelId="engagement"
                                id="engagementSelect"
                                multiple
                                value={engagement}
                                onChange={handleChangeEngagement}
                                input={<OutlinedInput label="videoLength" />}
                            >
                                {engagements.map(
                                    (engagement, engagementIndex) => (
                                        <MenuItem
                                            key={engagement}
                                            value={engagement}
                                            css={menuItemStyle}
                                            onClick={() =>
                                                handleEngagementMenuClick(
                                                    engagementIndex
                                                )
                                            }
                                        >
                                            <Grid
                                                container
                                                alignItems={"center"}
                                                justifyContent={"space-between"}
                                            >
                                                <Grid>{engagement}</Grid>
                                                <Grid>
                                                    <Radio
                                                        id={engagement}
                                                        checked={
                                                            engagementRadio[
                                                                engagementIndex
                                                            ]
                                                        }
                                                        value="a"
                                                        name="radio-buttons"
                                                        inputProps={{
                                                            "aria-label": "A",
                                                        }}
                                                        icon={
                                                            <CircleOutlinedIcon
                                                                sx={{
                                                                    color: "#161F29",
                                                                }}
                                                            ></CircleOutlinedIcon>
                                                        }
                                                        checkedIcon={
                                                            <CheckCircleIcon
                                                                sx={{
                                                                    color: "#57ce66!important",
                                                                }}
                                                            ></CheckCircleIcon>
                                                        }
                                                    />
                                                </Grid>
                                            </Grid>
                                        </MenuItem>
                                    )
                                )}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid
                    item
                    lg={4}
                    css={textNFieldStyle}
                    width={"100%"}
                    marginBottom={"20px"}
                >
                    <Grid css={textGrid}>AD & Monetization</Grid>
                    <Grid css={itemStyle} width={"100%"} overflow={"hidden"}>
                        <FormControl fullWidth>
                            <InputLabel
                                id="monetization"
                                css={selectLabelStyle}
                            >
                                Select Item
                            </InputLabel>
                            <Select
                                css={multiSelectStyle}
                                sx={{
                                    height: "36px",
                                }}
                                labelId="monetization"
                                id="monetizationSelect"
                                multiple
                                value={monetization}
                                onChange={handleChangeMonetization}
                                input={<OutlinedInput label="monetization" />}
                            >
                                {monetizations.map(
                                    (monetization, monetizationIndex) => (
                                        <MenuItem
                                            key={monetization}
                                            value={monetization}
                                            css={menuItemStyle}
                                            onClick={() =>
                                                handleMonetizationMenuClick(
                                                    monetizationIndex
                                                )
                                            }
                                        >
                                            <Grid
                                                container
                                                alignItems={"center"}
                                                justifyContent={"space-between"}
                                            >
                                                <Grid>{monetization}</Grid>
                                                <Grid>
                                                    <Radio
                                                        id={monetization}
                                                        checked={
                                                            monetizationRadio[
                                                                monetizationIndex
                                                            ]
                                                        }
                                                        value="a"
                                                        name="radio-buttons"
                                                        inputProps={{
                                                            "aria-label": "A",
                                                        }}
                                                        icon={
                                                            <CircleOutlinedIcon
                                                                sx={{
                                                                    color: "#161F29",
                                                                }}
                                                            ></CircleOutlinedIcon>
                                                        }
                                                        checkedIcon={
                                                            <CheckCircleIcon
                                                                sx={{
                                                                    color: "#57ce66!important",
                                                                }}
                                                            ></CheckCircleIcon>
                                                        }
                                                    />
                                                </Grid>
                                            </Grid>
                                        </MenuItem>
                                    )
                                )}
                            </Select>
                        </FormControl>
                    </Grid>
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
                    <Grid css={itemStyle} width={"100%"} overflow={"hidden"}>
                        <FormControl fullWidth>
                            <InputLabel
                                id="currentStatus"
                                css={selectLabelStyle}
                            >
                                Select Item
                            </InputLabel>
                            <Select
                                css={multiSelectStyle}
                                sx={{
                                    height: "36px",
                                }}
                                labelId="currentStatus"
                                id="currentStatusSelect"
                                multiple
                                value={currentStatus}
                                onChange={handleChangeCurrentStatus}
                                input={<OutlinedInput label="currentStatus" />}
                            >
                                {currentStatuses.map(
                                    (currentStatus, currentStatusIndex) => (
                                        <MenuItem
                                            key={currentStatus}
                                            value={currentStatus}
                                            css={menuItemStyle}
                                            onClick={() =>
                                                handleCurrentStatusMenuClick(
                                                    currentStatusIndex
                                                )
                                            }
                                        >
                                            <Grid
                                                container
                                                alignItems={"center"}
                                                justifyContent={"space-between"}
                                            >
                                                <Grid>{currentStatus}</Grid>
                                                <Grid>
                                                    <Radio
                                                        id={currentStatus}
                                                        checked={
                                                            currentStatusRadio[
                                                                currentStatusIndex
                                                            ]
                                                        }
                                                        value="a"
                                                        name="radio-buttons"
                                                        inputProps={{
                                                            "aria-label": "A",
                                                        }}
                                                        icon={
                                                            <CircleOutlinedIcon
                                                                sx={{
                                                                    color: "#161F29",
                                                                }}
                                                            ></CircleOutlinedIcon>
                                                        }
                                                        checkedIcon={
                                                            <CheckCircleIcon
                                                                sx={{
                                                                    color: "#57ce66!important",
                                                                }}
                                                            ></CheckCircleIcon>
                                                        }
                                                    />
                                                </Grid>
                                            </Grid>
                                        </MenuItem>
                                    )
                                )}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid
                    item
                    lg={4}
                    css={textNFieldStyle}
                    width={"100%"}
                    marginBottom={"20px"}
                >
                    <Grid css={textGrid}>Right Selling Status</Grid>
                    <Grid css={itemStyle} width={"100%"} overflow={"hidden"}>
                        <FormControl fullWidth>
                            <InputLabel
                                id="rightSelling"
                                css={selectLabelStyle}
                            >
                                Select Item
                            </InputLabel>
                            <Select
                                css={multiSelectStyle}
                                sx={{
                                    height: "36px",
                                }}
                                labelId="rightSelling"
                                id="rightSellingSelect"
                                multiple
                                value={rightSelling}
                                onChange={handleChangeRightSelling}
                                input={<OutlinedInput label="rightSelling" />}
                            >
                                {rightSellings.map(
                                    (rightSelling, rightSellingIndex) => (
                                        <MenuItem
                                            key={rightSelling}
                                            value={rightSelling}
                                            css={menuItemStyle}
                                            onClick={() =>
                                                handleRightSellingMenuClick(
                                                    rightSellingIndex
                                                )
                                            }
                                        >
                                            <Grid
                                                container
                                                alignItems={"center"}
                                                justifyContent={"space-between"}
                                            >
                                                <Grid>{rightSelling}</Grid>
                                                <Grid>
                                                    <Radio
                                                        id={rightSelling}
                                                        checked={
                                                            rightSellingRadio[
                                                                rightSellingIndex
                                                            ]
                                                        }
                                                        value="a"
                                                        name="radio-buttons"
                                                        inputProps={{
                                                            "aria-label": "A",
                                                        }}
                                                        icon={
                                                            <CircleOutlinedIcon
                                                                sx={{
                                                                    color: "#161F29",
                                                                }}
                                                            ></CircleOutlinedIcon>
                                                        }
                                                        checkedIcon={
                                                            <CheckCircleIcon
                                                                sx={{
                                                                    color: "#57ce66!important",
                                                                }}
                                                            ></CheckCircleIcon>
                                                        }
                                                    />
                                                </Grid>
                                            </Grid>
                                        </MenuItem>
                                    )
                                )}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default dynamicFilterComponent;
