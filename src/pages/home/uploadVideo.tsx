import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

export default function UploadVideo({title}:any) {
  const [videoType, setUploadTypes] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setUploadTypes(event.target.value)
  }

//   const uploadTypes = ['On behalf of User', 'On behalf of Board', 'Tutorial', 'Youtube Crawler']

  return (
    <div
      style={{
        background: '#57CE66',
        width: '419px',
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        boxShadow: '1px 2px 25px rgba(87, 206, 102, 0.5)',
        borderRadius: '80px',
        padding: '20px'
      }}
    >
      <div style={{ color: ' #FFFFFF', fontSize: '17px', paddingTop: '20px' }}>
        <b>Upload Type</b>
      </div>

      <FormControl
        sx={{ m: 1, minWidth: 230 , minHeight:40}}
        style={{
          background: '#FFFFFF',
          borderStyle: 'none',
          boxShadow: 'inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)',
          borderRadius: '0'
        }}
      >
        <Select value={videoType} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>

          <MenuItem value=''>
            <em style={{ color: 'rgba(22, 31, 41, 0.25)' }}> Select Item </em>
          </MenuItem>
          <MenuItem>{title}</MenuItem>
          <MenuItem>{title}</MenuItem>

          {/* {uploadTypes.map(uploadTypes => (
            <MenuItem key={uploadTypes} value={uploadTypes}>
              {uploadTypes}
            </MenuItem> */}
        </Select>
      </FormControl>
    </div>
  )
}
