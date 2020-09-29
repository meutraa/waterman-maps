/* gini late 2000s after taxes. */

var values = {
    AUS:"0.33",
    AUT:"0.26",
    BEL:"0.25",
    CAN:"0.32",
    CHL:"0.39",
    CZE:"0.25",
    DNK:"0.24",
    EST:"0.31",
    FIN:"0.25",
    FRA:"0.29",
    DEU:"0.29",
    GRC:"0.30",
    HUN:"0.27",
    ISL:"0.30",
    IRL:"0.29",
    ISR:"0.37",
    ITA:"0.33",
    JPN:"0.32",
    KOR:"0.31",
    LUX:"0.28",
    MEX:"0.47",
    NLD:"0.29",
    NZL:"0.33",
    NOR:"0.25",
    POL:"0.30",
    PRT:"0.35",
    SVK:"0.25",
    SVN:"0.23",
    ESP:"0.31",
    SWE:"0.25",
    CHE:"0.30",
    TUR:"0.40",
    GBR:"0.34",
    USA:"0.378",
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
