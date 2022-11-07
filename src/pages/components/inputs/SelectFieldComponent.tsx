import React, { useState } from "react";
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Radio,
    Select,
    TextField,
} from "@mui/material";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ButtonComponent from "src/components/ButtonComponent";

const textFieldGridStyle = css`
    background: #ffffff;
    display: flex;
    box-shadow: inset 1px 1.5px 5px rgba(22, 31, 41, 0.2) !important;
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

    .MuiSelect-select {
        padding: 0 !important;
        padding-left: 10px !important;
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

const dateInputField = css`
    .MuiInputBase-input {
        padding: 0 !important;
    }

    .MuiInputAdornment-root .MuiInputAdornment-positionEnd {
    }
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

const buttonGridStyle = css`
    padding-left: 10px;
    margin-bottom: 15px;
    margin-top: 14px;
`;

const buttonGrid = css`
    margin-right: 20px;
`;

type Props = {
    placeholder: string;
    label: string;
    name: string;
    menuItems: Array<{ id: number; title: string }>;
};

const SelectFieldComponent = (props: Props) => {
    const [selectValue, setSelectValue] = useState("");
    const onChangeSelect = (e: any) => {
        setSelectValue(e.target.value);
    };

    const [fromDateValue, setFromDateValue] = React.useState<Dayjs | null>(
        dayjs("2022-04-07")
    );

    const [toDateValue, setToDateValue] = React.useState<Dayjs | null>(
        dayjs("2022-04-07")
    );

    // Radio toggle for showing date field
    const [isRadioClicked, setIsRadioClicked] = React.useState(false);
    const handleRadioClick = () => {
        setIsRadioClicked((isRadioClicked) => {
            return !isRadioClicked;
        });
    };

    return (
        <>
            <Grid css={textFieldGridStyle} width={"100%"} overflow={"hidden"}>
                <FormControl fullWidth>
                    <InputLabel id="uploadPeriod" css={selectLabelStyle}>
                        {props.placeholder}
                    </InputLabel>
                    <Select
                        labelId="uploadPeriod"
                        id="uploadPeriodSelect"
                        name={props.name}
                        value={selectValue}
                        label={props.label}
                        onChange={onChangeSelect}
                        css={selectStyle}
                        sx={{
                            height: "36px",
                        }}
                    >
                        <Grid css={periodTabHeader}>Date Range</Grid>

                        {/* menu items */}
                        {props.menuItems.map((eachMenuItem) => {
                            return (
                                <MenuItem
                                    key={eachMenuItem.id}
                                    value={eachMenuItem.title}
                                    css={menuItemStyle}
                                >
                                    {eachMenuItem.title}
                                </MenuItem>
                            );
                        })}

                        {/* radio grid */}
                        <Grid
                            container
                            css={dateRangeStyle}
                            alignItems={"baseline!important"}
                        >
                            <Grid css={periodTabHeader}>Custom Range</Grid>
                            <Grid>
                                <Radio
                                    checked={isRadioClicked}
                                    onClick={() => handleRadioClick()}
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

                        {/* date picker and button grid */}
                        <Grid container width={"233.75px!important"}>
                            {isRadioClicked == true && (
                                <>
                                    {/* date picker grid */}
                                    <Grid container>
                                        {/* date picker 1 */}
                                        <Grid
                                            width={"50%"}
                                            paddingLeft={"10px"}
                                            paddingRight={"5px"}
                                        >
                                            <LocalizationProvider
                                                dateAdapter={AdapterDayjs}
                                            >
                                                <DatePicker
                                                    openTo="year"
                                                    views={[
                                                        "year",
                                                        "month",
                                                        "day",
                                                    ]}
                                                    label="From"
                                                    value={fromDateValue}
                                                    onChange={(newValue) => {
                                                        setFromDateValue(
                                                            newValue
                                                        );
                                                    }}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            helperText={null}
                                                            css={dateTextField}
                                                        />
                                                    )}
                                                    css={dateInputField}
                                                />
                                            </LocalizationProvider>
                                        </Grid>

                                        {/* date picker 2 */}
                                        <Grid
                                            width={"50%"}
                                            paddingLeft={"5px"}
                                            paddingRight={"10px"}
                                        >
                                            <LocalizationProvider
                                                dateAdapter={AdapterDayjs}
                                            >
                                                <DatePicker
                                                    openTo="year"
                                                    views={[
                                                        "year",
                                                        "month",
                                                        "day",
                                                    ]}
                                                    label="To"
                                                    value={toDateValue}
                                                    onChange={(newValue) => {
                                                        setToDateValue(
                                                            newValue
                                                        );
                                                    }}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            helperText={null}
                                                            css={dateTextField}
                                                        />
                                                    )}
                                                    css={dateInputField}
                                                />
                                            </LocalizationProvider>
                                        </Grid>
                                    </Grid>

                                    {/* button grid */}
                                    <Grid container css={buttonGridStyle}>
                                        <Grid css={buttonGrid}>
                                            <ButtonComponent
                                                type="cancel"
                                                title="cancel"
                                            ></ButtonComponent>
                                        </Grid>
                                        <Grid>
                                            <ButtonComponent
                                                type="apply"
                                                title="apply"
                                            ></ButtonComponent>
                                        </Grid>
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </Select>
                </FormControl>
            </Grid>
        </>
    );
};

export default SelectFieldComponent;
