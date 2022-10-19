import React from 'react'

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

export default FilterComponent;