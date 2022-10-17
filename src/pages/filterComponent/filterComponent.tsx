import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search'
import Container from '@mui/material/Container';
// import Autocomplete from '@mui/material/Autocomplete';

export default function BasicTextFields() {
  return (
    <Container >
    <Box 
      style={{
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <div>User ID/Name</div>
      <TextField
        placeholder='search and filter'
        style={{ border: 0, outline: 'none', boxShadow: '2px 5px 20px rgba(22, 31, 41, 0.1)', background: ' #FFFFFF' }}

        InputProps={{
          startAdornment: (
            <InputAdornment  position="end">
             <SearchIcon/> 
            </InputAdornment>
          ),
        }}
      />
    </Box>

<br/>

    <Box
      style={{
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <div>Engagement</div>
      <TextField
        placeholder='select item'
        style={{ border: 0, outline: 'none', boxShadow: '2px 5px 20px rgba(22, 31, 41, 0.1)', background: ' #FFFFFF' }}

        InputProps={{
          startAdornment: (
            <InputAdornment  position="end">
             <SearchIcon/> 
            </InputAdornment>
          ),
        }}
      />
    </Box>

    {/* <Autocomplete
      disablePortal
      id="combo-box-demo"
      options="heloo"
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    /> */}
    </Container>

  )
}
