/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextInputField from "src/components/Textfield";
import Radio from "@mui/material/Radio";
import styled from "@emotion/styled";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PublishIcon from "src/assets/icons/PublishIcon";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

// ** Components
import InnAppOfferList from "src/container/list/InAppOfferList";
import CreateOfferList from "src/container/list/CreateOfferList";
import OfferBox from "src/container/uploadimage/OfferBox";

import { useQuery } from "@apollo/client";

import { GET_VIDEO_LIST } from "src/pages/videos/graphql/Queries";
import TabbarComponent from "src/components/TabbarComponent";
import { Tab } from "@mui/material";
import ButtonComponent from "src/components/ButtonComponent";

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
const tagType = [
    {
        key: "brand",
        title: "Brand Tag",
    },
    {
        key: "hash",
        title: "Hash Tag",
    },
];
const styleBtn = {
    background: "#F3F3F4",
    fontFamily: "Open Sans",
    fontWeight: "400",
    fontSize: "12px",
    color: "rgba(22, 31, 41, 0.5)",
    borderRadius: "0px",
    padding: "12px 30px",
};

const CreateOffer = () => {
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

    const typographyStyle = {
        fontSize: "16px",
        padding: "10px 20px",
        fontWeight: "600",
        align: "left",
        color: "#161F29",
    };

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
                    {active == "manageOffer" && (
                        <Grid container spacing={6}>
                            <Grid item xs={12} sm={12}>
                                <InnAppOfferList />
                            </Grid>
                        </Grid>
                    )}
                    {active == "createOffer" && (
                        <Grid container spacing={6} sx={{marginTop:"2px"}}>
                            <Grid
                                item
                                lg={12}
                                xs={3.5}
                                sm={3.5}
                                md={1.75}
                                sx={{ display: "flex" }}
                            >
                                <Grid item lg={2} xs={8.5} sm={8.5} md={10.25}>
                                    <Typography style={typographyStyle}>
                                        Add Title
                                    </Typography>
                                </Grid>
                                <Grid item lg={10} xs={8.5} sm={8.5} md={10.25}>
                                    <TextInputField placeholder="Type" />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TabContainer>
                                    <Typography variant="h6">
                                        Activities
                                    </Typography>
                                </TabContainer>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <CreateOfferList />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TabContainer>
                                    <Typography variant="h6">Reward</Typography>
                                </TabContainer>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Box sx={{ background: "#F3F3F4" }}>
                                    <Grid
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Grid lg={2} xs={12}>
                                            <Typography variant="h6">
                                                <Radio />
                                                F:Points
                                            </Typography>
                                        </Grid>
                                        <Grid lg={3} xs={12}>
                                            <TextInputField placeholder="Type" />
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Grid lg={2} xs={12}>
                                            <Typography variant="h6">
                                                <Radio />
                                                Cash (BDT)
                                            </Typography>
                                        </Grid>
                                        <Grid lg={3} xs={12}>
                                            <TextInputField placeholder="Type" />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TabContainer>
                                    <Typography variant="h6">
                                        Offer Box
                                    </Typography>
                                </TabContainer>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <OfferBox />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TabContainer>
                                    <Typography variant="h6">
                                        Conditions
                                    </Typography>
                                </TabContainer>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Box sx={{ background: "#F3F3F4" }}>
                                    <Grid
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            padding: "20px",
                                        }}
                                    >
                                        <Grid lg={2} xs={12}>
                                            <Typography variant="h6">
                                                Condition Required
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            lg={3}
                                            xs={12}
                                            sx={{
                                                display: "flex",
                                                gap: "10px",
                                            }}
                                        >
                                            <ButtonComponent
                                                title="None"
                                                type="customizable"
                                                style={{
                                                    background: "#57CE66",
                                                    fontFamily: "Open Sans",
                                                    fontWeight: "700",
                                                    fontSize: "12px",
                                                    color: "#FFFFFF",
                                                    borderRadius: "0px",
                                                    padding: "12px 30px",
                                                }}
                                            />
                                            <ButtonComponent
                                                title="Yes"
                                                type="customizable"
                                                style={{
                                                    background: "#FFFFFF",
                                                    fontFamily: "Open Sans",
                                                    fontWeight: "700",
                                                    fontSize: "12px",
                                                    color: "#161F29",
                                                    borderRadius: "0px",
                                                    padding: "12px 30px",
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TabContainer>
                                    <Typography variant="h6">
                                        Daily Activation
                                    </Typography>
                                </TabContainer>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Box sx={{ background: "#F3F3F4" }}>
                                    <Grid
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            padding: "20px",
                                        }}
                                    >
                                        <Grid
                                            lg={6}
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Grid lg={4} xs={12}>
                                                <Typography variant="h6">
                                                    Start Hour
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                lg={5}
                                                xs={12}
                                                sx={{
                                                    display: "flex",
                                                    gap: "10px",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <TextInputField placeholder="12:00" />
                                                <button
                                                    style={{
                                                        background:
                                                            "rgba(22, 31, 41, 0.75)",
                                                        padding: "10px",
                                                        width: "40px",
                                                        height: "36px",
                                                        alignItems: "center",
                                                        color: "#FFFFFF",
                                                        border: "0px",
                                                    }}
                                                    type="button"
                                                >
                                                    AM
                                                </button>
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            lg={6}
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Grid lg={4} xs={12}>
                                                <Typography variant="h6">
                                                    End Tour
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                lg={5}
                                                xs={12}
                                                sx={{
                                                    display: "flex",
                                                    gap: "10px",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <TextInputField placeholder="2:00" />
                                                <button
                                                    style={{
                                                        background:
                                                            "rgba(22, 31, 41, 0.75)",
                                                        padding: "10px",
                                                        width: "40px",
                                                        height: "36px",
                                                        alignItems: "center",
                                                        color: "#FFFFFF",
                                                        border: "0px",
                                                    }}
                                                    type="button"
                                                >
                                                    AM
                                                </button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TabContainer>
                                    <Typography variant="h6">
                                        Offer Period
                                    </Typography>
                                </TabContainer>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Box sx={{ background: "#F3F3F4" }}>
                                    <Grid
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            padding: "20px",
                                        }}
                                    >
                                        <Grid
                                            lg={6}
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Grid lg={4} xs={12}>
                                                <Typography variant="h6">
                                                    Start Hour
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                lg={5}
                                                xs={12}
                                                sx={{
                                                    display: "flex",
                                                    gap: "10px",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        background: "#FFFFFF",
                                                        padding: "10px",
                                                        width: "250px",
                                                        height: "36px",
                                                        alignItems: "center",
                                                        gap: "10px",
                                                        justifyContent:
                                                            "space-between",
                                                        border: "1px solid rgba(22, 31, 41, 0.5)",
                                                    }}
                                                >
                                                    <Box className="actions-left">
                                                        <CalendarMonthIcon />
                                                    </Box>
                                                    <Typography
                                                        sx={{
                                                            color: "rgba(22, 31, 41, 0.25)",
                                                            fontWeight: "400",
                                                            fontSize: "12px",
                                                        }}
                                                    >
                                                        Select Date
                                                    </Typography>
                                                    <Box
                                                        className="actions-right"
                                                        sx={{
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                        }}
                                                    >
                                                        <ArrowDropDownIcon />
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            lg={6}
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Grid lg={4} xs={12}>
                                                <Typography variant="h6">
                                                    End Tour
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                lg={5}
                                                xs={12}
                                                sx={{
                                                    display: "flex",
                                                    gap: "10px",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        background: "#FFFFFF",
                                                        padding: "10px",
                                                        width: "250px",
                                                        height: "36px",
                                                        alignItems: "center",
                                                        gap: "10px",
                                                        justifyContent:
                                                            "space-between",
                                                        border: "1px solid rgba(22, 31, 41, 0.5)",
                                                    }}
                                                >
                                                    <Box className="actions-left">
                                                        <CalendarMonthIcon />
                                                    </Box>
                                                    <Typography
                                                        sx={{
                                                            color: "rgba(22, 31, 41, 0.25)",
                                                            fontWeight: "400",
                                                            fontSize: "12px",
                                                        }}
                                                    >
                                                        Select Date
                                                    </Typography>
                                                    <Box
                                                        className="actions-right"
                                                        sx={{
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                        }}
                                                    >
                                                        <ArrowDropDownIcon />
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    gap: "10px",
                                }}
                            >
                                <Grid>
                                    <ButtonComponent
                                        type="customizable"
                                        title="Save"
                                        style={styleBtn}
                                    />
                                </Grid>
                                <Grid>
                                    <ButtonComponent
                                        type="customizable"
                                        title="Discard"
                                        style={styleBtn}
                                    />
                                </Grid>
                                <Grid>
                                    <ButtonComponent
                                        type="customizable"
                                        title="Publish"
                                        style={{
                                            background: "#57CE66",
                                            fontFamily: "Open Sans",
                                            fontWeight: "700",
                                            fontSize: "12px",
                                            color: "white",
                                            borderRadius: "5px",
                                            padding: "12px 30px",
                                        }}
                                        startIcon={<PublishIcon />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    )}
                </CardContent>
            </Card>
        </ApexChartWrapper>
    );
};

export default CreateOffer;
