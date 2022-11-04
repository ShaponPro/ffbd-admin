import * as React from "react";

// ** MUI Imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";

// ** Components
import SearchComponent from "src/components/SearchComponent";
import ButtonComponent from "src/components/ButtonComponent";

//styled Component
const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        background: "rgba(22, 31, 41, 0.07)",
        borderBottom: "2px solid white",
        borderLeft: "2px solid white",
        color: "black",
        textTransform: "none",
    },

    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
        border: "2px solid white",
        whiteSpace: "nowrap",
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

const StyledMenuItem = styled(MenuItem)({
    margin: "5px",
});

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

const ButtonGrid = styled(Grid)({
    margin: "5px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    display: "flex",
});

export default function InnAppOfferList({
    rowsData,
    columns,
    actions,
    actionHandler
}: {
    rowsData: object[];
    columns: object[];
    actions: object[];
    actionHandler: (type: string, id: string)=>void;
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
                        <Typography>Show</Typography>
                        <StyledSelect>
                            <StyledMenuItem value={10}>10</StyledMenuItem>
                            <StyledMenuItem value={20}>20</StyledMenuItem>
                            <StyledMenuItem value={30}>30</StyledMenuItem>
                        </StyledSelect>
                        <Typography>entries</Typography>
                    </Grid>
                    <Grid
                        lg={3}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <SearchComponent />
                    </Grid>
                    <Grid
                        lg={2}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                border: "1px solid rgba(22, 31, 41, 0.5)",
                                borderRadius: "20px",
                                height: "36px",
                                padding: "10px",
                            }}
                        >
                            <Box className="actions-left">
                                <CalendarMonthIcon />
                            </Box>
                            <Typography
                                sx={{
                                    color: "rgba(22, 31, 41, 0.25)",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                }}
                            >
                                Select Date
                            </Typography>
                            <Box
                                className="actions-right"
                                sx={{ display: "flex", alignItems: "center" }}
                            >
                                <ArrowDropDownIcon />
                            </Box>
                        </Box>
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
                        <StyledSelectReport displayEmpty>
                            <Button variant="text" sx={{ m: 3 }}>
                                Report
                            </Button>
                        </StyledSelectReport>
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
                                    <StyledTableRow key={row?.videoID || ""}>
                                        <StyledTableCell>
                                            {row?.slNo || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.title || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.noOfAction || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.reward || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.dailyTime || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.startDate || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.endDate || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.status || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.publishedOn || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.lastEdit || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <a href={row?.publishBy || ""}>
                                                {row?.publishBy || ""}
                                            </a>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.country || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.zone || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.lastEdits || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.area || ""}
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

InnAppOfferList.defaultProps = {
    rowsData: [
        {
            slNo: 1,
            title: "Loyality Program",
            noOfAction: 2,
            reward: "20 F:Points",
            dailyTime: "3 Hour",
            startDate: "1/8/2022",
            endDate: "1/9/2022",
            status: "Active",
            publishedOn: "1/8/2022",
            lastEdit: "1/8/2022",
            publishBy: "siam@fanfare.com.bd",
            country: "Bangladesh",
            zone: "Dhaka South",
            area: "-",
            action: "Button",
        },
        {
            slNo: 2,
            title: "Refer Win",
            noOfAction: 1,
            reward: "20 F:Points",
            dailyTime: "3 Hour",
            startDate: "1/8/2022",
            endDate: "1/9/2022",
            status: "Active",
            publishedOn: "1/8/2022",
            lastEdit: "1/8/2022",
            publishBy: "monir@fanfare.com.bd",
            country: "Bangladesh",
            zone: "Dhaka South",
            area: "-",
            action: "Button",
        },
    ],
    columns: [
        {
            field: "slNo",
            header: "Sl. No",
        },
        {
            field: "title",
            header: "Title",
        },
        {
            field: "noOfAction",
            header: "No. of Action",
        },
        {
            field: "reward",
            header: "Reward",
        },
        {
            field: "dailyTime",
            header: "Daily Time",
        },
        {
            field: "startDate",
            header: "Start Date",
        },
        {
            field: "endDate",
            header: "End Date",
        },
        {
            field: "status",
            header: "Status",
        },
        {
            field: "publishedOn",
            header: "Published on",
        },
        {
            field: "lastEdit",
            header: "Last Edit",
        },
        {
            field: "publishBy",
            header: "Publish by",
        },
        {
            field: "country",
            header: "Country",
        },
        {
            field: "zone",
            header: "Zone",
        },
        {
            field: "lastEdits",
            header: "Last Edits",
        },
        {
            field: "area",
            header: "Area",
        },
        {
            field: "action",
            header: "Action",
        },
    ],
    actions: [
        {
            type: "action",
            title: "View Contest"
        },
    ],
    actionHandler: (type: string, id: string)=>console.log('type, id', type, id)
};
