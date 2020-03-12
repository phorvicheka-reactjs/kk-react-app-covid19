import React from "react";
import PropTypes from "prop-types";
import { Paper, Grid, Typography, Chip } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

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

const GridCustom = ({ objectData }) => {
    const classes = useStyles();
    return (
        <Paper>
            {objectData != null
                ? Object.keys(objectData).map(function(key, index) {                      
                    if (index === 0) {
                          return (
                              <Typography                                
                                  variant="h5"
                                  component="h2"
                                  gutterBottom
                                  color="primary"
                                  key={`${objectData[Object.keys(objectData)[0]]}_${index}`}
                              >
                                  {objectData[key]}
                                  <Divider />
                              </Typography>
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
                              <Grid key={`${objectData[Object.keys(objectData)[0]]}_${index}`} container spacing={2} alignItems="center">
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
