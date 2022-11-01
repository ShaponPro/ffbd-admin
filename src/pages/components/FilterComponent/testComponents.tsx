import React, { useState } from "react";
import { FilterComponent } from "./FilterComponent";
import { FilterComponentCopy } from "./FilterComponentCopy";
import SearchComponent from "./SearchComponentCopy";
import TextField from "./TextFieldCopy";

const testComponents = () => {
    const [userVideosTextState, setUserVideosText] = useState([
        {
            id: 0,
            text: "User ID/Name",
        },
        {
            id: 1,
            text: "Uploaded Country",
        },
        {
            id: 2,
            text: "Upload Period",
        },
        {
            id: 3,
            text: "Video Length Group",
        },
        {
            id: 4,
            text: "Engagement",
        },
        {
            id: 5,
            text: "AD & Monetization",
        },

        {
            id: 6,
            text: "Video Contest",
        },

        {
            id: 7,
            text: "Music Creator",
        },

        {
            id: 8,
            text: "Current Status",
        },

        {
            id: 9,
            text: "Right Selling Status",
        },
    ]);

    return (
        <>
            {/* Test SearchComponent */}
            <SearchComponent></SearchComponent>

            {/* Test FilterComponent */}
            <FilterComponentCopy
                userVideosTextState={userVideosTextState}
            ></FilterComponentCopy>

            {/* Test SearchComponent */}
            <SearchComponent></SearchComponent>

            {/* Test FilterComponent */}
            <FilterComponent
                userVideosTextState={userVideosTextState}
            ></FilterComponent>

            {/* Test TextField */}
            <TextField></TextField>
        </>
    );
};

export default testComponents;
