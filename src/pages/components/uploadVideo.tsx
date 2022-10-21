import React from 'react'
// import { useState } from 'react'

import UploadTypeComponent from 'src/components/UploadTypeComponent'

const uploadVideo = () => {

  // const [fields, setFields] = useState<object[]>('')

  return (
      <div>
        <UploadTypeComponent
          placeholder='select item'
          title={['On behalf of User', 'On behalf of Board', 'Tutorial', 'Youtube Crawler']}
          style={{ display: 'flex' }}
          // onChange={(fields: object[]) => setFields(fields)}
        />
      </div>
  )
}

export default uploadVideo
