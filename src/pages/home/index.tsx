import React from 'react';
import UploadTypeComponent from 'src/components/UploadTypeComponent'

const home = () => {
  // const title=['On behalf of User', 'On behalf of Board', 'Tutorial', 'Youtube Crawler']
  return (
    <div>
      <UploadTypeComponent placeholder='select item'   title = {['On behalf of User', 'On behalf of Board', 'Tutorial', 'Youtube Crawler']}/>
    </div>
  )
}

export default home
