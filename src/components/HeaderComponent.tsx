const HeaderComponent = () => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '50px',
        boxShadow: ' 0px 1px 5px rgba(0, 0, 0, 0.15)',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <div>
        <img
          style={{
            width: '74.65px'
          }}
          src='https://i.ibb.co/31K6v89/ff-logo.png'
          alt=''
        />
      </div>
      <div>
        <img src='https://i.ibb.co/smQmZNL/human-icon-22-1.png' alt='' />
      </div>
    </div>
  )
}

export default HeaderComponent
