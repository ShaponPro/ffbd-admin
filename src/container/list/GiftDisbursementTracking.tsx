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
import usePagination from "@mui/material/usePagination";
import TableHead from "@mui/material/TableHead";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
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
        textAlign: "center",
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

const StyledCheckbox = styled(Checkbox)({
    "& .MuiSvgIcon-root": {
        fontSize: 30,
        borderRadius: 0,
    },
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

const ButtonGrid = styled(Grid)({
    margin: "5px",
    fontSize: "12px",
    whiteSpace: "nowrap",
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
                                type="button"
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
                                type="button"
                                {...item}
                                style={{
                                    border: "none",
                                    outline: "none",
                                    color: "#009EFA",
                                    background: "#F3F3F4",
                                }}
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

type Item = {
    type: string;
    title: string;
};
export default function GiftDisbursementTracking({
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

    // const actionHandler2=((type: string, id: string)=>{
    //     console.log("View Contest clicked")
    // })

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
                        lg={8}
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
                                    <StyledTableCell>
                                        <StyledCheckbox disableRipple />
                                    </StyledTableCell>
                                    {columns.map((col: any) => (
                                        <StyledTableCell key={col.field}>
                                            {col?.header || ""}
                                        </StyledTableCell>
                                    ))}
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row: any) => (
                                    <StyledTableRow
                                        key={row?.contestType || ""}
                                    >
                                        <StyledTableCell>
                                            <StyledCheckbox disableRipple />
                                        </StyledTableCell>
                                        <StyledTableCell
                                            component="th"
                                            scope="row"
                                        >
                                            {row?.contestName || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.contestID || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.rewardNature || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.rewardPeriod || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.positions || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.rewardConsiderations || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.typeOfGift || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.fPoint || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.valuInCash || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.videoId || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.totalScorePerformance || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.userName || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.fanfareID || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.userID || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <img
                                                height={58}
                                                width={58}
                                                src={row?.coverPhoto}
                                                alt="this is image"
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.coverPhoto || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.contactNumber || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.publishingBrandName || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.redultPublishDate || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.selectionMethod || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.challanNo || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.disbursementStatus || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.deliveryStage || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.deliveryUpdateDate || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.lastUpdateBy || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.userStatus || ""}
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
                <StyledGrid>
                    <Grid
                        lg={3}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant={"body2"}>
                            Showing 1 to 20 of 167,328 entries
                        </Typography>
                    </Grid>
                    <Grid
                        lg={7}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                        }}
                    >
                        <UsePagination />
                    </Grid>
                    <Grid
                        lg={2}
                        xs={12}
                        sx={{
                            alignItems: "center",
                            justifyContent: "flex-end",
                        }}
                        display={{ lg: "flex", xs: "none" }}
                    >
                        <span>
                            <input
                                type="text"
                                style={{
                                    width: "119px",
                                    height: "36px",
                                    padding: "10px",
                                    background: "#FFFFFF",
                                    border: "1px solid black",
                                }}
                                placeholder="jump to page"
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
                    </Grid>
                </StyledGrid>
            </Grid>
        </Box>
    );
}

GiftDisbursementTracking.defaultProps = {
    rowsData: [
        {
            contestType: "Video",
            contestName: "Friends Forever",
            contestID: "VC109957675",
            rewardNature: "Fixed",
            rewardPeriod: "Full",
            positions: "Position-01",
            rewardConsiderations: "Relevant Quality Content",
            typeOfGift: "Cash",
            fPoint: "-",
            valuInCash: 3000,
            videoId: "-",
            totalScorePerformance: "7.09",
            userName: "xyz2022",
            fanfareID: "62b956a760a",
            userID: "6af7b2e98",
            coverPhoto: "https://i.postimg.cc/c1f434Wn/images1.jpg",
            contactNumber: "-",
            publishingBrandName: "-",
            redultPublishDate: "-",
            selectionMethod: "Wheel/Manual/Score",
            challanNo: "-",
            disbursementStatus: "-",
            deliveryStage: "-",
            deliveryUpdateDate: "-",
            lastUpdateBy: "-",
            userStatus: "Active",
        },
        {
            contestType: "Video",
            contestName: "Friends Forever",
            contestID: "VC109957675",
            rewardNature: "Fixed",
            rewardPeriod: "Full",
            positions: "Position-01",
            rewardConsiderations: "Relevant Quality Content",
            typeOfGift: "Cash",
            fPoint: "-",
            valuInCash: 3000,
            videoId: "-",
            totalScorePerformance: "7.09",
            userName: "xyz2022",
            fanfareID: "62b956a760a",
            userID: "6af7b2e98",
            coverPhoto: "https://i.postimg.cc/c1f434Wn/images1.jpg",
            contactNumber: "-",
            publishingBrandName: "-",
            redultPublishDate: "-",
            selectionMethod: "Wheel/Manual/Score",
            challanNo: "-",
            disbursementStatus: "-",
            deliveryStage: "-",
            deliveryUpdateDate: "-",
            lastUpdateBy: "-",
            userStatus: "Active",
        },
    ],
    columns: [
        {
            field: "contestType",
            header: "Contest Type",
        },
        {
            field: "contestName",
            header: "Contest Name",
        },
        {
            field: "contestID",
            header: "Contest ID",
        },
        {
            field: "rewardNature",
            header: "Reward Nature",
        },
        {
            field: "rewardPeriod",
            header: "Reward Period",
        },
        {
            field: "positions",
            header: "Positions",
        },
        {
            field: "rewardConsiderations",
            header: "Reward Considerations",
        },
        {
            field: "typeOfGift",
            header: "Type of Gift",
        },
        {
            field: "fPoint",
            header: "F:Points (if any)",
        },
        {
            field: "valueInCash",
            header: "Value in Cash",
        },
        {
            field: "videoId",
            header: "Video ID",
        },
        {
            field: "totalScorePerformance",
            header: "Total Score/ Performance",
        },
        {
            field: "userName",
            header: "User Name",
        },
        {
            field: "fanfareID",
            header: "Fanfare ID",
        },
        {
            field: "userID",
            header: "User ID",
        },
        {
            field: "coverPhoto",
            header: "Cover Photo",
        },
        {
            field: "contactNumber",
            header: "Contact Number",
        },
        {
            field: "publishingBrandName",
            header: "Publishing Brand Name",
        },
        {
            field: "redultPublishDate",
            header: "Result Publish Date",
        },
        {
            field: "selectionMethod",
            header: "Selection Method",
        },
        {
            field: "challanNo",
            header: "Challan No.",
        },
        {
            field: "disbursementStatus",
            header: "Disbursment Status",
        },
        {
            field: "deliveryStage",
            header: "Delivery Stage",
        },
        {
            field: "deliveryUpdateDate",
            header: "Delivery Update Date",
        },
        {
            field: "lastUpdateBy",
            header: "Last Update by",
        },
        {
            field: "userStatus",
            header: "User Status",
        },
        {
            field: "action",
            header: "Action",
        },
    ],
    actions: [
        {
            type: "action",
            title: "Disburse",
        },
    ],
    actionHandler: (type: string, id: string) =>
        console.log("type, id", type, id),
};
