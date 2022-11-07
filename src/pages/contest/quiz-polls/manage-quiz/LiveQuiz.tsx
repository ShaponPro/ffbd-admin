

// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

// ** Components

import ListComponent from "src/components/ListComponent";
import { FilterComponent } from "src/components/FilterComponent";



const columns = [{
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
  field: "hashTag",
  header: "Hashtag",
},
{
  field: "brandTag",
  header: "Brandtag",
},
{
  field: "publishingBrandName",
  header: "Publishing Brand Name",
},
{
  field: "targetUserLavel",
  header: "Target User Level",
},
{
  field: "targetLocation",
  header: "Target Location",
},
{
  field: "rewardNature",
  header: "Reward Nature",
},
{
  field: "numberofRewards",
  header: "Number of Reward",
},
{
  field: "typeofGift",
  header: "Type of Gift",
},
{
  field: "totalValueReward",
  header: "Total Value of Reward",
},
{
  field: "netPayment",
  header: "Net Payment",
},
{
  field: "paymentChannel",
  header: "Payment Channel",
},
{
  field: "totalParticipants",
  header: "Total Participants",
},
{
  field: "totalVideos",
  header: "Total Videos",
},
{
  field: "totalReach",
  header: "Total Reach",
},
{
  field: "totalClick",
  header: "Total Click",
},
{
  field: "totalShare",
  header: "Total Share",
},
{
  field: "totalFollow",
  header: "Total Follow/ Favourites",
},
{
  field: "totalVideosViews",
  header: "Total Video Views",
},
{
  field: "totalWatchTime",
  header: "Total Watch Time",
},
{
  field: "resultPublishingStatus",
  header: "Result Publishing Status",
},
{
  field: "giftDisbursmentStatus",
  header: "Gift Disbursment Status",
},
{
  field: "contestTrendingRanking",
  header: "Contest Trending Ranking",
},
{
  field: "activeBoostingRanking",
  header: "Active Boosting Ranking",
},
{
  field: "allTimeContestRanking",
  header: "All Time Contest Ranking",
},
{
  field: "publishType",
  header: "Publish Type",
},
{
  field: "contestStatus",
  header: "Contest Status",
},
{
  field: "contestStartDate",
  header: "Contest Strat Date",
},
{
  field: "ContestEndDate",
  header: "Contest End Date",
},
{
  field: "uploadedBy",
  header: "Uploaded By",
},
{
  field: "action",
  header: "Action",
}]





const LiveQuiz = () => {
  
 

  /**
   * Graph Ql Query
   */

  /**
   * Handle on tab change
   */
  // const filterChangeHandler = (key: string) => {
  //   console.log("key", key);
  // };


  
  return (
    <ApexChartWrapper>
      
      
          <Grid container spacing={6}>
            
            
                <Grid item xs={12} sm={12}>
                  <FilterComponent />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <ListComponent columns={columns} />
                </Grid>
          </Grid>
       
    </ApexChartWrapper>
  );
};

export default LiveQuiz;
