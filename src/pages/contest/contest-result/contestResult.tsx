// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

// // ** State import
// import { useQuery } from "@apollo/client";
// import { useEffect, useState } from "react";
// import { GET_VIDEO_LIST } from "src/pages/videos/graphql/Queries";

// ** MUI IconImports

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

// ** Components
import TabbarComponent from "src/components/TabbarComponent";
import { ContestResultFilter } from "src/container/filters/ContestResultFilter";
import ContestResultList from "src/container/lists/ContestResultList"

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

const ContestResult = () => {
  
  /**
   * Handle on tab change
   */
   const tabChangeHandler = (key: string) => {
    console.log('key', key)
  }
  
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
                <CardContent sx={{ p: (theme) => `${theme.spacing(6.75, 7.5)} !important`}}>
                    <Grid item xs={12} sx={{ mb: 5 }}>
                        <TabbarComponent options={tabs} activekey={'videoContest'} onChange={tabChangeHandler} />
                    </Grid>

                    <Box sx={{ width: '100%' }}>
                       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}  sx={{ width: '100%', background: "#F3F3F4" ,borderRadius:'5px'}}>
                            
                          <Grid item xs={12} sm={12}>
                            <ContestResultFilter/>
                          </Grid>

                          <Grid item xs={12} sm={12} sx={{ paddingRight:'10px'}}>
                            <ContestResultList/>
                          </Grid>
                        </Grid>

                        <Grid item xs={6}  sx={{ width: '100%' }}>
                        <h1>Contest Info</h1>
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