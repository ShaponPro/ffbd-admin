// ** MUI Imports

import { useState } from 'react'

import SearchComponent from 'src/components/SearchComponent'

const Home = () => {
  const [value, setValue] = useState<string>('')

  return (
    <div>
      <SearchComponent
        placeholder='search and filter'
        value={value}
        onChange={(value: string) => setValue(value)}
        style={{ display: 'flex' }}
      />
    </div>
  )
}

export default Home
