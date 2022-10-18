import SearchIcon from '@mui/icons-material/Search'

type props = {
  placeholder: string
  value: string

  //  onChange: (value: string) => void;
  // style: React.CSSProperties;
}
const SearchComponent = (props: props) => {
  // console.log('props :>> ', props);
  return (
    <>
      <div className='search'>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '2px solid black',
            width: '40%',
            padding: '8px',
            background: '#FFFFFF',
            boxShadow: '2px 5px 20px rgba(22, 31, 41, 0.1)',
            borderRadius: '20px',
            position: 'absolute'
          }}
          className='searchInput'
        >
          <input style={{ border: 0, outline: 'none' }} type='text' placeholder={props.placeholder} />
          <div className='searchIcon'>
            <SearchIcon />
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchComponent
