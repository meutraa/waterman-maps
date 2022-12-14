var isos = [
   "ABW","AFG","AGO","AIA","ALA","ALB","AND","ARE","ARG","ARM","ASM","ATA","ATF","ATG","AUS","AUT","AZE","BDI","BEL","BEN","BFA","BGD","BGR","BHR","BHS","BIH","BLM","BLR","BLZ","BMU","BOL","BRA","BRB","BRN","BTN","BWA","CAF","CAN","CHE","CHL","CHN","CIV","CMR","CNM","COD","COG","COK","COL","COM","CPV","CRI","CUB","CUW","CYM","CYN","CYP","CZE","DEU","DJI","DMA","DNK","DOM","DZA","ECU","EGY","ERI","ESB","ESP","EST","ETH","FIN","FJI","FLK","FRA","FRO","FSM","GAB","GBR","GEO","GGY","GHA","GIB","GIN","GMB","GNB","GNQ","GRC","GRD","GRL","GTM","GUM","GUY","HKG","HMD","HND","HRV","HTI","HUN","IDN","IMN","IND","IOA","IOT","IRL","IRN","IRQ","ISL","ISR","ITA","JAM","JEY","JOR","JPN","KAB","KAS","KAZ","KEN","KGZ","KHM","KIR","KNA","KOR","KOS","KWT","LAO","LBN","LBR","LBY","LCA","LIE","LKA","LSO","LTU","LUX","LVA","MAC","MAF","MAR","MCO","MDA","MDG","MDV","MEX","MHL","MKD","MLI","MLT","MMR","MNE","MNG","MNP","MOZ","MRT","MSR","MUS","MWI","MYS","NAM","NCL","NER","NFK","NGA","NIC","NIU","NLD","NOR","NPL","NRU","NZL","OMN","PAK","PAN","PCN","PER","PGA","PHL","PLW","PNG","POL","PRI","PRK","PRT","PRY","PSE","PYF","QAT","ROU","RUS","RWA","SAH","SAU","SDN","SDS","SEN","SGP","SGS","SHN","SLB","SLE","SLV","SMR","SOL","SOM","SPM","SRB","STP","SUR","SVK","SVN","SWE","SWZ","SXM","SYC","SYR","TCA","TCD","TGO","THA","TJK","TKM","TLS","TON","TTO","TUN","TUR","TUV","TWN","TZA","UGA","UKR","URY","USA","USG","UZB","VAT","VCT","VEN","VGB","VIR","VNM","VUT","WLF","WSB","WSM","YEM","ZAF","ZMB","ZWE"];

var names = {
    ABW:"Aruba",
    AFG:"Afghanistan",
    AGO:"Angola",
    AIA:"Anguilla",
    ALA:"Åland Islands",
    ALB:"Albania",
    AND:"Andorra",
    ARE:"United Arab Emirates",
    ARG:"Argentina",
    ARM:"Armenia",
    ASM:"American Samoa",
    ATA:"Antarctica",
    ATF:"French Southern Territories",
    ATG:"Antigua and Barbuda",
    AUS:"Australia",
    AUT:"Austria",
    AZE:"Azerbaijan",
    BDI:"Burundi",
    BEL:"Belgium",
    BEN:"Benin",
    BFA:"Burkina Faso",
    BGD:"Bangladesh",
    BGR:"Bulgaria",
    BHR:"Bahrain",
    BHS:"Bahamas & Bahamas, The",
    BIH:"Bosnia and Herzegovina && Bosnia-Herzegovina && Bosnia",
    BLM:"Saint Barthélemy",
    BLR:"Belarus",
    BLZ:"Belize",
    BMU:"Bermuda",
    BOL:"Bolivia",
    BRA:"Brazil",
    BRB:"Barbados",
    BRN:"Brunei && Brunei Darussalam",
    BTN:"Bhutan",
    BWA:"Botswana",
    CAF:"Central African Republic",
    CAN:"Canada",
    CHE:"Switzerland",
    CHL:"Chile",
    CHN:"China && People's Republic of China && PRC",
    CIV:"Côte d'Ivoire && Ivory Coast && Republic of Côte d'Ivoire && Cote d'Ivoire",
    CMR:"Cameroon",
    CNM:"United Nations Buffer Zone in Cyprus",
    COD:"Congo, Democratic Republic of && Democratic Republic of Congo && Congo-Kinshasa && DROC && DRC && Congo, Dem. Rep.",
    COG:"Congo, Republic of && Republic of Congo && Congo && Congo-Brazzaville && Congo, Rep",
    COK:"Cook Islands",
    COL:"Colombia",
    COM:"Comoros",
    CPV:"Cabo Verde",
    CRI:"Costa Rica",
    CUB:"Cuba",
    CUW:"Curaçao && Curacao",
    CYM:"Cayman Islands",
    CYN:"Northern Cyprus",
    CYP:"Cyprus",
    CZE:"Czech Republic",
    DEU:"Germany",
    DJI:"Djibouti",
    DMA:"Dominica",
    DNK:"Denmark",
    DOM:"Dominican Republic",
    DZA:"Algeria",
    ECU:"Ecuador",
    EGY:"Egypt && Egypt, Arab Rep.",
    ERI:"Eritrea",
    ESB:"Dhekelia",
    ESP:"Spain",
    EST:"Estonia",
    ETH:"Ethiopia",
    FIN:"Finland",
    FJI:"Fiji",
    FLK:"Falkland Islands",
    FRA:"France",
    FRO:"Faroe Islands && Faeroe Islands",
    FSM:"Micronesia && Federated States of Micronesia",
    GAB:"Gabon",
    GBR:"United Kingdom",
    GEO:"Georgia",
    GGY:"Guernsey",
    GHA:"Ghana",
    GIB:"Gibraltar",
    GIN:"Guinea",
    GMB:"Gambia && Gambia, The",
    GNB:"Guinea-Bissau",
    GNQ:"Equatorial Guinea && Republic of Equatorial Guinea",
    GRC:"Greece",
    GRD:"Grenada",
    GRL:"Greenland",
    GTM:"Guatemala",
    GUM:"Guam",
    GUY:"Guyana",
    HKG:"Hong Kong",
    HMD:"Heard Island and McDonald Islands",
    HND:"Honduras",
    HRV:"Croatia",
    HTI:"Haiti",
    HUN:"Hungary",
    IDN:"Indonesia",
    IMN:"Isle of Man",
    IND:"India",
    IOA:"Indian Ocean Territory",
    IOT:"British Indian Ocean Territory",
    IRL:"Ireland",
    IRN:"Iran",
    IRQ:"Iraq",
    ISL:"Iceland",
    ISR:"Israel",
    ITA:"Italy",
    JAM:"Jamaica",
    JEY:"Jersey",
    JOR:"Jordan",
    JPN:"Japan",
    KAB:"Baikonur",
    KAS:"Siachen Glacier",
    KAZ:"Kazakhstan",
    KEN:"Kenya",
    KGZ:"Kyrgyzstan && Kyrgyz Republic",
    KHM:"Cambodia",
    KIR:"Kiribati",
    KNA:"Saint Kitts and Nevis && St. Kitts and Nevis",
    KOR:"South Korea && Republic of Korea && Korea, Rep.",
    KOS:"Kosovo",
    KWT:"Kuwait",
    LAO:"Laos && Lao && Lao People's Democratic Republic && Lao PDR",
    LBN:"Lebanon",
    LBR:"Liberia",
    LBY:"Libya",
    LCA:"Saint Lucia && St. Lucia",
    LIE:"Liechtenstein",
    LKA:"Sri Lanka",
    LSO:"Lesotho",
    LTU:"Lithuania",
    LUX:"Luxembourg",
    LVA:"Latvia",
    MAC:"Macao && Macao && Macao SAR, China",
    MAF:"Saint Martin && St. Martin (French part)",
    MAR:"Morocco",
    MCO:"Monaco",
    MDA:"Moldova",
    MDG:"Madagascar",
    MDV:"Maldives",
    MEX:"Mexico",
    MHL:"Marshall Islands",
    MKD:"Macedonia, Republic of && Republic of Macedonia && Macedonia && Macedonia, FYR",
    MLI:"Mali",
    MLT:"Malta",
    MMR:"Myanmar && Republic of the Union of Myanmar && Burma",
    MNE:"Montenegro",
    MNG:"Mongolia",
    MNP:"Northern Mariana Islands",
    MOZ:"Mozambique",
    MRT:"Mauritania && Islamic Republic of Mauritania",
    MSR:"Montserrat",
    MUS:"Mauritius && Republic of Mauritius && Maurice",
    MWI:"Malawi",
    MYS:"Malaysia",
    NAM:"Namibia",
    NCL:"New Caledonia",
    NER:"Niger",
    NFK:"Norfolk Island",
    NGA:"Nigeria",
    NIC:"Nicaragua",
    NIU:"Niue",
    NLD:"Netherlands",
    NOR:"Norway",
    NPL:"Nepal",
    NRU:"Nauru",
    NZL:"New Zealand",
    OMN:"Oman",
    PAK:"Pakistan",
    PAN:"Panama",
    PCN:"Pitcairn",
    PER:"Peru",
    PGA:"Spratly Islands",
    PHL:"Philippines",
    PLW:"Palau",
    PNG:"Papua New Guinea",
    POL:"Poland",
    PRI:"Puerto Rico",
    PRK:"North Korea && Democratic People's Republic of Korea && Korea, Dem. Rep. && DPRK",
    PRT:"Portugal",
    PRY:"Paraguay",
    PSE:"Palestine && West Bank and Gaza",
    PYF:"French Polynesia",
    QAT:"Qatar",
    ROU:"Romania",
    RUS:"Russia && Russian Federation",
    RWA:"Rwanda",
    SAH:"Sahrawi Arab Democratic Republic",
    SAU:"Saudi Arabia",
    SDN:"Sudan",
    SDS:"South Sudan",
    SEN:"Senegal",
    SGP:"Singapore",
    SGS:"South Georgia and South Sandwich Islands",
    SHN:"Saint Helena, Ascension and Tristan da Cunha",
    SLB:"Solomon Islands",
    SLE:"Sierra Leone",
    SLV:"El Salvador",
    SMR:"San Marino",
    SOL:"Somaliland",
    SOM:"Somalia",
    SPM:"Saint Pierre and Miquelon",
    SRB:"Serbia",
    STP:"Sao Tome and Principe && São Tomé and Príncipe && Democratic Republic of São Tomé and Príncipe",
    SUR:"Suriname",
    SVK:"Slovakia && Slovak Republic",
    SVN:"Slovenia",
    SWE:"Sweden",
    SWZ:"Swaziland",
    SXM:"Sint Maarten && Sint Maarten (Dutch part)",
    SYC:"Seychelles",
    SYR:"Syria && Syrian Arab Republic",
    TCA:"Turks and Caicos Islands",
    TCD:"Chad",
    TGO:"Togo",
    THA:"Thailand",
    TJK:"Tajikistan",
    TKM:"Turkmenistan",
    TLS:"Timor-Leste",
    TON:"Tonga",
    TTO:"Trinidad and Tobago",
    TUN:"Tunisia",
    TUR:"Turkey",
    TUV:"Tuvalu",
    TWN:"Taiwan && Republic of China && ROC",
    TZA:"Tanzania && United Republic of Tanzania",
    UGA:"Uganda",
    UKR:"Ukraine",
    URY:"Uruguay",
    USA:"United States && United States of America && USA",
    USG:"USNB Guantanamo Bay",
    UZB:"Uzbekistan",
    VAT:"Holy See && Vatican City State && Vatican City",
    VCT:"Saint Vincent and Grenadines && St. Vincent and the Grenadines",
    VEN:"Venezuela && Venezuela, RB",
    VGB:"Virgin Islands, British && British Virgin Islands",
    VIR:"Virgin Islands, U.S. && US Virgin Islands && Virgin Islands (U.S.)",
    VNM:"Vietnam && Viet nam",
    VUT:"Vanuatu && Republic of Vanuatu",
    WLF:"Wallis and Futuna",
    WSB:"Akrotiri",
    WSM:"Samoa",
    YEM:"Yemen && Yemen, Rep.",
    ZAF:"South Africa",
    ZMB:"Zambia && Republic of Zambia && Zambia && Zambia",
    ZWE:"Zimbabwe"
};
