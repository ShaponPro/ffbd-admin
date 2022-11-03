import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";
import { FilterComponent } from "./FilterComponent";
import { FilterComponentCopy } from "./FilterComponentCopy";

const newFilterComponent = () => {
    const [userVideosTextState, setUserVideosText] = useState([
        {
            id: 0,
            text: "User ID/Name",
        },
        {
            id: 1,
            text: "Uploaded Country",
        },
        {
            id: 2,
            text: "Upload Period",
        },
        {
            id: 3,
            text: "Video Length Group",
        },
        {
            id: 4,
            text: "Engagement",
        },
        {
            id: 5,
            text: "AD & Monetization",
        },

        {
            id: 6,
            text: "Video Contest",
        },

        {
            id: 7,
            text: "Music Creator",
        },

        {
            id: 8,
            text: "Current Status",
        },

        {
            id: 9,
            text: "Right Selling Status",
        },
    ]);

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

                                {/* New FilterComponent */}
                                <FilterComponent
                                    userVideosTextState={userVideosTextState}
                                ></FilterComponent>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </ApexChartWrapper>
        </>
    );
};

export default newFilterComponent;
