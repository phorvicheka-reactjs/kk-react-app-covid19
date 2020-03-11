import React, { useState, useEffect } from "react";
import "./App.css";

import Papa from "papaparse";
import TableCustom from "./components/TableCustom";
import SelectCustom from "./components/SelectCustom";
import {
    URL_GITHUB_CSSE_COVID_19_DAILY_REPORTS,
    URL_CSSE_COVID_19_DAILY_REPORTS,
    COLUMN_NAME_COUNTRY_OR_REGION,
    CsseCovid19DailyReportsUtils
} from "../src/classes/csse_covid_19_daily_reports";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import Alert from '@material-ui/lab/Alert';
import Link from '@material-ui/core/Link';
import {
    formatDate,
    parseDate
} from "react-day-picker/moment";

const App = () => {
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
    const [selectedDay, setSelectedDay] = useState(new Date(new Date().setDate(new Date().getDate()-2)));


    const handleChange = event => {
        setSelectedCountryOrRegion(event.target.value);
    };

    const handleDayChange = (selectedDay) => {
        setSelectedDay(selectedDay);
    };

    const getCsvData = (selectedDay) => {
        const selectedDayString = formatDate(selectedDay, "MM-DD-YYYY");
        Papa.parse(`${URL_CSSE_COVID_19_DAILY_REPORTS}${selectedDayString}.csv`, {
            download: true,
            header: true,
            skipEmptyLines: true,
            // rest of config ...
            error: function(err, file, inputElem, reason) {
                // executed if an error occurs while loading the file,
                // or if before callback aborted for some reason
                console.log(err);
                setSelectedCountryOrRegion("ALL");
                setData([]);
            },
            complete: function(results) {
                setData(results.data);
            }
        });
    };

    useEffect(() => {
        getCsvData(selectedDay);
    }, [selectedDay]);

    useEffect(() => {
        const {
            arrayCountryOrRegion,
            arrayDataGroupByCountryOrRegion
        } = CsseCovid19DailyReportsUtils.getDataGroupByCountryOrRegion(data);

        setArrayCountryOrRegion(arrayCountryOrRegion);
        setArrayDataGroupByCountryOrRegion(arrayDataGroupByCountryOrRegion);
    }, [data]);

    useEffect(() => {
        axios
            .get("http://ip-api.com/json/")
            .then(response => {
                let data = response.data;

                const userCountryName = data.country;
                if (arrayCountryOrRegion.indexOf(userCountryName) !== -1) {
                    if(selectedCountryOrRegion === "")
                        setSelectedCountryOrRegion(arrayCountryOrRegion[
                            arrayCountryOrRegion.indexOf(userCountryName)
                        ]);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, [arrayCountryOrRegion, selectedCountryOrRegion]);

    useEffect(() => {
        if (selectedCountryOrRegion !== "") {
            setArrayDataBySelectedCountryOrRegion(
                arrayDataGroupByCountryOrRegion.filter(value => {
                    return (
                        value[COLUMN_NAME_COUNTRY_OR_REGION] ===
                        selectedCountryOrRegion
                    );
                })
            );
        }
        if (selectedCountryOrRegion === "ALL") {
            setArrayDataBySelectedCountryOrRegion(
                arrayDataGroupByCountryOrRegion
            );
        }
    }, [selectedCountryOrRegion, arrayDataGroupByCountryOrRegion]);

    return (
        <div className="App">
            <Alert severity="info">
                <Link href={URL_GITHUB_CSSE_COVID_19_DAILY_REPORTS}>
                    Data Source: 2019 Novel Coronavirus COVID-19 (2019-nCoV) Data Repository by Johns Hopkins CSSE
                </Link>             
            </Alert>
            {selectedCountryOrRegion !== "" ? (
                <div>
                    <SelectCustom
                        selectedCountryOrRegion={selectedCountryOrRegion}
                        handleChange={handleChange}
                        arrayCountryOrRegion={arrayCountryOrRegion}
                    />
                    <div>
                        <DayPickerInput
                            dayPickerProps={{
                                showWeekNumbers: true,
                                todayButton: 'Today',
                            }}
                            onDayChange={handleDayChange}
                            format = "MM-DD-YYYY"
                            formatDate={formatDate}
                            parseDate={parseDate}
                            value={`${formatDate(selectedDay, "MM-DD-YYYY")}`}
                            placeholder={`${formatDate(new Date(), "MM-DD-YYYY")}`}
                        />
                    </div>
                    <Divider />
                    {arrayDataBySelectedCountryOrRegion.length !== 0 ? (
                        <TableCustom
                            arrayDataGroupByCountryOrRegion={
                                arrayDataBySelectedCountryOrRegion
                            }
                        />
                    ) : (
                        <h3>NO DATA</h3>
                    )}
                </div>
            ) : (
                <div>LOADING ...</div>
            )}
        </div>
    );
};

export default App;
