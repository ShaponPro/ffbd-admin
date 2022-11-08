import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

import DynamicFilterComponent from "./dynamicFilterComponent";

const userVideoFilter = [
    {
        id: 0,
        title: "User ID/Name",
        type: "text",
        menuItems: [],
    },
    {
        id: 1,
        title: "Uploaded Country",
        type: "text",
        menuItems: [],
    },
    {
        id: 2,
        title: "Upload Period",
        type: "select",
        menuItems: [
            {
                id: 0,
                title: "Today",
            },
            {
                id: 1,
                title: "Last 7 Days",
            },
            {
                id: 2,
                title: "Last 15 Days",
            },
            {
                id: 3,
                title: "Last 30 Days",
            },
            {
                id: 4,
                title: "Last 60 Days",
            },
            {
                id: 5,
                title: "Last 90 Days",
            },
        ],
    },
    {
        id: 3,
        title: "Video length Group",
        type: "multiselect",
        menuItems: [
            {
                id: 0,
                title: "Upto 30s",
            },
            {
                id: 1,
                title: "31s - 60s",
            },
            {
                id: 2,
                title: "61s - 180s",
            },
            {
                id: 3,
                title: "181s - 300s",
            },
            {
                id: 4,
                title: "Above 300s",
            },
        ],
    },
    {
        id: 4,
        title: "Engagement",
        type: "multiselect",
        menuItems: [
            {
                id: 0,
                title: "Likes",
            },
            {
                id: 1,
                title: "Comments",
            },
            {
                id: 2,
                title: "Shares",
            },
            {
                id: 3,
                title: "Downloads",
            },
        ],
    },
    {
        id: 5,
        title: "AD & Monetization",
        type: "multiselect",
        menuItems: [
            {
                id: 0,
                title: "Awareness AD",
            },
            {
                id: 1,
                title: "Product Added",
            },
            {
                id: 2,
                title: "Active Awareness",
            },
            {
                id: 3,
                title: "Active Product",
            },
        ],
    },
    {
        id: 6,
        title: "Video Contest",
        type: "text",
        menuItems: [],
    },
    {
        id: 7,
        title: "Music Creator",
        type: "text",
        menuItems: [],
    },
    {
        id: 8,
        title: "Current Status",
        type: "multiselect",
        menuItems: [
            {
                id: 0,
                title: "Published",
            },
            {
                id: 1,
                title: "Failed",
            },
            {
                id: 2,
                title: "Uploading",
            },
            {
                id: 3,
                title: "Suspended",
            },
            {
                id: 4,
                title: "Deleted",
            },
        ],
    },
    {
        id: 9,
        title: "Right Selling Status",
        type: "multiselect",
        menuItems: [
            {
                id: 0,
                title: "Free",
            },
            {
                id: 1,
                title: "Sold",
            },
            {
                id: 2,
                title: "Processing",
            },
            {
                id: 3,
                title: "Claimed",
            },
        ],
    },
];

const newFilterComponent = () => {
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
                                <DynamicFilterComponent
                                    userVideoFilter={userVideoFilter}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </ApexChartWrapper>
        </>
    );
};

export default newFilterComponent;
