// ** MUI Imports
import Box,{BoxProps} from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

// // ** State import
// import { useQuery } from "@apollo/client";
// import { useEffect, useState } from "react";
// import { GET_VIDEO_LIST } from "src/pages/videos/graphql/Queries";

// ** MUI IconImports

// ** Styled Component Import
import { styled, useTheme } from '@mui/material/styles'
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

// ** Components
import TabbarComponent from "src/components/TabbarComponent";
import { ContestResultFilter } from "src/container/filters/ContestResultFilter";
import ContestResultList from "src/container/lists/ContestResultList"
import ButtonGroupComponent from "src/components/ButtonGroupComponent";
import ListTableComponent from "src/components/ListTableComponent";

//**Style ***/
const VoteBox = styled(Box)<BoxProps>(({ theme }) => ({
  color: "red", 
  background:"#EBE8FC",                      
  borderRadius:"5px",
  padding: "10px",
  height: "100px",
  alignItems: "center",
  display:"flex",                      
  justifyContent:"center",
  fontWeight: "700"
}))

const tabs = [
  {
      key: "videoContest",
      title: "Video Contest",
  },
  {
      key: "winners",
      title: "Winners",
  },
  ,
  {
      key: "scoreSettings",
      title: "Score Setting",
  },
];

const ContestResult = () => {
  
  /**
   * Handle on tab change
   */
   const tabChangeHandler = (key: string) => {
    console.log('key', key)
  }
  
    return (
        <ApexChartWrapper>
            <Grid item xs={12}>
                <Typography variant="h5" sx={{ mb: 5 }}>
                    <Box component="span" sx={{ fontWeight: "bold" }}>
                        User Summary
                    </Box>
                </Typography>
            </Grid>

            <Card sx={{ position: "relative" }}>
                <CardContent sx={{ p: (theme) => `${theme.spacing(6.75, 7.5)} !important`}}>
                    <Grid item xs={12} sx={{ mb: 5 }}>
                        <TabbarComponent options={tabs} activekey={'videoContest'} onChange={tabChangeHandler} />
                    </Grid>

                    <Box sx={{ width: '100%' }}>
                       <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                        <Grid item xs={12} md={6} sx={{ width: '100%', background: "#F3F3F4" ,borderRadius:'5px'}}> 
                          <Grid item xs={12} sm={12}>
                            <ContestResultFilter/>
                          </Grid>
                          <Grid item xs={12} sm={12} sx={{ paddingRight:'10px'}}>
                            <ContestResultList/>
                          </Grid>
                        </Grid>

                        <Grid item xs={12} md={6} sx={{ width: '100%' ,background:"#EBF9ED"}}>
                        <ButtonGroupComponent/>
                        <VoteBox>You can Vote only 3 Videos</VoteBox>
                         {/* <ListTableComponent/> */}
                       </Grid>
                      </Grid>
                    </Box>
    
                </CardContent>
            </Card>
        </ApexChartWrapper>
    );
};

export default ContestResult;