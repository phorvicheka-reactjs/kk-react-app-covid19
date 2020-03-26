import React, { useState, useEffect } from "react";
import "./App.css";

import TableCustom from "./components/TableCustom";
import {
    URL_GITHUB_CSSE_COVID_19_DAILY_REPORTS,
    COLUMN_NAME_COUNTRY_OR_REGION,
    COLUMN_NAME_CONFIRMED,
    COLUMN_NAME_DEATHS,
    COLUMN_NAME_RECOVERED,
    CsseCovid19DailyReportsUtils
} from "../src/classes/csse_covid_19_daily_reports";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import DayPickerInputCustom from "./components/DayPickerInputCustom";
import { formatDate } from "react-day-picker/moment";
import Grid from "@material-ui/core/Grid";
import GridCustom from "./components/GridCustom";
import SelectCountryAutocomplet from "./components/SelectCountryAutocomplet";
import DividerCustom from "./components/DividerCustom";
import { arrayObjectDynamicSortingFunction } from './utils/utilsArray';


const App = () => {
    const [data, setData] = useState([]);
    const [userCountryName, setUserCountryName] = useState([]);
    const [userCountryData, setUserCountryData] = useState({});
    const [worldData, setWorldData] = useState({});
    const [arrayCountryOrRegion, setArrayCountryOrRegion] = useState([]);
    const [
        arrayDataGroupByCountryOrRegion,
        setArrayDataGroupByCountryOrRegion
    ] = useState([]);
    const [
        selectedCountryOrRegion,
        setSelectedCountryOrRegion
    ] = React.useState("ALL");
    const [
        selectedCountryOrRegionData,
        setSelectedCountryOrRegionData
    ] = React.useState("");
    const [
        arrayDataBySelectedCountryOrRegion,
        setArrayDataBySelectedCountryOrRegion
    ] = useState([]);
    const [selectedDay, setSelectedDay] = useState(
        new Date(new Date().setDate(new Date().getDate() - 1))
    );

    const handleAutocompleteSelectChange = (event, value) => {
        setSelectedCountryOrRegion(value != null ? value : "ALL");
    };

    const handleDayChange = selectedDay => {
        setSelectedDay(selectedDay);
    };

    const handleBackButtonOnClick = event => {
        const date = new Date(selectedDay);
        setSelectedDay(date.setDate(date.getDate() - 1));
    };

    const handleForwardButtonOnClick = event => {
        const date = new Date(selectedDay);
        setSelectedDay(date.setDate(date.getDate() + 1));
    };

    const getCsvData = selectedDay => {
        const selectedDayString = formatDate(selectedDay, "MM-DD-YYYY");
        const papaParsePromise = CsseCovid19DailyReportsUtils.papaParse(
            selectedDayString
        );
        papaParsePromise
            .then(results => {
                setData(results.data);
            })
            .catch(error => {
                setSelectedCountryOrRegion("ALL");
                setData([]);
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

        if (arrayDataGroupByCountryOrRegion.length !== 0) {
            setWorldData(
                arrayDataGroupByCountryOrRegion.reduce(
                    (previousValue, currentValue) => {
                        return {
                            [COLUMN_NAME_COUNTRY_OR_REGION]: "GLOBAL",
                            [COLUMN_NAME_CONFIRMED]:
                                previousValue[COLUMN_NAME_CONFIRMED] +
                                currentValue[COLUMN_NAME_CONFIRMED],
                            [COLUMN_NAME_DEATHS]:
                                previousValue[COLUMN_NAME_DEATHS] +
                                currentValue[COLUMN_NAME_DEATHS],
                            [COLUMN_NAME_RECOVERED]:
                                previousValue[COLUMN_NAME_RECOVERED] +
                                currentValue[COLUMN_NAME_RECOVERED]
                        };
                    }
                )
            );
        }
        setArrayCountryOrRegion(arrayCountryOrRegion);
        setArrayDataGroupByCountryOrRegion(
            arrayDataGroupByCountryOrRegion.sort(
                arrayObjectDynamicSortingFunction(COLUMN_NAME_CONFIRMED, "desc")
            )
        );

        if (
            selectedCountryOrRegion !== "" &&
            arrayCountryOrRegion.indexOf(selectedCountryOrRegion) === -1
        ) {
            let modifiedSelectedCountryOrRegion = "ALL";
            for (const iterator of arrayCountryOrRegion) {
                if (
                    iterator.includes(selectedCountryOrRegion) ||
                    selectedCountryOrRegion.includes(iterator)
                ) {
                    modifiedSelectedCountryOrRegion = iterator;
                    break;
                }
            }
            setSelectedCountryOrRegion(modifiedSelectedCountryOrRegion);
        }
    }, [data, selectedCountryOrRegion]);

    useEffect(() => {
        axios
            .get("https://api.ipdata.co/?api-key=test")
            .then(response => {
                let data = response.data;
                const userCountryName = data.country_name;
                setUserCountryName(userCountryName);
                if (selectedCountryOrRegion === "") {
                    if (arrayCountryOrRegion.indexOf(userCountryName) !== -1) {
                        setSelectedCountryOrRegion(
                            arrayCountryOrRegion[
                                arrayCountryOrRegion.indexOf(userCountryName)
                            ]
                        );
                    }
                }
            })
            .catch(error => {
                console.log(error);
                const userCountryName = "Cambodia";
                setUserCountryName(userCountryName);
                if (selectedCountryOrRegion === "") {
                    if (arrayCountryOrRegion.indexOf(userCountryName) !== -1) {
                        setSelectedCountryOrRegion(
                            arrayCountryOrRegion[
                            arrayCountryOrRegion.indexOf(userCountryName)
                            ]
                        );
                    }
                }
            });
    }, [arrayCountryOrRegion, selectedCountryOrRegion]);

    useEffect(() => {
        if (selectedCountryOrRegion !== "") {
            for (const iterator of arrayDataGroupByCountryOrRegion) {
                if (
                    iterator[COLUMN_NAME_COUNTRY_OR_REGION].indexOf(
                        selectedCountryOrRegion
                    ) !== -1
                ) {
                    setSelectedCountryOrRegionData(iterator);
                    break;
                }
            }
        }
        if (selectedCountryOrRegion === "ALL") {
            setArrayDataBySelectedCountryOrRegion(
                arrayDataGroupByCountryOrRegion
            );
        }
    }, [selectedCountryOrRegion, arrayDataGroupByCountryOrRegion]);

    useEffect(() => {
        if (userCountryName !== "") {
            for (const iterator of arrayDataGroupByCountryOrRegion) {
                if (
                    iterator[COLUMN_NAME_COUNTRY_OR_REGION].indexOf(
                        userCountryName
                    ) !== -1
                ) {
                    setUserCountryData(iterator);
                    break;
                }
            }
        }
    }, [userCountryName, arrayDataGroupByCountryOrRegion]);

    return (
        <div className="App">
            <Alert severity="info">
                <Link href={URL_GITHUB_CSSE_COVID_19_DAILY_REPORTS}>
                    Data Source: 2019 Novel Coronavirus COVID-19 (2019-nCoV)
                    Data Repository by Johns Hopkins CSSE
                </Link>
            </Alert>
            {arrayDataBySelectedCountryOrRegion.length !== 0 && (
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <GridCustom
                            objectData={userCountryData}
                            isUserCountry
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <GridCustom objectData={worldData} isGlobal />
                    </Grid>
                </Grid>
            )}
            <DividerCustom
                height={5}
                marginTop={20}
                backgroundColor="lightgray"
            />
            <div>
                <h2 style={{ marginBottom: 0 }}>
                    DATE: {formatDate(selectedDay, "MM-DD-YYYY")}
                </h2>
                <DayPickerInputCustom
                    handleBackButtonOnClick={handleBackButtonOnClick}
                    handleDayChange={handleDayChange}
                    selectedDay={selectedDay}
                    handleForwardButtonOnClick={handleForwardButtonOnClick}
                />
                <SelectCountryAutocomplet
                    handleAutocompleteSelectChange={
                        handleAutocompleteSelectChange
                    }
                    countryList={arrayCountryOrRegion}
                />
            </div>

            <Divider />

            {selectedCountryOrRegion === "" && <div>LOADING ...</div>}

            {selectedCountryOrRegion !== "" &&
                selectedCountryOrRegion !== "ALL" && (
                    <Grid item xs={12} md={12}>
                        <GridCustom objectData={selectedCountryOrRegionData} />
                    </Grid>
                )}

            {selectedCountryOrRegion !== "" &&
                selectedCountryOrRegion === "ALL" &&
                (arrayDataBySelectedCountryOrRegion.length !== 0 ? (
                    <TableCustom
                        arrayDataGroupByCountryOrRegion={
                            arrayDataBySelectedCountryOrRegion
                        }
                    />
                ) : (
                    <h3>NO DATA</h3>
                ))}
        </div>
    );
};

export default App;
