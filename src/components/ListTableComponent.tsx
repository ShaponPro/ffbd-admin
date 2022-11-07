
import React from 'react';

// ** MUI Imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Grid from "@mui/material/Grid";

// ** Components

//styled Component
const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        background: "rgba(22, 31, 41, 0.07)",
        borderBottom: "2px solid white",
        borderLeft: "2px solid white",
        color: "black",
        textTransform: "none",
        textAlign: "center" 
    },

    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
        border: "2px solid white",
        textAlign: "center" 
    },
}));

const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(even)": {
        background: "rgba(22, 31, 41, 0.07)",
    },
    "&:nth-of-type(odd)": {
        background: "rgba(22, 31, 41, 0.03)",
    },

    // hide last border
    "&:last-child td, &:last-child th": {
    },
}));

export default function ListTableComponent({
    rowsData,
    columns,
}: {
    rowsData: object[];
    columns: object[];
}) {

    const data = rowsData;

    return (
        <Box maxWidth={"xl"}>
            <Grid sx={{ padding: "10px" }}>
                <Grid sx={{ margin: "10px" }}>
                    <TableContainer
                        sx={{ borderRadius: "0px" }}
                    >
                        <Table sx={{ textAlign: "center" }}>
                            <TableHead
                                sx={{
                                    display: "table-header-group",
                                    whiteSpace: "nowrap",
                                    fontWeight:700
                                }}
                            >
                                <StyledTableRow>
                                    {columns.map((col: any) => (
                                        <StyledTableCell key={col.positions}>
                                          <b> {col?.header || ""}</b> 
                                        </StyledTableCell>
                                    ))}
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row: any) => (
                                    <StyledTableRow key={row?.positions || ""}>
                                        <StyledTableCell
                                            component="th"
                                            scope="row"
                                        >
                                        <b>{row?.positions || ""}</b> 
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.typeOfGift || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.fPoints || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.valueInCash || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.rewardConsiderations || ""}
                                        </StyledTableCell>
  
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                            
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Box>
    );
}

ListTableComponent.defaultProps = {
    rowsData: [
        {
            positions: "Reward-01",
            typeOfGift: "F points",
            fPoints: 5000,
            valueInCash: 24.44,
            rewardConsiderations: "Top Share Contest",
        },
        {
          positions: "Reward-02",
          typeOfGift: "Another points",
          fPoints: 9900,
          valueInCash: 1224,
          rewardConsiderations: "Relevant Quality",
      },
      {
        positions: "Reward-03",
        typeOfGift: "Another points",
        fPoints: 9900,
        valueInCash: 1224,
        rewardConsiderations: "Relevant Quality",
    },
    ],
    columns: [
        {
            field: "positions",
            header: "Positions",
        },
        {
            field: "typeOfGift",
            header: "Type Of Gift",
        },
        {
            field: "fPoints",
            header: "F: Points(If Any)",
        },
        {
            field: "valueInCash",
            header: "Value In Cash",
        },
        {
            field: "rewardConsiderations",
            header: "Reward Considerations",
        },
       
    ],
};

// ** MUI Imports
// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableContainer from '@mui/material/TableContainer';
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableRow from '@mui/material/TableRow';
// import styled from "@emotion/styled";

// function createData(
//   title: string,
//   tableValue: any,

// ) {
//   return { title, tableValue};
// }

// const rows = [
//   createData('Contest Type', ' - '),
//   createData('Contest ID',  ' - '),
//   createData('Contest Name',  ' - '),
//   createData('Cover Image',  ' - '),
//   createData('Short Description',  ' - '),
//   createData('Description',  ' - '),
//   createData('Hashtag',  ' - '),
//   createData('Brand Tag',  ' - '),
//   createData('Participation Tag',  ' - '),
//   createData('Target User Level',  ' - '),
//   createData('Target Age Group',  ' - '),
//   createData('Target Gender',  ' - '),
//   createData('Target Location',  ' - '),
//   createData('Target Country',  ' - '),
//   createData('Target Tags',  ' - '),
//   createData('Start Date',  ' - '),
//   createData('End Date',  ' - '),
//   createData('Duration Days',  ' - '),
//   createData('Publishing Brand Name',  ' - '),
//   createData('Publishing Brand ID',  ' - '),
//   createData('Uploaded By',  ' - '),
//   createData('Approved By',  ' - '),
// ];

// //**Style */
// const StyledTableRow = styled(TableRow)(({ }) => ({
//     "&:nth-of-type(even)": {
//         background: "rgba(22, 31, 41, 0.03)",
//     },
//     "&:nth-of-type(odd)": {
//         backgroundColor: "rgba(22, 31, 41, 0.07);",
//     },
//     border:"2px solid rgba(22, 31, 41, 0.03)"
// }));

// const StyledTableCell = styled(TableCell)(({ }) => ({
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: "12px",
//         fontWeight: 700,
//         border: "2px solid white",
//         width: "50%",
//     },
// }));

// export default function ListTableComponent() {
//   return (
//     <TableContainer >
//       <Table sx={{ minWidth: 400 }} aria-label="simple table">
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow
//               key={row.title}
//             >
//               <StyledTableCell sx={{fontWeight:700}} component="th" scope="row">
//                 {row.title}
//               </StyledTableCell>
//               <StyledTableCell align="left">{row.tableValue}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
