<<<<<<< HEAD
// ** React Imports
import React, { ChangeEvent, useState, useCallback, useEffect } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColumns, GridRenderCellParams } from "@mui/x-data-grid";

// ** ThirdParty Components
import axios from "axios";

// ** Custom Components

import ServerSideToolbar from "src/views/table/data-grid/ServerSideToolbar";

// ** Types Imports
import { DataGridRowType } from "src/@fake-db/types";

// ** Icons Imports

import styled from "@emotion/styled";

const StyledDataGrid = styled(DataGrid)(() => ({
    background: "#F3F3F4",
    margin: "20px",

    //border: '2px solid black',
    borderRadius: "0px",

    //Column Table columnHeaders CSS
    "& 	.MuiDataGrid-columnHeaders": {
        //border: '2px solid red',
        borderRadius: "0px",
        background: "rgba(22, 31, 41, 0.07)",
    },

    //Column Table rows
    "& .MuiDataGrid-row": {
        //border: '2px solid blue',
        //height:'300px'
    },

    //Column Table container CSS
    "& .MuiDataGrid-main": {
        //border: '2px solid blue',
        margin: "20px",
        borderRadius: "0px",
    },

    //Column Footer Title CSS
    "& .MuiDataGrid-footerContainer": {
        //border: '2px solid yellow',
        borderRadius: "0px",
    },

    //Column Header Title CSS
    "& .MuiDataGrid-columnHeaderTitle": {
        textTransform: "none",
    },

    //Column Header CSS
    "& .MuiDataGrid-columnHeader": {
        //border: '2px solid red',
        borderRadius: "0px",
    },

    "& .MuiDataGrid-columnSeparator": {
        visibility: "hidden",
        borderRadius: "0px",
    },

    "& .MuiDataGrid-virtualScrollerRenderZone": {
        "& .MuiDataGrid-row": {
            "&:nth-child(2n)": { backgroundColor: "rgba(235, 235, 235, .7)" },
            borderRadius: "0px",
        },
        borderRadius: "0px",
    },

    "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
        border: "1px solid white",
        borderRadius: "0px",
    },

    // virtualScrollerContent: {
    //   height: '100% !important',
    //   overflow: 'scroll'
    // }
}));

// type Props = {
//   placeholder?: string
//   value?: string
//   onChange?: (value: string) => void
//   style?: React.CSSProperties
// }

type SortType = "asc" | "desc" | undefined | null;

const columns: GridColumns = [
    {
        flex: 1,
        minWidth: 100,
        field: "videoId",
        headerName: "Video ID",
        filterable: true,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => {
            const { row } = params;

            return (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                            noWrap
                            variant="body2"
                            sx={{ color: "text.primary", fontWeight: 600 }}
                        >
                            {row.videoId}
                        </Typography>
                    </Box>
                </Box>
            );
        },
    },
    {
        flex: 1,
        minWidth: 200,
        field: "thumbnail",
        headerName: "Thumbnail",
        sortable: false,
        filterable: true,
        renderCell: () => {
            return (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                        sx={{ display: "flex", flexDirection: "column" }}
                    ></Box>
                </Box>
            );
        },
    },
    {
        flex: 1,
        field: "fileSize",
        minWidth: 200,
        headerName: "File Size",
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant="body2" sx={{ color: "text.primary" }}>
                {params.row.fileSize}
            </Typography>
        ),
    },
    {
        flex: 1,
        field: "videoLength",
        minWidth: 200,
        headerName: "Video Length",
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant="body2" sx={{ color: "text.primary" }}>
                {params.row.videoLength}
            </Typography>
        ),
    },
    {
        flex: 1,
        field: "userName",
        minWidth: 200,
        headerName: "User Name",
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant="body2" sx={{ color: "text.primary" }}>
                {params.row.userName}
            </Typography>
        ),
    },
    {
        flex: 1,
        field: "userId",
        minWidth: 200,
        headerName: "User ID",
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant="body2" sx={{ color: "text.primary" }}>
                {params.row.userId}
            </Typography>
        ),
    },
    {
        flex: 1,
        field: "fanfareId",
        minWidth: 200,
        headerName: "Fanfare ID",
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant="body2" sx={{ color: "text.primary" }}>
                {params.row.fanfareId}
            </Typography>
        ),
    },
    {
        flex: 1,
        field: "userCreatedDate",
        minWidth: 200,
        headerName: "User Created Date",
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant="body2" sx={{ color: "text.primary" }}>
                {params.row.userCreatedDate}
            </Typography>
        ),
    },
    {
        flex: 1,
        field: "uploadDate",
        minWidth: 200,
        headerName: "Upload Date",
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant="body2" sx={{ color: "text.primary" }}>
                {params.row.uploadDate}
            </Typography>
        ),
    },
    {
        flex: 1,
        field: "uploadTime",
        minWidth: 200,
        headerName: "Upload Time",
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant="body2" sx={{ color: "text.primary" }}>
                {params.row.uploadTime}
            </Typography>
        ),
    },
    {
        flex: 1,
        field: "uploadDays",
        minWidth: 200,
        headerName: "Upload Days",
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant="body2" sx={{ color: "text.primary" }}>
                {params.row.uploadDays}
            </Typography>
        ),
    },
    {
        flex: 1,
        field: "uploadedCountry",
        minWidth: 200,
        headerName: "Uploaded Country",
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant="body2" sx={{ color: "text.primary" }}>
                {params.row.uploadedCountry}
            </Typography>
        ),
    },
    {
        flex: 1,
        field: "uploadedIp",
        minWidth: 200,
        headerName: "Uploaded IP",
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant="body2" sx={{ color: "text.primary" }}>
                {params.row.uploadedIp}
            </Typography>
        ),
    },
];

const ListComponent = () => {
    // ** State
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState<number>(0);
    const [sort] = useState<SortType>("asc");
    const [pageSize, setPageSize] = useState<number>(7);
    const [rows, setRows] = useState<DataGridRowType[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const [sortColumn] = useState<string>("full_name");

    /**
     * Handle OnChange event for search input
     *
     * @parms event ChangeEvent<HTMLInputElement>
     *
     * @returns void
     */

    function loadServerRows(currentPage: number, data: DataGridRowType[]) {
        return data.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
    }

    // const handleSortModel = (newModel: GridSortModel) => {
    //   if (newModel.length) {
    //     setSort(newModel[0].sort)
    //     setSortColumn(newModel[0].field)
    //     fetchTableData(newModel[0].sort, searchValue, newModel[0].field)
    //   } else {
    //     setSort('asc')
    //     setSortColumn('full_name')
    //   }
    // }

    const handleSearch = (value: string) => {
        setSearchValue(value);
        fetchTableData(sort, value, sortColumn);
    };

    const fetchTableData = useCallback(
        async (sort: SortType, q: string, column: string) => {
            await axios
                .get("/api/table/data", {
                    params: {
                        q,
                        sort,
                        column,
                    },
                })
                .then((res) => {
                    setTotal(res.data.total);
                    setRows(loadServerRows(page, res.data.data));
                });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [page, pageSize]
    );

    useEffect(() => {
        fetchTableData(sort, searchValue, sortColumn);
    }, [fetchTableData, searchValue, sort, sortColumn]);

    return (
        <StyledDataGrid
            autoHeight
            pagination
            rows={rows}
            disableSelectionOnClick
            disableColumnMenu
            rowCount={total}
            columns={columns}
            pageSize={pageSize}
            sortingMode="server"
            paginationMode="server"
            rowsPerPageOptions={[7, 10, 25, 50]}

            
            //onSortModelChange={handleSortModel}
            onPageChange={(newPage) => setPage(newPage)}
            components={{ Toolbar: ServerSideToolbar }}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            componentsProps={{
                toolbar: {
                    value: searchValue,
                    clearSearch: () => handleSearch(""),
                    onChange: (event: ChangeEvent<HTMLInputElement>) =>
                        handleSearch(event.target.value),
                },
            }}
        />
    );
};
export default ListComponent;
=======
import { useState } from "react";

//import TableFooter from '@mui/material/TableFooter'
//import TablePagination from '@mui/material/TablePagination'
import {
  Button,
  styled,
  TableHead,
} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import usePagination from "@mui/material/usePagination";

import SearchComponent from "./SearchComponent";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    background: "rgba(22, 31, 41, 0.07)",
    borderBottom: "2px solid white",
    borderLeft: "2px solid white",
    color: "black",
    textTransform: "none",
    height: "36px !important",
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    border: "2px solid white",
  },
}));

const StyledSelect = styled(Select)({
  background: "white",
  borderRadius: "0px",
  height: "36px",
  width: "80px",
  margin: "3px",
  boxShadow: "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
});

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(even)": {
    border: "2px solid white",
    background: "rgba(22, 31, 41, 0.07)",
  },
  "&:nth-of-type(odd)": {
    //border: '2px solid black',
    background: "rgba(22, 31, 41, 0.03)",
  },

  // hide last border
  "&:last-child td, &:last-child th": {
    //border:'2px solid blue'
  },
}));

const StyledSelectReport = styled(Select)({
  borderRadius: "20px",
  background: "white",
  height: "36px",
  width: "126px",
  boxShadow: "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",

  "& .MuiSelect-select": {
    transition: "0s !important",
  },
});

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

function UsePagination() {
  const { items } = usePagination({
    count: 10,
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;
          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type='button'
                style={{
                  border: "none",
                  outline: "none",
                  background: "#F3F3F4",
                  color: "#009EFA",
                  fontWeight: selected ? "bold" : undefined,
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button
                type='button'
                {...item}
                style={{ border: "none", outline: "none", color: "#009EFA", background: "#F3F3F4" }}
              >
                {type}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}

export default function listComponent({ data, columns }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [pageData, setPageData] = useState([]);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - pageData.length) : 0;

  const handleChangePage = (event: React.ChangeEvent<HTMLInputElement>, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box
      display='grid'
      gridTemplateColumns='repeat(12, 1fr)'
      gap={2}
      sx={{ background: "#F3F3F4", alignItems: "center" }}
    >
      <Box gridColumn='span 12' sx={{ display: "block", margin: "15px" }}>
        <Box
          gridColumn='span 12'
          sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "5px" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <Typography>Show</Typography>
            <StyledSelect displayEmpty />
            <Typography>entries</Typography>
            <SearchComponent style={{ marginLeft: "20px", width: "500px" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <StyledSelectReport displayEmpty>
              <Button variant='text' sx={{ m: 3 }}>
                Report
              </Button>
            </StyledSelectReport>
          </Box>
        </Box>

        <TableContainer component={Paper} sx={{ borderRadius: "0px" }}>
          <Table sx={{ textAlign: "center" }}>
            <TableHead sx={{ display: "table-header-group" }}>
              <StyledTableRow>
                {columns.map(col => (
                  <StyledTableCell>{col.header}</StyledTableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {/* {(rowsPerPage > 0 ? pageData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : pageData).map(
                row => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component='th' scope='row'>
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell>{row.model}</StyledTableCell>
                    <StyledTableCell>{row.manufacturer}</StyledTableCell>
                    <StyledTableCell>{row.length}</StyledTableCell>
                  </StyledTableRow>
                )
              )} */}
              {data && (
                <>
                  {data.allVideos.map(rowss => (
                    <StyledTableRow key={rowss._id}>
                      {columns.map(col => (
                        <StyledTableCell>{rowss[col.field]}</StyledTableCell>
                      ))}
                    </StyledTableRow>
                  ))}
                </>
              )}

              {emptyRows > 0 && (
                <StyledTableRow>
                  <TableCell />
                </StyledTableRow>
              )}
            </TableBody>

            {/* <TableFooter>
              <StyledTableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  count={pageData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page'
                    }
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  //ActionsComponent={TablePaginationActions}
                  //component={Box}
                  labelDisplayedRows={({ page }) => {
                    return `Page: ${page}`
                  }}
                  backIconButtonProps={{
                    color: 'secondary'
                  }}
                  nextIconButtonProps={{ color: 'secondary' }}
                  showFirstButton={true}
                  showLastButton={true}
                  labelRowsPerPage={<span>Shows:</span>}
                  sx={{
                    '.MuiTablePagination-toolbar': {
                      //border: '2px solid red'
                      background: '#F3F3F4',
                      border: '2px solid red'
                    },
                    '.MuiTablePagination-selectLabel': {
                      fontWeight: 'bold',
                      color: 'black'

                      //border:'2px solid red'
                    },
                    '.MuiTablePagination-select': {
                      border: '1px solid black',
                      background: 'white',
                      boxShadow: 'inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)'
                    }
                  }}
                />
              </StyledTableRow>
            </TableFooter> */}
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "5px" }}>
          <Box gridColumn='span 4' sx={{ display: "flex" }}>
            <Typography variant={"body2"}>Showing 1 to 20 of 167,328 entries</Typography>
          </Box>
          <Box
            gridColumn='span 8'
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <UsePagination />
            <span>
              <input
                type='text'
                style={{
                  width: "119px",
                  height: "36px",
                  padding: "10px",
                  background: "#FFFFFF",
                  border: "1px solid black",
                }}
                placeholder='jump to page'
              />
              <button
                style={{
                  background: "#009EFA",
                  border: "none",
                  borderRadius: "3px",
                  width: "45px",
                  height: "36px",
                  padding: "10px",
                  color: "white",
                  marginLeft: "10px",
                }}
              >
                Go
              </button>
            </span>{" "}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
>>>>>>> 5d087bd952fefa2a4c75af0fbd82fbd68714a2b7
