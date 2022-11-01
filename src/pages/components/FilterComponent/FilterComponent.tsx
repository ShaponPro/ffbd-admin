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
} from "@mui/material";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

// ** Icons Imports
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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
    // background-color: red;
    margin-bottom: 2px !important;
    font-family: "Open Sans", sans-serif !important;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    padding-top: 10px !important;
    padding-left: 10px !important;
    padding-bottom: 10px !important;
`;

export const FilterComponent = (props: props) => {
    const [age, setAge] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

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
                            {/* <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            > */}
                            <Grid css={periodTabHeader}>Date Range</Grid>
                            <Grid>
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
                            </Grid>
                            <Grid css={periodTabHeader}>Custom Range</Grid>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
