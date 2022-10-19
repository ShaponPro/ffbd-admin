import React from 'react'

import UploadTypeComponent from 'src/components/UploadTypeComponent'

const uploadVideo = () => {
  return (
      <div>
        <UploadTypeComponent
          placeholder='select item'
          title={['On behalf of User', 'On behalf of Board', 'Tutorial', 'Youtube Crawler']}
        />
      </div>
  )
}

export default uploadVideo
