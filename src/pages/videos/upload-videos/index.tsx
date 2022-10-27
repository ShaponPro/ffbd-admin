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
import UploadTypeComponent from 'src/components/UploadTypeComponent'
import Tutorial from './Tutorial'




const tabs = [
  {
    key: 'upload',
    title: 'Upload Now'
  },
  {
    key: 'drafts',
    title: 'Drafts'
  }
]

const AnalyticsCongratulations = () => {
  /**
   * Handle on tab change
   */
  const tabChangeHandler = (key: string) => {
    console.log('key', key)
  }

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Typography variant='h3' sx={{ mb: 4.5 }}>
            <Box component='span' sx={{ fontWeight: 'bold' }}>
              Upload a Video
            </Box>
          </Typography>
        </Grid>
      </Grid>
      <Card sx={{ position: 'relative' }}>
        <CardContent sx={{ p: theme => `${theme.spacing(9, 7.5,9,7.5)} !important` }}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12}>
              <TabbarComponent options={tabs} activekey={'drafts'} onChange={tabChangeHandler} />
            </Grid>
            <Grid container direction='row' justifyContent='center' alignItems='center' item xs={12} sm={12}>
              <UploadTypeComponent  />
            </Grid>
            <Grid item xs={12} sm={12}>
              
            <Tutorial/>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ApexChartWrapper>
  )
}

export default AnalyticsCongratulations
