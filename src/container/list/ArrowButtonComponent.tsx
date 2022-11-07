
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";


const headOptions = {
    onOff: [
        {
            type: "on",
            title: "ON",
        },
        {
            type: "off",
            title: "OFF",
        },
    ],
    brand: [
        {
            type: "atoz",
            title: "A to Z",
        },
        {
            type: "ztoa",
            title: "Z to A",
        },
    ],
    campaignID: [
        {
            type: "newtoOld",
            title: "Newest to Oldest",
        },
        {
            type: "oldtoNew",
            title: "Oldest to Newest",
        },
    ],
    campaignName: [
        {
            type: "atoZ",
            title: "A to Z",
        },
        {
            type: "ztoA",
            title: "Z to A",
        },
    ],
    thumbnail: [
        {
            type: "active",
            title: "Active",
        },
        {
            type: "deActive",
            title: "Deactive",
        },
    ],
    status: [
        {
            type: "stActive",
            title: "Active",
        },
        {
            type: "stDeactive",
            title: "Deactive",
        },
    ],
    event: [
        {
            type: "awernessBoosting",
            title: "AwernessBoosting",
        },
        {
            type: "contentContest",
            title: "Content & Contest",
        },
    ],
    campaignObjective: [
        {
            type: "directAwerness",
            title: "Direct Awerness",
        },
        {
            type: "off",
            title: "Oldest to Newest",
        },
    ],
    amountSpent: [
        {
            type: "lowesttoHigest",
            title: "Lowest to Highest",
        },
        {
            type: "highesttoLowest",
            title: "Highest to Lowwest",
        },
    ],
    costPerResult: [
        {
            type: "lowesttoHigestCostper",
            title: "Lowest to Highest",
        },
        {
            type: "highesttoLowestCostPer",
            title: "Highest to Lowwest",
        },
    ],
    starts: [
        {
            type: "lowesttoHigestStatus",
            title: "Lowest to Highest",
        },
        {
            type: "highesttoLowestStatus",
            title: "Highest to Lowwest",
        },
    ],
    ends: [
        {
            type: "lowesttoHigestEnds",
            title: "Lowest to Highest",
        },
        {
            type: "highesttoLowestEnds",
            title: "Highest to Lowest",
        },
    ],
    lastEdits: [
        {
            type: "newestoOldestLastEdit",
            title: "Newest to Oldest",
        },
        {
            type: "oldesttoNewest",
            title: "Oldest to Newest",
        },
    ],
    videoView: [
        {
            type: "lowesttoHigestVideoView",
            title: "Lowest to Highest",
        },
        {
            type: "highesttoLowestStatus",
            title: "Highest to Lowest",
        },
    ],
    reach: [
        {
            type: "lowesttoHigestreach",
            title: "Lowest to Highest",
        },
        {
            type: "highesttoLowestreach",
            title: "Highest to Lowest",
        },
    ],
    impression: [
        {
            type: "lowesttoHigestImpression",
            title: "Lowest to Highest",
        },
        {
            type: "highesttoLowestImporession",
            title: "Highest to Lowest",
        },
    ],
    engagement: [
        {
            type: "lowesttoHigestEngagement",
            title: "Lowest to Highest",
        },
        {
            type: "highesttoLowestEngagement",
            title: "Highest to Lowest",
        },
    ],
    followers: [
        {
            type: "lowesttoHigestfollowers",
            title: "Lowest to Highest",
        },
        {
            type: "highesttoLowestfollowers",
            title: "Highest to Lowest",
        },
    ],
    click: [
        {
            type: "lowesttoHigestClick",
            title: "Lowest to Highest",
        },
        {
            type: "highesttoLowestClick",
            title: "Highest to Lowest",
        },
    ],
    contents: [
        {
            type: "lowesttoHigestContent",
            title: "Lowest to Highest",
        },
        {
            type: "highesttoLowestContent",
            title: "Highest to Lowest",
        },
    ],
    participents: [
        {
            type: "lowesttoHigestParticipents",
            title: "Lowest to Highest",
        },
        {
            type: "highesttoLowestParticipents",
            title: "Highest to Lowest",
        },
    ],
    invoice: [
        {
            type: "newtoOldInvoice",
            title: "Newest to Oldest",
        },
        {
            type: "oldtoNewInvoice",
            title: "Oldest to Newest",
        },
    ],
};

const HeadButton = styled(Select)({
    borderRadius:"0px", 
    width:"30px", 
    height:"35px", 
    ".MuiSelect-icon":{
        alignItem:"center",
        color:"rgba(22, 31, 41, 0.5)",
    }
})
type props = {
    activekey: string;
};

const ArrowButtonComponent = (props: props) => (
    <div>
        {headOptions && headOptions.hasOwnProperty(props.activekey) ? (
            <div>
                <HeadButton>
                    <MenuItem>
                        {headOptions[props.activekey][0]["title"]}
                    </MenuItem>
                    <MenuItem>
                        {headOptions[props.activekey][1]["title"]}
                    </MenuItem>
                </HeadButton>
            </div>
        ) : null}
    </div>
);

export default ArrowButtonComponent;

// ArrowButtonComponent.defaultProps = {};
