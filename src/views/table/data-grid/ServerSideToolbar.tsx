// ** React Imports
import { ChangeEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

import { GridToolbarContainer } from '@mui/x-data-grid'
import { GridToolbar } from '@mui/x-data-grid'

// ** Icons Imports

//Import Search Component
import SearchComponent from '../../../components/SearchComponent'

// ** Data
import { top100Films } from 'src/@fake-db/autocomplete'

interface Props {
  value: string
  clearSearch: () => void
  onChange: (e: ChangeEvent) => void
}

const StyledGridToolbarContainer = styled(GridToolbarContainer)({
  p: 2,
  pb: 0,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'space-between'
})

const ServerSideToolbar = (props: Props) => {
  const [value, setValue] = useState<string>('')
  console.log(value)

  return (
    <StyledGridToolbarContainer>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Typography>Show</Typography>
        <Autocomplete
          sx={{ width: 250 }}
          options={top100Films}
          id='autocomplete-outlined'
          getOptionLabel={option => option.title}
          renderInput={params => <TextField {...params} label='20' />}
        />
      </Box>
      <Box>
        <SearchComponent
          placeholder='search and filter'
          value={value}
          onChange={(value: string) => setValue(value)}
          style={{ display: 'flex', margin: '10px' }}
        />
      </Box>

      <Box>
        <GridToolbar />
      </Box>

      {/* <TextField
        variant='standard'
        value={props.value}
        onChange={props.onChange}
        placeholder='Search…'
        InputProps={{
          startAdornment: <Magnify fontSize='small' />,
          endAdornment: (
            <IconButton size='small' title='Clear' aria-label='Clear' onClick={props.clearSearch}>
              <Close fontSize='small' />
            </IconButton>
          )
        }}
        sx={{
          width: {
            xs: 1,
            sm: 'auto'
          },
          m: theme => theme.spacing(1, 0.5, 1.5),
          '& .MuiSvgIcon-root': {
            mr: 0.5
          },
          '& .MuiInput-underline:before': {
            borderBottom: 1,
            borderColor: 'divider'
          }
        }}
      /> */}
    </StyledGridToolbarContainer>
  )
}

export default ServerSideToolbar
