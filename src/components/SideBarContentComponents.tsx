import * as React from "react";
import { useState } from "react";

import Link from "next/link";

import style from "../../styles/Home.module.css";

import SideBarHover from "../components/SideBarHover";

import Box from "@mui/material/Box";
import { PhoneReturnOutline } from "mdi-material-ui";

type Props = {
    children: React.ReactNode;
    selectedItem: object | undefined;
    groupActive: string[];
};
const SideBarContentComponents = (props: Props) => {
    // const [catagory, setCatagory] = useState([]);

    // const [activeStep, setActiveStep] = React.useState(0);

    // console.log("props.selectedItem :>> ", props.selectedItem.children);

    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    // const handleReset = () => {
    //     setActiveStep(0);
    // };

    // const [isHover, setIsHover] = useState<boolean>(false);

    // const { item } = props

    // hover effect

    // const handleMouseEnter = () => {
    //     setIsHover(true);
    // };
    // const handleMouseLeave = () => {
    //     setIsHover(false);
    // };

    return (
        <Box
            style={{
                position: "relative",
                height: "1030px",
                width: "185px",
                marginTop: "0 !important",
                background: "#FFFFFF",
                boxShadow: "0px 5px 10px rgba(22, 31, 41, 0.1)",
                paddingRight: "1px",
            }}
        >
            <div className={style.anythinglisting4}>
                <ul>
                    <b>
                        {props.selectedItem && props.selectedItem.title
                            ? props.selectedItem.title
                            : ""}
                    </b>
                    {props.selectedItem && props.selectedItem?.children
                        ? props.selectedItem.children.map(
                              (item: any, i: number) => {
                                  return (
                                      <>
                                          <a href={item.path} key={i}>
                                              <li>
                                                  {item.title}
                                                  <ul>
                                                      {item && item?.children
                                                          ? item?.children?.map(
                                                                (
                                                                    subItem: any
                                                                ) => {
                                                                    return (
                                                                        <>
                                                                            <a
                                                                                href={
                                                                                    subItem.path
                                                                                }
                                                                            >
                                                                                <li>
                                                                                    {
                                                                                        subItem.title
                                                                                    }
                                                                                </li>
                                                                            </a>
                                                                        </>
                                                                    );
                                                                }
                                                            )
                                                          : null}
                                                  </ul>
                                              </li>
                                          </a>
                                      </>
                                  );
                              }
                          )
                        : null}
                </ul>
            </div>
            {props.children}
        </Box>
    );
};

export default SideBarContentComponents;
