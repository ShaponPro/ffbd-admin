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
import Checkbox from '@mui/material/Checkbox';

// ** Components
import SearchComponent from "src/components/SearchComponent";

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
const StyledSwitch = styled(Switch)({});
const HeadClick = styled(Grid)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
});
const ArrowClick = styled(Grid)({
    background: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "5px",
});

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function ManageCampaignList({
    rowsData,
    columns,
}: {
    rowsData: object[];
    columns: object[];
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
                                            <HeadClick>
                                                <Grid>{col?.header || ""}</Grid>{" "}
                                                <ArrowClick>
                                                    <ArrowDropDownIcon />
                                                </ArrowClick>
                                            </HeadClick>
                                        </StyledTableCell>
                                    ))}
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row: any) => (
                                    <StyledTableRow key={row?.videoID || ""}>
                                        <StyledTableCell>
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                                sx={{
                                                    "& .MuiSvgIcon-root": {
                                                        fontSize: 28,
                                                    },
                                                }}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell
                                            component="th"
                                            scope="row"
                                        >
                                            <StyledSwitch
                                                {...label}
                                                defaultChecked
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.brand || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.campaignID || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.campaignName || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <img
                                                height={40}
                                                width={90}
                                                src={row?.thumbnail || ""}
                                                alt="this is image"
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.status || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.event || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.campaignObjective || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.amountSpent || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.costPerResult || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.starts || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.ends || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.lastEdits || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.videoView || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.reach || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.impression || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.engagement || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.followers || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.click || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.contents || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.participents || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.invoice || ""}
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

ManageCampaignList.defaultProps = {
    rowsData: [
        {
            selectRow: "selectRow",
            onOff: "-",
            brand: "Walton",
            campaignID: "5689023D",
            campaignName: "Walton Premio-01",
            thumbnail: "https://i.postimg.cc/c1f434Wn/images1.jpg",
            status: "Active",
            event: "Awareness Boosting",
            campaignObjective: "Direct Awareness",
            amountSpent: 3000,
            costPerResult: "30.33",
            starts: "1:05:11",
            ends: "1:05:11",
            lastEdits: "01.07.22",
            videoView: "-",
            reach: 88000,
            impression: 134000,
            engagement: "-",
            followers: "-",
            click: "-",
            contents: "-",
            participents: "-",
            invoice: "19354",
        },
    ],
    columns: [
        {
            field: "selectRow",
            header: '',
        },
        {
            field: "onOff",
            header: "on/off",
        },
        {
            field: "brand",
            header: "Brand",
        },
        {
            field: "campaignID",
            header: "Campaign/Contest ID",
        },
        {
            field: "campaignName",
            header: "Campaign/Contest Name",
        },
        {
            field: "thumbnail",
            header: "Thumbnail",
        },
        {
            field: "status",
            header: "Status",
        },
        {
            field: "event",
            header: "Event",
        },
        {
            field: "campaignObjective",
            header: "Campaign Objective",
        },
        {
            field: "amountSpent",
            header: "Amount Spent (BDT)",
        },
        {
            field: "costPerResult",
            header: "Cost Per Result",
        },
        {
            field: "starts",
            header: "Starts",
        },
        {
            field: "ends",
            header: "Ends",
        },
        {
            field: "lastEdits",
            header: "Last Edits",
        },
        {
            field: "videoView",
            header: "Video View",
        },
        {
            field: "reach",
            header: "Reach",
        },
        {
            field: "impression",
            header: "Impression",
        },
        {
            field: "engagement",
            header: "Engagement",
        },
        {
            field: "followers",
            header: "Followers",
        },
        {
            field: "click",
            header: "Click",
        },
        {
            field: "contents",
            header: "Contents",
        },
        {
            field: "participents",
            header: "Participents",
        },
        {
            field: "invoice",
            header: "Invoice",
        },
    ],
};
