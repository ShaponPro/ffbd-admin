import React from 'react'
import { connect } from 'react-redux'

type props = {
    items: object[];
}
export const ListComponent = ({items}: props) => {
    console.log('items :>> ', items);
  return (
    <div>ListComponent</div>
  )
}

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent)