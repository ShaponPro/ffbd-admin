import React from "react";
import TextInputField from "src/components/Textfield";
import Box from "@mui/material/Box";
import { Grid, InputAdornment, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ButtonComponent from "src/components/ButtonComponent";

const tagType = [
    {
        key: "brand",
        title: "Brand Tag",
    },
    {
        key: "hash",
        title: "Hash Tag",
    },
];

const typographyStyle = {
    fontSize: "16px",
    padding: "10px 20px",
    fontWeight: "600",
    align: "left",
    color: "#161F29",
};

function OfferBox() {
    return (
        <>
            <Box
                sx={{ flexGrow: 1 }}
                style={{
                    background: "#F3F3F4",
                    padding: "0px 20px",
                    display: "grid",
                }}
            >
                <Box sx={{ width: "100%" }}>
                    <Grid container rowSpacing={1} sx={{ gap: "20px" }}>
                        <Grid container xs={12} sm={12}>
                            <Grid
                                lg={12}
                                xs={12}
                                sm={12}
                                sx={{ display: "flex", alignItems: "center" }}
                            >
                                <Grid lg={2} item xs={3.5} sm={3.5} md={1.75}>
                                    <Typography style={typographyStyle}>
                                        Title
                                    </Typography>
                                </Grid>
                                <Grid item lg={10} xs={8.5} sm={8.5} md={10.25}>
                                    <Typography variant="body2">
                                        Loyality Program
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                lg={12}
                                xs={12}
                                sm={12}
                                sx={{ display: "flex", alignItems: "center" }}
                            >
                                <Grid lg={2} item xs={3.5} sm={3.5} md={1.75}>
                                    <Typography style={typographyStyle}>
                                        Earn
                                    </Typography>
                                </Grid>
                                <Grid item lg={10} xs={8.5} sm={8.5} md={10.25}>
                                    <Typography variant="body2">
                                        50 F:Points
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container lg={12} xs={12} sm={12} md={6}>
                            <Grid item lg={2} xs={3.5}>
                                <Typography style={typographyStyle}>
                                    Upload Video
                                </Typography>
                            </Grid>
                            <Grid item lg={10} xs={8.5}>
                                <TextInputField
                                    type="file"
                                    helperText="Recommended video format mp4, avi & length max 7 minutes"
                                />
                            </Grid>
                        </Grid>
                        <Grid container lg={12} xs={12} sm={12} md={12}>
                            <Grid item lg={2} xs={3.5} sm={3.5} md={1.75}>
                                <Typography style={typographyStyle}>
                                    Description
                                </Typography>
                            </Grid>
                            <Grid item lg={10} xs={8.5} sm={8.5} md={10.25}>
                                <TextInputField
                                    placeholder="Type"
                                    helperText="Max 150 Characters"
                                />
                            </Grid>
                        </Grid>
                        <Grid container lg={12} xs={12} sm={12} md={12}>
                            <Grid item lg={2} xs={3.5} sm={3.5} md={1.75}>
                                <Typography style={typographyStyle}>
                                    Button Tab
                                </Typography>
                            </Grid>
                            <Grid item lg={2} xs={8.5} sm={8.5} md={10.25}>
                                <TextInputField
                                    options={tagType}
                                    title="small"
                                    select={true}
                                    placeholder="Select Item"
                                />
                            </Grid>
                            <Grid item lg={1} xs={3.5} sm={3.5} md={1.75}>
                                <Typography style={typographyStyle}>
                                    Text
                                </Typography>
                            </Grid>
                            <Grid item lg={7} xs={8.5} sm={8.5} md={10.25}>
                                <TextInputField
                                    placeholder="Type"
                                    helperText="Max 150 Characters"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box
                sx={{ flexGrow: 1 }}
                style={{
                    padding: "20px",
                    display: "flex",
                    gap: 10,
                    justifyContent: "flex-end",
                }}
            >
                <ButtonComponent
                    title="Preview"
                    type="customizable"
                    style={{
                        background: "#57CE66",
                        fontFamily: "Open Sans",
                        fontWeight: "700",
                        fontSize: "12px",
                        color: "#FFFFFF",
                        borderRadius: "0px",
                        padding:"12px 30px"
                    }}
                />
            </Box>
        </>
    );
}

export default OfferBox;
