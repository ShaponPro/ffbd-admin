// ** React Imports
import { Fragment } from "react";

// ** MUI Imports
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// Styled component for a custom button
const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: "#FFFFFF",
    color: "black",
    fontWeight: "400",
    "&:hover": {
        backgroundColor: " #EBE8FC",
        color: "black",
        fontWeight: "700",
    },
    width: "242px",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "5px",
    textTransform: "capitalize",
    boxShadow:"none"
}));

const ButtonGroupComponent = () => {
    return (
        <Fragment>
            <div className="demo-space-x">
                <CustomButton variant="contained" size="large">
                    Contest Info
                </CustomButton>
                <CustomButton variant="contained" size="large">
                    Rewards
                </CustomButton>
                <CustomButton variant="contained" size="large">
                    Performance
                </CustomButton>
            </div>
            <div className="demo-space-x">
                <CustomButton variant="contained" size="large">
                    Participants
                </CustomButton>
                <CustomButton variant="contained" size="large">
                    Videos
                </CustomButton>
                <CustomButton variant="contained" size="large">
                Potential List
                </CustomButton>
            </div>
            <div className="demo-space-x">
                <CustomButton variant="contained" size="large">
                Voted Ranking
                </CustomButton>
                <CustomButton variant="contained" size="large">
                Irrelevant List
                </CustomButton>
                <CustomButton variant="contained" size="large">
                Shortlist
                </CustomButton>
            </div>
            <div className="demo-space-x">
                <CustomButton variant="contained" size="large">
                Pre-Result/Final Wheel
                </CustomButton>
                <CustomButton variant="contained" size="large">
                Result
                </CustomButton>
                <CustomButton variant="contained" size="large">
                Disburse Gift
                </CustomButton>
            </div>
        </Fragment>
    );
};

export default ButtonGroupComponent;
