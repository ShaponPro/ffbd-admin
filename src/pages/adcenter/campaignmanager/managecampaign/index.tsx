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
import ManageCampaignList from 'src/container/list/ManageCampaignList'
import ListComponent from 'src/components/ListComponent'
import {FilterComponent} from 'src/components/FilterComponent';

import { useQuery } from '@apollo/client'

import { GET_VIDEO_LIST } from 'src/pages/videos/graphql/Queries'


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


  const columns =[
    {
      field:"_id", header:"Video ID"
    }, 
    {
      field:"title", header:"Video Title"
    }, 
    {
      field:"activity_updated", header:"Last Activity Time"
    }, 
    {
      field:"short_id", header:"Short ID"
    },
    {
      field:"likes_count", header:"Total Likes"
    }, 
    {
      field:"comments_count", header:"Total Comments"
    },  
    {
      field:"views_count", header:"Total Views"
    } ,

  ]

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Typography variant='h5' sx={{ mb: 4.5 }}>
              <Box component='span' sx={{ fontWeight: '700', fontSize:'36px' }}>
                Manage Campaign
              </Box>
          </Typography>
        </Grid>
      </Grid>
    <Card sx={{ position: 'relative' }}>
      <CardContent sx={{ p: theme => `${theme.spacing(6.75, 7.5)} !important` }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12}>
            <ManageCampaignList />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </ApexChartWrapper>
  )
}

export default AnalyticsCongratulations
