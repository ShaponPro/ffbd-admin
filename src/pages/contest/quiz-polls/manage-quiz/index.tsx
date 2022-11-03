
// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

// ** Components
import TabbarComponent from "src/components/TabbarComponent";
import {  useState } from "react";
import UserVideosCustomizedComponent from "src/views/videos/user-videos/customized/customized-report-components/UserVideosCustomizedComponent";
import AllQuiz from "./AllQuiz";
import LiveQuiz from "./LiveQuiz";
import PendingQuiz from "./PendinQuiz";

const tabs = [
  {
    key: "all",
    title: "All",
  },
  {
    key: "live",
    title: "Running/Live",
  },
  {
    key: "pending",
    title: "Pending Approval",
  },
  {
    key: "customized",
    title: "Customized",
  },
];



const AnalyticsCongratulations = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
 

  /**
   * Graph Ql Query
   */

  /**
   * Handle on tab change
   */
  // const filterChangeHandler = (key: string) => {
  //   console.log("key", key);
  // };

  const tabChangeHandler = (key: string) => {
    console.log("key", key);
    setActiveTab(key);
  };

  
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Typography variant='h3' sx={{ mb: 4.5 }}>
            <Box component='span' sx={{ fontWeight: "bold" }}>
              Manage Quiz/Polls
            </Box>
          </Typography>
        </Grid>
      </Grid>
      <Card sx={{ position: "relative" }}>
        <CardContent sx={{ p: theme => `${theme.spacing(6.75, 7.5)} !important` }}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12}>
              <TabbarComponent options={tabs} activekey={"all"} onChange={tabChangeHandler} />
            </Grid>
            {activeTab === "all" ? (
              
                <Grid item xs={12} sm={12}>
                  <AllQuiz/>
                </Grid>
            
            ) :activeTab === "live" ? (
              
              <Grid item xs={12} sm={12}>
                <LiveQuiz/>
              </Grid>
          
          ):activeTab === "pending" ? (
              
            <Grid item xs={12} sm={12}>
              <PendingQuiz/>
            </Grid>
        
        ):activeTab === "customized" ? (
              <Grid item xs={12} sm={12}>
                  <UserVideosCustomizedComponent/>
                </Grid>
              
            ):(<Grid item xs={12} sm={12}>
              <AllQuiz/>
            </Grid>)
            }
          </Grid>
        </CardContent>
      </Card>
    </ApexChartWrapper>
  );
};

export default AnalyticsCongratulations;
