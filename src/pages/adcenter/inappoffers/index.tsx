/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

// ** Components
import InnAppOfferList from "src/container/inappofferlist/InAppOfferList";
import ListComponent from "src/components/ListComponent";
import { FilterComponent } from "src/components/FilterComponent";

import { useQuery } from "@apollo/client";

import { GET_VIDEO_LIST } from "src/pages/videos/graphql/Queries";
import TabbarComponent from "src/components/TabbarComponent";

const tabs = [
    {
        key: "manageOffer",
        title: "Manage Offer",
        isActive: true,
    },
    {
        key: "createOffer",
        title: "Create Offer",
        isActive: false,
    },
];

const AnalyticsCongratulations = () => {
    const [active, setActive] = useState<string>("manageOffer"); //

    /**
     * Handle on tab change
     */
    const tabChangeHandler = (key: string) => {
        console.log("key", key);
        setActive(key);
    };
    const { error, loading, data } = useQuery(GET_VIDEO_LIST, {
        variables: {
            endIndex: 10,
            startIndex: 1,
        },
    });

    console.log(data);

    // check for errors
    if (error) {
        return <p>:( an error happened</p>;
    }

    console.log("data", data);

    const columns = [
        {
            field: "_id",
            header: "Video ID",
        },
        {
            field: "title",
            header: "Video Title",
        },
        {
            field: "activity_updated",
            header: "Last Activity Time",
        },
        {
            field: "short_id",
            header: "Short ID",
        },
        {
            field: "likes_count",
            header: "Total Likes",
        },
        {
            field: "comments_count",
            header: "Total Comments",
        },
        {
            field: "views_count",
            header: "Total Views",
        },
    ];

    return (
        <ApexChartWrapper>
            <Grid container spacing={6}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h5" sx={{ mb: 4.5 }}>
                        <Box
                            component="span"
                            sx={{ fontWeight: "700", fontSize: "36px" }}
                        >
                            In App Offers
                        </Box>
                    </Typography>
                </Grid>
            </Grid>
            <Card sx={{ position: "relative" }}>
                <CardContent
                    sx={{
                        p: (theme) => `${theme.spacing(6.75, 7.5)} !important`,
                    }}
                >
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12}>
                            <TabbarComponent
                                options={tabs}
                                activekey={active}
                                onChange={tabChangeHandler}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12}>
                            <InnAppOfferList />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </ApexChartWrapper>
    );
};

export default AnalyticsCongratulations;
