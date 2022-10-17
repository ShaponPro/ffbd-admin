import React from 'react'
import { connect } from 'react-redux'

type props = {
    title: string;
    fields: object[];
    onChange: (fields: object[]) => void;
    style: React.CSSProperties;
}
export const FilterComponent = (props: props) => {
    console.log('props :>> ', props);
  return (
    <div>FilterComponent</div>
  )
}

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent)