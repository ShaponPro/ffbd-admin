import * as React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', type: 'number'},
  { field: 'VideoId', headerName: 'Video ID', type: 'number'},
  { field: 'thumbnail', headerName: 'Thumbnail', type: 'string' },
  {
    field: 'videoTitle',
    headerName: 'Video Title',
    type: 'string',
  },
  {
    field: 'videoTitle',
    headerName: 'Video Title',
    type: 'number',
  },
  {
    field: 'fileSize',
    headerName: 'File Size (MB)',
    type: 'number',
  },
  {
    field: 'videoLength',
    headerName: 'Video Length',
    type: 'number',
  },
  {
    field: 'userName',
    headerName: 'User Name',
    type: 'string',
  },
  {
    field: 'userId',
    headerName: 'User ID',
    type: 'number',
  },
  {
    field: 'fanfareId',
    headerName: 'Fanfare ID',
    type: 'number',
  },
  {
    field: 'userCreateDate',
    headerName: 'User Create Date',
    type: 'number',
  },
  {
    field: 'uploadDate',
    headerName: 'Upload Date',
    type: 'number',
  },
  {
    field: 'uploadTime',
    headerName: 'Upload Time',
    type: 'number',
  },
  {
    field: 'uploadDays',
    headerName: 'Upload Days',
    type: 'number',
  },
  {
    field: 'uploadCountry',
    headerName: 'Uploaded Country ',
    type: 'number',
  },
  {
    field: 'deviceId',
    headerName: 'Device ID',
    type: 'number',
  },
  {
    field: 'deviceType',
    headerName: 'Device Type',
    type: 'number',
  },
  
  {
    field: 'totalWatchTime',
    headerName: 'Total Watch Time',
    type: 'number',
  },
  
  {
    field: 'totalLikes',
    headerName: 'Total Likes',
    type: 'number',
  },
  
  {
    field: 'totalComments',
    headerName: 'Total Comments',
    type: 'number',
  },
  
  {
    field: 'totalShares',
    headerName: 'Total Shares',
    type: 'number',
  },
  
  {
    field: 'downloads',
    headerName: 'Downloads',
    type: 'number',
  },
  
  {
    field: 'contestId',
    headerName: 'Contest ID',
    type: 'number',
  },
  
  {
    field: 'contestTitle',
    headerName: 'Contest Title',
    type: 'number',
  },
  
  {
    field: 'contestWinnigPosition',
    headerName: 'Contest Wining Position',
    type: 'number',
  },
  
  {
    field: 'allTimeRankingScore',
    headerName: 'All Time Ranking Score',
    type: 'number',
  },
  
  {
    field: 'trandingScore',
    headerName: 'Trending Score',
    type: 'number',
  },
  
  {
    field: 'activeAwarenessDays',
    headerName: 'Active Awareness Days',
    type: 'number',
  },
  
  {
    field: 'activeProductDays',
    headerName: 'Active Product Days',
    type: 'number',
  },
  
  {
    field: 'totalMonitization',
    headerName: 'Total Monetization (Till Yesterday)',
    type: 'number',
  },
  
  {
    field: 'activeMonitization',
    headerName: 'Active Daily Monetization',
    type: 'number',
  },
  
  {
    field: 'adReach',
    headerName: 'AD Reach',
    type: 'number',
  },
  
  {
    field: 'deviceType',
    headerName: 'Device Type',
    type: 'number',
  },
  
  {
    field: 'awarenessClick',
    headerName: 'Awareness Click',
    type: 'number',
  },
  
  {
    field: 'trafficGreneration',
    headerName: 'Traffic Generation',
    type: 'number',
  },
  
  {
    field: 'rightSellingStatus',
    headerName: 'Right Selling Status',
    type: 'number',
  },
  
  {
    field: 'lastActivityDate',
    headerName: 'Last Activity Date',
    type: 'number',
  },
  
  {
    field: 'LastActivityTime',
    headerName: 'Last Activity Time',
    type: 'number',
  },
  
  {
    field: 'currentStatus',
    headerName: 'Current Status',
    type: 'number',
  },
  
  {
    field: 'action',
    headerName: 'Action',
    type: 'number',
  },
  
  
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`
  // }
]

const rows = [
  { id: 1,},
]

export default function DataTable() {
  return (
    <div style={{ height: 400, width: 'auto' }}>
      <DataGrid
  sx={{
    '.MuiDataGrid-columnSeparator': {
      display: 'none',
    },
    '&.MuiDataGrid-root': {
      border: 'none',
    },
  }} rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} disableColumnMenu disableExtendRowFullWidth />
    </div>
  )
}
