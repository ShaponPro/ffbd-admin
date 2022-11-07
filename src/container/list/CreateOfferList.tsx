import * as React from "react";

// ** MUI Imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Grid from "@mui/material/Grid";

import AddCircleIcon from "@mui/icons-material/AddCircle";

// ** Components
import TextInputField from "src/components/Textfield";
import ButtonComponent from "src/components/ButtonComponent";

const tagType = [
    {
        key: "brand",
        title: "Brand Tag",
    },
    {
        key: "hash",
        title: "Hash Tag",
    },
];

//styled Component
const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        background: "rgba(22, 31, 41, 0.07)",
        borderBottom: "2px solid white",
        borderLeft: "2px solid white",
        color: "black",
        textTransform: "none",
        textAlign:"center"
    },

    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
        border: "2px solid white",
        whiteSpace: "nowrap",
        textAlign:"center"
    },
}));



const StyledGrid = styled(Grid)({
    display: "flex",
    margin: "10px",
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


const ButtonGrid = styled(Grid)({
    margin: "5px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    display: "flex",
});

export default function CreateOfferList({
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
                <StyledGrid>
                    <Grid
                        lg={2}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Typography>Activities</Typography>
                    </Grid>
                    <Grid
                        lg={3}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <TextInputField
                            options={tagType}
                            title="small"
                            select={true}
                            placeholder="Select Item"
                        />
                    </Grid>
                    <Grid
                        lg={4}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <Typography>Goal</Typography>
                        <TextInputField placeholder="Type" />
                        <Typography>Numbers</Typography>
                    </Grid>
                    <Grid
                        lg={5}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Button

                            //onClick={handleClickOpen}
                            style={{
                                background: "#009EFA",
                                boxShadow:
                                    "0.5px 1px 3px rgba(22, 31, 41, 0.2)",
                                borderRadius: "2px",
                                color: " #FFFFFF",
                                fontWeight: "700",
                                fontSize: "14px",
                                gap: "10px",
                                padding:"12px 30px"
                            }}
                        >
                            <AddCircleIcon />
                            Add
                        </Button>
                    </Grid>
                </StyledGrid>
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
                                        <StyledTableCell width={10}>
                                            {row?.slNo || ""}
                                        </StyledTableCell>
                                        <StyledTableCell width={679}>
                                            {row?.ActivitiesName || ""}
                                        </StyledTableCell>
                                        <StyledTableCell width={500}>
                                            {row?.goal || ""}
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

CreateOfferList.defaultProps = {
    rowsData: [
        {
            slNo: 1,
            ActivitiesName: "Video View",
            goal: "Number",
        },
        {
            slNo: 2,
            ActivitiesName: "Refer Friend",
            goal: "People",
        },
    ],
    columns: [
        {
            field: "slNo",
            header: "Sl. No",
        },
        {
            field: "ActivitiesName",
            header: "Activities Name",
        },
        {
            field: "goal",
            header: "Goal",
        },
        {
            field: "action",
            header: "Action",
        },
    ],
    actions: [
        {
            type: "action",
            title: "Delete",
        },
    ],
    actionHandler: (type: string, id: string) =>
        console.log("type, id", type, id),
};
