import React from 'react'
import { TextField, InputBase, Box, Container, InputAdornment } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import Radio from '@mui/material/Radio'
import SearchIcon from '@mui/icons-material/Search'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

type props = {
  title: string
  // fields: object[];
  // onChange: (fields: object[]) => void;
  // style: React.CSSProperties;
}

const fields = [{ title: 'Like' }, { title: 'Comment' }, { title: 'Share' }, { title: 'Download' }]

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))
export const FilterComponent = (props: props) => {
  return (
    <div>
      <Container>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {/* search item 1 */}

            <Grid item xs={3}>
              <Item>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 10px'
                  }}
                >
                  <div>
                    <b>User Id/Name</b>
                  </div>
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      outline: 'none',
                      boxShadow: '2px 5px 20px rgba(22, 31, 41, 0.1)',
                      background: ' #FFFFFF'
                    }}
                  >
                    <InputBase placeholder='search and filter' />
                    <InputAdornment position='end'>
                      <SearchIcon />
                    </InputAdornment>
                  </Box>
                </div>
              </Item>
            </Grid>

            {/* search item 2 */}

            <Grid item xs={3}>
              <Item>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 10px'
                  }}
                >
                  <div>
                    <b>User Id/Name</b>
                  </div>
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      outline: 'none',
                      boxShadow: '2px 5px 20px rgba(22, 31, 41, 0.1)',
                      background: ' #FFFFFF'
                    }}
                  >
                    <InputBase placeholder='search and filter' />
                    <InputAdornment position='end'>
                      <SearchIcon />
                    </InputAdornment>
                  </Box>
                </div>
              </Item>
            </Grid>

            {/* search item 3 */}
            <Grid item xs={3}>
              <Item>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    paddingBottom: ' 10px'
                  }}
                >
                  <div>
                    <b>Current Status</b>
                  </div>
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
                    style={{ width: 300 }}
                    renderInput={params => <TextField {...params} placeholder='search and filter' />}
                  />
                </div>
              </Item>
            </Grid>

            {/* search item 4 */}
            <Grid item xs={3}>
              <Item>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    paddingBottom: ' 10px'
                  }}
                >
                  <div>
                    <b>Current Status</b>
                  </div>
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
                    style={{ width: 300 }}
                    renderInput={params => <TextField {...params} placeholder='search and filter' />}
                  />
                </div>
              </Item>
            </Grid>

            {/* search item 5 */}
            <Grid item xs={3}>
              <Item>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    paddingBottom: ' 10px'
                  }}
                >
                  <div>
                    <b>Engagement</b>
                  </div>
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
                    style={{ width: 300 }}
                    renderInput={params => <TextField {...params} placeholder='search and filter' />}
                  />
                </div>
              </Item>
            </Grid>

            {/* search item 6 */}
            <Grid item xs={3}>
              <Item>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    paddingBottom: ' 10px'
                  }}
                >
                  <div>
                    <b>Current Status</b>
                  </div>
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
                    style={{ width: 300 }}
                    renderInput={params => <TextField {...params} placeholder='search and filter' />}
                  />
                </div>
              </Item>
            </Grid>

            {/* search item 7 */}
            <Grid item xs={3}>
              <Item>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 10px'
                  }}
                >
                  <div>
                    <b>User Id/Name</b>
                  </div>
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      outline: 'none',
                      boxShadow: '2px 5px 20px rgba(22, 31, 41, 0.1)',
                      background: ' #FFFFFF'
                    }}
                  >
                    <InputBase placeholder='search and filter' />
                    <InputAdornment position='end'>
                      <SearchIcon />
                    </InputAdornment>
                  </Box>
                </div>
              </Item>
            </Grid>

            {/* search item 8 */}
            <Grid item xs={3}>
              <Item>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 10px'
                  }}
                >
                  <div>
                    <b>User Id/Name</b>
                  </div>
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      outline: 'none',
                      boxShadow: '2px 5px 20px rgba(22, 31, 41, 0.1)',
                      background: ' #FFFFFF'
                    }}
                  >
                    <InputBase placeholder='search and filter' />
                    <InputAdornment position='end'>
                      <SearchIcon />
                    </InputAdornment>
                  </Box>
                </div>
              </Item>
            </Grid>

            {/* search item 9 */}
            <Grid item xs={3}>
              <Item>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    paddingBottom: ' 10px'
                  }}
                >
                  <div>
                    <b>Current Status</b>
                  </div>
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
                    style={{ width: 300 }}
                    renderInput={params => <TextField {...params} placeholder='search and filter' />}
                  />
                </div>
              </Item>
            </Grid>

            {/* search item 10 */}
            <Grid item xs={3}>
              <Item>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    paddingBottom: ' 10px'
                  }}
                >
                  <div>
                    <b>Current Status</b>
                  </div>
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
                    style={{ width: 300 }}
                    renderInput={params => <TextField {...params} placeholder='search and filter' />}
                  />
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}
