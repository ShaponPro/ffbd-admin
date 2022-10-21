import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

// import { CloseButton } from "react-bootstrap";
const createBrandText = {
    fontFamily: 'Open Sans',
    fontSize: '36px',
    fontWeight: '700',
    lineHeight: '36px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: 'black'
  }
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
      <br/>
      <div className='container d-flex justify-content-between mt-5 mb-3'>
        <Typography variant='h3' style={createBrandText}>Create Brand</Typography>
        {/* <CloseButton className={style.CloseBtn} /> */}
      </div>
    </>
  )
}
