/* GDP nominal UN 2012. */

var values = {
    USA:"16244600",
    CHN:"8358400",
    JPN:"5960180",
    DEU:"3425950",
    FRA:"2611220",
    GBR:"2471600",
    BRA:"2254100",
    RUS:"2029810",
    ITA:"2013390",
    IND:"1875210",
    CAN:"1821440",
    AUS:"1564410",
    ESP:"1322120",
    MEX:"1183650",
    KOR:"1129590",
    IDN:"878040",
    NLD:"800530",
    TUR:"788290",
    SAU:"711050",
    CHE:"631180",
    IRN:"551580",
    SWE:"523800",
    NOR:"499660",
    POL:"489850",
    BEL:"483400",
    ARG:"477020",
    AUT:"394450",
    THA:"385690",
    ZAF:"384310",
    ARE:"383790",
    VEN:"382420",
    COL:"369810",
    DNK:"314880",
    MYS:"304720",
    SGP:"276520",
    CHL:"268310",
    HKG:"263250",
    NGA:"286470",
    EGY:"254670",
    PHL:"250180",
    GRC:"248940",
    FIN:"247380",
    ISR:"241060",
    PAK:"215110",
    PRT:"212130",
    IRL:"210630",
    DZA:"207020",
    PER:"204680",
    KAZ:"202650",
    CZE:"196440",
    QAT:"192400",
    KWT:"183210",
    UKR:"176300",
    NZL:"171250",
    ROU:"169390",
    VNM:"155820",
    IRQ:"149370",
    BGD:"127190",
    HUN:"124600",
    AGO:"116300",
    PRI:"103510",
    MAR:"95990",
    LBY:"95800",
    SVK:"91340",
    ECU:"87490",
    OMN:"78110",
    CUB:"71010",
    AZE:"68720",
    BLR:"63250",
    MMR:"59440",
    LKA:"59420",
    DOM:"58890",
    HRV:"56440",
    LUX:"55140",
    SDN:"51450",
    UZB:"51410",
    BGR:"50970",
    GTM:"50370",
    URY:"49910",
    SYR:"46540",
    SVN:"45380",
    TUN:"45130",
    CRI:"45100",
    MAC:"43580",
    SLE:"43360",
    LBN:"42490",
    LTU:"42330",
    ETH:"41600",
    GHA:"40710",
    KEN:"40690",
    SRB:"38490",
    PAN:"36250",
    TKM:"33460",
    YEM:"32830",
    JOR:"30930",
    BHR:"30360",
    LVA:"28370",
    TZA:"28240",
    BOL:"27030",
    CMR:"26090",
    PRY:"25930",
    CIV:"24400",
    GAB:"24070",
    SLV:"23860",
    TTO:"23220",
    CYP:"22760",
    EST:"22370",
    UGA:"21730",
    ZMB:"21490",
    AFG:"20360",
    COD:"18820",
    HND:"18560",
    NPL:"18020",
    BIH:"17310",
    BRN:"16950",
    GEO:"15830",
    PNG:"15670",
    JAM:"14790",
    COG:"14760",
    MOZ:"14600",
    GNQ:"14490",
    PRK:"14410",
    BWA:"14410",
    KHM:"14030",
    SEN:"13960",
    ISL:"13570",
    NAM:"12800",
    ALB:"12040",
    MUS:"11450",
    BFA:"10680",
    NIC:"10500",
    MNG:"10270",
    MLI:"10260",
    PSE:"10250",
    TCD:"10180",
    SDS:"10060",
    MDG:"9960",
    ARM:"9950",
    NCL:"9840",
    ZWE:"9800",
    MKD:"9570",
    LAO:"9100",
    MLT:"8770",
    BHS:"8040",
    TJK:"7630",
    BEN:"7550",
    MDA:"7250",
    HTI:"7180",
    PYF:"7150",
    RWA:"7100",
    NER:"6770",
    KOS:"6490",
    KGZ:"6470",
    GIN:"6090",
    LIE:"5820",
    MCO:"5700",
    MWI:"5650",
    BMU:"5590",
    TLS:"5380",
    SUR:"5010",
    BRB:"4530",
    MNE:"4040",
    FJI:"3990",
    TGO:"3910",
    MRT:"3860",
    SWZ:"3860",
    CYM:"3390",
    AND:"3220",
    ERI:"3100",
    GUY:"2850",
    MDV:"2600",
    ABW:"2540",
    LSO:"2440",
    GRL:"2340",
    BDI:"2250",
    CAF:"2180",
    CPV:"1900",
    BTN:"1860",
    SMR:"1850",
    BLZ:"1550",
    LBR:"1490",
    DJI:"1360",
    LCA:"1310",
    SOM:"1300",
    ATG:"1170",
    SYC:"1030",
    SLB:"1010",
    GMB:"910",
    GNB:"840",
    GRD:"780",
    KNA:"760",
    VUT:"750",
    TCA:"720",
    VCT:"690",
    WSM:"680",
    COM:"610",
    DMA:"490",
    TON:"460",
    AIA:"280",
    COK:"280",
    STP:"260",
    PLW:"210",
    MHL:"190",
    KIR:"170",
    NRU:"120",
    MSR:"60",
    TUV:"40",
};

var lowest = Number.POSITIVE_INFINITY;
var highest = Number.NEGATIVE_INFINITY;
var tmp;
for (var i=0; i<iso.length; i++) {
    tmp = values[iso[i]];
    if(Math.min(tmp, lowest) == tmp)
    {
        lowest = tmp;
    }
    if(Math.max(tmp, highest) == tmp)
    {
        highest = tmp;
    }
}
values["LOWEST"] = lowest;
values["HIGHEST"] = highest;