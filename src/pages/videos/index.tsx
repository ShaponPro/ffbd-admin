/* eslint-disable @typescript-eslint/no-unused-vars */

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Components
import TabbarComponent from 'src/components/TabbarComponent'
import ListComponent from 'src/components/ListComponent'
import {FilterComponent} from 'src/components/FilterComponent';
import { allData } from 'src/@fake-db/table/allData'

import { useQuery } from '@apollo/client'

import { GET_VIDEO_LIST } from './graphql/Queries'

const tabs = [
  {
    key: "regular",
    title: "Regular",
  },
  {
    key: "monetization",
    title: "Active Monetization",
  },
  {
    key: "trending",
    title: "Trending",
  },
  {
    key: "customized",
    title: "Customized",
  },
];

const AnalyticsCongratulations = () => {

  const { error, loading, data } = useQuery(GET_VIDEO_LIST, {
    variables:{ 
      "endIndex": 10,
      "startIndex": 1
  }
  });

  console.log(data);

  // check for errors
  if (error) {
    return <p>:( an error happened</p>;
  }

  console.log('data', data)

   /**
   * Handle on tab change
   */
  const filterChangeHandler = (key: string) =>{
    console.log('key', key)
  }

  const tabChangeHandler = (key: string) =>{
    console.log('key', key)
  }


  const columns =[
    {
      field:"videoID", header:"Video ID"
    }, 
    {
      field:"thumbnail", header:"Thumbnail"
    }, 
    {
      field:"videoTitle", header:"Video Title"
    }, 
    {
      field:"fileSize", header:"File Size(MB)"
    }, 
    {
      field:"videoLength", header:"Video Length"
    }, 
    {
      field:"userName", header:"User Name"
    }, 
    {
      field:"userID", header:"User ID"
    }, 
    {
      field:"fanfareID", header:"Fanfare ID"
    }, 
    {
      field:"userCreatedDate", header:"User Created Date"
    }, 
    {
      field:"uploadData", header:"Upload Data"
    }, 
    {
      field:"uploadDays", header:"Upload Days"
    }, 
    {
      field:"uploadCountry", header:"Upload Country"
    }, 
    {
      field:"uploadedIP", header:"Uploaded IP"
    }, 
    {
      field:"deviceType", header:"Device Type"
    }, 
    {
      field:"videoLengthGroup", header:"Video Length Group"
    }, 
    {
      field:"totalViews", header:"Total Views"
    }, 
    {
      field:"totalWatchTime", header:"Total Watch Time"
    }, 
    {
      field:"totalLikes", header:"Total Likes"
    }, 
    {
      field:"totalComments", header:"Total Comments"
    }, 
    {
      field:"totalShares", header:"Total Shares"
    }, 
    {
      field:"downloads", header:"Downloads"
    }, 
    {
      field:"contestID", header:"Contest ID"
    }, 
    {
      field:"contestTitle", header:"Contest Title"
    }, 
    {
      field:"contestWinningPosition", header:"Contest Winning Position"
    }, 
    {
      field:"allTimeRankingScore", header:"All Time Ranking Score"
    }, 
    {
      field:"trendingScore", header:"Tranding Score"
    }, 
    {
      field:"activeAwarenessDays", header:"Active Awareness Days"
    }, 
    {
      field:"activeProductdays", header:"Active Product Days"
    }, 
    {
      field:"totalMonitization", header:"Total Monetization (Till Yestarday)"
    }, 
    {
      field:"activeDailyMonetization", header:"Active Daily Monetization"
    }, 
    {
      field:"addReach", header:"ADD Reach"
    }, 
    {
      field:"awarenessClick", header:"Awareness Click"
    }, 
    {
      field:"trafficGeneration", header:"Traffic Generation"
    }, 
    {
      field:"rightSellingStatus", header:"Right Selling Status"
    }, 
    {
      field:"lastActivityDate", header:"Last Activity Date"
    }, 
    {
      field:"lastActivityTime", header:"Last Activity Time"
    }, 
    {
      field:"currentSatus", header:"Current Status"
    }, 
  ]

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Typography variant='h5' sx={{ mb: 4.5 }}>
              <Box component='span' sx={{ fontWeight: 'bold' }}>
                User Videos
              </Box>
          </Typography>
        </Grid>
      </Grid>
    <Card sx={{ position: 'relative' }}>
      <CardContent sx={{ p: theme => `${theme.spacing(6.75, 7.5)} !important` }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12}>
            <TabbarComponent options={tabs} activekey={"trending"} onChange={tabChangeHandler}/>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FilterComponent  title ='select' onChange = {filterChangeHandler}/>
          </Grid>
          <Grid item xs={12} sm={12}>
            <ListComponent rowsData={allData} columns={columns}/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </ApexChartWrapper>
  )
}

export default AnalyticsCongratulations
