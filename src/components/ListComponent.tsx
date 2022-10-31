import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles'
import Select from '@mui/material/Select'

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    background: "rgba(22, 31, 41, 0.07)",
    borderBottom: "2px solid white",
    borderLeft: "2px solid white",
    color: "black",
    textTransform: "none",
    height: "36px",
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

export default function ListComponent({ rowsData, columns }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    // fetch("https://swapi-deno.azurewebsites.net/api/starships") //alternative to swapi.dev
    //   .then((response) => response.json())
    //   .then((data) => setData(data));
    /* eslint-disable  @typescript-eslint/no-use-before-define */
    setData(rowsData);
  }, []);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (event: React.ChangeEvent<HTMLInputElement>, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <StyledTableRow>
              {columns.map(col => (
                <StyledTableCell>{col.header}</StyledTableCell>
              ))}
            </StyledTableRow>
            {(rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data).map(row => (
              <StyledTableRow key={row.name}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell>{row.model}</TableCell>
                <TableCell>{row.manufacturer}</TableCell>
                <TableCell>{row.length}</TableCell>
              </StyledTableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                //ActionsComponent={TablePaginationActions}
                //component={Box}
                labelDisplayedRows={({ page }) => {
                  return `Page: ${page}`;
                }}
                backIconButtonProps={{
                  color: "secondary",
                }}
                nextIconButtonProps={{ color: "secondary" }}
                showFirstButton={true}
                showLastButton={true}
                labelRowsPerPage={<span>Rows:</span>}
                sx={{
                  ".MuiTablePagination-toolbar": {
                    backgroundColor: "rgba(100,100,100,0.5)",
                  },
                  ".MuiTablePagination-selectLabel, .MuiTablePagination-input": {
                    fontWeight: "bold",
                    color: "blue",
                  },
                }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
