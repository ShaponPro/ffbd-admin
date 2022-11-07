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
    border: "2px solid red",
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
    type: string; title: string;
}
export default function ManageContestList({
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
                                    {columns.map((col: any) => (
                                        <StyledTableCell key={col.videoID}>
                                            {col?.header || ""}
                                        </StyledTableCell>
                                    ))}
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row: any) => (
                                    <StyledTableRow key={row?.contestID || ""}>
                                        <StyledTableCell
                                            component="th"
                                            scope="row"
                                        >
                                            {row?.contestID || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.contestName || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <img
                                                height={120}
                                                width={80}
                                                src={row?.coverPhoto}
                                                alt="this is image"
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.hashTag || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.brandTag || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.publishingBrandName || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.targetUserLavel || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.targetLocation || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.rewardNature || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.rewardPeriod || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.numberofRewards || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.typeofGift || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.totalValueReward || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.netPayment || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.paymentChannel || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.totalParticipants || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.totalVideos || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.totalReach || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.totalClick || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.totalShares || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.totalFollow || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.totalVideosViews || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.totalWatchTime || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.resultPublishingStatus || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.giftDisbursmentStatus || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.contestTrandingRanking || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.activeBoostingRanking || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.allTimeContestRanking || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.publishType || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.contestStatus || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.contestStartDate || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.ContestEndDate || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.uploadedBy || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>

                                                {(actions && actions.length) ? actions.map((item: Item | {}, i: number) => {
                                                    return (
                                                        <>
                                                            <ButtonGrid key={i}>
                                                                <ButtonComponent
                                                                    type={item?.type || ""}
                                                                    title={item?.title || ""}
                                                                    onClick={()=> {
                                                                        if(actionHandler) actionHandler(item?.type||"no type", row?.contestID);
                                                                    }}
                                                                />
                                                            </ButtonGrid>
                                                        </>
                                                    );
                                                }) : null}

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

ManageContestList.defaultProps = {
    rowsData: [
        {
            contestID: "62b956a760a6af7b2e98cae1",
            contestName: "xyz2022",
            coverPhoto: "https://i.postimg.cc/c1f434Wn/images1.jpg",
            hashTag: "#0000",
            brandTag: "<0000",
            publishingBrandName: "Brand Name",
            targetUserLavel: "Lavel 1",
            targetLocation: "Dhaka",
            rewardNature: "Fixed",
            rewardPeriod: "-",
            numberofRewards: "00",
            typeofGift: "-",
            totalValueReward: "00",
            netPayment: "android",
            paymentChannel: "31s-60s",
            totalParticipants: 220,
            totalVideos: 6160,
            totalReach: 50,
            totalClick: 10,
            totalShares: 15,
            totalFollow: 55,
            totalVideosViews: "VC123547",
            totalWatchTime: "Talent's Wolrd",
            resultPublishingStatus: "1st",
            giftDisbursmentStatus: 1700,
            contestTrandingRanking: 415,
            activeBoostingRanking: 0,
            allTimeContestRanking: 0,
            publishType: 3,
            contestStatus: 5000,
            contestStartDate: 100,
            ContestEndDate: 5000,
            uploadedBy: 1000,
        },
    ],
    columns: [
        {
            field: "contestID",
            header: "Contest ID",
        },
        {
            field: "contestName",
            header: "Contest Name",
        },
        {
            field: "coverPhoto",
            header: "Cover Photo",
        },
        {
            field: "hashTag",
            header: "Hashtag",
        },
        {
            field: "brandTag",
            header: "Brandtag",
        },
        {
            field: "publishingBrandName",
            header: "Publishing Brand Name",
        },
        {
            field: "targetUserLavel",
            header: "Target User Level",
        },
        {
            field: "targetLocation",
            header: "Target Location",
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
            field: "numberofRewards",
            header: "Number of Reward",
        },
        {
            field: "typeofGift",
            header: "Type of Gift",
        },
        {
            field: "totalValueReward",
            header: "Total Value of Reward",
        },
        {
            field: "netPayment",
            header: "Net Payment",
        },
        {
            field: "paymentChannel",
            header: "Payment Channel",
        },
        {
            field: "totalParticipants",
            header: "Total Participants",
        },
        {
            field: "totalVideos",
            header: "Total Videos",
        },
        {
            field: "totalReach",
            header: "Total Reach",
        },
        {
            field: "totalClick",
            header: "Total Click",
        },
        {
            field: "totalShare",
            header: "Total Share",
        },
        {
            field: "totalFollow",
            header: "Total Follow/ Favourites",
        },
        {
            field: "totalVideosViews",
            header: "Total Video Views",
        },
        {
            field: "totalWatchTime",
            header: "Total Watch Time",
        },
        {
            field: "resultPublishingStatus",
            header: "Result Publishing Status",
        },
        {
            field: "giftDisbursmentStatus",
            header: "Gift Disbursment Status",
        },
        {
            field: "contestTrandingRanking",
            header: "Contest Tranding Ranking",
        },
        {
            field: "activeBoostingRanking",
            header: "Active Boosting Ranking",
        },
        {
            field: "allTimeContestRanking",
            header: "All Time Contest Ranking",
        },
        {
            field: "publishType",
            header: "Publish Type",
        },
        {
            field: "contestStatus",
            header: "Contest Status",
        },
        {
            field: "contestStartDate",
            header: "Contest Strat Date",
        },
        {
            field: "ContestEndDate",
            header: "Contest End Date",
        },
        {
            field: "uploadedBy",
            header: "Uploaded By",
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
        {
            type: "action",
            title: "View Summary"
        },
        {
            type: "aply",
            title: "More Action"
        },
    ],
    actionHandler: (type: string, id: string)=>console.log('type, id', type, id)
};
