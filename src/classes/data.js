// if user registers,
// store his/her ipdata
// and watched countries
const tableUsers = [
    {
        id: "1",
        ipdata: {
            ip: "42.115.116.250",
            is_eu: false,
            city: "Phnom Penh",
            region: "Phnom Penh",
            region_code: "12",
            country_name: "Cambodia",
            country_code: "KH",
            continent_name: "Asia",
            continent_code: "AS",
            latitude: 11.5583,
            longitude: 104.9121,
            postal: null,
            calling_code: "855",
            flag: "https://ipdata.co/flags/kh.png",
            emoji_flag: "\ud83c\uddf0\ud83c\udded",
            emoji_unicode: "U+1F1F0 U+1F1ED",
            asn: {
                asn: "AS131178",
                name: "OpenNet ISP Cambodia",
                domain: "opennetcambodia.com",
                route: "42.115.116.0/24",
                type: "isp"
            },
            languages: [
                {
                    name: "Cambodian",
                    native:
                        "\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a"
                }
            ],
            currency: {
                name: "Cambodian Riel",
                code: "KHR",
                symbol: "KHR",
                native: "\u17db",
                plural: "Cambodian riels"
            },
            time_zone: {
                name: "Asia/Phnom_Penh",
                abbr: "+07",
                offset: "+0700",
                is_dst: false,
                current_time: "2020-03-14T21:31:08.411250+07:00"
            },
            threat: {
                is_tor: false,
                is_proxy: false,
                is_anonymous: false,
                is_known_attacker: false,
                is_known_abuser: false,
                is_threat: false,
                is_bogon: false
            },
            count: "1518"
        },
        watchedCountries: ["China", "Cambodia"]
    }
];

/* 
- onComponentDidMount or selectedDay change:
- check if data of today existed in database
- if not, fetch data and store it in the database
- if yes, do nothings */
const arrayDataBySelectedCountryOrRegion = [
    {
        "Country/Region": "China",
        Confirmed: 80932,
        Deaths: 3172,
        Recovered: 62901
    },
    {
        "Country/Region": "Italy",
        Confirmed: 12462,
        Deaths: 827,
        Recovered: 1045
    }
];

/* 
- select date
- get the data from database filtered by date */
const tableCovid19DailyReports = [
    {
        date: "03-10-2020",
        data: [
            {
                "Country/Region": "China",
                Confirmed: 80932,
                Deaths: 3172,
                Recovered: 62901
            },
            {
                "Country/Region": "Italy",
                Confirmed: 12462,
                Deaths: 827,
                Recovered: 1045
            },
            {
                "Country/Region": "GLOBAL",
                Confirmed: 145193,
                Deaths: 5404,
                Recovered: 70251
            }
        ],
    }
];

/* To find userCountryData of selected date:
- get the ipdata of the user
- filter data from tableCovid19DailyReports by date
- find the data by looping over tableCovid19DailyReports where "Country/Region": "<userCountryName>"*/
const userCountryData = {
    "Country/Region": "China",
    Confirmed: 80945,
    Deaths: 3180,
    Recovered: 64196
};

/* To find worldData:
- get the ipdata of the user
- find the data by looping over tableCovid19DailyReports where "Country/Region": "GLOBAL"*/
const worldData = {
    "Country/Region": "GLOBAL",
    Confirmed: 145193,
    Deaths: 5404,
    Recovered: 70251
};

/* To find selectedCountryOrRegionData
- get the selectedCountryOrRegion
- find the data by looping over tableCovid19DailyReports */
const selectedCountryOrRegionData = {
    "Country/Region": "China",
    Confirmed: 80945,
    Deaths: 3180,
    Recovered: 64196
};
