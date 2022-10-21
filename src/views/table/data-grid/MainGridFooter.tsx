// ** React Imports
import { ChangeEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'

import { GridToolbarContainer } from '@mui/x-data-grid'
import { gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid'
import Pagination from '@mui/material/Pagination'

// ** Icons Imports

// ** Data

interface Props {
  value: string
  clearSearch: () => void
  onChange: (e: ChangeEvent) => void
}

const StyledGridToolbarContainer = styled(GridToolbarContainer)({
  p: 2,
  pb: 0,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'space-between'
})

function CustomPagination() {
  const apiRef = useGridApiContext()
  const page = useGridSelector(apiRef, gridPageSelector)
  const pageCount = useGridSelector(apiRef, gridPageCountSelector)

  return (
    <Pagination
      showFirstButton
      showLastButton
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  )
}

const MainGridFooter = (props: Props) => {
  //   const [value, setValue] = useState<string>('')
  //   console.log(value)

  return (
    <StyledGridToolbarContainer>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <Typography variant={'subtitle2'}>Showing 1 to 20 of 167,328 entries</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <FormControl sx={{ m: 2 }} size='small'>
          <CustomPagination />
        </FormControl>
      </Box>
    </StyledGridToolbarContainer>
  )
}

export default MainGridFooter
