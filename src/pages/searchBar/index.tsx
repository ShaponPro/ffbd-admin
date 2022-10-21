import SearchIcon from '@mui/icons-material/Search'

const SearchBar = ({ placeholder }: any) => {
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
          <input style={{ border: 0, outline: 'none' }} type='text' placeholder={placeholder} />
          <div className='searchIcon'>
            <SearchIcon />
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchBar
