import { useState } from "react";

import { StepLabel } from "@mui/material";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";

// interface Props {
//   item: NavGroup
//   navHover: boolean
//   parent?: NavGroup

//   navVisible?: boolean
//   groupActive: string[]
//   collapsedNavWidth: number
//   currentActiveGroup: string[]
//   navigationBorderWidth: number
//   isSubToSub?: NavGroup | undefined

// steps label
const steps = [
  {
    label: "User Video",
  },
  {
    label: " Brand Video ",
  },
  {
    label: "Tutorial",
  },
  {
    label: "Youtube Crawler",
  },
];

const SideBarContentComponents = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  // const { item } = props

  // hover effect

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Box
      style={{
        height: "1030px",
        width: "185px",
        background: "#FFFFFF",
        boxShadow: "0px 5px 10px rgba(22, 31, 41, 0.1)",
        paddingRight: "1px",
      }}
    >
      {/* <VerticalNavItems {...props} navVisible={navVisible} verticalNavItems={item} /> */}
      <ul
        style={{
          paddingTop: "25px",
          fontWeight: 700,
          fontSize: "16px",
        }}
      >
        Videos
        <li
          style={{
            backgroundColor: isHover ? "#F3F3F4" : "#FFFFFF",

            cursor: "pointer",
            paddingTop: "20px",
            fontWeight: 400,
            paddingBottom: "10px",
            paddingLeft: "5px",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Video Analytics
        </li>
        <li
          style={{
            fontWeight: 400,
            paddingBottom: "10px",

            paddingTop: "15px",
            color: "#161F29",
          }}
        >
          List Video
        </li>
        <Box>
          <Stepper orientation='vertical'>
            {steps.map(step => (
              <Step
                key={step.label}
                sx={{
                  "& .MuiStepLabel-root .Mui-completed": {
                    color: "#161F29",

                    // circle color (COMPLETED)
                  },
                  "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel": {
                    color: "#161F29",
                    fontSize: "1px !important",

                    // Just text label  (COMPLETED)
                  },
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "#161F29", // circle color (ACTIVE)
                  },
                  "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
                    color: "rgba(22, 31, 41, 0.5) !important", // Just text label (ACTIVE)
                  },
                  "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                    fill: "", // circle's number (ACTIVE)
                  },
                }}
              >
                <StepLabel style={{ color: "#161F29", height: "15px" }}>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <li
          style={{
            fontWeight: 400,
            paddingBottom: "18px",
            paddingTop: "19px",
            color: "#161F29",
          }}
        >
          Upload a video
        </li>
        <li
          style={{
            fontWeight: 400,
            paddingBottom: "16px",

            color: "#161F29",
          }}
        >
          Download code
        </li>
        <li
          style={{
            fontWeight: 400,
            paddingBottom: "16px",

            color: "#161F29",
          }}
        >
          Content Restriction
        </li>
      </ul>
    </Box>
  );
};

export default SideBarContentComponents;
