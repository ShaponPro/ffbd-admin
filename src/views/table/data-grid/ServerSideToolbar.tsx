// ** React Imports
import { ChangeEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'

import { GridToolbarContainer, GridToolbarExport, } from '@mui/x-data-grid'

// ** Icons Imports

//Import Search Component
import SearchComponent from '../../../components/SearchComponent'

// ** Data

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

const StyledFormControl = styled(FormControl)({
  borderRadius: '0px',
  height: '36px',
  width: '80px'
})

const StyledSelect = styled(Select)({
  borderRadius: '0px',
  height: '36px',
  width: '80px',
  boxShadow: 'inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)'
})

const StyledSelectReport = styled(Select)({
  borderRadius: '20px',
  height: '36px',
  width: '126px',
  boxShadow: 'inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)', 

  '& .MuiSelect-select': {
    transition: '0s !important'
  }
})

const ServerSideToolbar = (props: Props) => {
  const [value, setValue] = useState<string>('')
  console.log(value)

  return (
    <StyledGridToolbarContainer>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <Typography>Show</Typography>
        <StyledFormControl sx={{ m: 2 }} size='small'>
          <StyledSelect></StyledSelect>
        </StyledFormControl>
        <Typography>entries</Typography>
      </Box>
      <Box>
        <SearchComponent
          placeholder='search and filter'
          value={value}
          onChange={(value: string) => setValue(value)}
          style={{ display: 'flex', margin: '10px' }}
        />
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <FormControl sx={{ m: 2 }} size='small'>
          <StyledSelectReport><GridToolbarExport /></StyledSelectReport>
        </FormControl>
      </Box>

      {/* <Box>
        <GridToolbar />
      </Box> */}

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
