import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Radio,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const fieldGridStyle = css`
    background: #ffffff;
    padding: 0 !important;
    margin: 0 !important;
    display: flex;
    flex-direction: row;
    box-shadow: inset 1px 1.5px 5px rgba(22, 31, 41, 0.2) !important;
    justify-content: space-between;
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

type Props = {
    placeholder: string;
    label: string;
    menuItems: Array<{ id: number; title: string }>;
};

const MultiSelectFieldComponent = (props: Props) => {
    const [multiSelectState, setMultiSelectState] = React.useState<string[]>(
        []
    );

    const handleChangeMultiSelect = (
        event: SelectChangeEvent<typeof multiSelectState>
    ) => {
        const {
            target: { value },
        } = event;
        setMultiSelectState(
            typeof value === "string" ? value.split(",") : value
        );
    };

    const menuItemLength = props.menuItems.length;

    // Radio state for multi select field
    const [menuItemRadio, setMenuItemRadio] = React.useState(
        new Array(menuItemLength).fill(false)
    );

    const handleMenuClick = (eachMenuItemIndex: any) => {
        if (menuItemRadio.length != 0) {
            const updatedMenuItemRadio = menuItemRadio.map(
                (eachMenuItemRadio, menuItemRadioIndex) => {
                    if (menuItemRadioIndex == eachMenuItemIndex) {
                        return !eachMenuItemRadio;
                    } else {
                        return eachMenuItemRadio;
                    }
                }
            );

            setMenuItemRadio(updatedMenuItemRadio);
        }
    };

    return (
        <>
            <Grid css={fieldGridStyle} width={"100%"} overflow={"hidden"}>
                <FormControl fullWidth>
                    <InputLabel id="videoLength" css={selectLabelStyle}>
                        {props.placeholder}
                    </InputLabel>
                    <Select
                        css={multiSelectStyle}
                        sx={{
                            height: "36px",
                        }}
                        labelId="videoLength"
                        id="videoLengthSelect"
                        multiple
                        value={multiSelectState}
                        onChange={handleChangeMultiSelect}
                        input={<OutlinedInput label={props.label} />}
                    >
                        {props.menuItems.map(
                            (eachMenuItem, eachMenuItemIndex) => {
                                return (
                                    <MenuItem
                                        key={eachMenuItemIndex}
                                        value={eachMenuItem.title}
                                        css={menuItemStyle}
                                        onClick={() =>
                                            handleMenuClick(eachMenuItemIndex)
                                        }
                                    >
                                        <Grid
                                            container
                                            alignItems={"center"}
                                            justifyContent={"space-between"}
                                        >
                                            <Grid>{eachMenuItem.title}</Grid>

                                            {/* radio icon grid */}
                                            <Grid>
                                                <Radio
                                                    id={eachMenuItem.title}
                                                    checked={
                                                        menuItemRadio[
                                                            eachMenuItemIndex
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
                                );
                            }
                        )}
                    </Select>
                </FormControl>
            </Grid>
        </>
    );
};

export default MultiSelectFieldComponent;
