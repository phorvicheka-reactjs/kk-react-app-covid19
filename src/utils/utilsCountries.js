export const utilsCountries = (() => {
    const list = [
        { icon: "🇦🇫", name: "Afghanistan", abbr: "AF", code: "93" },
        { icon: "🇦🇽", name: "Alland Islands", abbr: "AX", code: "358" },
        { icon: "🇦🇱", name: "Albania", abbr: "AL", code: "355" },
        { icon: "🇩🇿", name: "Algeria", abbr: "DZ", code: "213" },
        { icon: "🇦🇸", name: "American Samoa", abbr: "AS", code: "1-684" },
        { icon: "🇦🇩", name: "Andorra", abbr: "AD", code: "376" },
        { icon: "🇦🇴", name: "Angola", abbr: "AO", code: "244" },
        { icon: "🇦🇮", name: "Anguilla", abbr: "AI", code: "1-264" },
        { icon: "🇦🇶", name: "Antarctica", abbr: "AQ", code: "672" },
        { icon: "🇦🇬", name: "Antigua and Barbuda", abbr: "AG", code: "1-268" },
        { icon: "🇦🇷", name: "Argentina", abbr: "AR", code: "54" },
        { icon: "🇦🇲", name: "Armenia", abbr: "AM", code: "374" },
        { icon: "🇦🇼", name: "Aruba", abbr: "AW", code: "297" },
        {
            icon: "🇦🇺",
            name: "Australia",
            abbr: "AU",
            code: "61",
            suggested: true
        },
        { icon: "🇦🇹", name: "Austria", abbr: "AT", code: "43" },
        { icon: "🇦🇿", name: "Azerbaijan", abbr: "AZ", code: "994" },
        { icon: "🇧🇸", name: "Bahamas", abbr: "BS", code: "1-242" },
        { icon: "🇧🇭", name: "Bahrain", abbr: "BH", code: "973" },
        { icon: "🇧🇩", name: "Bangladesh", abbr: "BD", code: "880" },
        { icon: "🇧🇧", name: "Barbados", abbr: "BB", code: "1-246" },
        { icon: "🇧🇾", name: "Belarus", abbr: "BY", code: "375" },
        { icon: "🇧🇪", name: "Belgium", abbr: "BE", code: "32" },
        { icon: "🇧🇿", name: "Belize", abbr: "BZ", code: "501" },
        { icon: "🇧🇯", name: "Benin", abbr: "BJ", code: "229" },
        { icon: "🇧🇲", name: "Bermuda", abbr: "BM", code: "1-441" },
        { icon: "🇧🇹", name: "Bhutan", abbr: "BT", code: "975" },
        { icon: "🇧🇴", name: "Bolivia", abbr: "BO", code: "591" },
        { icon: "🇧🇦", name: "Bosnia and Herzegovina", abbr: "BA", code: "387" },
        { icon: "🇧🇼", name: "Botswana", abbr: "BW", code: "267" },
        { icon: "🇧🇻", name: "Bouvet Island", abbr: "BV", code: "47" },
        { icon: "🇧🇷", name: "Brazil", abbr: "BR", code: "55" },
        {
            icon: "🇮🇴",
            name: "British Indian Ocean Territory",
            abbr: "IO",
            code: "246"
        },
        {
            icon: "🇻🇬",
            name: "British Virgin Islands",
            abbr: "VG",
            code: "1-284"
        },
        { icon: "🇧🇳", name: "Brunei Darussalam", abbr: "BN", code: "673" },
        { icon: "🇧🇬", name: "Bulgaria", abbr: "BG", code: "359" },
        { icon: "🇧🇫", name: "Burkina Faso", abbr: "BF", code: "226" },
        { icon: "🇧🇮", name: "Burundi", abbr: "BI", code: "257" },
        { icon: "🇰🇭", name: "Cambodia", abbr: "KH", code: "855" },
        { icon: "🇨🇲", name: "Cameroon", abbr: "CM", code: "237" },
        { icon: "🇨🇦", name: "Canada", abbr: "CA", code: "1", suggested: true },
        { icon: "🇨🇻", name: "Cape Verde", abbr: "CV", code: "238" },
        { icon: "🇰🇾", name: "Cayman Islands", abbr: "KY", code: "1-345" },
        {
            icon: "🇨🇫",
            name: "Central African Republic",
            abbr: "CF",
            code: "236"
        },
        { icon: "🇹🇩", name: "Chad", abbr: "TD", code: "235" },
        { icon: "🇨🇱", name: "Chile", abbr: "CL", code: "56" },
        { icon: "🇨🇳", name: "China", abbr: "CN", code: "86" },
        { icon: "🇨🇽", name: "Christmas Island", abbr: "CX", code: "61" },
        { icon: "🇨🇨", name: "Cocos (Keeling) Islands", abbr: "CC", code: "61" },
        { icon: "🇨🇴", name: "Colombia", abbr: "CO", code: "57" },
        { icon: "🇰🇲", name: "Comoros", abbr: "KM", code: "269" },
        {
            icon: "🇨🇩",
            name: "Congo, Democratic Republic of the",
            abbr: "CG",
            code: "243"
        },
        {
            icon: "🇨🇬",
            name: "Congo, Republic of the",
            abbr: "CD",
            code: "242"
        },
        { icon: "🇨🇰", name: "Cook Islands", abbr: "CK", code: "682" },
        { icon: "🇨🇷", name: "Costa Rica", abbr: "CR", code: "506" },
        { icon: "🇨🇮", name: "Cote d'Ivoire", abbr: "CI", code: "225" },
        { icon: "🇭🇷", name: "Croatia", abbr: "HR", code: "385" },
        { icon: "🇨🇺", name: "Cuba", abbr: "CU", code: "53" },
        { icon: "🇨🇼", name: "Curacao", abbr: "CW", code: "599" },
        { icon: "🇨🇾", name: "Cyprus", abbr: "CY", code: "357" },
        { icon: "🇨🇿", name: "Czech Republic", abbr: "CZ", code: "420" },
        { icon: "🇩🇰", name: "Denmark", abbr: "DK", code: "45" },
        { icon: "🇩🇯", name: "Djibouti", abbr: "DJ", code: "253" },
        { icon: "🇩🇲", name: "Dominica", abbr: "DM", code: "1-767" },
        { icon: "🇩🇴", name: "Dominican Republic", abbr: "DO", code: "1-809" },
        { icon: "🇪🇨", name: "Ecuador", abbr: "EC", code: "593" },
        { icon: "🇪🇬", name: "Egypt", abbr: "EG", code: "20" },
        { icon: "🇸🇻", name: "El Salvador", abbr: "SV", code: "503" },
        { icon: "🇬🇶", name: "Equatorial Guinea", abbr: "GQ", code: "240" },
        { icon: "🇪🇷", name: "Eritrea", abbr: "ER", code: "291" },
        { icon: "🇪🇪", name: "Estonia", abbr: "EE", code: "372" },
        { icon: "🇪🇹", name: "Ethiopia", abbr: "ET", code: "251" },
        {
            icon: "🇫🇰",
            name: "Falkland Islands (Malvinas)",
            abbr: "FK",
            code: "500"
        },
        { icon: "🇫🇴", name: "Faroe Islands", abbr: "FO", code: "298" },
        { icon: "🇫🇯", name: "Fiji", abbr: "FJ", code: "679" },
        { icon: "🇫🇮", name: "Finland", abbr: "FI", code: "358" },
        { icon: "🇫🇷", name: "France", abbr: "FR", code: "33", suggested: true },
        { icon: "🇬🇫", name: "French Guiana", abbr: "GF", code: "594" },
        { icon: "🇵🇫", name: "French Polynesia", abbr: "PF", code: "689" },
        {
            icon: "🇹🇫",
            name: "French Southern Territories",
            abbr: "TF",
            code: "262"
        },
        { icon: "🇬🇦", name: "Gabon", abbr: "GA", code: "241" },
        { icon: "🇬🇲", name: "Gambia", abbr: "GM", code: "220" },
        { icon: "🇬🇪", name: "Georgia", abbr: "GE", code: "995" },
        {
            icon: "🇩🇪",
            name: "Germany",
            abbr: "DE",
            code: "49",
            suggested: true
        },
        { icon: "🇬🇭", name: "Ghana", abbr: "GH", code: "233" },
        { icon: "🇬🇮", name: "Gibraltar", abbr: "GI", code: "350" },
        { icon: "🇬🇷", name: "Greece", abbr: "GR", code: "30" },
        { icon: "🇬🇱", name: "Greenland", abbr: "GL", code: "299" },
        { icon: "🇬🇩", name: "Grenada", abbr: "GD", code: "1-473" },
        { icon: "🇬🇵", name: "Guadeloupe", abbr: "GP", code: "590" },
        { icon: "🇬🇺", name: "Guam", abbr: "GU", code: "1-671" },
        { icon: "🇬🇹", name: "Guatemala", abbr: "GT", code: "502" },
        { icon: "🇬🇬", name: "Guernsey", abbr: "GG", code: "44" },
        { icon: "🇬🇼", name: "Guinea-Bissau", abbr: "GW", code: "245" },
        { icon: "🇬🇳", name: "Guinea", abbr: "GN", code: "224" },
        { icon: "🇬🇾", name: "Guyana", abbr: "GY", code: "592" },
        { icon: "🇭🇹", name: "Haiti", abbr: "HT", code: "509" },
        {
            icon: "🇭🇲",
            name: "Heard Island and McDonald Islands",
            abbr: "HM",
            code: "672"
        },
        {
            icon: "🇻🇦",
            name: "Holy See (Vatican City State)",
            abbr: "VA",
            code: "379"
        },
        { icon: "🇭🇳", name: "Honduras", abbr: "HN", code: "504" },
        { icon: "🇭🇰", name: "Hong Kong", abbr: "HK", code: "852" },
        { icon: "🇭🇺", name: "Hungary", abbr: "HU", code: "36" },
        { icon: "🇮🇸", name: "Iceland", abbr: "IS", code: "354" },
        { icon: "🇮🇳", name: "India", abbr: "IN", code: "91" },
        { icon: "🇮🇩", name: "Indonesia", abbr: "ID", code: "62" },
        {
            icon: "🇮🇷",
            name: "Iran, Islamic Republic of",
            abbr: "IR",
            code: "98"
        },
        { icon: "🇮🇶", name: "Iraq", abbr: "IQ", code: "964" },
        { icon: "🇮🇪", name: "Ireland", abbr: "IE", code: "353" },
        { icon: "🇮🇲", name: "Isle of Man", abbr: "IM", code: "44" },
        { icon: "🇮🇱", name: "Israel", abbr: "IL", code: "972" },
        { icon: "🇮🇹", name: "Italy", abbr: "IT", code: "39" },
        { icon: "🇯🇲", name: "Jamaica", abbr: "JM", code: "1-876" },
        { icon: "🇯🇵", name: "Japan", abbr: "JP", code: "81", suggested: true },
        { icon: "🇯🇪", name: "Jersey", abbr: "JE", code: "44" },
        { icon: "🇯🇴", name: "Jordan", abbr: "JO", code: "962" },
        { icon: "🇰🇿", name: "Kazakhstan", abbr: "KZ", code: "7" },
        { icon: "🇰🇪", name: "Kenya", abbr: "KE", code: "254" },
        { icon: "🇰🇮", name: "Kiribati", abbr: "KI", code: "686" },
        {
            icon: "🇰🇵",
            name: "Korea, Democratic People's Republic of",
            abbr: "KP",
            code: "850"
        },
        { icon: "🇰🇷", name: "Korea, Republic of", abbr: "KR", code: "82" },
        { icon: "🇽🇰", name: "Kosovo", abbr: "XK", code: "383" },
        { icon: "🇰🇼", name: "Kuwait", abbr: "KW", code: "965" },
        { icon: "🇰🇬", name: "Kyrgyzstan", abbr: "KG", code: "996" },
        {
            icon: "🇱🇦",
            name: "Lao People's Democratic Republic",
            abbr: "LA",
            code: "856"
        },
        { icon: "🇱🇻", name: "Latvia", abbr: "LV", code: "371" },
        { icon: "🇱🇧", name: "Lebanon", abbr: "LB", code: "961" },
        { icon: "🇱🇸", name: "Lesotho", abbr: "LS", code: "266" },
        { icon: "🇱🇷", name: "Liberia", abbr: "LR", code: "231" },
        { icon: "🇱🇾", name: "Libya", abbr: "LY", code: "218" },
        { icon: "🇱🇮", name: "Liechtenstein", abbr: "LI", code: "423" },
        { icon: "🇱🇹", name: "Lithuania", abbr: "LT", code: "370" },
        { icon: "🇱🇺", name: "Luxembourg", abbr: "LU", code: "352" },
        { icon: "🇲🇴", name: "Macao", abbr: "MO", code: "853" },
        {
            icon: "🇲🇰",
            name: "Macedonia, the Former Yugoslav Republic of",
            abbr: "MK",
            code: "389"
        },
        { icon: "🇲🇬", name: "Madagascar", abbr: "MG", code: "261" },
        { icon: "🇲🇼", name: "Malawi", abbr: "MW", code: "265" },
        { icon: "🇲🇾", name: "Malaysia", abbr: "MY", code: "60" },
        { icon: "🇲🇻", name: "Maldives", abbr: "MV", code: "960" },
        { icon: "🇲🇱", name: "Mali", abbr: "ML", code: "223" },
        { icon: "🇲🇹", name: "Malta", abbr: "MT", code: "356" },
        { icon: "🇲🇭", name: "Marshall Islands", abbr: "MH", code: "692" },
        { icon: "🇲🇶", name: "Martinique", abbr: "MQ", code: "596" },
        { icon: "🇲🇷", name: "Mauritania", abbr: "MR", code: "222" },
        { icon: "🇲🇺", name: "Mauritius", abbr: "MU", code: "230" },
        { icon: "🇾🇹", name: "Mayotte", abbr: "YT", code: "262" },
        { icon: "🇲🇽", name: "Mexico", abbr: "MX", code: "52" },
        {
            icon: "🇫🇲",
            name: "Micronesia, Federated States of",
            abbr: "FM",
            code: "691"
        },
        { icon: "🇲🇩", name: "Moldova, Republic of", abbr: "MD", code: "373" },
        { icon: "🇲🇨", name: "Monaco", abbr: "MC", code: "377" },
        { icon: "🇲🇳", name: "Mongolia", abbr: "MN", code: "976" },
        { icon: "🇲🇪", name: "Montenegro", abbr: "ME", code: "382" },
        { icon: "🇲🇸", name: "Montserrat", abbr: "MS", code: "1-664" },
        { icon: "🇲🇦", name: "Morocco", abbr: "MA", code: "212" },
        { icon: "🇲🇿", name: "Mozambique", abbr: "MZ", code: "258" },
        { icon: "🇲🇲", name: "Myanmar", abbr: "MM", code: "95" },
        { icon: "🇳🇦", name: "Namibia", abbr: "NA", code: "264" },
        { icon: "🇳🇷", name: "Nauru", abbr: "NR", code: "674" },
        { icon: "🇳🇵", name: "Nepal", abbr: "NP", code: "977" },
        { icon: "🇳🇱", name: "Netherlands", abbr: "NL", code: "31" },
        { icon: "🇳🇨", name: "New Caledonia", abbr: "NC", code: "687" },
        { icon: "🇳🇿", name: "New Zealand", abbr: "NZ", code: "64" },
        { icon: "🇳🇮", name: "Nicaragua", abbr: "NI", code: "505" },
        { icon: "🇳🇪", name: "Niger", abbr: "NE", code: "227" },
        { icon: "🇳🇬", name: "Nigeria", abbr: "NG", code: "234" },
        { icon: "🇳🇺", name: "Niue", abbr: "NU", code: "683" },
        { icon: "🇳🇫", name: "Norfolk Island", abbr: "NF", code: "672" },
        {
            icon: "🇲🇵",
            name: "Northern Mariana Islands",
            abbr: "MP",
            code: "1-670"
        },
        { icon: "🇳🇴", name: "Norway", abbr: "NO", code: "47" },
        { icon: "🇴🇲", name: "Oman", abbr: "OM", code: "968" },
        { icon: "🇵🇰", name: "Pakistan", abbr: "PK", code: "92" },
        { icon: "🇵🇼", name: "Palau", abbr: "PW", code: "680" },
        { icon: "🇵🇸", name: "Palestine, State of", abbr: "PS", code: "970" },
        { icon: "🇵🇦", name: "Panama", abbr: "PA", code: "507" },
        { icon: "🇵🇬", name: "Papua New Guinea", abbr: "PG", code: "675" },
        { icon: "🇵🇾", name: "Paraguay", abbr: "PY", code: "595" },
        { icon: "🇵🇪", name: "Peru", abbr: "PE", code: "51" },
        { icon: "🇵🇭", name: "Philippines", abbr: "PH", code: "63" },
        { icon: "🇵🇳", name: "Pitcairn", abbr: "PN", code: "870" },
        { icon: "🇵🇱", name: "Poland", abbr: "PL", code: "48" },
        { icon: "🇵🇹", name: "Portugal", abbr: "PT", code: "351" },
        { icon: "🇵🇷", name: "Puerto Rico", abbr: "PR", code: "1" },
        { icon: "🇶🇦", name: "Qatar", abbr: "QA", code: "974" },
        { icon: "🇷🇪", name: "Reunion", abbr: "RE", code: "262" },
        { icon: "🇷🇴", name: "Romania", abbr: "RO", code: "40" },
        { icon: "🇷🇺", name: "Russian Federation", abbr: "RU", code: "7" },
        { icon: "🇷🇼", name: "Rwanda", abbr: "RW", code: "250" },
        { icon: "🇧🇱", name: "Saint Barthelemy", abbr: "BL", code: "590" },
        { icon: "🇸🇭", name: "Saint Helena", abbr: "SH", code: "290" },
        {
            icon: "🇰🇳",
            name: "Saint Kitts and Nevis",
            abbr: "KN",
            code: "1-869"
        },
        { icon: "🇱🇨", name: "Saint Lucia", abbr: "LC", code: "1-758" },
        {
            icon: "🇲🇫",
            name: "Saint Martin (French part)",
            abbr: "MF",
            code: "590"
        },
        {
            icon: "🇵🇲",
            name: "Saint Pierre and Miquelon",
            abbr: "PM",
            code: "508"
        },
        {
            icon: "🇻🇨",
            name: "Saint Vincent and the Grenadines",
            abbr: "VC",
            code: "1-784"
        },
        { icon: "🇼🇸", name: "Samoa", abbr: "WS", code: "685" },
        { icon: "🇸🇲", name: "San Marino", abbr: "SM", code: "378" },
        { icon: "🇸🇹", name: "Sao Tome and Principe", abbr: "ST", code: "239" },
        { icon: "🇸🇦", name: "Saudi Arabia", abbr: "SA", code: "966" },
        { icon: "🇸🇳", name: "Senegal", abbr: "SN", code: "221" },
        { icon: "🇷🇸", name: "Serbia", abbr: "RS", code: "381" },
        { icon: "🇸🇨", name: "Seychelles", abbr: "SC", code: "248" },
        { icon: "🇸🇱", name: "Sierra Leone", abbr: "SL", code: "232" },
        { icon: "🇸🇬", name: "Singapore", abbr: "SG", code: "65" },
        {
            icon: "🇸🇽",
            name: "Sint Maarten (Dutch part)",
            abbr: "SX",
            code: "1-721"
        },
        { icon: "🇸🇰", name: "Slovakia", abbr: "SK", code: "421" },
        { icon: "🇸🇮", name: "Slovenia", abbr: "SI", code: "386" },
        { icon: "🇸🇧", name: "Solomon Islands", abbr: "SB", code: "677" },
        { icon: "🇸🇴", name: "Somalia", abbr: "SO", code: "252" },
        { icon: "🇿🇦", name: "South Africa", abbr: "ZA", code: "27" },
        {
            icon: "🇬🇸",
            name: "South Georgia and the South Sandwich Islands",
            abbr: "GS",
            code: "500"
        },
        { icon: "🇸🇸", name: "South Sudan", abbr: "SS", code: "211" },
        { icon: "🇪🇸", name: "Spain", abbr: "ES", code: "34" },
        { icon: "🇱🇰", name: "Sri Lanka", abbr: "LK", code: "94" },
        { icon: "🇸🇩", name: "Sudan", abbr: "SD", code: "249" },
        { icon: "🇸🇷", name: "Suriname", abbr: "SR", code: "597" },
        { icon: "🇸🇯", name: "Svalbard and Jan Mayen", abbr: "SJ", code: "47" },
        { icon: "🇸🇿", name: "Swaziland", abbr: "SZ", code: "268" },
        { icon: "🇸🇪", name: "Sweden", abbr: "SE", code: "46" },
        { icon: "🇨🇭", name: "Switzerland", abbr: "CH", code: "41" },
        { icon: "🇸🇾", name: "Syrian Arab Republic", abbr: "SY", code: "963" },
        {
            icon: "🇹🇼",
            name: "Taiwan, Province of China",
            abbr: "TW",
            code: "886"
        },
        { icon: "🇹🇯", name: "Tajikistan", abbr: "TJ", code: "992" },
        { icon: "🇹🇭", name: "Thailand", abbr: "TH", code: "66" },
        { icon: "🇹🇱", name: "Timor-Leste", abbr: "TL", code: "670" },
        { icon: "🇹🇬", name: "Togo", abbr: "TG", code: "228" },
        { icon: "🇹🇰", name: "Tokelau", abbr: "TK", code: "690" },
        { icon: "🇹🇴", name: "Tonga", abbr: "TO", code: "676" },
        { icon: "🇹🇹", name: "Trinidad and Tobago", abbr: "TT", code: "1-868" },
        { icon: "🇹🇳", name: "Tunisia", abbr: "TN", code: "216" },
        { icon: "🇹🇷", name: "Turkey", abbr: "TR", code: "90" },
        { icon: "🇹🇲", name: "Turkmenistan", abbr: "TM", code: "993" },
        {
            icon: "🇹🇨",
            name: "Turks and Caicos Islands",
            abbr: "TC",
            code: "1-649"
        },
        { icon: "🇹🇻", name: "Tuvalu", abbr: "TV", code: "688" },
        { icon: "🇺🇬", name: "Uganda", abbr: "UG", code: "256" },
        { icon: "🇺🇦", name: "Ukraine", abbr: "UA", code: "380" },
        { icon: "🇦🇪", name: "United Arab Emirates", abbr: "AE", code: "971" },
        { icon: "🇬🇧", name: "United Kingdom", abbr: "GB", code: "44" },
        {
            icon: "🇹🇿",
            name: "United Republic of Tanzania",
            abbr: "TZ",
            code: "255"
        },
        {
            icon: "🇺🇲",
            name: "United States",
            abbr: "US",
            code: "1",
            suggested: true
        },
        { icon: "🇺🇾", name: "Uruguay", abbr: "UY", code: "598" },
        { icon: "🇻🇮", name: "US Virgin Islands", abbr: "VI", code: "1-340" },
        { icon: "🇺🇿", name: "Uzbekistan", abbr: "UZ", code: "998" },
        { icon: "🇻🇺", name: "Vanuatu", abbr: "VU", code: "678" },
        { icon: "🇻🇪", name: "Venezuela", abbr: "VE", code: "58" },
        { icon: "🇻🇳", name: "Vietnam", abbr: "VN", code: "84" },
        { icon: "🇼🇫", name: "Wallis and Futuna", abbr: "WF", code: "681" },
        { icon: "🇪🇭", name: "Western Sahara", abbr: "EH", code: "212" },
        { icon: "🇾🇪", name: "Yemen", abbr: "YE", code: "967" },
        { icon: "🇿🇲", name: "Zambia", abbr: "ZM", code: "260" },
        { icon: "🇿🇼", name: "Zimbabwe", abbr: "ZW", code: "263" }
    ];

    list.abbrs = [];
    list.names = [];

    // define the names and abbr and lookups

    const abbrLookup = {};
    const nameLookup = {};

    let country = {};
    for (let i = 0, len = list.length; i < len; i++) {
        country = list[i];
        list.abbrs.push(country.abbr);
        list.names.push(country.name);
        abbrLookup[country.name.toLowerCase()] = country.abbr;
        nameLookup[country.abbr] = country.name;
    }

    // define the lookups
    list.name = function name(abbr) {
        return nameLookup[abbr.toUpperCase()];
    };

    list.abbr = function abbr(name) {
        /* if(abbrLookup[name.toLowerCase()]){
          return abbrLookup[name.toLowerCase()];
        }else {
          let modifiedName = "";
          console.log(Object.keys(abbrLookup));
          for(let key of Object.keys(abbrLookup)) {
            let keyStrValues = key.replace(",", "").split(" ")
            let nameStrValues = name.toLowerCase().replace(",", "").split(" ");
            let isAnyNameStrValuesExistedInKeyStrValues = keyStrValues.every((val) => nameStrValues.includes(val));
            let isAnyKeyStrValuesExistedInNameStrValues = nameStrValues.every((val) => keyStrValues.includes(val));
            if (
                isAnyNameStrValuesExistedInKeyStrValues ||
                isAnyKeyStrValuesExistedInNameStrValues
            ) {
                modifiedName = key;
                break;
            }
          }
          return abbrLookup[modifiedName];
        }  */
        if (list.abbrs.indexOf(name.toUpperCase()) !== -1) {
            return list.abbrs[list.abbrs.indexOf(name.toUpperCase())];
        }
        if (name === "Mainland China") {
            return abbrLookup["china"];
        }
        if (
            name === "Republic of Korea" ||
            name === "Korea, South" ||
            name === "South Korea"
        ) {
            return abbrLookup["Korea, Republic of".toLowerCase()];
        }
        if (name === "Iran" || name === "Iran (Islamic Republic of)") {
            return abbrLookup["Iran, Islamic Republic of".toLowerCase()];
        }
        if (name === "Taiwan*" || name === "Taiwan") {
            return abbrLookup["Taiwan, Province of China".toLowerCase()];
        }
        if (name === "Russia") {
            return abbrLookup["Russian Federation".toLowerCase()];
        }
        if (name === "Brunei") {
            return abbrLookup["Brunei Darussalam".toLowerCase()];
        }
        if (name === "North Macedonia") {
            return abbrLookup[
                "Macedonia, the Former Yugoslav Republic of".toLowerCase()
            ];
        }
        if (name === "Moldova" || name === "Republic of Moldova") {
            return abbrLookup["Moldova, Republic of".toLowerCase()];
        }
        if (name === "Congo (Kinshasa)") {
            return abbrLookup["Congo, Republic of the".toLowerCase()];
        }
        if (name === "Holy See" || name === "Vatican City") {
            return abbrLookup["Holy See (Vatican City State)".toLowerCase()];
        }
        if (name === "Czechia") {
            return abbrLookup["Czech Republic".toLowerCase()];
        }
        if (name === "UK") {
            return abbrLookup["United Kingdom".toLowerCase()];
        }
        if (name === "Hong Kong SAR") {
            return abbrLookup["Hong Kong".toLowerCase()];
        }
        if (name === "Viet Nam") {
            return abbrLookup["Vietnam".toLowerCase()];
        }
        if (name === "occupied Palestinian territory" || name === "Palestine") {
            return abbrLookup["Palestine, State of".toLowerCase()];
        }
        if (name === "Saint Martin" || name === "St. Martin") {
            return abbrLookup["Saint Martin (French part)".toLowerCase()];
        }
        if (name === "Macau") {
            return abbrLookup["Macao".toLowerCase()];
        }

        return abbrLookup[name.toLowerCase()];
    };

    return list;
})();
