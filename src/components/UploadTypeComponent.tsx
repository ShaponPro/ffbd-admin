// ** React Imports
import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import styled from '@emotion/styled'
// import Select ,  { SelectChangeEvent } from '@mui/material/Select'

const UploadVideoContainer = styled.div({})

type props = {
  title: string[]
  placeholder: string
  // default: object;
  //selected: object;
  // options: object[];
  //onChange: (fields: object[]) => void;
  style?: React.CSSProperties
}
const UploadTypeComponent = (props: props) => {
  //  const [fields, setFields] = useState<object[]>(props.fields || '')
  //   const handleChange = (event: SelectChangeEvent) => {
  //     setFields(event.target.fields)

  return (
    <UploadVideoContainer
      style={{
        background: '#57CE66',
        width: '419px',
        justifyContent: 'center',
        gap: '10px',
        boxShadow: '1px 2px 25px rgba(87, 206, 102, 0.5)',
        borderRadius: '80px',
        padding: '20px',
        ...props.style
      }}
    >
      <Typography variant='h4' style={{ color: ' #FFFFFF', fontSize: '17px', paddingTop: '20px' }}>
        <b>Upload Type</b>
      </Typography>

      <FormControl
        sx={{ m: 1, minWidth: 230, minHeight: 40 }}
        style={{
          background: '#FFFFFF',
          borderStyle: 'none',
          boxShadow: 'inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)',
          borderRadius: '0'
        }}
      >
        {/* <Select  value={fields} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }} placeholder={props.placeholder}/> */}
        <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} placeholder={props.placeholder}>
          <MenuItem value=''>
            <em style={{ color: 'rgba(22, 31, 41, 0.25)' }}> Select Item </em>
          </MenuItem>
          <MenuItem>{props.title[0]}</MenuItem>
          <MenuItem>{props.title[1]}</MenuItem>
          <MenuItem>{props.title[2]}</MenuItem>
          <MenuItem>{props.title[3]}</MenuItem>

          {/* <MenuItem> {title.map(title => (
            <MenuItem key={title} value={props.title}>
              {props.title}
              </MenuItem> */}
        </Select>
      </FormControl>
    </UploadVideoContainer>
  )
}

export default UploadTypeComponent
