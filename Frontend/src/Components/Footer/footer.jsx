import React from "react";
import "../../App.css";

const footer = () => {
    return (
        <div className={"footer-content"}>
            <div className={"footer-title"}>DISCLAIMER</div>
            <div className={"footer-data"}>
                <a href={"coronainworld"} >coronainworld.com</a> is a privately owned website that
                is not owned or operated by any state or federal government
                agency. We have compiled these data using public information
                available in National/Local Media and Information released by
                State/Federal Agencies (CDC, DHS). Provided Information may not be
                accurate. Please refer to CDC for any official information. contact
                us at <a href="mailto:coronainworld@gmail.com" target="_top">
                coronainworld@gmail.com</a> for any other inquiries.
            </div>
        </div>
    );
};

export default footer;