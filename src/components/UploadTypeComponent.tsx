import React from 'react'

type props = {
    title: string;
    placeholder: string;
    default: object;
    selected: object;
    options: object[];
    onChange: (fields: object[]) => void;
    style: React.CSSProperties;
}
export const UploadTypeComponent = (props: props) => {
    console.log('props :>> ', props);
  return (
    <div>UploadTypeComponent</div>
  )
}

export default UploadTypeComponent