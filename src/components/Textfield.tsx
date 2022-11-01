/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import FormHelperText from '@mui/material/FormHelperText'
import { OutlinedInput, TextField } from '@mui/material'
import styled from '@emotion/styled'
import { useState } from 'react'

type inputProps = {
  title?: 'StyledField'
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
  fieldSize?: string
  options?: object[]
  children?: any
}



export default function TextInputField(props: inputProps) {
  // const styleText= (fieldSize:string )=>{
  //   if(fieldSize==='')
  // }

  const [disabled , setDisabled] = useState(props.disabled);

  const StyledField = styled(TextField)({
    border: '0 !important',
  
    width: disabled ? '230px' : '100%' ,
    height: '36px',
    background: '#FFFFFF',
    outline: 'none !important',
    boxShadow: 'inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)',
    borderRadius: '2px',
    position: 'relative'
  })
  
  const StyledFields = styled(OutlinedInput)({
    border: '0 !important',
    padding: '10px',
    width: disabled ? '230px' : '100%' ,
    height: '36px',
    background: '#FFFFFF',
    outline: 'none !important',
    boxShadow: 'inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)',
    borderRadius: '2px',
    position: 'relative'
  })

  return (
    <Box
      component='form'
      noValidate
      sx={{
        display: 'flex'
      }}
      style={{ margin: '10px 0px' }}
    >
      <FormControl
        style={{
          outline: 'none !important',
          width: '100%'
        }}
      >
        {props.select === true ? (
          <StyledField
            type={props.type}
            placeholder={props.placeholder}
            disabled={props.disabled}
            size='small'
            select={props.select}
            
          >
            {props.children}
          </StyledField>
        ) : (
          <StyledFields
            size='small'
            type={props.type}
            placeholder={props.placeholder}
            disabled={props.disabled}
            endAdornment={props.endAdornment}
            
          />
        )}

        <FormHelperText style={{ textAlign: 'right',color: 'rgba(48, 48, 48, 0.5)', fontSize:'12px', fontWeight:'400' }}>{props.helperText}</FormHelperText>
      </FormControl>
    </Box>
  )
}
