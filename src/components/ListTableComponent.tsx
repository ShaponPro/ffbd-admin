// ** MUI Imports
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from '@mui/material/TableRow';
import styled from "@emotion/styled";

function createData(
  title: string,
  tableValue: any,

) {
  return { title, tableValue};
}

const rows = [
  createData('Contest Type', ' - '),
  createData('Contest ID',  ' - '),
  createData('Contest Name',  ' - '),
  createData('Cover Image',  ' - '),
  createData('Short Description',  ' - '),
  createData('Description',  ' - '),
  createData('Hashtag',  ' - '),
  createData('Brand Tag',  ' - '),
  createData('Participation Tag',  ' - '),
  createData('Target User Level',  ' - '),
  createData('Target Age Group',  ' - '),
  createData('Target Gender',  ' - '),
  createData('Target Location',  ' - '),
  createData('Target Country',  ' - '),
  createData('Target Tags',  ' - '),
  createData('Start Date',  ' - '),
  createData('End Date',  ' - '),
  createData('Duration Days',  ' - '),
  createData('Publishing Brand Name',  ' - '),
  createData('Publishing Brand ID',  ' - '),
  createData('Uploaded By',  ' - '),
  createData('Approved By',  ' - '),
];

//**Style */
const StyledTableRow = styled(TableRow)(({ }) => ({
    "&:nth-of-type(even)": {
        background: "rgba(22, 31, 41, 0.03)",
    },
    "&:nth-of-type(odd)": {
        backgroundColor: "rgba(22, 31, 41, 0.07);",
    },
    border:"2px solid rgba(22, 31, 41, 0.03)"
}));

const StyledTableCell = styled(TableCell)(({ }) => ({
    [`&.${tableCellClasses.body}`]: {
        fontSize: "12px",
        fontWeight: 700,
        border: "2px solid white",
        width: "50%",
    },
}));

export default function ListTableComponent() {
  return (
    <TableContainer >
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.title}
            >
              <StyledTableCell sx={{fontWeight:700}} component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="left">{row.tableValue}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
