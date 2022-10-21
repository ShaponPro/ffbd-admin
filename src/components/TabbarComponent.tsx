// ** React Imports
import {
  SyntheticEvent,
  useState
} from 'react'

// ** MUI Imports
import TabContext from '@mui/lab/TabContext'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'

type Props = {
  title: string
  onChange?: (value: string) => void
  style?: React.CSSProperties
}

// Styled TabList component
const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent'
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: 'white !important',
    fontweight: 400,
    fontSize: '16px',

    height: '40px',
    width: '200px !important',
    textTransform: 'capitalize',
    background: '#161F29 !important'
  },
  '& .MuiTab-root': {
    marginLeft: '10px',
    textTransform: 'capitalize',
    fontweight: 700,
    fontSize: '16px !important',
    height: '40px',
    width: '200px !important',

    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid rgba(22, 31, 41, 0.5)',
    color: '#161F29',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}))

// props type-----------

// type TabPanelProps = {
//   children?: React.ReactNode
//   index: number
//   value: number
//   title: string
//   status: string
// }

// //  tabpanel function create

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props

//   //   conditional rendering tabbar
//   return (
//     <div
//       role='tabpanel'
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   )
// }
// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`
//   }
// }

const TabbarComponent = (props: Props) => {
  // ** State
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  console.log(value)

  return (
    <TabContext value={value}>
      <TabList onChange={handleChange} aria-label='customized tabs example'>
        <Tab value='1' label='Regular' />
        <Tab value='2' label='Active Monetization' />
        <Tab value='3' label='Trending' />
        <Tab value='4' label='Customization' />
      </TabList>
      <TabPanel value='1'>
        <Typography>
          Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly
          cake caramels brownie gummies.
        </Typography>
      </TabPanel>
      <TabPanel value='2'>
        <Typography>
          Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
          sesame snaps halvah.
        </Typography>
      </TabPanel>
      <TabPanel value='3'>
        <Typography>
          Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
          carrot cake gummi bears.
        </Typography>
      </TabPanel>
      <TabPanel value='4'>
        <Typography>
          Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
          carrot cake gummi bears.
        </Typography>
      </TabPanel>
    </TabContext>
  )
}

export default TabbarComponent
