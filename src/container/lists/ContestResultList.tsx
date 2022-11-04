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

export default function ContestResultList({
    rowsData,
    columns,
}: {
    rowsData: object[];
    columns: object[];
}) {
    const data = rowsData;

    return (
        <Box maxWidth={"xl"} sx={{ background: "white", borderRadius: "5px" }}>
            <Grid sx={{ padding: "10px" ,pt:5}}>
                <Grid
                    style={{
                        paddingTop: "36px",
                        paddingBottom: "20px",
                    }}
                    container
                    columns={12}
                    rowSpacing={{ xs: 10 }}
                >
                    <Grid xs={12} md={4}>
                        <Box
                            style={{
                                display: "flex",
                                textAlign: "center",
                                paddingLeft: "10px",
                            }}
                        >
                            <Box
                                style={{
                                    paddingRight: "6px",
                                    paddingTop: "5px",
                                }}
                            >
                                <Typography>Show</Typography>
                            </Box>
                            <Box>
                                <StyledSelect placeholder="29">
                                    <StyledMenuItem value={10}>
                                        10
                                    </StyledMenuItem>
                                    <StyledMenuItem value={20}>
                                        20
                                    </StyledMenuItem>
                                    <StyledMenuItem value={30}>
                                        30
                                    </StyledMenuItem>
                                    <StyledMenuItem value={'all'}>
                                        All
                                    </StyledMenuItem>
                                </StyledSelect>
                            </Box>
                            <Box
                                style={{
                                    paddingLeft: "6px",
                                    paddingTop: "5px",
                                }}
                            >
                                <Typography>entries</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid xs={12} md={4}>
                        <Box>
                            <SearchComponent />
                        </Box>
                    </Grid>
                    <Grid xs={12} md={4}>
                        <Box
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
                        </Box>
                    </Grid>
                </Grid>

                <Grid xs={12} md={12} sx={{ padding: "10px", width: "100% " }}>
                    <TableContainer
                        component={Paper}
                        sx={{ borderRadius: "0px", width: "100% " }}
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
                                        <StyledTableCell key={col.contestID}>
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
                                                src="/images/avatars/images1.jpg"
                                                alt="this is image"
                                            />
                                        </StyledTableCell>

                                        <StyledTableCell>
                                            {row?.numberOfRewards || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.qualityReward || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.mostLikedReward || ""}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row?.highestViewReward || ""}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <StyledGrid>
                    <Grid
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

ContestResultList.defaultProps = {
    rowsData: [
        {
            contestID: "62b956a760a6af7b2e98cae1",
            contestName: "Eid Contest",
            coverPhoto: "url",
            numberOfRewards: 4,
            qualityReward: 5,
            mostLikedReward: 6,
            highestViewReward: 100,
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
            field: "numberOfRewards",
            header: "Number Of Rewards",
        },
        {
            field: "qualityReward",
            header: "Quality Reward",
        },
        {
            field: "mostLikedReward",
            header: "Most Liked Reward",
        },
        {
            field: "highestViewReward",
            header: "Highest View Reward",
        },
    ],
};
