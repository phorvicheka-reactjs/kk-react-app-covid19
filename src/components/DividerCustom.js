import React from "react";

const DividerCustom = ({ height, marginTop, backgroundColor }) => {
    return (
        <div
            style={{
                height: height,
                marginTop: marginTop,
                backgroundColor: backgroundColor
            }}
        ></div>
    );
};

export default DividerCustom;
