import * as React from 'react'

import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'

// props type-----------

type TabPanelProps = {
  children?: React.ReactNode
  index: number
  value: number
  title: string
  status: string
}

//  tabpanel function create

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  //   conditional rendering tabbar
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const TabbarComponent = () => {
  const [value, setValue] = React.useState(0)

  // on click nabbar state change
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            height: '66px',

            background: '#ECF8FF',
            boxShadow: '1px 2px 3px rgba(22, 31, 41, 0.2)',

            padding: '13px 20px'
          }}
        >
          <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
            <Tab label='Regular' {...a11yProps(0)} />
            <Tab label='Active Monitization' {...a11yProps(1)} />
            <Tab label='Trending' {...a11yProps(2)} />
            <Tab label='Customized' {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Regular
        </TabPanel>
        <TabPanel value={value} index={1}>
          Active Monitization
        </TabPanel>
        <TabPanel value={value} index={2}>
          Trending
        </TabPanel>
        <TabPanel value={value} index={3}>
          Customized
        </TabPanel>
      </Box>
    </>
  )
}

export default TabbarComponent
