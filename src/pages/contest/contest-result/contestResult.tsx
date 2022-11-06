// ** MUI Imports
import { useState } from "react";
import Box,{BoxProps} from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

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
  fontWeight: "700",
  marginBottom: "20px"
}))

const VoteBoxComponent = ({title}: {
  title: string;
}) =>(
  <VoteBox>{title}</VoteBox>
)

interface Item {
  key: string;
  title: string;
}
type Props = {
  options: Item[];
  activeKey: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
  isActive?:boolean
};

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

const ContestResult = (props: Props) => {
  
  /**
   * Handle on tab change
   */
   const tabChangeHandler = (key: string) => {
    console.log('key', key)
  }
  
const buttonTabs= [
  {
    key: "contestInfo",
    title: "Contest Info",
    isActive: true,
  },
  {
    key: "rewards",
    title: "Rewards",
    isActive: false,
  },
  {
    key: "performance",
    title: "Performance",
    isActive: false,
  },
  {
    key: "participants",
    title: "Participants",
    isActive: false,
  },
    {
      key: "videos",
      title: "Videos",
      isActive: false,
    },
    {
      key: "potentialList",
      title: "Potential List",
      isActive: false,
    },
    {
      key: "votedRanking",
      title: "Voted Ranking",
      isActive: false,
    },
    {
      key: "irrelevantList",
      title: "Irrelevant List",
      isActive: false,
    },
    ,
    {
      key: "shortlist",
      title: "Shortlist",
      isActive: false,
    },
    ,
    {
      key: "preResultFinalWheel",
      title: "Pre-Result/Final Wheel",
      isActive: false,
    },
    ,
    {
      key: "result",
      title: "Result",
      isActive: false,
    },
    ,
    {
      key: "disburseGift",
      title: "Disburse Gift",
      isActive: false,
    },
]

// Sub Tab Change

//participates tab sub tabs
const subParticipateTab =[
        {
          key: "videoUploader1",
          title: "Video Uploader",
          isActive: true,
        },
        {
          key: "videoUploader2",
          title: "Video Uploader",
          isActive: false,
        },
]

      //videos tab sub tabs

      const subVideosTab =[
        {
          key: "quality",
          title: "Quality",
          isActive: true,
        },
        {
          key: "mostLiked",
          title: "Most Liked",
          isActive: false,
        },
        {
          key: "highestViewed",
          title: "Highest Viewed",
          isActive: false,
        },
  
      ]

      //vote ranking tab sub tabs
      const subVotRankingTab= [
      {
        key: "myVotes",
        title: "My Votes",
        isActive: false,
      },
      {
        key: "votedSummary",
        title: "Voted Summary",
        isActive: false,
      },
      {
        key: "scoringDetails",
        title: "scoring Details",
        isActive: false,
      }
    ]

      //shortlist tab sub tabs
      const subShortlistTab=[

      {
        key: "qualityVideos",
        title: "Quality Videos",
        isActive: false,
      },
      {
        key: "topSharer",
        title: "Top Sharer",
        isActive: false,
      },
    ]

      //pre result final wheel tab sub tabs
      const subPreResultTab =[
      {
        key: "videoShortList",
        title: "Video-Shortlist",
        isActive: false,
      },
      {
        key: "topSharerShortList",
        title: "Top Sharer-Shortlist",
        isActive: false,
      },
      {
        key: "manualListing",
        title: "Manual Listing",
        isActive: false,
      }
    ]

  // ** State
  
  const [active, setActive] = useState<string>(props.activeKey || "contestInfo"); //

  /**
   * Handle OnClick Button
   */
  const onClickHandler = (key: string) => {
    setActive(key);

    if (props.onChange) props.onChange(key);
  };

    return (
        <ApexChartWrapper>
            <Grid item xs={12}>
                <Typography variant="h5" sx={{ mb: 5 }}>
                    <Box component="span" sx={{ fontWeight: "bold" }}>
                        Contest Result
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
                        <ButtonGroupComponent  options={buttonTabs} activeKey={'contestInfo'} onChange={onClickHandler} />
                        
                        {/* contest info tab */}
                        {active == "contestInfo" ?  (
                          <>
                          <VoteBoxComponent title="You can Vote only 3 Videos"/>
                          <ListTableComponent/>
                          {/* <ListTableComponent/> */}
                          </>
                        ) : null}
                        
                        {/* rewards tab */}
                        {active == "rewards" ?  (
                          <>
                          <VoteBoxComponent title="You can Vote only 3 Videos"/>
                          <ListTableComponent column={2}/>
                          {/* <ListTableComponent/> */}
                          </>
                        ) : null}

                          {/* performance  tab */}
                          {active == "performance" ?  (
                          <>
                          <VoteBoxComponent title="You can Vote only 3 Videos"/>
                          <ListTableComponent/>
                          </>
                        ) : null}

                          {/* participants  tab */}
                          {active == "participants" ?  (
                          <>
                          <ButtonGroupComponent  options={subParticipateTab} activeKey={'videoUploader1'} onChange={onClickHandler} />
                          <VoteBoxComponent title="Total .....Participants under the contest"/>
                          <ListTableComponent/>
                          </>
                        ) : null}

                          {/* videos tab */}
                          {active == "videos" ?  (
                          <>
                          <ButtonGroupComponent  options={subVideosTab} activeKey={'quality'} onChange={onClickHandler} />
                          <VoteBoxComponent title="You can Vote only 3 Videos"/>
                          <ListTableComponent/>
                          </>
                        ) : null}

                          {/* potential list tab */}
                          {active == "potentialList" ?  (
                          <>
                          <VoteBoxComponent title="You can Vote only 3 Videos"/>
                          <ListTableComponent/>
                          </>
                        ) : null}

                          {/* vote ranking tab */}
                          {active == "votedRanking" ?  (
                          <>
                          <ButtonGroupComponent  options={subVotRankingTab} activeKey={'myVotes'} onChange={onClickHandler} />
                          <VoteBoxComponent title="You can Vote only 3 Videos"/>
                          <ListTableComponent/>
                          </>
                        ) : null}

                         {/* irrelevant list tab */}
                        {active == "irrelevantList" ?  (
                          <>
                          <VoteBoxComponent title="You can Vote only 3 Videos"/>
                          </>
                        ) : null}

                          {/* shortlist  tab */}
                          {active == "shortlist" ?  (
                          <>
                          <ButtonGroupComponent  options={subShortlistTab} activeKey={'qualityVideos'} onChange={onClickHandler} />
                          <VoteBoxComponent title="Only Judge can Vote only 3 Videos"/>
                          <ListTableComponent/>
                          </>
                        ) : null}
                        
                          {/* pre Result Final Wheel  tab */}
                          {active == "preResultFinalWheel" ?  (
                          <>
                          <ButtonGroupComponent  options={subPreResultTab} activeKey={'videoShortList'} onChange={onClickHandler} />
                          <VoteBoxComponent title="Visible Only Shortlisted Videos"/>
                          
                          </>
                        ) : null}

                          {/* Result  tab */}
                          {active == "result" ?  (
                          <>
                          <VoteBoxComponent title="Only Judge can Vote only 3 Videos"/>
                          
                          </>
                        ) : null}

                          {/* disburse gift tab */}
                          {active == "disburseGift" ?  (
                          <>
                          <VoteBoxComponent title="Only Judge can Vote only 3 Videos"/>
                       
                          </>
                        ) : null}                        

                       </Grid>
                      </Grid>
                    </Box>
    
                </CardContent>
            </Card>
        </ApexChartWrapper>
    );
};

export default ContestResult;
