import React from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonComponent)