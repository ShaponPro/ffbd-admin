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
    {
        positions: "Reward-04",
        typeOfGift: "Another points",
        fPoints: 9900,
        valueInCash: 1224,
        rewardConsiderations: "Relevant Quality",
    },
    {
        positions: "Reward-05",
        typeOfGift: "Another points",
        fPoints: 9900,
        valueInCash: 1224,
        rewardConsiderations: "Relevant Quality",
    },
    {
        positions: "Reward-06",
        typeOfGift: "Another points",
        fPoints: 9900,
        valueInCash: 1224,
        rewardConsiderations: "Relevant Quality",
    },
    {
        positions: "Reward-07",
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
