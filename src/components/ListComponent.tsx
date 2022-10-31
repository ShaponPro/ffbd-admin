import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import SearchComponent from "./SearchComponent";
import { Button } from "@mui/material";
import usePagination from "@mui/material/usePagination";
import TableHead from '@mui/material/TableHead'

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
                type='button'
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
                type='button'
                {...item}
                style={{ border: "none", outline: "none", color: "#009EFA", background: "#F3F3F4" }}
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

export default function ListComponent({ rowsData, columns }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    // fetch("https://swapi-deno.azurewebsites.net/api/starships") //alternative to swapi.dev
    //   .then((response) => response.json())
    //   .then((data) => setData(data));
    /* eslint-disable  @typescript-eslint/no-use-before-define */
    setData(rowsData);
  }, []);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (event: React.ChangeEvent<HTMLInputElement>, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Box
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        gap={2}
        sx={{ background: "#F3F3F4", alignItems: "center" }}
      >
        <Box gridColumn='span 12' sx={{ display: "block", margin: "15px" }}>
          <Box
            gridColumn='span 12'
            sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "5px" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <Typography>Show</Typography>
              <StyledSelect displayEmpty />
              <Typography>entries</Typography>
              <SearchComponent style={{ marginLeft: "20px", width: "500px" }} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <StyledSelectReport displayEmpty>
                <Button variant='text' sx={{ m: 3 }}>
                  Report
                </Button>
              </StyledSelectReport>
            </Box>
          </Box>
          <TableContainer component={Paper} sx={{ borderRadius: "0px" }}>
            <Table sx={{ textAlign: "center" }}>
              <TableHead sx={{ display: "table-header-group" }}>
                <StyledTableRow>
                  {columns.map(col => (
                    <StyledTableCell>{col.header}</StyledTableCell>
                  ))}
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data).map(
                  row => (
                    <StyledTableRow key={row.videoID}>
                      <StyledTableCell component='th' scope='row'>
                        {row.videoID}
                      </StyledTableCell>
                      <StyledTableCell>
                        <img height={120} width={80} src='/images/avatars/images1.jpg' alt='this is image' />
                      </StyledTableCell>
                      <StyledTableCell>{row.videoTitle}</StyledTableCell>
                      <StyledTableCell>{row.fileSize}</StyledTableCell>
                      <StyledTableCell>{row.videoLength}</StyledTableCell>
                      <StyledTableCell>{row.userName}</StyledTableCell>
                      <StyledTableCell>{row.userID}</StyledTableCell>
                      <StyledTableCell>{row.fanfareID}</StyledTableCell>
                      <StyledTableCell>{row.userCreatedDate}</StyledTableCell>
                      <StyledTableCell>{row.uploadData}</StyledTableCell>
                      <StyledTableCell>{row.uploadDays}</StyledTableCell>
                      <StyledTableCell>{row.uploadCountry}</StyledTableCell>
                      <StyledTableCell>{row.uploadedIP}</StyledTableCell>
                      <StyledTableCell>{row.deviceType}</StyledTableCell>
                      <StyledTableCell>{row.videoLengthGroup}</StyledTableCell>
                      <StyledTableCell>{row.totalViews}</StyledTableCell>
                      <StyledTableCell>{row.totalWatchTime}</StyledTableCell>
                      <StyledTableCell>{row.totalLikes}</StyledTableCell>
                      <StyledTableCell>{row.totalComments}</StyledTableCell>
                      <StyledTableCell>{row.totalShares}</StyledTableCell>
                      <StyledTableCell>{row.downloads}</StyledTableCell>
                      <StyledTableCell>{row.contestID}</StyledTableCell>
                      <StyledTableCell>{row.contestTitle}</StyledTableCell>
                      <StyledTableCell>{row.contestWinningPosition}</StyledTableCell>
                      <StyledTableCell>{row.allTimeRankingScore}</StyledTableCell>
                      <StyledTableCell>{row.trendingScore}</StyledTableCell>
                      <StyledTableCell>{row.activeAwarenessDays}</StyledTableCell>
                      <StyledTableCell>{row.activeProductdays}</StyledTableCell>
                      <StyledTableCell>{row.totalMonitization}</StyledTableCell>
                      <StyledTableCell>{row.activeDailyMonetization}</StyledTableCell>
                      <StyledTableCell>{row.awarenessClick}</StyledTableCell>
                      <StyledTableCell>{row.addReach}</StyledTableCell>
                      <StyledTableCell>{row.trafficGeneration}</StyledTableCell>
                      <StyledTableCell>{row.rightSellingStatus}</StyledTableCell>
                      <StyledTableCell>{row.lastActivityDate}</StyledTableCell>
                      <StyledTableCell>{row.lastActivityTime}</StyledTableCell>
                      <StyledTableCell>{row.currentSatus}</StyledTableCell>
                    </StyledTableRow>
                  )
                )}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "5px" }}>
            <Box gridColumn='span 4' sx={{ display: "flex" }}>
              <Typography variant={"body2"}>Showing 1 to 20 of 167,328 entries</Typography>
            </Box>
            <Box
              gridColumn='span 8'
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <UsePagination />
              <span>
                <input
                  type='text'
                  style={{
                    width: "119px",
                    height: "36px",
                    padding: "10px",
                    background: "#FFFFFF",
                    border: "1px solid black",
                  }}
                  placeholder='jump to page'
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
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
