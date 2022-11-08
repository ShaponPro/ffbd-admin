/* eslint-disable @typescript-eslint/no-unused-vars */

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid"
import styled from "@emotion/styled"

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

// ** Components
import TabbarComponent from "src/components/TabbarComponent";
import { FilterComponent } from "src/components/FilterComponent";
import { allData } from "src/@fake-db/table/allData";
import UserVideosCustomizedComponent from "src/views/videos/user-videos/customized/customized-report-components/UserVideosCustomizedComponent";
import MangeContestFilter from "../../../container/filters/ManageContestFilter";

import { useQuery } from "@apollo/client";

import { GET_VIDEO_LIST } from "src/graphql/Queries";
import { useEffect, useState } from "react";

import GiftDisbursementTrackingfilter from "src/container/filters/GiftDisbursementTracking";

import GiftDisbursementTracking from "src/container/list/GiftDisbursementTracking";

const TabContainer = styled.div({
    display: "flex",
    gap: "10px",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "13px 20px",
    width: "100%",
    height: "60px",
    position: "relative",
    background: "#ECF8FF",
    boxShadow: "1px 2px 3px rgba(22, 31, 41, 0.2)",
});

const row = {
    contestID: "62b956a760a6af7b2e98cae1",
    contestName: "xyz2022",
    coverPhoto: "https://i.postimg.cc/c1f434Wn/images1.jpg",
    hashTag: "#0000",
    brandTag: "<0000",
    publishingBrandName: "Brand Name",
    targetUserLavel: "Lavel 1",
    targetLocation: "Dhaka",
    rewardNature: "Fixed",
    rewardPeriod: "-",
    numberofRewards: "00",
    typeofGift: "-",
    totalValueReward: "00",
    netPayment: "android",
    paymentChannel: "31s-60s",
    totalParticipants: 220,
    totalVideos: 6160,
    totalReach: 50,
    totalClick: 10,
    totalShares: 15,
    totalFollow: 55,
    totalVideosViews: "VC123547",
    totalWatchTime: "Talent's Wolrd",
    resultPublishingStatus: "1st",
    giftDisbursmentStatus: 1700,
    contestTrandingRanking: 415,
    activeBoostingRanking: 0,
    allTimeContestRanking: 0,
    publishType: 3,
    contestStatus: 5000,
    contestStartDate: 100,
    ContestEndDate: 5000,
    uploadedBy: 1000,
    action: [
        {
            type: "action",
            title: "View Contest",
        },
        {
            type: "action",
            title: "View Summary",
        },
        {
            type: "action",
            title: "Edit Contest",
        },
    ],
};

const ManageContest = () => {
    const [activeTab, setActiveTab] = useState<string>("");
    const [videos, setVideos] = useState<object[]>([]);

    /**
     * Graph Ql Query
     */
    const { error, loading, data } = useQuery(GET_VIDEO_LIST, {
        variables: {
            endIndex: 10,
            startIndex: 1,
        },
    });

    // check for errors
    if (error) {
        return <p>:( an error happened</p>;
    }

    console.log("data", loading, error, data);

    const formatData = (data: object[]) => {
        let newData = [row];
        if (data.length > 0) {
            newData = data.map((item, i) => {
                return {
                    ...row,
                    ...item,
                    videoID: item?._id || row.videoID,
                    videoTitle: item?.title || row.videoTitle,
                };
            });
        }
    };

    useEffect(() => {
        if (loading) return;
        if (error) return;
        if (data && data?.allVideos && data.allVideos.length) {
            setVideos(formatData(data.allVideos));
        }
    }, [data, loading]);

    /**
     * Handle on tab change
     */
    const filterChangeHandler = (key: string) => {
        console.log("key", key);
    };

    const tabChangeHandler = (key: string) => {
        console.log("key", key);
        setActiveTab(key);
    };

    const columns = [
        {
            field: "contestType",
            header: "Contest Type",
        },
        {
            field: "contestName",
            header: "Contest Name",
        },
        {
            field: "contestID",
            header: "Contest ID",
        },
        {
            field: "rewardNature",
            header: "Reward Nature",
        },
        {
            field: "rewardPeriod",
            header: "Reward Period",
        },
        {
            field: "positions",
            header: "Positions",
        },
        {
            field: "rewardConsiderations",
            header: "Reward Considerations",
        },
        {
            field: "typeOfGift",
            header: "Type of Gift",
        },
        {
            field: "fPoint",
            header: "F:Points (if any)",
        },
        {
            field: "valueInCash",
            header: "Value in Cash",
        },
        {
            field: "videoId",
            header: "Video ID",
        },
        {
            field: "totalScorePerformance",
            header: "Total Score/ Performance",
        },
        {
            field: "userName",
            header: "User Name",
        },
        {
            field: "fanfareID",
            header: "Fanfare ID",
        },
        {
            field: "userID",
            header: "User ID",
        },
        {
            field: "coverPhoto",
            header: "Cover Photo",
        },
        {
            field: "contactNumber",
            header: "Contact Number",
        },
        {
            field: "publishingBrandName",
            header: "Publishing Brand Name",
        },
        {
            field: "redultPublishDate",
            header: "Result Publish Date",
        },
        {
            field: "selectionMethod",
            header: "Selection Method",
        },
        {
            field: "challanNo",
            header: "Challan No.",
        },
        {
            field: "disbursementStatus",
            header: "Disbursment Status",
        },
        {
            field: "deliveryStage",
            header: "Delivery Stage",
        },
        {
            field: "deliveryUpdateDate",
            header: "Delivery Update Date",
        },
        {
            field: "lastUpdateBy",
            header: "Last Update by",
        },
        {
            field: "userStatus",
            header: "User Status",
        },
        {
            field: "action",
            header: "Action",
        },
    ];

    return (
        <ApexChartWrapper>
            <Grid container spacing={6}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h5" sx={{ mb: 4.5 }}>
                        <Box component="span" sx={{ fontWeight: "bold" }}>
                            Gift Disbursment Tracking
                        </Box>
                    </Typography>
                </Grid>
            </Grid>
            <Card sx={{ position: "relative" }}>
                <CardContent>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12}>
                            <TabContainer>
                                <Typography variant="h6">Gift Disbursement Tracking</Typography>
                            </TabContainer>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <GiftDisbursementTrackingfilter />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <GiftDisbursementTracking
                                rowsData={videos}
                                columns={columns}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </ApexChartWrapper>
    );
};

export default ManageContest;
