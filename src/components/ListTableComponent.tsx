// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'
import CardHeader from '@mui/material/CardHeader'

// ** Data Import
import { rows } from 'src/@fake-db/table/static-data'

const columns = [
  {
    flex: 0.25,
    field: 'id',
    minWidth: 200,
    headerName: 'ID'
  },
  {
    flex: 0.25,
    minWidth: 200,
    field: 'full_name',
    headerName: 'Name'
  },

]

const TableBasic = () => {
  return (
    <Card>
      <CardHeader title='Basic' />
      <Box sx={{ height: 500 }}>
        <DataGrid columns={columns} rows={rows.slice(0, 10)} />
      </Box>
    </Card>
  )
}

export default TableBasic
