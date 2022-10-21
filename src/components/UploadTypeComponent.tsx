// ** React Imports
import * as React from 'react'
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled'
import { styled } from '@mui/system'

//**props define
type props = {
  title: string[]
  placeholder: string
  // default: object;
  //selected: object;
  // options: object[];
  //onChange: (fields: object[]) => void;
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
