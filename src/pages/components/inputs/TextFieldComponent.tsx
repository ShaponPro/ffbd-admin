import { Grid, InputBase } from "@mui/material";
import React, { useState } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const textFieldGridStyle = css`
    background: #ffffff;
    display: flex;
    box-shadow: inset 1px 1.5px 5px rgba(22, 31, 41, 0.2) !important;
`;

const placeHolderStyle = css`
    width: 100%;
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
    margin-top: 6px !important;
    margin-right: 10px !important;
`;

type Props = {
    placeholder: string;
    name: string;
    menuItems: Array<any>;
};

const TextFieldComponent = (props: Props) => {
    const [textFieldState, setTextFieldState] = useState("");
    const onChangeTextField = (e: any) => {
        setTextFieldState(e.target.value);
    };

    return (
        <>
            <Grid item css={textFieldGridStyle} width={"100%"}>
                <InputBase
                    placeholder={props.placeholder}
                    onChange={onChangeTextField}
                    name={props.name}
                    value={textFieldState}
                    css={placeHolderStyle}
                ></InputBase>

                <SearchOutlinedIcon
                    css={searchIconStyle}
                    sx={{ color: "#161F2980" }}
                ></SearchOutlinedIcon>
            </Grid>
        </>
    );
};

export default TextFieldComponent;
