import Link from "next/link";

import Button, { ButtonProps } from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { InputBase } from "@mui/material";

// ** Components
import SearchComponent from "src/components/SearchComponent";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: " rgba(22, 31, 41, 0.07);",
        color: "#161F29",
        fontWeight: 700,
        fontSize: "12px",
        textWrap: "nowrap",
        textTransform: "none",

        // padding: "5px",
        textAlign: "center",
        borderBottom: "2px solid white",
        borderLeft: "2px solid white",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: "12px",
        fontWeight: 400,
        border: "2px solid white",
        textAlign: "center",
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
        background: "rgba(22, 31, 41, 0.07)",
    },
    "&:nth-of-type(odd)": {
        //border: '2px solid black',
        backgroundColor: "rgba(22, 31, 41, 0.03)",
    },
}));

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "#FFFFFF",
}));

const ContestVideoUploaderList = () => {
    function createData( 
        userName: string,
        fanfareId: number,
        coverPhoto: string,
        totalVideosContest: number,
        lastDateOfParticipation: string,
        incompetency: string,
        ranking: string,
        activeStatus: string,
    ) {
        return {
            userName,
            fanfareId,
            coverPhoto,
            totalVideosContest,
            lastDateOfParticipation,
            incompetency,
            ranking,
            activeStatus,
        };
    }
    const rows = [
        createData(
            "-",
            2,
            "-",
            100,
            "10/2/2002",
            "-",
            "-",
            "-",
        ),
        createData(
            "-",
            2,
            "-",
            100,
            "10/2/2002",
            "-",
            "-",
            "-",
        ),
    ];

    return (
        <>
            <Grid  xs={12}  mb={4} mt={4} rowSpacing={2}>
                <Box 
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding:"10px"
                    }}
                    container
                >
                    <SearchComponent />
                    <Box>
                        <Typography variant="subtitle1">
                            Desired Number
                        </Typography>
                    </Box>
                    <InputBase
                        placeholder="All"
                        sx={{
                            borderRadius: "0",
                            padding: "10px",
                            height: "36px",
                            display: "flex",
                            boxShadow:
                                " inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
                            background: "white",
                        }}
                    />
                </Box>
            </Grid>

            <TableContainer>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>User Name</StyledTableCell>
                            <StyledTableCell align="right">
                                Fanfare ID
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                Cover Photo
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                Total Videos Under The Contest
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                Last Date of Participation
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                Incompetency Status
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                All The Time Ranking
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                Action
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.userName}>
                                <StyledTableCell component="th" scope="row">
                                    {row.fanfareId}
                                </StyledTableCell>

                                <StyledTableCell align="right">
                                    {row.userName}
                                </StyledTableCell>

                                <StyledTableCell>
                                    <img
                                        height={120}
                                        width={80}
                                        src="/images/avatars/images1.jpg"
                                        alt="this is image"
                                    />
                                </StyledTableCell>

                                <StyledTableCell align="right">
                                    {row.totalVideosContest}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {row.lastDateOfParticipation}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {row.incompetency}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {row.ranking}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <Box>
                                        <Box sx={{ marginBottom: "10px" }}>
                                            <ColorButton
                                                style={{
                                                    color:"black",
                                                    width: "200px",
                                                    height: "36px",
                                                    background:"#ffff",
                                                    boxShadow:
                                                        "0.5px 1px 3px rgba(22, 31, 41, 0.2)",
                                                    borderRadius: "2px",
                                                    padding: "12px 20px", 
                                                    fontWeight: "600",
                                                    fontSize: "12px",
                                                    textTransform: "none",
                                                    "&:hover": { color: "white",backgroundColor:'green' } 
                                                }}
                                            >
                                                Mark As Incompetitive
                                            </ColorButton>
                                        </Box>
                                        <Box >
                                            <ColorButton
                                                style={{
                                                    width: "100px",
                                                    height: "36px",
                                                    background:
                                                        "linear-gradient(360deg, #AE061A -64.72%, #FF5407 100%)",
                                                    boxShadow:
                                                        "0.5px 1px 3px rgba(22, 31, 41, 0.2)",
                                                    borderRadius: "2px",
                                                    padding: "12px 20px",
                                                    color: " #FFFFFF !important",
                                                    fontWeight: "600",
                                                    fontSize: "12px",
                                                    textTransform: "none",
                                                }}
                                            >
                                                View
                                            </ColorButton>
                                        </Box>
                                    </Box>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default ContestVideoUploaderList;
