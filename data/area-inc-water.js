/* Including inland water */

var area = {
    RUS:"17075200",
    CAN:"9976140",
    CHN:"9706961",
    HKG:"1092",
    MAC:"25",
    USA:"9629091",
    ASM:"199",
    GUM:"549",
    MNP:"477",
    BRA:"8547906",
    AUS:"7741220",
    IND:"3287590",
    ARG:"2766890",
    KAZ:"2727300",
    DZA:"2381740",
    SAU:"2149690",
    MEX:"1972550",
    IDN:"1904556",
    SDN:"1861484",
    LBY:"1759540",
    IRN:"1648000",
    MNG:"1565000",
    PER:"1285220",
    TCD:"1284000",
    NER:"1267000",
    AGO:"1246700",
    MLI:"1240000",
    ZAF:"1219912",
    COL:"1197411",
    ETH:"1127127",
    BOL:"1098580",
    MRT:"1030700",
    EGY:"1001450",
    NGA:"923768",
    VEN:"912050",
    NAM:"825418",
    PAK:"803940",
    MOZ:"801590",
    TUR:"780580",
    CHL:"756950",
    ZMB:"752614",
    AFG:"647500",
    SOM:"637657",
    UKR:"603700",
    BWA:"600370",
    MDG:"587040",
    FRA:"547030",
    ATF:"7829",
    PYF:"4167",
    NCL:"19060",
    SPM:"242",
    WLF:"274",
    YEM:"527970",
    THA:"514000",
    ESP:"504781",
    TKM:"488100",
    CMR:"475440",
    PNG:"462840",
    SWE:"449964",
    UZB:"447400",
    MAR:"446550",
    IRQ:"437072",
    PRY:"406750",
    ZWE:"390580",
    JPN:"377835",
    DEU:"357021",
    FIN:"337030",
    MYS:"329750",
    VNM:"329560",
    NOR:"324220",
    POL:"312685",
    OMN:"309500",
    ITA:"301230",
    PHL:"300000",
    ECU:"283560",
    BFA:"274200",
    NZL:"268680",
    COK:"240",
    NIU:"260",
    GAB:"267667",
    GIN:"245857",
    GBR:"244110",
    AIA:"102",
    IOT:"60",
    BMU:"53",
    CYM:"262",
    FLK:"12173",
    GIB:"6",
    GGY:"78",
    IMN:"572",
    JEY:"116",
    MSR:"102",
    SGS:"3903",
    TCA:"430",
    GHA:"238540",
    ROU:"237500",
    LAO:"236800",
    GUY:"214970",
    BLR:"207600",
    KGZ:"198500",
    SEN:"196190",
    SYR:"185180",
    KHM:"181035",
    URY:"176220",
    TUN:"163610",
    SUR:"163270",
    NPL:"147181",
    BGD:"147570",
    TJK:"143100",
    GRC:"131940",
    NIC:"129494",
    RWA:"26338",
    ERI:"121320",
    PRK:"120540",
    MWI:"118480",
    BEN:"112620",
    HND:"112090",
    LBR:"111370",
    BGR:"110910",
    GTM:"108890",
    ISL:"103000",
    CUB:"100860",
    KOR:"98480",
    HUN:"93030",
    JOR:"92300",
    PRT:"88267",
    SRB:"88361",
    AZE:"86600",
    AUT:"83858",
    ARE:"82880",
    CZE:"78866",
    PAN:"78200",
    SLE:"71740",
    IRL:"70273",
    GEO:"69700",
    LKA:"65610",
    LTU:"65200",
    LVA:"64589",
    TGO:"56785",
    HRV:"56542",
    BIH:"51129",
    CRI:"51100",
    SVK:"48845",
    DOM:"48730",
    BTN:"47000",
    EST:"45226",
    DNK:"43094",
    NLD:"41526",
    ABW:"193",
    CHE:"41210",
    GNB:"36120",
    TWN:"35980",
    MDA:"33843",
    BEL:"32545",
    LSO:"30355",
    ARM:"29800",
    ALB:"28748",
    SLB:"28450",
    GNQ:"28051",
    HTI:"27750",
    ISR:"26990",
    BLZ:"22966",
    DJI:"22000",
    SLV:"21040",
    SVN:"20253",
    FJI:"18270",
    KWT:"17820",
    SWZ:"17363",
    BHS:"13940",
    MNE:"13812",
    VUT:"12200",
    QAT:"11437",
    GMB:"11300",
    JAM:"10990",
    KOS:"10908",
    LBN:"10452",
    CYP:"9250",
    BRN:"5770",
    TTO:"5128",
    CPV:"4033",
    WSM:"2860",
    LUX:"2586",
    COM:"2170",
    MUS:"1860",
    STP:"1001",
    DMA:"754",
    TON:"748",
    KIR:"717",
    FSM:"702",
    SGP:"692.7",
    BHR:"665",
    LCA:"620",
    SYC:"455",
    AND:"468",
    PLW:"458",
    ATG:"442",
    BRB:"430",
    VCT:"389",
    GRD:"340",
    MLT:"316",
    MDV:"300",
    KNA:"261",
    MHL:"181",
    LIE:"160",
    SMR:"61.2",
    TUV:"26",
    NRU:"21",
    MCO:"1.95",
    VAT:"0.44",
};

var lowest = Number.POSITIVE_INFINITY;
var highest = Number.NEGATIVE_INFINITY;
var tmp;
for (var i=0; i<iso.length; i++) {
    tmp = area[iso[i]];
    if(Math.min(tmp, lowest) == tmp)
    {
        lowest = tmp;
    }
    if(Math.max(tmp, highest) == tmp)
    {
        highest = tmp;
    }
}
area["LOWEST"] = lowest;
area["HIGHEST"] = highest;
