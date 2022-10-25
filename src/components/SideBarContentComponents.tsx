// import {
//   NavGroup,
//   NavLink,
//   VerticalNavItemsType
// } from 'src/@core/layouts/types'

// import { Box } from '@mui/material'

import * as React from 'react'

// import VerticalNavItems from '../@core/layouts/components/vertical/navigation/VerticalNavItems'
import Box from '@mui/material/Box'
// interface Props {
//   verticalNavItems?: VerticalNavItemsType
//   navVisible?: boolean
//   parent?: NavGroup
//   item: NavGroup
//   children?: (NavGroup | NavLink)[]
// }
import Step from '@mui/material/Step'
import StepContent from '@mui/material/StepContent'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import Typography from '@mui/material/Typography'

const steps = [
  {
    label: 'User Video'
  },
  {
    label: ' Brand Video '
  },
  {
    label: 'Tutorial'
  },
  {
    label: 'Youtube Crawler'
  }
]

const SideBarContentComponents = () => {
  //   const { item, children, navVisible } = props

  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Box
      style={{
        height: '100%',
        width: '185px',
        background: '#FFFFFF',
        boxShadow: '0px 5px 10px rgba(22, 31, 41, 0.1)'
      }}
    >
      {/* <VerticalNavItems {...props} navVisible={navVisible} verticalNavItems={item} /> */}
      <ul
        style={{
          fontWeight: 700,
          fontSize: '16px',
          paddingBottom: '32px'
        }}
      >
        Videos
        <li
          style={{
            paddingTop: '32px',
            fontWeight: 400,
            paddingBottom: '20px',
            lineHeight: ' 100%',

            color: '#161F29'
          }}
        >
          Video Analytics
        </li>
        <li
          style={{
            paddingTop: '32px',
            fontWeight: 400,
            paddingBottom: '22px',
            lineHeight: ' 100%',

            color: '#161F29'
          }}
        >
          List Video
        </li>
        <Box sx={{ maxWidth: 400 }}>
          <Stepper orientation='vertical'>
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel optional={index === 2 ? <Typography variant='caption'></Typography> : null}>
                  {step.label}
                </StepLabel>
                <StepContent>
                  {/* <Box sx={{ mb: 2 }}>
                    <div>
                      <Button variant='contained' onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                      </Button>
                      <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                        Back
                      </Button>
                    </div>
                  </Box> */}
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
        {/* <li
          style={{
            paddingTop: '32px',
            fontWeight: 400,
            paddingBottom: '24px',
            lineHeight: ' 100%',

            color: '#161F29'
          }}
        >
          User Video
        </li>
        <li
          style={{
            paddingTop: '32px',
            fontWeight: 400,
            paddingBottom: '24px',
            lineHeight: ' 100%',

            color: '#161F29'
          }}
        >
          {' '}
          Brand Videos
        </li>
        <li
          style={{
            paddingTop: '32px',
            fontWeight: 400,
            paddingBottom: '24px',
            lineHeight: ' 100%',

            color: '#161F29'
          }}
        >
          Tutorial
        </li>
        <li
          style={{
            paddingTop: '32px',
            fontWeight: 400,
            paddingBottom: '24px',
            lineHeight: ' 100%',

            color: '#161F29'
          }}
        >
          Youtube Crawler
        </li> */}
        <li
          style={{
            paddingTop: '32px',
            fontWeight: 400,
            paddingBottom: '20px',
            lineHeight: ' 100%',

            color: '#161F29'
          }}
        >
          Upload a video
        </li>
        <li
          style={{
            paddingTop: '32px',
            fontWeight: 400,
            paddingBottom: '24px',
            lineHeight: ' 100%',

            color: '#161F29'
          }}
        >
          Download code
        </li>
        <li
          style={{
            paddingTop: '32px',
            fontWeight: 400,
            paddingBottom: '24px',
            lineHeight: ' 100%',

            color: '#161F29'
          }}
        >
          Content Restriction
        </li>
      </ul>
    </Box>
  )
}

export default SideBarContentComponents
