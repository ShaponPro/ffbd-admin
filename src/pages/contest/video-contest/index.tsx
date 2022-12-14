
// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextInputField from "src/components/Textfield";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";
import ButtonComponent from "src/components/ButtonComponent";
import { useState } from "react";


//** Props */



// ** Components

//import { useState } from "react";



const options =[
    {
      key: "front",
      title: "Front End",
    },
    {
      key: "back",
      title: "Back End",
    }];


// ** Styles
const typographyStyle = {
    fontSize: "14px",
    padding: "10px 20px",
    fontWeight: "400",
    align: "left",
    color: "#000000",
};

const AnalyticsCongratulations = () => {
    // const [active, setActive] = useState<string>("upload"); //
    // ** State
    const [active, setActive] = useState<string>("front");
    

    /**
     * Handle OnClick Button
     */
    const onClickHandler = (key: string) => {
        setActive(key);

        // console.log('key :>> ', key);
        // if (props.onChange) props.onChange(key);
    };

    /**
     * Handle on tab change
     */

    return (
        <ApexChartWrapper>
            <Grid container spacing={6}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3" sx={{ mb: 4.5 }}>
                        <Box component="span" sx={{ fontWeight: "bold" }}>
                            Place a New Video Contest
                        </Box>
                    </Typography>
                </Grid>
            </Grid>
            <Card sx={{ position: "relative" }}>
                <CardContent
                    sx={{
                        p: (theme) =>
                            `${theme.spacing(9, 7.5, 9, 7.5)} !important`,
                    }}
                >
                    <Grid container spacing={6}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            item
                            xs={12}
                            sm={12}
                        >
                            <Box
                                sx={{ flexGrow: 1 }}
                                style={{ padding: "20px", display: "grid" }}
                            >
                                <Box sx={{ width: "100%" }}>
                                    <Grid container rowSpacing={1}>
                                        <Grid container xs={12} sm={12}>
                                            <Grid
                                                item
                                                xs={3.5}
                                                sm={3.5}
                                                md={1.75}
                                            >
                                                <Typography
                                                    style={typographyStyle}
                                                >
                                                    Select Brand
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={8.5}
                                                sm={8.5}
                                                md={10.25}
                                            >
                                                <TextInputField
                                                    title="small"
                                                    placeholder="Select and Filter"
                                                    endAdornment={
                                                        <InputAdornment
                                                            style={{
                                                                width: "16px",
                                                            }}
                                                            position="end"
                                                        >
                                                            <SearchIcon />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container xs={12} sm={12} md={12}>
                                            <Grid
                                                item
                                                xs={3.5}
                                                sm={3.5}
                                                md={1.75}
                                            >
                                                <Typography
                                                    style={typographyStyle}
                                                >
                                                    Request Reference
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={8.5}
                                                sm={8.5}
                                                md={10.25}
                                            >
                                                <TextInputField placeholder="Type" />
                                            </Grid>
                                        </Grid>
                                        <Grid container xs={12} sm={12} md={12}>
                                            <Grid
                                                item
                                                xs={3.5}
                                                sm={3.5}
                                                md={1.75}
                                            >
                                                <Typography
                                                    style={typographyStyle}
                                                >
                                                    Publish Preference
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={8.5}
                                                sm={8.5}
                                                md={10.25}
                                                style={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "flex-start",
                                                    gap: 4,
                                                }}
                                            >
                                                {options.length
                                                    ? options.map(
                                                          (option) => (
                                                              <ButtonComponent
                                                              type="age"
                                                              style={{background: option?.key ===
                                                                active? '#57CE66' : '#F3F3F4',
                                                                boxShadow: option?.key ===
                                                                active? '0px 0px 0px 0px' : '0px 2px 5px rgba(0, 0, 0, 0.1), inset 1px 2px 3px rgba(0, 0, 0, 0.25)',
                                                                width: '95px ',
                                                                height: '36 px ',
                                                                borderRadius: '2px',
                                                                color: option?.key ===
                                                                active? '#FFFFFF' : '#161F29',
                                                            }}
                                                              key={option.key}
                                                                  
                                                                  title={
                                                                      option?.title ||
                                                                      ""
                                                                  }
                                                                  isActive={
                                                                      option?.key ===
                                                                      active
                                                                  }
                                                                  onClick={() =>
                                                                      onClickHandler(
                                                                          option.key ||
                                                                              ""
                                                                      )
                                                                  }
                                                              />
                                                          )
                                                      )
                                                    : null}

                                            </Grid>
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
                                                <ButtonComponent
                                                    type="proceed"
                                                    title="Proceed"
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </ApexChartWrapper>
    );
};

export default AnalyticsCongratulations;
