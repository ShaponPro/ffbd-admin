import * as React from "react";

// ** MUI Imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Grid from "@mui/material/Grid";

// ** Components
import ButtonComponent from "src/components/ButtonComponent";

//styled Component
const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        background: "rgba(22, 31, 41, 0.07)",
        borderBottom: "2px solid white",
        borderLeft: "2px solid white",
        color: "black",
        textTransform: "none",
        textAlign: "center",
    },

    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
        border: "2px solid white",
        whiteSpace: "nowrap",
        textAlign: "center",
    },
}));

const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(even)": {
        background: "rgba(22, 31, 41, 0.07)",
    },
    "&:nth-of-type(odd)": {
        background: "rgba(22, 31, 41, 0.03)",
    },

    "&:last-child td, &:last-child th": {},
}));

const ButtonGrid = styled(Grid)({
    margin: "5px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    display: "flex",
});

export default function ContestResultScoreTabList({
    rowsData,
    columns,
    actions,
    actionHandler,
}: {
    rowsData: object[];
    columns: object[];
    actions: object[];
    actionHandler: (type: string, id: string) => void;
}) {
    const data = rowsData;

    return (
        <Box maxWidth={"xl"} sx={{ background: "#F3F3F4" }}>
            <Grid sx={{ padding: "10px" }}>
                <Grid sx={{ margin: "10px" }}>
                    <TableContainer
                        component={Paper}
                        sx={{ borderRadius: "0px" }}
                    >
                        <Table sx={{ textAlign: "center" }}>
                            <TableHead
                                sx={{
                                    display: "table-header-group",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                <StyledTableRow>
                                    {columns.map((col: any) => (
                                        <StyledTableCell key={col.videoID}>
                                            {col?.header || ""}
                                        </StyledTableCell>
                                    ))}
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row: any) => (
                                    <StyledTableRow key={row?.field || ""}>
                                        <StyledTableCell>
                                            {row?.effectiveDate || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.qualityScore || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.likePerformance || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.viewPerformance || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.total || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.updatedBy || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {actions && actions.length
                                                ? actions.map(
                                                      (
                                                          item: Item | {},
                                                          i: number
                                                      ) => {
                                                          return (
                                                              <>
                                                                  <ButtonGrid
                                                                      key={i}
                                                                  >
                                                                      <ButtonComponent
                                                                          type={
                                                                              item?.type ||
                                                                              ""
                                                                          }
                                                                          title={
                                                                              item?.title ||
                                                                              ""
                                                                          }
                                                                          onClick={() => {
                                                                              if (
                                                                                  actionHandler
                                                                              )
                                                                                  actionHandler(
                                                                                      item?.type ||
                                                                                          "no type",
                                                                                      row?.contestID
                                                                                  );
                                                                          }}
                                                                      />
                                                                  </ButtonGrid>
                                                              </>
                                                          );
                                                      }
                                                  )
                                                : null}
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

ContestResultScoreTabList.defaultProps = {
    rowsData: [
        {
            effectiveDate: "12-10-2022, 3:15 pm ",
            qualityScore: "90%",
            likePerformance: "6%",
            viewPerformance:"50%",
            total:"100%",
            updatedBy:"Mr. XYZ" 
        },
        {
            effectiveDate: "12-10-2022, 3:15 pm ",
            qualityScore: "90%",
            likePerformance: "6%",
            viewPerformance:"50%",
            total:"100%",
            updatedBy:"Mr. XYZ" 
        },
    ],
    columns: [
        {
            field: "effectiveDate",
            header: "Effective Date",
        },
        {
            field: "qualityScore",
            header: "Quality Score",
        },
        {
            field: "likePerformance",
            header: "Like Performance",
        },
        {
            field: "viewPerformance",
            header: "View Performance",
        },
        {
            field: "total",
            header: "Total",
        },
        {
            field: "updatedBy",
            header: "Updated By",
        },
        {
            field: "action",
            header: "Action",
        },
    ],
    actions: [
        {
            type: "action",
            title: "Update Now",
        },
    ],
    actionHandler: (type: string, id: string) =>
        console.log("type, id", type, id),
};
