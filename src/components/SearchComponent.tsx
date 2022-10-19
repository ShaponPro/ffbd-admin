import React from 'react'

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

export default SearchComponent;