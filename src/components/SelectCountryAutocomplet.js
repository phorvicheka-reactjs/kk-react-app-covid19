import React from "react";
import PropTypes from "prop-types";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { utilsCountries } from "./../utils/utilsCountries";

function renderOptionWithCountryFlag(countryName) {
    return (
        <React.Fragment>
            {utilsCountries.abbr(countryName) && (
                <img
                    alt={countryName}
                    src={`https://www.countryflags.io/${utilsCountries.abbr(
                        countryName
                    )}/shiny/24.png`}
                />
            )}
            {countryName}
        </React.Fragment>
    );
}

const SelectCountryAutocomplet = ({
    handleAutocompleteSelectChange,
    countryList = []
}) => {
    return (
        <Autocomplete
            style={{
                width: 300,
                marginBottom: 30,
                display: "inline-block"
            }}
            size="medium"
            autoSelect
            autoHighlight
            onChange={handleAutocompleteSelectChange}
            options={(() => {
                if (!countryList.includes("ALL")) {
                    countryList.unshift("ALL");
                }
                return countryList;
            })()}
            renderInput={params => (
                <TextField
                    {...params}
                    label="Select Country/Region"
                    margin="normal"
                    variant="outlined"
                />
            )}
            renderOption={renderOptionWithCountryFlag}
        />
    );
};

SelectCountryAutocomplet.propTypes = {
    handleAutocompleteSelectChange: PropTypes.func.isRequired,
    arrayCountryOrRegion: PropTypes.array
};

export default SelectCountryAutocomplet;
