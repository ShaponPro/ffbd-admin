import React from 'react'

type props = {
  children: string
  type: string
  styles?: React.CSSProperties
}
export const ButtonComponent = (props: props) => {
  let style = props.styles
  console.log('props :>> ', props)
  if (props.type === 'navButton')
    return (
      <div>
        <button
          style={{
            width: '200px',
            height: '40px',
            background: ' #FFFFFF80',
            padding: '10px 20px',
            borderRadius: '20px',
            fontSize: '16px',
            fontWeight: '400',
            boxShadow: 'inset 1px 1.5px 5px rgba(22, 31, 41, 0.1)'
          }}
        >
          {props.children}
        </button>
      </div>
    )
  else if (props.type === 'actionButton')
    return (
      <div>
        <button
          style={{
            width: '200px',
            height: '40px',
            background: '##161F29',
            padding: '10px 20px',

            fontSize: '16px',
            fontWeight: '400',
            boxShadow: 'inset 1px 1.5px 5px rgba(22, 31, 41, 0.1)'
          }}
        >
          {props.children}
        </button>
      </div>
    )
}

export default ButtonComponent
