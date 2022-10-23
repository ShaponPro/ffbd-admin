// ** React Imports
<<<<<<< HEAD
import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import styled from '@emotion/styled'
// import Select ,  { SelectChangeEvent } from '@mui/material/Select'

const UploadVideoContainer = styled.div({})
=======
import * as React from 'react'
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled'
import { styled } from '@mui/system'
>>>>>>> 42153cc921257aab806e0da0dcd200ebde42c4d3

//**props define
type props = {
  title: string[]
  placeholder: string
  // default: object;
  //selected: object;
  // options: object[];
  //onChange: (fields: object[]) => void;
<<<<<<< HEAD
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
=======
  //style?: React.CSSProperties
}

//**styles
const Label = styled('label')({
  display: 'block',
  color: ' #FFFFFF',
  fontSize: '16px',
  paddingTop: '6px',
  width: '99px'
})

const Input = styled('input')(({ theme }) => ({
  width: 230,
  border: 'none',
  height: '36px',
  boxShadow: 'inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)',
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  color: theme.palette.mode === 'light' ? '#000' : '#fff'
}))

const Listbox = styled('ul')(({ theme }) => ({
  width: 230,
  marginLeft: 110,
  marginTop: 40,
  padding: 0,
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  overflow: 'auto',
  maxHeight: 230,
  border: '1px solid rgba(0,0,0,.25)',
  '& li.Mui-focused': {
    backgroundColor: '#f5f5f5',
    color: 'black',
    cursor: 'pointer'
  },
  '& li:active': {
    backgroundColor: '#57CE66',
    color: 'white'
  }
}))

interface UploadType {
  title: string
}

//**Video type
const videoTypes = (): UploadType[] => [
  { title: 'On behalf of User' },
  { title: 'On behalf of Board' },
  { title: 'Tutorial' },
  { title: 'Youtube Crawler' }
]

export default function UploadTypeComponent(props: props) {
  const { getRootProps, getInputLabelProps, getInputProps, getListboxProps, getOptionProps, groupedOptions } =
    useAutocomplete({
      id: 'use-autocomplete-demo',
      options: videoTypes(),
      getOptionLabel: option => option.title
    })

  return (
    <div
      style={{
        background: '#57CE66',
        width: '419px',
        height: '76px',
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexDirection: 'row',
        boxShadow: '1px 2px 25px rgba(87, 206, 102, 0.5)',
        borderRadius: '40px',
        padding: '20px 20px'
      }}
    >
      <Label {...getInputLabelProps()}>Upload Type</Label>
      <div {...getRootProps()}>
        <Input {...getInputProps()} placeholder={props.placeholder} />
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as UploadType[]).map((option, index) => (
            <li style={{padding:'5px'}} {...getOptionProps({ option, index })}>{option.title}</li>
          ))}
        </Listbox>
      ) : null}
    </div>
  )
}
>>>>>>> 42153cc921257aab806e0da0dcd200ebde42c4d3
