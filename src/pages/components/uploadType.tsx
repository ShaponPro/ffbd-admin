
import React from 'react'

import UploadTypeComponent from 'src/components/UploadTypeComponent'

const uploadType = () => {

  // const [fields, setFields] = useState<object[]>('')

  return (
      <div>
        <UploadTypeComponent
          placeholder='select item'
          // eslint-disable-next-line lines-around-comment
          // title={['On behalf of User', 'On behalf of Board', 'Tutorial', 'Youtube Crawler']}
          // style={{ display: 'flex' }}
        />
      </div>
  )
}

export default uploadType