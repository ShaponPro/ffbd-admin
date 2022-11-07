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
  const [active, setActive] = useState<string>(props.activeKey || "contestInfo"); //

  /**
   * Handle OnClick Button
   */
  const onClickHandler = (key: string) => {
    setActive(key);

    if (props.onChange) props.onChange(key);
  };

  return (
    <TabContainer style={props.style}>
      {props.options.length
        ? props.options.map((item, i:number) => (
            <ButtonComponent
              key={i}
              type='select-custom-tab'
              title={item?.title || ""}
              isActive={item?.key === active}
              onClick={() => onClickHandler(item.key || "")}
              style={{ border:"none", borderRadius:"5px",width: "242.5px" ,
              }}
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
