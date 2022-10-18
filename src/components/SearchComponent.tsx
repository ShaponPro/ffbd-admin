// ** React Imports
import React, { ChangeEvent, useState } from 'react'

// ** MUI Imports
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import SearchIcon from '@mui/icons-material/Search'

import styled from '@emotion/styled'

let SearchContainer = styled.div({})

type Props = {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}

const SearchComponent = (props: Props) => {
  // ** State
  const [value, setValue] = useState<string>(props.value || "")

  /**
   * Handle OnChange event for search input
   * 
   * @parms event ChangeEvent<HTMLInputElement>
   * 
   * @returns void
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (props.onChange) props.onChange(event.target.value || '');
  }

  return (
    <SearchContainer>
      <OutlinedInput
        value={value}
        defaultValue={props.value}
        placeholder={props.placeholder}
        style={{ border: 0, outline: 'none', borderRadius: '50px', ...props.style }}
        onChange={handleChange}
        aria-describedby='icons-search-helper-text'
        endAdornment={<InputAdornment position='end'><SearchIcon /></InputAdornment>}
        inputProps={{
          'aria-label': 'Search'
        }}
      />
    </SearchContainer>
  )
}

export default SearchComponent;

SearchComponent.defaultProps = {
  placeholder: "Search",
  value: '',
  onChange: () => null,
  style: {}
}


