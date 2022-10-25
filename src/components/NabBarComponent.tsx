
import React, { useState } from "react";
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Close from 'mdi-material-ui/Close'

const createBrandText = {
  fontFamily: 'Open Sans',
  fontSize: '36px',
  fontWeight: '700',
  lineHeight: '36px',
  letterSpacing: '0em',
  textAlign: 'left',
  color: 'black'
}

const createBrandBox = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 20px'
}

// const closeButton = {
//     background: '#ee5d08',
//     color: 'white !important',
//     padding: ' 8px'
// }

export default function NabBarComponent() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' style={{ backgroundColor: '#161F29', paddingTop: '18px' }}>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <img src='https://i.ibb.co/xsXFcPG/fanfare-logo.png' width='152px' height='30px' alt='logo' />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <Box sx={createBrandBox}>
        <Typography sx={createBrandText}>Create Brand</Typography>
        <Close />
      </Box>
    </>
  )
}
