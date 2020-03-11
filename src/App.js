import React, { useState, useEffect } from "react";
import "./App.css";

import Papa from "papaparse";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
    URL_CSSE_COVID_19_DAILY_REPORTS,
    getArrayCountryOrRegion,
    getArrayDataByCountryOrRegion
} from "../src/classes/csse_covid_19_daily_reports";

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        Papa.parse(`${URL_CSSE_COVID_19_DAILY_REPORTS}03-09-2020.csv`, {
            download: true,
            header: true,
            // rest of config ...
            error: function(err, file, inputElem, reason) {
                // executed if an error occurs while loading the file,
                // or if before callback aborted for some reason
            },
            complete: function(results) {
                console.log("Finished:", results.data);
                setData(results.data);
            }
        });
    }, []);

    useEffect(() => {
        const arrayCountryOrRegion = getArrayCountryOrRegion(data);
        console.log("Countries: ", arrayCountryOrRegion);

        const arrayDataByCountryOrRegion = getArrayDataByCountryOrRegion(
            data
            //arrayCountryOrRegion
        );
        console.log(
            "Array Data By Country Or Region: ",
            arrayDataByCountryOrRegion
        );
    }, [data]);

    const classes = useStyles();

    return (
        <div className="App">
            <TableContainer component={Paper}>
                <Table
                    className={classes.table}
                    size="small"
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            {data
                                ? Object.keys(data[0]).map((value, index) => {
                                      return (
                                          <TableCell key={index}>
                                              {value}
                                          </TableCell>
                                      );
                                  })
                                : null}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                            ? data.map((value, index) => {
                                  const row = [];
                                  for (const index of Object.keys(value)) {
                                      row.push(
                                          <TableCell align="left" key={index}>
                                              {value[index]}
                                          </TableCell>
                                      );
                                  }
                                  return <TableRow key={index}>{row}</TableRow>;
                              })
                            : null}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default App;
