// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

// ** MUI IconImports

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

// ** Components
import TabbarComponent from "src/components/TabbarComponent";
import ListComponent from "src/components/ListComponent";
import {FilterComponent} from "src/components/FilterComponent";

// ** State import
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_VIDEO_LIST } from "src/pages/videos/graphql/Queries";

const tabs = [
    {
        key: "videoContest",
        title: "Video Contest",
    },
    {
        key: "winners",
        title: "Winners",
    },
    ,
    {
        key: "scoreSettings",
        title: "Score Setting",
    },
];

const row = {
    contestID: "62b956a760a6af7b2e98cae1",
    contestName: "Eid Contest",
    coverPhoto: "url",
    numberOfRewards: 4,
    qualityReward: 5,
    mostLikedReward: 6,
    highestViewReward: 100,
  }

const ContestResult = () => {
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
  
    console.log("data", loading,error, data);
  
    const formatData = (data: object[]) => {
      let newData = [row];
      if(data.length > 0) {
        newData = data.map((item, i) => {
          return {
            ...row,
            ...item,
            videoID: item?._id || row.videoID,
            videoTitle: item?.title || row.videoTitle,
          }
        })
      }
    }
  
    useEffect(() => {
      if(loading) return;
      if(error) return;
      if(data && data?.allVideos && data.allVideos.length){
        setVideos(formatData(data.allVideos));
      }
    }, [data, loading])
  
    /*** Handle on tab change*/
    
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
          field: "numberOfRewards",
          header: "Number Of Rewards",
        },
        {
          field: "qualityReward",
          header: "Quality Reward",
        },
        {
          field: "mostLikedReward",
          header: "Most Liked Reward",
        },
        {
          field: "highestViewReward",
          header: "Highest View Reward",
        },
      ];

    return (
        <ApexChartWrapper>
            <Grid item xs={12}>
                <Typography variant="h5" sx={{ mb: 5 }}>
                    <Box component="span" sx={{ fontWeight: "bold" }}>
                        User Summary
                    </Box>
                </Typography>
            </Grid>

            <Card sx={{ position: "relative" }}>
                <CardContent sx={{ p: (theme) => `${theme.spacing(6.75, 7.5)} !important`,}}>
                    <Grid item xs={12} sx={{ mb: 5 }}>
                        <TabbarComponent options={tabs} activekey={'videoContest'} onChange={tabChangeHandler} />
                    </Grid>

                    <Box sx={{ width: '100%' }}>
                       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={8}  sx={{ width: '100%', background: "#F3F3F4" ,borderRadius:'5px' }}>
                            
                          <Grid item xs={12} sm={12}>
                            <FilterComponent title='select' onChange={filterChangeHandler} />
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <ListComponent rowsData={videos} columns={columns} />
                          </Grid>
                        </Grid>

                        <Grid item xs={4}  sx={{ width: '100%' }}>
                        <h1>Contest Info</h1>
                       </Grid>
                      </Grid>
                    </Box>
    
                </CardContent>
            </Card>
        </ApexChartWrapper>
    );
};

export default ContestResult;