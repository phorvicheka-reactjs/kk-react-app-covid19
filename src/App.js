import React, { useState, useEffect } from "react";
import "./App.css";

import Papa from "papaparse";
import TableCustom from "./components/TableCustom";
import SelectCustom from "./components/SelectCustom";
import {
    URL_CSSE_COVID_19_DAILY_REPORTS,
    COLUMN_NAME_COUNTRY_OR_REGION,
    CsseCovid19DailyReportsUtils
} from "../src/classes/csse_covid_19_daily_reports";

const App = () => {
    /* const classes = useStyles(); */
    const [data, setData] = useState([]);
    const [arrayCountryOrRegion, setArrayCountryOrRegion] = useState([]);
    const [
        arrayDataGroupByCountryOrRegion,
        setArrayDataGroupByCountryOrRegion
    ] = useState([]);    
    const [
        selectedCountryOrRegion,
        setSelectedCountryOrRegion
    ] = React.useState("");
    const [
        arrayDataBySelectedCountryOrRegion,
        setArrayDataBySelectedCountryOrRegion
    ] = useState([]);

    const handleChange = event => {
        setSelectedCountryOrRegion(event.target.value);
    };

    useEffect(() => {
        Papa.parse(`${URL_CSSE_COVID_19_DAILY_REPORTS}03-09-2020.csv`, {
            download: true,
            header: true,
            skipEmptyLines: true,
            // rest of config ...
            error: function(err, file, inputElem, reason) {
                // executed if an error occurs while loading the file,
                // or if before callback aborted for some reason
                console.log(err);
            },
            complete: function(results) {
                console.log("Finished:", results.data);
                setData(results.data);
            }
        });
    }, []);

    useEffect(() => {
        const {
            arrayCountryOrRegion,
            arrayDataGroupByCountryOrRegion
        } = CsseCovid19DailyReportsUtils.getDataGroupByCountryOrRegion(data);
        console.log("Countries: ", arrayCountryOrRegion);
        console.log(
            "Array Data By Country Or Region: ",
            arrayDataGroupByCountryOrRegion
        );
        setArrayCountryOrRegion(arrayCountryOrRegion);
        setArrayDataGroupByCountryOrRegion(arrayDataGroupByCountryOrRegion);
        setArrayDataBySelectedCountryOrRegion(arrayDataGroupByCountryOrRegion);
    }, [data]);

    useEffect(() => {
        if (selectedCountryOrRegion !== "") {
            setArrayDataBySelectedCountryOrRegion(arrayDataGroupByCountryOrRegion.filter(
                value => {
                    return (
                        value[COLUMN_NAME_COUNTRY_OR_REGION] ===
                        selectedCountryOrRegion
                    );
                }
            ));
        } else {
            setArrayDataBySelectedCountryOrRegion(arrayDataGroupByCountryOrRegion);
        }
    }, [selectedCountryOrRegion, arrayDataGroupByCountryOrRegion]);

    return (
        <div className="App">
            <SelectCustom
                selectedCountryOrRegion={selectedCountryOrRegion}
                handleChange={handleChange}
                arrayCountryOrRegion={arrayCountryOrRegion}
            ></SelectCustom>
            <TableCustom
                arrayDataGroupByCountryOrRegion={
                    arrayDataBySelectedCountryOrRegion
                }
            />
        </div>
    );
};

export default App;
