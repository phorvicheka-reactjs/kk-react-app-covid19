import Papa from "papaparse";

export const URL_GITHUB_CSSE_COVID_19_DAILY_REPORTS =
    "https://github.com/CSSEGISandData/COVID-19";
export const URL_CSSE_COVID_19_DAILY_REPORTS =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/";

export const COLUMN_INDEX_PROVINCE_OR_STATE = 0;
export const COLUMN_INDEX_COUNTRY_OR_REGION = 1;
export const COLUMN_INDEX_LAST_UPDATE = 2;
export const COLUMN_INDEX_CONFIRMED = 3;
export const COLUMN_INDEX_DEATHS = 4;
export const COLUMN_INDEX_RECOVERED = 5;
export const COLUMN_INDEX_LATITUDE = 6;
export const COLUMN_INDEX_LONGTITUDE = 6;

export const COLUMN_NAME_PROVINCE_OR_STATE = "Province/State";
export const COLUMN_NAME_COUNTRY_OR_REGION = "Country/Region";
export const COLUMN_NAME_COUNTRY_OR_REGION_UNDERSCORE = "Country_Region";
export const COLUMN_NAME_LAST_UPDATE = "Last Update";
export const COLUMN_NAME_CONFIRMED = "Confirmed";
export const COLUMN_NAME_DEATHS = "Deaths";
export const COLUMN_NAME_RECOVERED = "Recovered";
export const COLUMN_NAME_LATITUDE = "Latitude";
export const COLUMN_NAME_LONGTITUDE = "Longitude";

export class CsseCovid19DailyReportsUtils {
    static papaParse(selectedDayString) {
        return new Promise((resolve, reject) => {
            Papa.parse(
                `${URL_CSSE_COVID_19_DAILY_REPORTS}${selectedDayString}.csv`,
                {
                    download: true,
                    header: true,
                    skipEmptyLines: true,
                    error: reject,
                    complete: resolve
                }
            );
        });
    }

    static getArrayCountryOrRegion(data) {
        let arrayCountryOrRegion =
            data.length !== 0
                ? data.map(value => {
                      return value[COLUMN_NAME_COUNTRY_OR_REGION] || value[COLUMN_NAME_COUNTRY_OR_REGION_UNDERSCORE];
                  })
                : [];
        //out = Array.from(new Set(out));
        arrayCountryOrRegion = CsseCovid19DailyReportsUtils.removeDuplicates(
            arrayCountryOrRegion
        );

        return arrayCountryOrRegion;
    }

    static getDataGroupByCountryOrRegion(data) {
        let arrayDataGroupByCountryOrRegion = [];
        let arrayCountryOrRegion = CsseCovid19DailyReportsUtils.getArrayCountryOrRegion(
            data
        );
        let arrayPushedCountryOrRegion = [];

        arrayCountryOrRegion.forEach(countryOrRegion => {
            let confirmed = 0;
            let deaths = 0;
            let recovered = 0;
            let dataCountryOrRegion = {};
            data.forEach(value => {
                if (
                    /* value[Object.keys(value)[1]].includes(countryOrRegion) ||
                    countryOrRegion.includes(value[Object.keys(value)[1]]) */
                    value[COLUMN_NAME_COUNTRY_OR_REGION] === countryOrRegion ||
                    value[COLUMN_NAME_COUNTRY_OR_REGION_UNDERSCORE] === countryOrRegion
                ) {
                    confirmed += Number(value[COLUMN_NAME_CONFIRMED]);
                    deaths += Number(value[COLUMN_NAME_DEATHS]);
                    recovered += Number(value[COLUMN_NAME_RECOVERED]);
                }
            });
            dataCountryOrRegion = {
                [COLUMN_NAME_COUNTRY_OR_REGION]: countryOrRegion,
                [COLUMN_NAME_CONFIRMED]: confirmed,
                [COLUMN_NAME_DEATHS]: deaths,
                [COLUMN_NAME_RECOVERED]: recovered
            };

            let isEmpty =
                dataCountryOrRegion[COLUMN_NAME_CONFIRMED] === 0 &&
                dataCountryOrRegion[COLUMN_NAME_DEATHS] === 0 &&
                dataCountryOrRegion[COLUMN_NAME_RECOVERED] === 0;
            if (
                !isEmpty &&
                !isEmpty &&
                    !arrayPushedCountryOrRegion.includes(countryOrRegion)
            ) {
                arrayDataGroupByCountryOrRegion.push(dataCountryOrRegion);
                arrayPushedCountryOrRegion.push(countryOrRegion);
            }
        });

        return {
            arrayCountryOrRegion: arrayPushedCountryOrRegion,
            arrayDataGroupByCountryOrRegion
        };
    }

    static removeDuplicates(arrayInput) {
        let arrayOutput = [];
        arrayInput.forEach(x => {
            if (arrayOutput.indexOf(x) === -1) arrayOutput.push(x);
        });

        return arrayOutput;
    }
}
