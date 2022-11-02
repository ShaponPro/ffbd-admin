import React, { useState } from "react";

// ** MUI Imports
import {
    InputBase,
    Box,
    InputAdornment,
    Typography,
    Radio,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    InputLabel,
    MenuItem,
    ToggleButton,
    TextField,
    OutlinedInput,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// ** Icons Imports
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ButtonComponentCopy from "./ButtonComponentCopy";
import select from "src/@core/theme/overrides/select";

const typographyStyle = {
    fontSize: "11px",
    width: "150px",
    color: "black",
};

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
}));

const StyledSelect = styled(Select)({
    borderRadius: "0px",
    background: "white",
    height: "36px",
    boxShadow: "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
    width: "160px",
});

const StyledGrid = styled(Grid)({
    display: "flex",
    alignItems: "center",
    margin: "10px",
});

const radioBtnContainerStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: ".15s ease-in-out",
    margin: "0px 0px 0px 10px",
    fontSize: "12px",
};

const userVideos = {
    userName: "",
    uploadedCountry: "",
    videoContest: "",
    musicCreator: "",
};

type props = {
    title: string;
    userVideosTextState: Array<{ id: number; text: string }>;
};

const parentGrid = css`
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const textNFieldStyle = css`
    display: flex;
    align-items: baseline;
    margin-right: 20px !important;
    margin-bottom: 20px !important;
`;

const textGrid = css`
    color: #000000;
    font-family: "Open Sans", sans-serif !important;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    margin-right: 47px !important;
`;

const itemStyle = css`
    background: #ffffff;
    padding: 0 !important;
    margin: 0 !important;
    display: flex;
    flex-direction: row;
    align-contents: center;
    box-shadow: inset 1px 1.5px 5px rgba(22, 31, 41, 0.2) !important;
    width: 233.75px !important;
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
        width: 185.75px !important;
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
    // background-color: black;
    margin-bottom: 2px !important;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
`;

const menuItemStyle = css`
    color: #161f29;
    padding: 0px !important;
    margin: 0px !important;
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
        padding: 0px !important;
    }

    .MuiInputBase-input {
        color: grey;
        padding: 0 !important;
        font-family: "Open Sans", sans-serif !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 12px !important;
    }
`;

const multiSelectStyle = css`
    ${selectStyle};
    .MuiButtonBase-root{
        display: none !important;
    }
`;

const dateInputField = css`
    .MuiInputBase-input {
        padding: 0 !important;

        font-size: 12px !important;
    }
`;

const dateTextField = css`
    .MuiButtonBase-root {
        padding: 0px !important;
        color: white;
    }

    .MuiInputBase-input {
        font-family: "Open Sans", sans-serif !important;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #161f29;
        width: 62px !important;
    }
    .MuiInputBase-adornedEnd {
        padding: 0px !important;
    }
`;
const selectLabelStyle = css`
    font-family: "Open Sans", sans-serif !important;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgba(22, 31, 41, 0.25);
`;

const lengths = ["Upto 30s", "31s-60s", "61s-180s", "181s-300s", "Above 300s"];

export const FilterComponent = (props: props) => {
    // Period select change
    const [selectPeriod, setSelectPeriod] = React.useState("");
    const handleChangeSelectPeriod = (event: SelectChangeEvent) => {
        setSelectPeriod(event.target.value as string);
    };

    // Period Radio button
    const [period, setPeriod] = React.useState(false);
    const handleRadioClickPeriod = () => {
        setPeriod((period) => {
            return !period;
        });
    };

    const [videoLength, setVideoLength] = React.useState<string[]>([]);
    const [videoLengthRadio, setVideoLengthRadio] = React.useState(false);
    const [videoLengthRadioState, setVideoLengthRadioState] = React.useState([
        {
            id: 0,
            length: "Upto 30s",
            isClicked: false,
        },
        {
            id: 1,
            length: "31s-60s",
            isClicked: false,
        },
        {
            id: 2,
            length: "61s-180s",
            isClicked: false,
        },
        {
            id: 3,
            length: "181s-300s",
            isClicked: false,
        },
        {
            id: 3,
            length: "Above 300s",
            isClicked: false,
        },
    ]);

    const handleRadioClickLength = () => {
        setVideoLengthRadio((videoLengthRadio) => {
            return !videoLengthRadio;
        });
    };

    // Length select change
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

    const [selectedValue, setSelectedValue] = React.useState("a");

    const [selected, setSelected] = React.useState(false);

    const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-07"));

    // const handleChangeRadioLength = (event: SelectChangeEvent) => {
    //     setAge(event.target.value as string);
    //     setAge((age) => {
    //         return !age;
    //     });
    // };

    const [videoState, setVideoState] = useState<object>(userVideos);

    const onChangeHandler = (e: any) => {
        console.log("e", e);
        setVideoState({ ...videoState, [e.target.name]: e.target.value });

        console.log(videoState);
    };

    return (
        <>
            <Grid container css={parentGrid}>
                <Grid css={textNFieldStyle}>
                    <Grid css={textGrid}>User ID/Name</Grid>
                    <Grid css={itemStyle}>
                        <InputBase
                            placeholder="Search and Filter"
                            onChange={onChangeHandler}
                            name="userName"
                            css={placeHolderStyle}
                        ></InputBase>

                        <SearchOutlinedIcon
                            css={searchIconStyle}
                            sx={{ color: "#161F2980" }}
                        ></SearchOutlinedIcon>
                    </Grid>
                </Grid>

                <Grid css={textNFieldStyle}>
                    <Grid css={textGrid}>Uploaded Country</Grid>
                    <Grid css={itemStyle}>
                        <InputBase
                            placeholder="Search and Filter"
                            onChange={onChangeHandler}
                            name="userName"
                            css={placeHolderStyle}
                        ></InputBase>

                        <SearchOutlinedIcon
                            css={searchIconStyle}
                            sx={{ color: "#161F2980" }}
                        ></SearchOutlinedIcon>
                    </Grid>
                </Grid>

                <Grid css={textNFieldStyle}>
                    <Grid css={textGrid}>Upload Period</Grid>
                    <Grid css={itemStyle}>
                        <FormControl fullWidth>
                            <InputLabel
                                id="periodSelectId"
                                css={selectLabelStyle}
                            >
                                Select Date
                            </InputLabel>
                            <Select
                                labelId="periodSelectId"
                                id="periodSelectId"
                                value={selectPeriod}
                                label="period"
                                onChange={handleChangeSelectPeriod}
                                css={selectStyle}
                                sx={{
                                    borderRadius: "0px!important",
                                    padding: "0px!important",
                                    margin: "0px!important",
                                    paddingLeft: "10px !important",
                                    paddingTop: "10px !important",
                                    paddingBottom: "10px !important",
                                    height: "36px",
                                    width: "233.75px",
                                }}
                            >
                                <Grid css={periodTabHeader}>Date Range</Grid>

                                <MenuItem value={"today"} css={menuItemStyle}>
                                    Today
                                </MenuItem>

                                <MenuItem
                                    value={"last7days"}
                                    css={menuItemStyle}
                                >
                                    Last 7 Days
                                </MenuItem>
                                <MenuItem
                                    value={"last15days"}
                                    css={menuItemStyle}
                                >
                                    Last 15 Days
                                </MenuItem>
                                <MenuItem
                                    value={"last30days"}
                                    css={menuItemStyle}
                                >
                                    Last 30 Days
                                </MenuItem>
                                <MenuItem
                                    value={"last60days"}
                                    css={menuItemStyle}
                                >
                                    Last 60 Days
                                </MenuItem>
                                <MenuItem
                                    value={"last90days"}
                                    css={menuItemStyle}
                                >
                                    Last 90 Days
                                </MenuItem>

                                <Grid container css={dateRangeStyle}>
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
                                            name="radioperiod"
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
                                {period == true && (
                                    <Grid container width={"233.75px"}>
                                        <Grid container width={"233.75px"}>
                                            <Grid paddingLeft={"10px"}>
                                                <LocalizationProvider
                                                    dateAdapter={AdapterDayjs}
                                                >
                                                    <DatePicker
                                                        InputAdornmentProps={
                                                            <></>
                                                        }
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
                                                            setValue(newValue);
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

                                            <Grid paddingLeft={"10px"}>
                                                <LocalizationProvider
                                                    dateAdapter={AdapterDayjs}
                                                >
                                                    <DatePicker
                                                        InputAdornmentProps={
                                                            <></>
                                                        }
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
                                                            setValue(newValue);
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

                                        <Grid container css={buttonGridStyle}>
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
                                    </Grid>
                                )}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid css={textNFieldStyle}>
                    <Grid css={textGrid}>Video Length Group</Grid>
                    <Grid css={itemStyle}>
                        <FormControl fullWidth>
                            <InputLabel
                                id="lengthSelectId"
                                css={selectLabelStyle}
                            >
                                Select Item
                            </InputLabel>
                            <Select
                                css={multiSelectStyle}
                                sx={{
                                    borderRadius: "0px!important",
                                    padding: "0px!important",
                                    margin: "0px!important",
                                    paddingLeft: "10px !important",
                                    paddingTop: "10px !important",
                                    paddingBottom: "10px !important",
                                    height: "36px",
                                    width: "233.75px",
                                }}
                                labelId="lengthSelectId"
                                id="lengthSelectId"
                                multiple
                                value={videoLength}
                                onChange={handleChangeVideoLength}
                                input={<OutlinedInput label="videoLength" />}
                            >
                                {lengths.map((length) => (
                                    <MenuItem
                                        key={length}
                                        value={length}
                                        css={menuItemStyle}
                                        onClick={() => console.log(length)}
                                    >
                                        {length}

                                        <Radio
                                            id={length}
                                            checked={videoLengthRadio}
                                            onClick={() =>
                                                handleRadioClickLength()
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
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
