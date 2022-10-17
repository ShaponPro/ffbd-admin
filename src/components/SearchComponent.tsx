import React from 'react'
import { connect } from 'react-redux'

type props = {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    style: React.CSSProperties;
}
export const SearchComponent = (props: props) => {
    console.log('props :>> ', props);
  return (
    <div>SearchComponent</div>
  )
}

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent)