import React, { useState } from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import InputBase from '@mui/material/InputBase'
import MenuItem from '@mui/material/MenuItem'
import MuiFormControl, { FormControlProps } from '@mui/material/FormControl'
import { styled } from '@mui/material/styles'


type props = {
  options?: object[];
  selected?: string;
  onChange?: (field: string) => void;
  style?: React.CSSProperties
}

const FormControl = styled(MuiFormControl)<FormControlProps>(({ theme }) => ({
  '& .MuiFormLabel-root.Mui-focused': {
    color: theme.palette.info.main
  },
  '& .MuiInputLabel-root': {
    left: -14,
    zIndex: 0
  },
  '& > .MuiInputBase-root': {
    marginTop: theme.spacing(4),
    '&.MuiInput-root:before, &.MuiInput-root:after': {
      border: 0
    }
  },
  '& .MuiInputBase-input': {
    fontSize: 16,
    borderRadius: 4,
    position: 'relative',
    padding: '10px 26px 10px 12px',
  }
}))

export default function OnBehalfBrand(props: props) {

  const [value, setValue] = useState<string>(props.selected || "")
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    if(props.onChange) props.onChange(event.target.value as string);
  }

  return (

    <FormControl style={{width: '100%', display: 'flex', alignItems: 'center'}}>
    <Select
          value={value}
          input={<InputBase />}
          onChange={handleChange}
          id='demo-customized-select'
          labelId='demo-customized-select-label'
          style={{width: '100%', backgroundColor: '#fff', maxHeight: '40px', margin: '0px', padding: '0px'}}
        >
          {props.options && props.options.length ? props.options.map((option, i) => (
            
            <MenuItem key={i} value={option?.key||""}>{option?.key === props.selected ? (<em>{option?.title}</em>) : option?.title}</MenuItem>
          )) : null}
        </Select>
        </FormControl>
  )
}


OnBehalfBrand.defaultProps = {
  options: [
    {
      key: 'default',
      title: 'Select'
    },
    {
      key: 'user',
      title: 'On behalf of User'
    },
    {
      key: 'brand',
      title: 'On behalf of Brand'
    },
    {
      key: 'tutorial',
      title: 'Tutorial'
    },
    {
      key: 'youtube_crawler',
      title: 'Youtube Crawler'
    }
  ],
  selected: "default"
}