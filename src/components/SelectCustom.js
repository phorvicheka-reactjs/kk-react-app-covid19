import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles({
    formControl: {
        marginTop: 50,
        marginBottom: 20,
        minWidth: 250
    }
});

const SelectCustom = ({
    arrayCountryOrRegion,
    selectedCountryOrRegion,
    handleChange
}) => {
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
                Select Country/Region
            </InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={selectedCountryOrRegion}
                onChange={handleChange}
            >
                <MenuItem value="ALL">
                    <em>ALL</em>
                </MenuItem>
                {arrayCountryOrRegion.length !== 0
                    ? arrayCountryOrRegion.map((value, index) => {
                          return <MenuItem key={index} value={value}>{value}</MenuItem>;
                      })
                    : null}
            </Select>
        </FormControl>
    );
};

SelectCustom.propTypes = {
    arrayCountryOrRegion: PropTypes.array.isRequired,
    selectedCountryOrRegion: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default SelectCustom;
