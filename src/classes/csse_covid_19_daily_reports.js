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
export const COLUMN_NAME_LAST_UPDATE = "Last Update";
export const COLUMN_NAME_CONFIRMED = "Confirmed";
export const COLUMN_NAME_DEATHS = "Deaths";
export const COLUMN_NAME_RECOVERED = "Recovered";
export const COLUMN_NAME_LATITUDE = "Latitude";
export const COLUMN_NAME_LONGTITUDE = "Longitude";

export class CsseCovid19DailyReportsUtils {
    static getArrayCountryOrRegion(data) {
        let out = data.length !== 0
            ? data.map(value => {
                  return value[COLUMN_NAME_COUNTRY_OR_REGION];
              })
            : [];
        out = Array.from(new Set(out));

        return out;
    }

    static getDataGroupByCountryOrRegion(data) {
        let arrayDataGroupByCountryOrRegion = [];
        let arrayCountryOrRegion = CsseCovid19DailyReportsUtils.getArrayCountryOrRegion(
            data
        );

        arrayCountryOrRegion.forEach(countryOrRegion => {
            let confirmed = 0;
            let deaths = 0;
            let recovered = 0;
            let dataCountryOrRegion = {};
            data.forEach(value => {
                if (value[Object.keys(value)[1]] === countryOrRegion) {
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
            arrayDataGroupByCountryOrRegion.push(dataCountryOrRegion);
        });

        return { arrayCountryOrRegion, arrayDataGroupByCountryOrRegion };
    }
}
