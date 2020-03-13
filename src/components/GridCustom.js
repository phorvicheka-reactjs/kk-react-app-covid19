import React from "react";
import PropTypes from "prop-types";
import { Paper, Grid, Typography, Chip } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { utilsCountries } from "./../utils/utilsCountries";
import PublicOutlinedIcon from "@material-ui/icons/PublicOutlined";

const useStyles = makeStyles({
    gridCustom__chip: {
        fontSize: "large",
        alignItems: "center"
    },
    gridCustom__chip__confirmed: {
        fontWeight: "bold",
        fontSize: "x-large",
        color: "purple",
        borderColor: "purple"
    },
    gridCustom__chip__deaths: {
        fontWeight: "bold",
        fontSize: "x-large",
        color: "red",
        borderColor: "red"
    },
    gridCustom__chip__recovered: {
        fontWeight: "bold",
        fontSize: "x-large",
        color: "green",
        borderColor: "green"
    }
});

const GridCustom = ({ objectData, isGlobal, isUserCountry }) => {
    const classes = useStyles();
    return (
        <Paper>
            {objectData != null
                ? Object.keys(objectData).map(function(key, index) {
                      if (index === 0) {
                          return (
                              <div
                                  key={`${
                                      objectData[Object.keys(objectData)[0]]
                                  }_${index}`}
                              >
                                  {!isGlobal &&
                                  utilsCountries.abbr(objectData[key]) ? (
                                      <img
                                          alt={objectData[key]}
                                          src={`https://www.countryflags.io/${utilsCountries.abbr(
                                              objectData[key]
                                          )}/shiny/64.png`}
                                      />
                                  ) : (
                                      isGlobal && (
                                          <PublicOutlinedIcon
                                              color="primary"
                                              style={{ fontSize: 64 }}
                                          />
                                      )
                                  )}
                                  <Typography
                                      variant="h5"
                                      component="h2"
                                      gutterBottom
                                      color="primary"
                                  >
                                      {isUserCountry
                                          ? "You are in: " +
                                            objectData[key].toUpperCase()
                                          : objectData[key].toUpperCase()}
                                      <Divider />
                                  </Typography>
                              </div>
                          );
                      } else {
                          let classSurfix = "";
                          if (index === 1) {
                              classSurfix = "__confirmed";
                          } else if (index === 2) {
                              classSurfix = "__deaths";
                          } else if (index === 3) {
                              classSurfix = "__recovered";
                          }
                          return (
                              <Grid
                                  key={`${
                                      objectData[Object.keys(objectData)[0]]
                                  }_${index}`}
                                  container
                                  spacing={2}
                                  alignItems="center"
                              >
                                  <Grid item xs={6} align="end">
                                      {key} :
                                  </Grid>
                                  <Grid item xs={6} align="start">
                                      <Chip
                                          label={objectData[key]}
                                          variant="outlined"
                                          size="medium"
                                          classes={{
                                              root:
                                                  classes[
                                                      `gridCustom__chip${classSurfix}`
                                                  ]
                                          }}
                                      />
                                  </Grid>
                              </Grid>
                          );
                      }
                  })
                : null}
        </Paper>
    );
};

GridCustom.propTypes = {
    objectData: PropTypes.any.isRequired
};

export default GridCustom;
