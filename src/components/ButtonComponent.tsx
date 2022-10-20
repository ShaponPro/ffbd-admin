import React from 'react'

type props = {
  title: string;
  type: string;
  onClick: (args: any) => void;
  style: React.CSSProperties;
}
export const ButtonComponent = (props: props) => {
  console.log('props :>> ', props);
  return (
    <div>ButtonComponent</div>
  )
}

export default ButtonComponent;