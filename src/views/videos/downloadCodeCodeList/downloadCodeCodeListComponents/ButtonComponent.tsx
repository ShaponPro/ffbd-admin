import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid, styled } from "@mui/material";
import ButtonComp from "../../../../../src/components/ButtonComponent";

const buttonGrid = css`
    display: flex;
    flex-direction: row !important;
    margin-right: 5px !important;
`;

const StyledGrid = styled(Grid)({
    margin:'2px'
})

const ButtonComponent = () => {
    return (
        <>
            <Grid css={buttonGrid}>
                <StyledGrid>
                    <ButtonComp type="action" title="Update" />
                </StyledGrid>
                <StyledGrid>
                    <ButtonComp type="action" title="Resend" />
                </StyledGrid>
                <StyledGrid>
                    <ButtonComp type="action" title="Suspend" />
                </StyledGrid>
            </Grid>
        </>
    );
};

export default ButtonComponent;