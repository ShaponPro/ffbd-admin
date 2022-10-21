// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid, { GridProps } from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Components
import TabbarComponent from 'src/components/TabbarComponent'
import ListComponent from 'src/components/ListComponent'

// ** Hook
import { useSettings } from 'src/@core/hooks/useSettings'

// Styled Grid component
const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    order: -1,
    display: 'flex',
    justifyContent: 'center'
  }
}))

// Styled component for the image
const Img = styled('img')(({ theme }) => ({
  right: 0,
  bottom: 0,
  width: 298,
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    width: 250,
    position: 'static'
  }
}))

const AnalyticsCongratulations = () => {
  // ** Hook
  const { settings } = useSettings()

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
            <TabbarComponent/>
          </Grid>
          <Grid item xs={12} sm={12}>
            // Filter Component
          </Grid>
          <Grid item xs={12} sm={12}>
            <ListComponent/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </ApexChartWrapper>
  )
}

export default AnalyticsCongratulations
