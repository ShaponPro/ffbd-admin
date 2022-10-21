import { Button } from '@mui/material'
import React, { useState } from 'react'

type Props = {
  title: string
  type?: string
  style?: React.CSSProperties
  onClick?: (args: any) => void;
  isActive?: boolean
}


export const ButtonComponent = (props: Props) => {

  const styleButton = (type: string, isActive: boolean) => {
    if (type === 'tabButton')
      return {
        width: '200px',
        height: '40px',
        padding: '10px 20px',
        borderRadius: '20px',
        fontSize: '16px',
        fontFamily: 'Open Sans',
        fontWeight: '700',
        color: isActive? '#FFF': '#161F29',
        background: isActive?'black':'rgba(255, 255, 255, 0.5)',
        border: '1px solid rgba(22, 31, 41, 0.5)',
        textTransform: 'capitalize'
      }
  
    if (type === 'action')
      return {
        width: '100px',
        height: '36px',
        padding: '12px 20px',
        borderRadius: '2px',
        fontSize: '12px',
        fontWeight: '600',
        background: 'linear-gradient(360deg, #AE061A -64.72%, #FF5407 100%)',
        boxShadow: '0.5px 1px 3px rgba(22, 31, 41, 0.2)',
        color: '#FFFFFF',
        textTransform: 'capitalize'
      }
  
    if (type === 'more-less')
      return {
        width: '100px',
        height: '36px',
        padding: '12px 20px',
        borderRadius: '2px',
        fontSize: '12px',
        fontWeight: '600',
        background: '#009EFA',
        boxShadow: '0.5px 1px 3px rgba(22, 31, 41, 0.2)',
        color: '#FFFFFF',
        textTransform: 'capitalize'
      }
  
    if (type === 'go')
      return {
        width: '45px',
        height: '36px',
        padding: '10px',
        borderRadius: '3px',
        fontSize: '16px',
        fontWeight: '700',
        background: '#009EFA',
        color: '#FFFFFF',
        textTransform: 'capitalize'
      }
  
    if (type === 'proceed') {
      return {
        width: '125px',
        height: '42px',
        padding: '10px 19px',
        borderRadius: '3px',
        fontSize: '16px',
        fontWeight: '700',
        background: '#009EFA',
        color: '#FFFFFF',
        textTransform: 'capitalize'
      }
    }
    if(type === 'apply'){
      return{
        padding: '5px 20px',
        width: '96.88px',
        height: '26px',
        background: '#57CE66',
        borderRadius: '5px',
        color: '#FFFFFF',
        textTransform: 'capitalize'
      }
    }
    if(type === 'cancel'){
      return{
        padding: '5px 20px',
        width: '96.88px',
        height: '26px',
        background: '#F3F3F4',
        borderRadius: '5px',
        fontFamily: 'Open Sans',
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '16px',
        textTransform: 'capitalize',
        color:'#161F29'
      }
    }

    if(type === ''){
      return{
        width: '100px',
        height: '36px',
        padding: '12px 20px',
        borderRadius: '2px',
        fontSize: '12px',
        fontWeight: '600',
        background: '#009EFA',
        boxShadow: '0.5px 1px 3px rgba(22, 31, 41, 0.2)',
        color: '#FFFFFF',
        textTransform: 'capitalize'
      }
    }
    
    
  }
  
  const [isActive , setIsActive] = useState(props.isActive);
  

  return (
    <div>
      <Button
        style = {styleButton(props.type || '',isActive)}
        onClick= {()=>setIsActive(
          (pre)=>!pre
        )}
      >
        {props.title}
      </Button>
    </div>
  )
}