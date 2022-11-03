/* eslint-disable react/jsx-key */
// ** React Imports
import { useState } from "react";

import ButtonComponent from "src/components/ButtonComponent";

// ** MUI Imports
import styled from "@emotion/styled";

const TabContainer = styled.div({
  display: "flex",
  flexWrap: "wrap",
  gap:10,
  padding: "20px",
  position: "relative",
  background: "green",
});
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

const ButtonGroupComponent = (props: Props) => {
  // ** State
  const [active, setActive] = useState<string>(props.activeKey || "regular"); //

  /**
   * Handle OnClick Button
   */
  const onClickHandler = (key: string) => {
    setActive(key);

    // console.log('key :>> ', key);
    if (props.onChange) props.onChange(key);
  };

  return (
    <TabContainer style={props.style}>
      {props.options.length
        ? props.options.map((item, i) => (
            <ButtonComponent 
              type='select-custom-tab'
              title={item?.title || ""}
              isActive={item?.key === active}
              onClick={() => onClickHandler(item.key || "")}
            />
          ))
        : null}
    </TabContainer>
  );
};

export default ButtonGroupComponent;

ButtonGroupComponent.defaultProps = {
  options: [
    {
      key: "contestInfo",
      title: "Contest Info",
    },
    {
      key: "rewards",
      title: "Rewards",
    },
    {
      key: "performance",
      title: "Performance",
    },
    {
      key: "participants",
      title: "Participants",
    },
      {
        key: "videos",
        title: "Videos",
      },
      {
        key: "potentialList",
        title: "Potential List",
      },
      {
        key: "votedRanking",
        title: "Voted Ranking",
      },
      {
        key: "irrelevantList",
        title: "Irrelevant List",
      },
      ,
      {
        key: "shortlist",
        title: "Shortlist",
      },
      ,
      {
        key: "preResultFinalWheel",
        title: "Pre-Result/Final Wheel",
      },
      ,
      {
        key: "result",
        title: "Result",
      },
      ,
      {
        key: "disburseGift",
        title: "Disburse Gift",
      },
  ],
  activeKey: "regular",
  onChange: (key: string) => null,
  style: {},
};

 // ** React Imports
// import { Fragment } from "react";

// // ** MUI Imports
// import Button, { ButtonProps } from "@mui/material/Button";
// import { styled } from "@mui/material/styles";

// // Styled component for a custom button
// const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
//     backgroundColor: "#FFFFFF",
//     color: "black",
//     fontWeight: "400",
//     "&:hover": {
//         backgroundColor: " #EBE8FC",
//         color: "black",
//         fontWeight: "700",
//     },
//     width: "242px",
//     padding: "10px",
//     fontSize: "14px",
//     borderRadius: "5px",
//     textTransform: "capitalize",
//     boxShadow:"none"
// }));

// const ButtonGroupComponent = () => {
//     return (
//         <Fragment>
//             <div style={{ background: "#EBF9ED",padding:"20px"}}>

//             <div className="demo-space-x">
//                 <CustomButton variant="contained" size="large">
//                     Contest Info
//                 </CustomButton>
//                 <CustomButton variant="contained" size="large">
//                     Rewards
//                 </CustomButton>
//                 <CustomButton variant="contained" size="large">
//                     Performance
//                 </CustomButton>
//             </div>
//             <div className="demo-space-x">
//                 <CustomButton variant="contained" size="large">
//                     Participants
//                 </CustomButton>
//                 <CustomButton variant="contained" size="large">
//                     Videos
//                 </CustomButton>
//                 <CustomButton variant="contained" size="large">
//                 Potential List
//                 </CustomButton>
//             </div>
//             <div className="demo-space-x">
//                 <CustomButton variant="contained" size="large">
//                 Voted Ranking
//                 </CustomButton>
//                 <CustomButton variant="contained" size="large">
//                 Irrelevant List
//                 </CustomButton>
//                 <CustomButton variant="contained" size="large">
//                 Shortlist
//                 </CustomButton>
//             </div>
//             <div className="demo-space-x">
//                 <CustomButton variant="contained" size="large">
//                 Pre-Result/Final Wheel
//                 </CustomButton>
//                 <CustomButton variant="contained" size="large">
//                 Result
//                 </CustomButton>
//                 <CustomButton variant="contained" size="large">
//                 Disburse Gift
//                 </CustomButton>
//             </div>
//             </div>
//         </Fragment>
//     );
// };

// export default ButtonGroupComponent;
