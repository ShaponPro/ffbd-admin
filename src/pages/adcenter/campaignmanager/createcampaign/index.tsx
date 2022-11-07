// import ButtonComponent from "src/components/ButtonComponent";

import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";
import ButtonComponent from "src/components/ButtonComponent";

// ** Styled Component Import
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, OutlinedInput } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

//** Props */

// ** Components

// ** Styles
const typographyStyle = {
    fontSize: "14px",

    paddingRight: "6px",
    paddingTop: "5px",
    fontWeight: "400",
    align: "left",
    color: "#000000",
};

const CreateCampaign = () => {
    return (
        <ApexChartWrapper>
            <Typography
                variant="h3"
                sx={{
                    paddingTop: "50px",
                    paddingBottom: "40px",
                    color: "#161F29",
                    fontSize: "36px",
                }}
            >
                <Box component="span" sx={{ fontWeight: "700px" }}>
                    Create Campaign
                </Box>
            </Typography>
            <Grid
                container
                style={{
                    background: "#FFFFFF",
                    boxShadow: "2px 5px 20px rgba(22, 31, 41, 0.1)",
                    borderRadius: "10px",
                    height: "236px",
                    padding: "20px",
                    display: "block",
                    overflow: "hidden",
                }}
            >
                <Box
                    style={{
                        display: "flex",
                        width: "100%",
                    }}
                >
                    <Box>
                        <Typography
                            style={{
                                fontSize: "14px",

                                paddingRight: "53px",
                                paddingTop: "5px",
                                fontWeight: "400",

                                color: "#000000",
                            }}
                        >
                            Select Brand
                        </Typography>
                    </Box>
                    <Box
                        style={
                            {
                                // width: "30%",
                                // border: "1px solid red",
                            }
                        }
                    >
                        <OutlinedInput
                            placeholder="Select and Filter"
                            style={{
                                background: "#FFFFFF",
                                color: "#000000",
                                boxShadow:
                                    "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
                                padding: "10px",
                                height: "36px",
                                fontSize: "12px",
                            }}
                            aria-describedby="icons-search-helper-text"
                            endAdornment={
                                <InputAdornment
                                    style={{
                                        width: "16px",

                                        height: "16px",

                                        color: "rgba(22, 31, 41, 0.5)",
                                    }}
                                    position="end"
                                >
                                    <SearchIcon />
                                </InputAdornment>
                            }
                            inputProps={{
                                "aria-label": "Search",
                            }}
                        />
                    </Box>
                </Box>
                <br />
                <Box
                    style={{
                        display: "flex",
                        width: "100%",
                    }}
                >
                    <Box>
                        <Typography style={typographyStyle}>
                            Request Reference
                        </Typography>
                    </Box>
                    <Box
                        style={{
                            width: "90%",
                        }}
                    >
                        <OutlinedInput
                            placeholder="Type"
                            style={{
                                background: "#FFFFFF",
                                boxShadow:
                                    "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
                                color: "rgba(22, 31, 41, 0.25)",
                                fontWeight: 400,
                                fontSize: "12px !important",
                                padding: "10px",
                                height: "36px",
                                width: "100%",
                            }}
                        />
                    </Box>
                </Box>
                <br />
                <br />
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: 4,
                    }}
                >
                    <ButtonComponent type="proceed" title="Proceed" />
                </Grid>
            </Grid>
        </ApexChartWrapper>
    );
};

export default CreateCampaign;
