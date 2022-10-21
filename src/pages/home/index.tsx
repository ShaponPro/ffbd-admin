// ** MUI Imports

import SearchComponent from 'src/components/SearchComponent'
import TabbarComponent from 'src/components/TabbarComponent'

const Home = () => {
  return (
    <>
      <TabbarComponent />
      <SearchComponent placeholder='search and filter' value='video' />
    </>
  )
}

export default Home
