import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";
import MultiSelectFieldComponent from "./MultiSelectFieldComponent";
import SelectFieldComponent from "./SelectFieldComponent";
import TextFieldComponent from "./TextFieldComponent";

const menuItems = [
    {
        id: 0,
        title: "Today",
    },
    {
        id: 1,
        title: "Last 7 Days",
    },
    {
        id: 2,
        title: "Last 15 Days",
    },
    {
        id: 3,
        title: "Last 30 Days",
    },
    {
        id: 4,
        title: "Last 60 Days",
    },
    {
        id: 5,
        title: "Last 90 Days",
    },
];

const Index = () => {
    // text field handler
    const [textFieldState, setTextFieldState] = useState("");
    const onChangeTextField = (e: any) => {
        setTextFieldState(e.target.value);
    };

    // select handler
    const [selectValue, setSelectValue] = useState("");
    const handleChangeSelect = (event: SelectChangeEvent) => {
        setSelectValue(event.target.value as string);
    };

    // Multi Select handler
    const [multiSelectValue, setMultiSelectValue] = React.useState<string[]>(
        []
    );
    const handleChangeMultiSelect = (
        event: SelectChangeEvent<typeof multiSelectValue>
    ) => {
        const {
            target: { value },
        } = event;
        setMultiSelectValue(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };

    return (
        <>
            <ApexChartWrapper>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h5" sx={{ mb: 4.5 }}>
                            <Box
                                component="span"
                                sx={{ fontWeight: "700", fontSize: "36px" }}
                            >
                                User Videos
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
                <Card sx={{ position: "relative" }}>
                    <CardContent
                        sx={{
                            p: (theme) =>
                                `${theme.spacing(6.75, 7.5)} !important`,
                        }}
                    >
                        <Grid>
                            <Grid>
                                <Box
                                    style={{
                                        display: "flex",
                                        gap: "10px",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        padding: "13px 20px",
                                        width: "100%",
                                        height: "66px",
                                        position: "relative",
                                        background: "#ECF8FF",
                                        boxShadow:
                                            "1px 2px 3px rgba(22, 31, 41, 0.2)",
                                    }}
                                    marginBottom={"20px"}
                                >
                                    <Typography
                                        style={{
                                            textTransform: "none",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Tabbar
                                    </Typography>
                                </Box>

                                {/* View Text Field Component */}
                                <Grid marginBottom={"20px"}>
                                    <TextFieldComponent
                                        placeholder="Search and Filter"
                                        name={"key"}
                                        value={textFieldState}
                                        onChange={onChangeTextField}
                                    ></TextFieldComponent>
                                </Grid>

                                {/* View Select Field Component */}
                                <Grid marginBottom={"20px"}>
                                    <SelectFieldComponent
                                        placeholder="Select Item"
                                        label="uploadPeriod"
                                        value={selectValue}
                                        onChange={handleChangeSelect}
                                        menuItems={menuItems}
                                    ></SelectFieldComponent>
                                </Grid>

                                {/* View Multi Select Field Component */}
                                <Grid>
                                    <MultiSelectFieldComponent
                                        placeholder="Select Item"
                                        label="videoLength"
                                        value={multiSelectValue}
                                        onChange={handleChangeMultiSelect}
                                        menuItems={menuItems}
                                    ></MultiSelectFieldComponent>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </ApexChartWrapper>
        </>
    );
};

export default Index;
