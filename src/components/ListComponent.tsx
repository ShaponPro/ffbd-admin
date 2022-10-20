// ** React Imports
import React, { ChangeEvent, useState, useCallback, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import {
  DataGrid,
  GridColumns,
  GridRenderCellParams,
  GridSortModel,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector, 
} from '@mui/x-data-grid'
import Pagination from '@mui/material/Pagination'

// ** ThirdParty Components
import axios from 'axios'

// ** Custom Components

import ServerSideToolbar from 'src/views/table/data-grid/ServerSideToolbar'

// ** Types Imports
import { DataGridRowType } from 'src/@fake-db/types'

// ** Icons Imports

import styled from '@emotion/styled'

const StyledDataGrid = styled(DataGrid)(() => ({
  //background: '#F3F3F4',
  margin: '20px',
  border: '2px solid black',
  borderRadius: '0px',

  //Column Table container CSS
  '& 	.MuiDataGrid-rowReorderCell': {
    border: '2px solid red'
  },

  //Column Table container CSS
  '& .MuiDataGrid-main': {
    border: '2px solid black',
    margin: '20px'
  },

  //Column Footer Title CSS
  '& .MuiDataGrid-footerContainer': {
    border: '2px solid yellow'
  },

  //Column Header Title CSS
  '& .MuiDataGrid-columnHeader': {
    border: '2px solid red'
  },

  '& .MuiDataGrid-columnSeparator': {
    visibility: 'hidden'
  },

  '& .MuiDataGrid-virtualScrollerRenderZone': {
    '& .MuiDataGrid-row': {
      '&:nth-child(2n)': { backgroundColor: 'rgba(235, 235, 235, .7)' }
    }
  },

  '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
    border: '1px solid green',
    borderRadius: '0px'
  }

  // virtualScrollerContent: {
  //   height: '100% !important',
  //   overflow: 'scroll'
  // }
}))

const ListComponentContainer = styled.div({
  border: '2px solid red'
})

type Props = {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  style?: React.CSSProperties
}

type SortType = 'asc' | 'desc' | undefined | null

const columns: GridColumns = [
  {
    flex: 1,
    minWidth: 100,
    field: 'videoId',
    headerName: 'Video ID',
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      const { row } = params

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
              {row.videoId}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 1,
    minWidth: 200,
    field: 'thumbnail',
    headerName: 'Thumbnail',
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      const { row } = params

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
              {row.thumbnail}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 1,
    field: 'fileSize',
    minWidth: 200,
    headerName: 'File Size',
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.fileSize}
      </Typography>
    )
  },
  {
    flex: 1,
    field: 'videoLength',
    minWidth: 200,
    headerName: 'Video Length',
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.videoLength}
      </Typography>
    )
  },
  {
    flex: 1,
    field: 'userName',
    minWidth: 200,
    headerName: 'User Name',
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.userName}
      </Typography>
    )
  },
  {
    flex: 1,
    field: 'userId',
    minWidth: 200,
    headerName: 'User ID',
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.userId}
      </Typography>
    )
  },
  {
    flex: 1,
    field: 'fanfareId',
    minWidth: 200,
    headerName: 'Fanfare ID',
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.fanfareId}
      </Typography>
    )
  },
  {
    flex: 1,
    field: 'userCreatedDate',
    minWidth: 200,
    headerName: 'User Created Date',
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.userCreatedDate}
      </Typography>
    )
  },
  {
    flex: 1,
    field: 'uploadDate',
    minWidth: 200,
    headerName: 'Upload Date',
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.uploadDate}
      </Typography>
    )
  },
  {
    flex: 1,
    field: 'uploadTime',
    minWidth: 200,
    headerName: 'Upload Time',
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.uploadTime}
      </Typography>
    )
  },
  {
    flex: 1,
    field: 'uploadDays',
    minWidth: 200,
    headerName: 'Upload Days',
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.uploadDays}
      </Typography>
    )
  },
  {
    flex: 1,
    field: 'uploadedCountry',
    minWidth: 200,
    headerName: 'Uploaded Country',
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.uploadedCountry}
      </Typography>
    )
  },
  {
    flex: 1,
    field: 'uploadedIp',
    minWidth: 200,
    headerName: 'Uploaded IP',
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.uploadedIp}
      </Typography>
    )
  }
]

function CustomPagination() {
  const apiRef = useGridApiContext()
  const page = useGridSelector(apiRef, gridPageSelector)
  const pageCount = useGridSelector(apiRef, gridPageCountSelector)

  return (
    <Pagination
      variant='text'
      shape='rounded'
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  )
}

const ListComponent = (props: Props) => {
  // ** State
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState<number>(0)
  const [sort, setSort] = useState<SortType>('asc')
  const [pageSize, setPageSize] = useState<number>(7)
  const [rows, setRows] = useState<DataGridRowType[]>([])
  const [searchValue, setSearchValue] = useState<string>('')
  const [sortColumn, setSortColumn] = useState<string>('full_name')

  /**
   * Handle OnChange event for search input
   *
   * @parms event ChangeEvent<HTMLInputElement>
   *
   * @returns void
   */

  function loadServerRows(currentPage: number, data: DataGridRowType[]) {
    return data.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
  }

  const handleSortModel = (newModel: GridSortModel) => {
    if (newModel.length) {
      setSort(newModel[0].sort)
      setSortColumn(newModel[0].field)
      fetchTableData(newModel[0].sort, searchValue, newModel[0].field)
    } else {
      setSort('asc')
      setSortColumn('full_name')
    }
  }

  const handleSearch = (value: string) => {
    setSearchValue(value)
    fetchTableData(sort, value, sortColumn)
  }

  const fetchTableData = useCallback(
    async (sort: SortType, q: string, column: string) => {
      await axios
        .get('/api/table/data', {
          params: {
            q,
            sort,
            column
          }
        })
        .then(res => {
          setTotal(res.data.total)
          setRows(loadServerRows(page, res.data.data))
        })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [page, pageSize]
  )

  useEffect(() => {
    fetchTableData(sort, searchValue, sortColumn)
  }, [fetchTableData, searchValue, sort, sortColumn])

  return (
    <ListComponentContainer>
      <Card>
        <CardHeader title='List Component' />
        <StyledDataGrid
          autoHeight
          pagination
          rows={rows}
          disableSelectionOnClick
          disableColumnMenu
          rowCount={total}
          columns={columns}
          pageSize={pageSize}
          sortingMode='server'
          paginationMode='server'

          //onSortModelChange={handleSortModel}
          rowsPerPageOptions={[5]}
          onPageChange={newPage => setPage(newPage)}
          components={{ Toolbar: ServerSideToolbar, Pagination: CustomPagination }}
          onPageSizeChange={newPageSize => setPageSize(newPageSize)}
          componentsProps={{
            toolbar: {
              value: searchValue,
              clearSearch: () => handleSearch(''),
              onChange: (event: ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value)
            }
          }}
        />
      </Card>
    </ListComponentContainer>
  )
}
export default ListComponent
