import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";
import TextFieldComponent from "./TextFieldComponent";

const Index = () => {
    const [textFieldState, setTextFieldState] = useState("");
    const onChangeTextField = (e: any) => {
        setTextFieldState(e.target.value);
    };

    return (
        <>
            <ApexChartWrapper>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h5" sx={{ mb: 4.5 }}>
                            <Box
                                component="span"
                                sx={{ fontWeight: "700", fontSize: "36px" }}
                            >
                                User Videos
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
                <Card sx={{ position: "relative" }}>
                    <CardContent
                        sx={{
                            p: (theme) =>
                                `${theme.spacing(6.75, 7.5)} !important`,
                        }}
                    >
                        <Grid>
                            <Grid>
                                <Box
                                    style={{
                                        display: "flex",
                                        gap: "10px",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        padding: "13px 20px",
                                        width: "100%",
                                        height: "66px",
                                        position: "relative",
                                        background: "#ECF8FF",
                                        boxShadow:
                                            "1px 2px 3px rgba(22, 31, 41, 0.2)",
                                    }}
                                    marginBottom={"20px"}
                                >
                                    <Typography
                                        style={{
                                            textTransform: "none",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Tabbar
                                    </Typography>
                                </Box>

                                {/* View Text Field Component */}
                                <TextFieldComponent
                                    placeholder="Search and Filter"
                                    name={"key"}
                                    value={textFieldState}
                                    onChange={onChangeTextField}
                                ></TextFieldComponent>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </ApexChartWrapper>
        </>
    );
};

export default Index;
