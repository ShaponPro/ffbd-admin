import Link from "next/link";

// import { Grid}  from "mdi-material-ui";
import Button, { ButtonProps } from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";

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

const VideoUploader = () => {
    function createData(
        judgeType: string,
        name: string,
        email: string,
        organization: string,

        generalIdentity: string,
        assignedContest: string,
        eligibility: string,
        contestType: string,
        countContribution: number,
        activeStatus: string,
        createdData: string
    ) {
        return {
            judgeType,
            name,
            email,
            organization,
            generalIdentity,
            assignedContest,
            eligibility,
            contestType,
            countContribution,
            activeStatus,
            createdData,
        };
    }
    const rows = [
        createData(
            "Regular",
            "Frozen yoghurt",
            "farjana@gmail.com",
            "FFBD",
            "BD_Admin",
            "All",
            "super",
            "All",
            "20",
            "Active",
            "27-10-2019, 1:12 am"
        ),
        createData(
            "special",
            "Regular Judge-3",
            "email@text.com",
            "Mr. XYZ",
            "User",
            "All",
            "super",
            "All",
            "20",
            "Active",
            "27-10-2019, 1:12 am"
        ),
        createData(
            "Regular",
            "Frozen yoghurt",
            "farjana@gmail.com",
            "FFBD",
            "FF_Admin",
            "Last Contest",
            "super",
            "All",
            "20",
            "Active",
            "27-10-2019, 1:12 am"
        ),
        createData(
            "Regular",
            "Frozen ",
            "email@text.com",
            "FFBD",
            "Brand_Rep",
            "Last Contest",
            "Vote",
            "All",
            "20",
            "Active",
            "27-10-2019, 1:12 am"
        ),
        createData(
            "special",
            "Special Judge-1",
            "farjana@gmail.com",
            "ABC Company",
            "BD_Admin",
            "All",
            "super",
            "All",
            "20",
            "Active",
            "27-10-2019, 1:12 am"
        ),
        createData(
            "Regular",
            "Frozen yoghurt",
            "email@text.com",
            "FFBD",
            "BD_Admin",
            "All",
            "super",
            "All",
            "20",
            "Active",
            "27-10-2019, 1:12 am"
        ),
    ];

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>JudgeType</StyledTableCell>
                        <StyledTableCell align="right">Name</StyledTableCell>
                        <StyledTableCell align="right">Email</StyledTableCell>
                        <StyledTableCell align="right">
                            Organization
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            GeneralIdentity
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            AssignedContest
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            Eligibility
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            ContestType
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            CountContribution
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            ActiveStatus
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            CreatedData
                        </StyledTableCell>
                        <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.judgeType}
                            </StyledTableCell>

                            <StyledTableCell align="right">
                                {row.name}
                            </StyledTableCell>

                            <StyledTableCell align="right">
                                <Link href="/about">{row.email}</Link>
                            </StyledTableCell>

                            <StyledTableCell align="right">
                                {row.organization}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.generalIdentity}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.assignedContest}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.eligibility}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.contestType}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.countContribution}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.activeStatus}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.createdData}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <Box
                                    style={{
                                        display: "flex",

                                        // justifyContent: "space-between",
                                        gap: "5px",
                                    }}
                                >
                                    <Box>
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
                                            Edit
                                        </ColorButton>
                                    </Box>
                                    <Box>
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
                                            Reminder
                                        </ColorButton>
                                    </Box>
                                </Box>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default VideoUploader;