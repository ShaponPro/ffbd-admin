
// ** MUI Imports
import { TextField, InputBase, Box, Container, InputAdornment, Typography } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import Radio from '@mui/material/Radio'

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
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  boxShadow: ' inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)'
}

const typographyStyle = { 
  fontSize: '11px', 
  width: '50%', 
  color: 'black' 
}

const listStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  height: '36px',
  fontSize: '12px',
  color: 'black'
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

export const FilterComponent = (props: props) => {
  return (
    <Container>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {/* search item 1 */}

          <Grid item xs={3} style={gridStyle}>
            <Typography variant='h4' display='inline' style={typographyStyle}>
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
            <Typography variant='h4' display='inline' style={typographyStyle}>
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
            <Typography variant='h4' display='inline' style={typographyStyle}>
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
                  <li {...props} style={listStyle}>
                    {option.title}
                    <Radio style={{ color: '#57CE66' }} checked={selected} />
                  </li>
                )}
                style={{ width: 147, height: 23 }}
                renderInput={params => <TextField variant='standard' {...params} />}
              />
            </Item>
          </Grid>

          {/* search item 4 */}

          <Grid item xs={3} style={gridStyle}>
            <Typography variant='h4' display='inline' style={typographyStyle}>
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
                  <li {...props} style={listStyle}>
                    {option.title}
                    <Radio style={{ color: '#57CE66' }} checked={selected} />
                  </li>
                )}
                style={{ width: 147, height: 23 }}
                renderInput={params => <TextField variant='standard' {...params}  />}
              />
            </Item>
          </Grid>

          {/* search item 5 */}
          <Grid item xs={3} style={gridStyle}>
            <Typography variant='h4' display='inline' style={typographyStyle}>
              Engagement
            </Typography>
            <Item style={itemStyle} >
              <Autocomplete
                multiple
                id='radio-tags-demo'
                options={fields}
                disableCloseOnSelect
                getOptionLabel={option => option.title}
                renderOption={(props, option, { selected }) => (
                  <li {...props} style={listStyle}>
                    {option.title}
                    <Radio style={{ color: '#57CE66' }} checked={selected} />
                  </li>
                )}
                style={{ width: 147, height: 23 }}
                renderInput={params => <TextField variant='standard' {...params}  />}
              />
            </Item>
          </Grid>

          {/* search item 6 */}
          <Grid item xs={3} style={gridStyle}>
            <Typography variant='h4' display='inline' style={typographyStyle}>
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
                  <li {...props} style={listStyle}>
                    {option.title}
                    <Radio style={{ color: '#57CE66' }} checked={selected} />
                  </li>
                )}
                style={{ width: 147, height: 23 }}
                renderInput={params => <TextField variant='standard' {...params}  />}
              />
            </Item>
          </Grid>

          {/* search item 7 */}

          <Grid item xs={3} style={gridStyle}>
            <Typography variant='h4' display='inline' style={typographyStyle}>
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
            <Typography variant='h4' display='inline' style={typographyStyle}>
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
            <Typography variant='h4' display='inline' style={typographyStyle}>
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
                  <li {...props} style={listStyle}>
                    {option.title}
                    <Radio style={{ color: '#57CE66' }} checked={selected} />
                  </li>
                )}
                style={{ width: 147, height: 23 }}
                renderInput={params => <TextField variant='standard' {...params}  />}
              />
            </Item>
          </Grid>
          {/* search item 10 */}
          <Grid item xs={3} style={gridStyle}>
            <Typography variant='h4' display='inline' style={typographyStyle}>
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
                  <li {...props} style={listStyle}>
                    {option.title}
                    <Radio style={{ color: '#57CE66' }} checked={selected} />
                  </li>
                )}
                style={{ width: 147, height: 23 }}
                renderInput={params => <TextField variant='standard' {...params} />}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
