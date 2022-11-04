// ** MUI Imports
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import styled from "@emotion/styled";

function createData(
  name: string,
  tableValue: any,

) {
  return { name, tableValue};
}

const rows = [
  createData('Contest Type', ' - '),
  createData('Contest ID',  ' - '),
  createData('Contest Name',  ' - '),
  createData('Cover Image',  ' - '),
  createData('Short Description',  ' - '),
];

//**Style */
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
        background: "rgba(22, 31, 41, 0.03)",
    },
    "&:nth-of-type(odd)": {
        backgroundColor: "rgba(22, 31, 41, 0.07);",
    },
}));

export default function ListTableComponent() {
  return (
    <TableContainer >
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.name}
              sx={{ ' &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{fontWeight:700}} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.tableValue}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
