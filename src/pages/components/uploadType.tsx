
import React, { useState } from 'react'

import UploadTypeComponent from 'src/components/UploadTypeComponent'

const options = [
  {
    key: 'user',
    title: 'On behalf of User'
  },
  {
    key: 'board',
    title: 'On behalf of Board'
  },
  {
    key: 'tutorial',
    title: 'Tutorial'
  },
  {
    key: 'youtube_crawler',
    title: 'Youtube Crawler'
  }
]

const uploadType = () => {

  const [value, setValue] = useState<string>("user")

  const handleChange = (value: string) => {
    console.log('value', value)
    setValue(value);
  }

  return (
      <div style={{width: '40%'}}>
        <UploadTypeComponent
<<<<<<< HEAD
          placeholder='select item'
          // eslint-disable-next-line lines-around-comment
          // title={['On behalf of User', 'On behalf of Board', 'Tutorial', 'Youtube Crawler']}
          // style={{ display: 'flex' }}
=======
          selected={value}
          onChange={handleChange}
          options={options}
          style={{}}
>>>>>>> 791fecf706af4b73f47d006b9f2c6e71f2d92c51
        />
      </div>
  )
}

export default uploadType