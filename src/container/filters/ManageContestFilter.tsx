import { useState } from "react";

// ** MUI Imports
import { InputBase, InputAdornment, Typography, Radio } from "@mui/material";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

// ** Icons Imports
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

/* Style Start */
const itemStyle = {
    borderRadius: "0",
    padding: "5px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    boxShadow: " inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
    justifyContent: "space-between",
    width: "160px",
};

const typographyStyle = {
    fontSize: "11px",
    width: "150px",
    color: "black",
};

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
}));

const StyledSelect = styled(Select)({
    borderRadius: "0px",
    background: "white",
    height: "36px",
    boxShadow: "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
    width: "160px",
});

const StyledGrid = styled(Grid)({
    display: "flex",
    alignItems: "center",
    margin: "10px",
});

const radioBtnContainerStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: ".15s ease-in-out",
    margin: "0px 0px 0px 10px",
    fontSize: "12px",
};

/* Style End */

const userVideos = {
    userName: "",
    uploadedCountry: "",
    videoContest: "",
    musicCreator: "",
};

//**props

// type props = {
//     title: string;

//     // userName: string
//     // fields: object[];
//     // onChange: (fields: object[]) => void;
//     // style: React.CSSProperties;
// };

const ManageContestFilter = () => {
    const [videoState, setVideoState] = useState<object>(userVideos);

    /* Handle all Changes */
    const onChangeHandler = (e: any) => {
        console.log("e", e);
        setVideoState({ ...videoState, [e.target.name]: e.target.value });

        console.log(videoState);

        // setUserName({userName: e.target.value})

        //post req
        // axios
        //post
    };

    /* Handle all Changes End */

    return (
        <div className="demo-space-x">
            <Grid container spacing={2}>
                <Grid item lg={3} xs={12}>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Contest Name
                        </Typography>
                        <Item style={itemStyle}>
                            <InputBase
                                placeholder="Search and Filter"
                                style={{ fontSize: "10px" }}
                                onChange={onChangeHandler}
                                name="userName"
                            />
                            <SearchIcon />
                        </Item>
                    </StyledGrid>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Target User Lavel
                        </Typography>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel
                                shrink={false}
                                sx={{
                                    color: "rgba(22, 31, 41, 0.25)",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                }}
                            >
                                Select Item
                            </InputLabel>
                            <StyledSelect>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Select All
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Anchor
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Jogger
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Runner
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Racer
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Striker
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Hunter
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Warrior
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Hero
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Victor
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Champ
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Wizard
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Legend
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Star
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Superstar
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Megastar
                                    </label>
                                    <Radio />
                                </Grid>
                            </StyledSelect>
                        </FormControl>
                    </StyledGrid>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Reward Nature
                        </Typography>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel
                                shrink={false}
                                sx={{
                                    color: "rgba(22, 31, 41, 0.25)",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                }}
                            >
                                Select Item
                            </InputLabel>
                            <StyledSelect>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Select All
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Fixed
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Weekly
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Biweekly
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Monthly
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Quarterly
                                    </label>
                                    <Radio />
                                </Grid>
                            </StyledSelect>
                        </FormControl>
                    </StyledGrid>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Git Disbursement Status
                        </Typography>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel
                                shrink={false}
                                sx={{
                                    color: "rgba(22, 31, 41, 0.25)",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                }}
                            >
                                Select Item
                            </InputLabel>
                            <StyledSelect>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Select All
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        N/A
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Continuous
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Pending
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Processing
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Disbursed
                                    </label>
                                    <Radio />
                                </Grid>
                            </StyledSelect>
                        </FormControl>
                    </StyledGrid>
                </Grid>
                <Grid item lg={3} xs={12}>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Current Satus
                        </Typography>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel
                                shrink={false}
                                sx={{
                                    color: "rgba(22, 31, 41, 0.25)",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                }}
                            >
                                Select Item
                            </InputLabel>
                            <StyledSelect>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Select All
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Upcoming
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Pending Approval
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Running/Live
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Closed without Result
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Closed with Result
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Suspended
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Rejected
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Draft
                                    </label>
                                    <Radio />
                                </Grid>
                            </StyledSelect>
                        </FormControl>
                    </StyledGrid>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Target Location
                        </Typography>
                        <Item style={itemStyle}>
                            <InputBase
                                placeholder="Search and Filter"
                                style={{ fontSize: "10px" }}
                                onChange={onChangeHandler}
                                name="userName"
                            />
                            <SearchIcon />
                        </Item>
                    </StyledGrid>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Payment Channel
                        </Typography>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel
                                shrink={false}
                                sx={{
                                    color: "rgba(22, 31, 41, 0.25)",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                }}
                            >
                                Select Item
                            </InputLabel>
                            <StyledSelect>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Select All
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        100% Discount
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Manual
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Wallet
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Gateway
                                    </label>
                                    <Radio />
                                </Grid>
                            </StyledSelect>
                        </FormControl>
                    </StyledGrid>
                </Grid>
                <Grid item lg={3} xs={12}>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Publishing Brand Name
                        </Typography>
                        <Item style={itemStyle}>
                            <InputBase
                                placeholder="Search and Filter"
                                style={{ fontSize: "10px" }}
                                onChange={onChangeHandler}
                                name="videoContest"
                            />
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        </Item>
                    </StyledGrid>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Duration Days
                        </Typography>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel
                                shrink={false}
                                sx={{
                                    color: "rgba(22, 31, 41, 0.25)",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                }}
                            >
                                Select Item
                            </InputLabel>
                            <StyledSelect>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Select All
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        7 Days
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        15 Days
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        30 Days
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        60 Days
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        90 Days
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        180 Days
                                    </label>
                                    <Radio />
                                </Grid>
                            </StyledSelect>
                        </FormControl>
                    </StyledGrid>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Boosting Status
                        </Typography>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel
                                shrink={false}
                                sx={{
                                    color: "rgba(22, 31, 41, 0.25)",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                }}
                            >
                                Select Item
                            </InputLabel>
                            <StyledSelect>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Select All
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        N/A
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Active Boosting
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Ended Boosting
                                    </label>
                                    <Radio />
                                </Grid>
                            </StyledSelect>
                        </FormControl>
                    </StyledGrid>
                </Grid>
                <Grid item lg={3} xs={12}>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Publish Type
                        </Typography>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel
                                shrink={false}
                                sx={{
                                    color: "rgba(22, 31, 41, 0.25)",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                }}
                            >
                                Select Item
                            </InputLabel>
                            <StyledSelect>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Front End
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Back End
                                    </label>
                                    <Radio />
                                </Grid>
                            </StyledSelect>
                        </FormControl>
                    </StyledGrid>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Contest Start Period
                        </Typography>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel
                                shrink={false}
                                sx={{
                                    color: "rgba(22, 31, 41, 0.25)",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                }}
                            >
                                Select Item
                            </InputLabel>
                            <StyledSelect>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Today
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Last 7 Days
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Last 15 Days
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Last 30 Days
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Last 60 Days
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Last 90 Days
                                    </label>
                                    <Radio />
                                </Grid>
                            </StyledSelect>
                        </FormControl>
                    </StyledGrid>
                    <StyledGrid>
                        <Typography
                            variant="h4"
                            display="flex"
                            style={typographyStyle}
                        >
                            Result Publishing Status
                        </Typography>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel
                                shrink={false}
                                sx={{
                                    color: "rgba(22, 31, 41, 0.25)",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                }}
                            >
                                Select Item
                            </InputLabel>
                            <StyledSelect>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Select All
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        N/A
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Continuous
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Pending
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Processing
                                    </label>
                                    <Radio />
                                </Grid>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <label style={radioBtnContainerStyle}>
                                        Published
                                    </label>
                                    <Radio />
                                </Grid>
                            </StyledSelect>
                        </FormControl>
                    </StyledGrid>
                </Grid>
            </Grid>
        </div>
    );
};
export default ManageContestFilter;
