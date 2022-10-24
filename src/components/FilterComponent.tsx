import { useState } from 'react'
// ** MUI Imports
import { TextField, InputBase, Box, Container, InputAdornment, Typography, Input } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material'

// ** Icons Imports
import SearchIcon from '@mui/icons-material/Search'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

//**style classes
const gridStyle = {
  display: 'flex',
  alignItems: 'center'
}

const itemStyle = {
  borderRadius: '0',
  padding: '5px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  boxShadow: ' inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)'

  //border: '2px solid red'
}

const typographyStyle = {
  fontSize: '11px',
  width: '150px',
  color: 'black'
}

const listStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  height: '36px',
  fontSize: '12px',
  color: 'black',
  border: '2px solid green'
}

//**props

type props = {
  title: string

  // fields: object[];
  // onChange: (fields: object[]) => void;
  // style: React.CSSProperties;
}

const fields = [{ title: 'Like' }, { title: 'Comment' }, { title: 'Share' }, { title: 'Download' }]

//styling

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2
}))

const StyledSelect = styled(Select)({
  borderRadius: '0px',
  background: 'white',
  height: '36px',
  boxShadow: 'inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)',

  '& .MuiSelect-select': {
    borderRadius: '0px'
  }

  //border: '2px solid black'
})

const StyledContainer = styled(Container)({
  p: 2,
  pb: 0,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'space-between'
})

const StyledGrid = styled(Grid)({
  display: 'flex',
  alignItems: 'center',

  //border: '2px solid red',
  margin: '5px'
})
const StyledInput = styled(Input)({
  //border: '2px solid red',
  display: 'block',
  margin: '10px 15px 0px', 
  outline:'0px',

  // "&:hover":{
  //   border: '2px solid red'
  // },
  width: '20px',

})

const radioBtnContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  border:"2px solid red",
  transition: '.15s ease-in-out',
  margin: '5px 5px 0px',
  fontSize: '12px', 
}

const StyledFormControl = styled(FormControl)({
  border: '2px solid red'
})

export const FilterComponent = (props: props) => {
  const [age, setAge] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <StyledGrid>
          {/* search item 1 */}
          <Typography variant='h4' display='flex' style={typographyStyle}>
            User Id/Name
          </Typography>
          <Item style={itemStyle}>
            <InputBase placeholder='Search and Filter' style={{ fontSize: '10px' }} />
            <InputAdornment position='end'>
              <SearchIcon />
            </InputAdornment>
          </Item>
        </StyledGrid>
        {/* search item 2 */}
        <StyledGrid>
          <Typography variant='h4' display='flex' style={typographyStyle}>
            Uploaded Country
          </Typography>
          <Item style={itemStyle}>
            <InputBase placeholder='Search and Filter' style={{ fontSize: '10px' }} />
            <InputAdornment position='end'>
              <SearchIcon />
            </InputAdornment>
          </Item>
        </StyledGrid>

        {/* search item 3 */}
        <StyledGrid>
          <Typography variant='h4' display='flex' style={typographyStyle}>
            Upload Peried{' '}
          </Typography>
          <StyledFormControl sx={{ minWidth: 120 }} size='small'>
            <StyledSelect>
              <label style={radioBtnContainerStyle}>Today</label>
              <label style={radioBtnContainerStyle}>Last 7 Days</label>
              <label style={radioBtnContainerStyle}>Last 15 Days</label>
              <label style={radioBtnContainerStyle}>Last 30 Days</label>
              <label style={radioBtnContainerStyle}>Last 60 Days</label>
              <label style={radioBtnContainerStyle}>Last 90 Days</label>
              
              <label style={radioBtnContainerStyle}>
                <b>Custom Range</b>
                <StyledInput type='Radio' name='name' />
              </label>
            </StyledSelect>
          </StyledFormControl>
        </StyledGrid>
        {/* search item 4 */}
        <StyledGrid>
          <Typography variant='h4' display='flex' style={typographyStyle}>
            Video Length Group
          </Typography>
          <StyledFormControl sx={{ minWidth: 120 }} size='small'>
            <StyledSelect>
              <label  style={radioBtnContainerStyle} >
                Upto 30s
                <StyledInput type='Radio' name='name'  />
              </label>
              <label style={radioBtnContainerStyle}>
                31s-60s
                <StyledInput type='Radio' name='name' />
              </label>
              <label style={radioBtnContainerStyle}>
                61s-180s
                <StyledInput type='Radio' name='name' />
              </label>
              <label style={radioBtnContainerStyle}>
                181s-300s
                <StyledInput type='Radio' name='name' />
              </label>
            </StyledSelect>
          </StyledFormControl>
        </StyledGrid>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <StyledGrid>
          <Typography variant='h4' display='flex' style={typographyStyle}>
            Emgagement
          </Typography>
          <StyledFormControl sx={{ minWidth: 120 }} size='small'>
            <StyledSelect>
              <label style={radioBtnContainerStyle}>
                Likes
                <StyledInput type='Radio' name='name' />
              </label>
              <label style={radioBtnContainerStyle}>
                Comments
                <StyledInput type='Radio' name='name' />
              </label>
              <label style={radioBtnContainerStyle}>
                Shares
                <StyledInput type='Radio' name='name' />
              </label>
              <label style={radioBtnContainerStyle}>
                Download
                <StyledInput type='Radio' name='name' />
              </label>
            </StyledSelect>
          </StyledFormControl>
        </StyledGrid>
        {/* search item 4 */}
        <StyledGrid>
          <Typography variant='h4' display='flex' style={typographyStyle}>
            AD & Monetization
          </Typography>
          <StyledFormControl sx={{ minWidth: 120 }} size='small'>
            <StyledSelect>
              <label style={radioBtnContainerStyle}>
                Awareness AD
                <StyledInput type='Radio' name='name' />
              </label>
              <label style={radioBtnContainerStyle}>
                Product Added
                <StyledInput type='Radio' name='name' />
              </label>
              <label style={radioBtnContainerStyle}>
                Active Awarness
                <StyledInput type='Radio' name='name' />
              </label>
              <label style={radioBtnContainerStyle}>
                Active Product
                <StyledInput type='Radio' name='name' />
              </label>
            </StyledSelect>
          </StyledFormControl>
        </StyledGrid>
        <StyledGrid>
          {/* search item 1 */}
          <Typography variant='h4' display='flex' style={typographyStyle}>
            Video Contest
          </Typography>
          <Item style={itemStyle}>
            <InputBase placeholder='Search and Filter' style={{ fontSize: '10px' }} />
            <InputAdornment position='end'>
              <SearchIcon />
            </InputAdornment>
          </Item>
        </StyledGrid>
        {/* search item 2 */}
        <StyledGrid>
          <Typography variant='h4' display='flex' style={typographyStyle}>
            Music Creator
          </Typography>
          <Item style={itemStyle}>
            <InputBase placeholder='Search and Filter' style={{ fontSize: '10px' }} />
            <InputAdornment position='end'>
              <SearchIcon />
            </InputAdornment>
          </Item>
        </StyledGrid>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <StyledGrid>
          <Typography variant='h4' display='flex' style={typographyStyle}>
            Current Status
          </Typography>
          <StyledFormControl sx={{ minWidth: 120 }} size='small'>
            <StyledSelect>
              <label style={radioBtnContainerStyle}>
                Published
                <StyledInput type='Radio' name='name' />
              </label>
              <label style={radioBtnContainerStyle}>
                Failed
                <StyledInput type='Radio' name='name' />
              </label>
              <label style={radioBtnContainerStyle}>
                Uploading
                <StyledInput type='Radio' name='name' />
              </label>
              <label style={radioBtnContainerStyle}>
                Suspended
                <StyledInput type='Radio' name='name' />
              </label>
              <label style={radioBtnContainerStyle}>
                Deleted
                <StyledInput type='Radio' name='name' />
              </label>
            </StyledSelect>
          </StyledFormControl>
        </StyledGrid>
        {/* search item 4 */}
        <StyledGrid>
          <Typography variant='h4' display='flex' style={typographyStyle}>
            Right Selling Status
          </Typography>
          <StyledFormControl sx={{ minWidth: 120 }} size='small'>
            <StyledSelect>
              <label style={radioBtnContainerStyle}>
                Free
                <StyledInput type='Radio' name='name' />
              </label>
              <label style={radioBtnContainerStyle}>
                Sold
                <StyledInput type='Radio' name='name' />
              </label>
              <label style={radioBtnContainerStyle}>
                Processing
                <StyledInput type='Radio' name='name' />
              </label>
              <label style={radioBtnContainerStyle}>
                Claimed
                <StyledInput type='Radio' name='name' />
              </label>
            </StyledSelect>
          </StyledFormControl>
        </StyledGrid>
      </Box>
    </>
  )
}
