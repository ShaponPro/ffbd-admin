// ** MUI Imports
import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Radio } from "@mui/material";

// ** Styled Component Import
import { styled } from "@mui/material/styles";
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";
import { Button } from "@mui/material";

// ** Components

//**Style ***/
const BoxWrap = styled(Box)<BoxProps>(({}) => ({
    background: "#F3F3F4",
    padding: "20px",
    borderRadius: "5px",
}));

const typographyStyle = {
    fontSize: "15px",
    width: "150px",
    color: "black",
};
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

const ContestScoreSettingTabComponent = () => {
    return (
        <ApexChartWrapper>
            <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}
            >
                <Grid>
                    <Typography sx={{ fontWeight: 700 }}>
                        Setting-Video Score under a Contest
                    </Typography>
                </Grid>
                <Grid>
                    <Button
                        sx={{
                            background: "#F3F3F4",
                            color: "#009EFA",
                            textTransform: "capitalize",
                        }}
                    >
                        Learn More
                    </Button>
                </Grid>
            </Box>

            <BoxWrap>
                <Typography sx={{ fontWeight: 700 }}>
                    Judge Score Limit
                </Typography>
                <Box sx={{ display: "flex" }}>
                    <Grid item  md={12} xs={12}>
                        <StyledGrid>
                            <Typography
                                display="flex"
                                style={typographyStyle}
                            >
                                Minimum
                            </Typography>
                            <FormControl sx={{ minWidth: 120 }} size="small">
                                <InputLabel
                                    shrink={false}
                                    sx={{
                                        color: "rgba(22, 31, 41, 0.25)",
                                        fontWeight: "400",
                                        fontSize: "12px",
                                    }}
                                >
                                    Select Item
                                </InputLabel>
                                <StyledSelect>
                                    <Grid>
                                        <label style={{padding:"10px"}}>1</label>
                                    </Grid>
                                    <Grid>
                                        <label style={{padding:"10px"}}>2</label>
                                    </Grid>
                                    <Grid>
                                        <label style={{padding:"10px"}}>3</label>
                                    </Grid>
                                    <Grid>
                                        <label style={{padding:"10px"}}>4</label>
                                    </Grid>
                                    <Grid>
                                        <label style={{padding:"10px"}}>5</label>
                                    </Grid>
                                </StyledSelect>
                            </FormControl>
                        </StyledGrid>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        <StyledGrid>
                            <Typography
                                display="flex"
                                style={typographyStyle}
                            >
                                Maximum
                            </Typography>
                            <FormControl sx={{ minWidth: 120 }} size="small">
                                <InputLabel
                                    shrink={false}
                                    sx={{
                                        color: "rgba(22, 31, 41, 0.25)",
                                        fontWeight: "400",
                                        fontSize: "12px",
                                    }}
                                >
                                    Select Item
                                </InputLabel>
                                <StyledSelect>
                                    <Grid>
                                        <label style={{padding:"10px"}}>1</label>
                                    </Grid>
                                    <Grid>
                                        <label style={{padding:"10px"}}>2</label>
                                    </Grid>
                                    <Grid>
                                        <label style={{padding:"10px"}}>3</label>
                                    </Grid>
                                    <Grid>
                                        <label style={{padding:"10px"}}>4</label>
                                    </Grid>
                                    <Grid>
                                        <label style={{padding:"10px"}}>5</label>
                                    </Grid>
                                    <Grid>
                                        <label style={{padding:"10px"}}>6</label>
                                    </Grid>
                                    <Grid>
                                        <label style={{padding:"10px"}}>7</label>
                                    </Grid>
                                    <Grid>
                                        <label style={{padding:"10px"}}>8</label>
                                    </Grid>
                                    <Grid>
                                        <label style={{padding:"10px"}}>9</label>
                                    </Grid>
                                    <Grid>
                                        <label style={{padding:"10px"}}>10</label>
                                    </Grid>
                                </StyledSelect>
                            </FormControl>
                        </StyledGrid>
                    </Grid>
                </Box>
            </BoxWrap>
        </ApexChartWrapper>
    );
};

export default ContestScoreSettingTabComponent;
