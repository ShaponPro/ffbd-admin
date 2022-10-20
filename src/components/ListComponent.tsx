import React from 'react'

type props = {
  items: object[];
}
export const ListComponent = ({ items }: props) => {
  console.log('items :>> ', items);
  return (
    <div>ListComponent</div>
  )
}

export default ListComponent;