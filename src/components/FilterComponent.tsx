import React from 'react'

// ** MUI Imports
import { TextField, InputBase, Box, Container, InputAdornment, Typography } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import Radio from '@mui/material/Radio'

// ** Icons Imports
import SearchIcon from '@mui/icons-material/Search'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

//style classes

const gridStyle = {
  display: 'flex',
  alignItems: 'center'
}

const itemStyle = {
  borderRadius: '0',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  boxShadow: ' inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)'
}

type props = {
  title: string
  // fields: object[];
  // onChange: (fields: object[]) => void;
  // style: React.CSSProperties;
}

const fields = [{ title: 'Like' }, { title: 'Comment' }, { title: 'Share' }, { title: 'Download' }]

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2
}))
export const FilterComponent = (props: props) => {
  return (
    <div>
      <Container>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

            {/* search item 1 */}

            <Grid item xs={3} style={gridStyle}>
              <Typography variant='h4' display='inline' style={{ fontSize: '12px', width: '50%' }}>
                User Id/Name
              </Typography>
              <Item style={itemStyle}>
                <InputBase placeholder='Search and Filter' style={{ fontSize: '10px' }} />
                <InputAdornment position='end'>
                  <SearchIcon />
                </InputAdornment>
              </Item>
            </Grid>

            {/* search item 2 */}

            <Grid item xs={3} style={gridStyle}>
              <Typography variant='h4' display='inline' style={{ fontSize: '12px', width: '50%' }}>
                Uploaded Country
              </Typography>
              <Item style={itemStyle}>
                <InputBase placeholder='Search and Filter' style={{ fontSize: '10px' }} />
                <InputAdornment position='end'>
                  <SearchIcon />
                </InputAdornment>
              </Item>
            </Grid>

            {/* search item 3 */}

            <Grid item xs={3} style={gridStyle}>
              <Typography variant='h4' display='inline' style={{ fontSize: '12px', width: '50%' }}>
              Upload Period
              </Typography>
              <Item style={itemStyle}>
                <Autocomplete
                  multiple
                  id='radio-tags-demo'
                  options={fields}
                  disableCloseOnSelect
                  getOptionLabel={option => option.title}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Radio style={{ marginRight: 8 }} checked={selected} />
                      {option.title}
                    </li>
                  )}
                  style={{ width: 200 }}
                  renderInput={params => <TextField {...params} placeholder='Select Date' />}
                />
              </Item>
            </Grid>

            {/* search item 4 */}

            <Grid item xs={3} style={gridStyle}>
              <Typography variant='h4' display='inline' style={{ fontSize: '12px', width: '50%' }}>
              Video Length Group
              </Typography>
              <Item style={itemStyle}>
                <Autocomplete
                  multiple
                  id='radio-tags-demo'
                  options={fields}
                  disableCloseOnSelect
                  getOptionLabel={option => option.title}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Radio style={{ marginRight: 8 }} checked={selected} />
                      {option.title}
                    </li>
                  )}
                  style={{ width: 200 }}
                  renderInput={params => <TextField {...params} placeholder='Select Item' />}
                />
              </Item>
            </Grid>

            {/* search item 5 */}
            <Grid item xs={3} style={gridStyle}>
              <Typography variant='h4' display='inline' style={{ fontSize: '12px', width: '50%' }}>
              Engagement
              </Typography>
              <Item style={itemStyle}>
                <Autocomplete
                  multiple
                  id='radio-tags-demo'
                  options={fields}
                  disableCloseOnSelect
                  getOptionLabel={option => option.title}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Radio style={{ marginRight: 8 }} checked={selected} />
                      {option.title}
                    </li>
                  )}
                  style={{ width: 200 }}
                  renderInput={params => <TextField {...params} placeholder='Select Item' />}
                />
              </Item>
            </Grid>

            {/* search item 6 */}
            <Grid item xs={3} style={gridStyle}>
              <Typography variant='h4' display='inline' style={{ fontSize: '12px', width: '50%' }}>
              AD & Monetization
              </Typography>
              <Item style={itemStyle}>
                <Autocomplete
                  multiple
                  id='radio-tags-demo'
                  options={fields}
                  disableCloseOnSelect
                  getOptionLabel={option => option.title}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Radio style={{ marginRight: 8 }} checked={selected} />
                      {option.title}
                    </li>
                  )}
                  style={{ width: 200 }}
                  renderInput={params => <TextField {...params} placeholder='Select Item' />}
                />
              </Item>
            </Grid>

            {/* search item 7 */}

            <Grid item xs={3} style={gridStyle}>
              <Typography variant='h4' display='inline' style={{ fontSize: '12px', width: '50%' }}>
              Video Contest
              </Typography>
              <Item style={itemStyle}>
                <InputBase placeholder='Search and Filter' style={{ fontSize: '10px' }} />
                <InputAdornment position='end'>
                  <SearchIcon />
                </InputAdornment>
              </Item>
            </Grid>

            {/* search item 8 */}

            <Grid item xs={3} style={gridStyle}>
              <Typography variant='h4' display='inline' style={{ fontSize: '12px', width: '50%' }}>
              Music Creator
              </Typography>
              <Item style={itemStyle}>
                <InputBase placeholder='Search and Filter' style={{ fontSize: '10px' }} />
                <InputAdornment position='end'>
                  <SearchIcon />
                </InputAdornment>
              </Item>
            </Grid>

            {/* search item 9 */}
            <Grid item xs={3} style={gridStyle}>
              <Typography variant='h4' display='inline' style={{ fontSize: '12px', width: '50%' }}>
              Current Status
              </Typography>
              <Item style={itemStyle}>
                <Autocomplete
                  multiple
                  id='radio-tags-demo'
                  options={fields}
                  disableCloseOnSelect
                  getOptionLabel={option => option.title}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Radio style={{ marginRight: 8 }} checked={selected} />
                      {option.title}
                    </li>
                  )}
                  style={{ width: 200 }}
                  renderInput={params => <TextField {...params} placeholder='Select Item' />}
                />
              </Item>
            </Grid>
            {/* search item 10 */}
            <Grid item xs={3} style={gridStyle}>
              <Typography variant='h4' display='inline' style={{ fontSize: '12px', width: '50%' }}>
              Right Selling Status
              </Typography>
              <Item style={itemStyle}>
                <Autocomplete
                  multiple
                  id='radio-tags-demo'
                  options={fields}
                  disableCloseOnSelect
                  getOptionLabel={option => option.title}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Radio style={{ marginRight: 8 }} checked={selected} />
                      {option.title}
                    </li>
                  )}
                  style={{ width: 200 }}
                  renderInput={params => <TextField {...params} placeholder='Select Item' />}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}
