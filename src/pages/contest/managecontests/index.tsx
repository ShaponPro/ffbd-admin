/* eslint-disable @typescript-eslint/no-unused-vars */

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

// ** Components
import TabbarComponent from "src/components/TabbarComponent";
import { FilterComponent } from "src/components/FilterComponent";
import { allData } from "src/@fake-db/table/allData";
import UserVideosCustomizedComponent from "src/views/videos/user-videos/customized/customized-report-components/UserVideosCustomizedComponent";
import MangeContestFilter from "../../../container/filter/ManageContestFilter";

import { useQuery } from "@apollo/client";

import { GET_VIDEO_LIST } from "src/pages/videos/graphql/Queries";
import { useEffect, useState } from "react";
import ListComponent from "src/components/ListComponent";
import ManageContestList from "src/container/list/ManageContestList";

const tabs = [
    {
        key: "all",
        title: "All",
    },
    {
        key: "runninglive",
        title: "Running Live",
    },
    {
        key: "pendingapproval",
        title: "Pending Approval",
    },
    {
        key: "customized",
        title: "Customized",
    },
];

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
    "action": [
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
            field: "contestID",
            header: "Contest ID",
        },
        {
            field: "contestName",
            header: "Contest Name",
        },
        {
            field: "coverPhoto",
            header: "Cover Photo",
        },
        {
            field: "hashTag",
            header: "Hashtag",
        },
        {
            field: "brandTag",
            header: "Brandtag",
        },
        {
            field: "publishingBrandName",
            header: "Publishing Brand Name",
        },
        {
            field: "targetUserLavel",
            header: "Target User Level",
        },
        {
            field: "targetLocation",
            header: "Target Location",
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
            field: "numberofRewards",
            header: "Number of Reward",
        },
        {
            field: "typeofGift",
            header: "Type of Gift",
        },
        {
            field: "totalValueReward",
            header: "Total Value of Reward",
        },
        {
            field: "netPayment",
            header: "Net Payment",
        },
        {
            field: "paymentChannel",
            header: "Payment Channel",
        },
        {
            field: "totalParticipants",
            header: "Total Participants",
        },
        {
            field: "totalVideos",
            header: "Total Videos",
        },
        {
            field: "totalReach",
            header: "Total Reach",
        },
        {
            field: "totalClick",
            header: "Total Click",
        },
        {
            field: "totalShare",
            header: "Total Share",
        },
        {
            field: "totalFollow",
            header: "Total Follow/ Favourites",
        },
        {
            field: "totalVideosViews",
            header: "Total Video Views",
        },
        {
            field: "totalWatchTime",
            header: "Total Watch Time",
        },
        {
            field: "resultPublishingStatus",
            header: "Result Publishing Status",
        },
        {
            field: "giftDisbursmentStatus",
            header: "Gift Disbursment Status",
        },
        {
            field: "contestTrandingRanking",
            header: "Contest Tranding Ranking",
        },
        {
            field: "activeBoostingRanking",
            header: "Active Boosting Ranking",
        },
        {
            field: "allTimeContestRanking",
            header: "All Time Contest Ranking",
        },
        {
            field: "publishType",
            header: "Publish Type",
        },
        {
            field: "contestStatus",
            header: "Contest Status",
        },
        {
            field: "contestStartDate",
            header: "Contest Strat Date",
        },
        {
            field: "ContestEndDate",
            header: "Contest End Date",
        },
        {
            field: "uploadedBy",
            header: "Uploaded By",
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
                            Manage Contests
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
                                activekey={"all"}
                                onChange={tabChangeHandler}
                            />
                        </Grid>
                        {activeTab === "customized" ? (
                            <>
                                <Grid item xs={12} sm={12}>
                                    <UserVideosCustomizedComponent />
                                </Grid>
                            </>
                        ) : (
                            <>
                                <Grid item xs={12} sm={12}>
                                    <MangeContestFilter />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <ManageContestList
                                        rowsData={videos}
                                        columns={columns}
                                    />
                                </Grid>
                            </>
                        )}
                    </Grid>
                </CardContent>
            </Card>
        </ApexChartWrapper>
    );
};

export default ManageContest;
