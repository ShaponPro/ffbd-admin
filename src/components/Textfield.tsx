import * as React from 'react'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import FormHelperText from '@mui/material/FormHelperText'
import {  OutlinedInput } from '@mui/material'
import styled from '@emotion/styled'

type inputProps = {
  title?: string
  placeholder?: string
  type?: string
  endAdornment?: any

  // default: object;
  //selected: object;
  // options: object[];
  onChange?: (fields: object[]) => void
  style?: React.CSSProperties
  helperText?: any
  disabled?: boolean
  select?: boolean
  child?: string
}



const StyledField = styled(OutlinedInput) ({
  
  border:'0 !important',
  padding: '10px',
  width: '497.5px',
  height: '36px',
  background: '#FFFFFF',
  outline:'none !important',
  boxShadow: 'inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)',
  borderRadius: '2px',
  position:'relative'  
})

export default function TextInputField(props: inputProps) {
  return (
    <Box 
      component='form'
      noValidate
      sx={{
        display: 'flex',
      
      }}
      style={{margin: '10px 0px'}}
    >
      

      <FormControl 
        style={{
          outline:'none !important'
        }}
      
      >
        <StyledField
      
          type={props.type}
          placeholder={props.placeholder}
          disabled={props.disabled}
          endAdornment={props.endAdornment}
        />
         

        <FormHelperText>{props.helperText}</FormHelperText>
      </FormControl>
    </Box>
  )
}
