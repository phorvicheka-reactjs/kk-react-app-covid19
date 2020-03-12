import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@material-ui/core";
import DayPickerInput from "react-day-picker/DayPickerInput";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import { formatDate, parseDate } from "react-day-picker/moment";

import "react-day-picker/lib/style.css";

const DayPickerInputCustom = ({
    handleBackButtonOnClick,
    handleDayChange,
    selectedDay,
    handleForwardButtonOnClick
}) => {
    return (
        <div>
            <IconButton onClick={handleBackButtonOnClick}>
                <ArrowBackIosOutlinedIcon fontSize="large" />
            </IconButton>
            <DayPickerInput
                dayPickerProps={{
                    showWeekNumbers: true,
                    todayButton: "Today"
                }}
                onDayChange={handleDayChange}
                format="MM-DD-YYYY"
                formatDate={formatDate}
                parseDate={parseDate}
                value={`${formatDate(selectedDay, "MM-DD-YYYY")}`}
                placeholder={`${formatDate(new Date(), "MM-DD-YYYY")}`}
            />
            <IconButton onClick={handleForwardButtonOnClick}>
                <ArrowForwardIosRoundedIcon fontSize="large" />
            </IconButton>
        </div>
    );
};

DayPickerInputCustom.propTypes = {
    handleBackButtonOnClick: PropTypes.func.isRequired,
    handleDayChange: PropTypes.func.isRequired,
    selectedDay: PropTypes.any.isRequired,
    handleForwardButtonOnClick: PropTypes.func.isRequired
};

export default DayPickerInputCustom;
