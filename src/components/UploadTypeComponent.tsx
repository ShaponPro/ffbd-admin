import React from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(UploadTypeComponent)