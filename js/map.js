var iso = [
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
    BHS:"Bahamas",
    BIH:"Bosnia and Herzegovina",
    BLM:"Saint Barthélemy",
    BLR:"Belarus",
    BLZ:"Belize",
    BMU:"Bermuda",
    BOL:"Bolivia, Plurinational State of",
    BRA:"Brazil",
    BRB:"Barbados",
    BRN:"Brunei Darussalam",
    BTN:"Bhutan",
    BWA:"Botswana",
    CAF:"Central African Republic",
    CAN:"Canada",
    CHE:"Switzerland",
    CHL:"Chile",
    CHN:"China",
    CIV:"Côte d'Ivoire",
    CMR:"Cameroon",
    CNM:"United Nations Buffer Zone in Cyprus",
    COD:"Congo, the Democratic Republic of the",
    COG:"Congo",
    COK:"Cook Islands",
    COL:"Colombia",
    COM:"Comoros",
    CPV:"Cabo Verde",
    CRI:"Costa Rica",
    CUB:"Cuba",
    CUW:"Curaçao",
    CYM:"Cayman Islands",
    CYN:"Turkish Republic of Northern Cyprus",
    CYP:"Cyprus",
    CZE:"Czech Republic",
    DEU:"Germany",
    DJI:"Djibouti",
    DMA:"Dominica",
    DNK:"Denmark",
    DOM:"Dominican Republic",
    DZA:"Algeria",
    ECU:"Ecuador",
    EGY:"Egypt",
    ERI:"Eritrea",
    ESB:"Sovereign Base Area of Dhekelia",
    ESP:"Spain",
    EST:"Estonia",
    ETH:"Federal Democratic Republic of Ethiopia",
    FIN:"Finland",
    FJI:"Fiji",
    FLK:"Falkland Islands (Malvinas)",
    FRA:"France",
    FRO:"Faroe Islands",
    FSM:"Micronesia, Federated States of",
    GAB:"Gabon",
    GBR:"United Kingdom of Great Britain and Northern Ireland",
    GEO:"Georgia",
    GGY:"Guernsey",
    GHA:"Ghana",
    GIB:"Gibraltar",
    GIN:"Guinea",
    GMB:"Gambia",
    GNB:"Guinea-Bissau",
    GNQ:"Equatorial Guinea",
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
    IRN:"Iran, Islamic Republic of",
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
    KGZ:"Kyrgyzstan",
    KHM:"Cambodia",
    KIR:"Kiribati",
    KNA:"Saint Kitts and Nevis",
    KOR:"Korea, Republic of",
    KOS:"Republic of Kosovo",
    KWT:"Kuwait",
    LAO:"Lao People's Democratic Republic",
    LBN:"Lebanon",
    LBR:"Liberia",
    LBY:"Libya",
    LCA:"Saint Lucia",
    LIE:"Liechtenstein",
    LKA:"Sri Lanka",
    LSO:"Lesotho",
    LTU:"Lithuania",
    LUX:"Luxembourg",
    LVA:"Latvia",
    MAC:"Macao",
    MAF:"Saint Martin (French part)",
    MAR:"Morocco",
    MCO:"Monaco",
    MDA:"Moldova, Republic of",
    MDG:"Madagascar",
    MDV:"Maldives",
    MEX:"Mexico",
    MHL:"Marshall Islands",
    MKD:"Macedonia, the former Yugoslav Republic of",
    MLI:"Mali",
    MLT:"Malta",
    MMR:"Myanmar",
    MNE:"Montenegro",
    MNG:"Mongolia",
    MNP:"Northern Mariana Islands",
    MOZ:"Mozambique",
    MRT:"Mauritania",
    MSR:"Montserrat",
    MUS:"Mauritius",
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
    PRK:"Korea, Democratic People's Republic of",
    PRT:"Portugal",
    PRY:"Paraguay",
    PSE:"Palestine, State of",
    PYF:"French Polynesia",
    QAT:"Qatar",
    ROU:"Romania",
    RUS:"Russian Federation",
    RWA:"Rwanda",
    SAH:"Sahrawi Arab Democratic Republic",
    SAU:"Saudi Arabia",
    SDN:"Republic of the Sudan",
    SDS:"Republic of South Sudan",
    SEN:"Senegal",
    SGP:"Singapore",
    SGS:"South Georgia and the South Sandwich Islands",
    SHN:"Saint Helena, Ascension and Tristan da Cunha",
    SLB:"Solomon Islands",
    SLE:"Sierra Leone",
    SLV:"El Salvador",
    SMR:"San Marino",
    SOL:"Somaliland",
    SOM:"Somalia",
    SPM:"Saint Pierre and Miquelon",
    SRB:"Serbia",
    STP:"Sao Tome and Principe",
    SUR:"Suriname",
    SVK:"Slovakia",
    SVN:"Slovenia",
    SWE:"Sweden",
    SWZ:"Swaziland",
    SXM:"Sint Maarten (Dutch part)",
    SYC:"Seychelles",
    SYR:"Syrian Arab Republic",
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
    TWN:"Taiwan, Province of China",
    TZA:"Tanzania, United Republic of",
    UGA:"Uganda",
    UKR:"Ukraine",
    URY:"Uruguay",
    USA:"United States",
    USG:"USNB Guantanamo Bay",
    UZB:"Uzbekistan",
    VAT:"Holy See (Vatican City State)",
    VCT:"Saint Vincent and the Grenadines",
    VEN:"Venezuela, Bolivarian Republic of",
    VGB:"Virgin Islands, British",
    VIR:"Virgin Islands, U.S.",
    VNM:"Viet Nam",
    VUT:"Vanuatu",
    WLF:"Wallis and Futuna",
    WSB:"Sovereign Base Area of Akrotiri",
    WSM:"Samoa",
    YEM:"Yemen",
    ZAF:"South Africa",
    ZMB:"Zambia",
    ZWE:"Zimbabwe"
};

var width = window.location.search.substring(1);;
if(width == "")
{
    width = 2560;
}
var height = Math.round(0.5625*width);
var scale = Math.round(0.12369791666*width);
var rotation = [20, 0];

var projection = d3.geo.polyhedron.waterman().scale(scale)
                       .translate([width / 2, height / 2])
                       .rotate(rotation);

var path = d3.geo.path().projection(projection);

var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip");

var graticule = d3.geo.graticule()
    .step([5, 5])
    .extent([[-180, -80], [180, 80 + 1e-3]]);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("defs").append("path")
   .datum({type: "Sphere"})
   .attr("id", "sphere")
   .attr("d", path);

svg.append("clipPath")
   .attr("id", "clip")
   .append("use")
   .attr("xlink:href", "#sphere");

svg.append("use")
   .attr("class", "background")
   .attr("xlink:href", "#sphere");

svg.append("g")
   .attr("class", "graticule")
   .attr("clip-path", "url(#clip)")
   .selectAll("path")
   .data(graticule.lines)
   .enter().append("path")
   .attr("d", path);

svg.append("path")
   .datum({type: "Sphere"})
   .attr("class", "graticule outline")
   .attr("d", path);

d3.json("js/world-topo.json", function(error, world)
{
    var countries = topojson.feature(world, world.objects.world).features;
    draw(countries);
});

function getColor(id)
{
    if(hasValue(id))
    {
        return color(getValue(id));
    }
    else
    {
        return "#aaaaaa";
    }
};

function getTip(id)
{
    var tip = names[id];
    if(hasValue(id))
    {
        tip += getTipAppend(id);
    }
    return tip;
}

function draw(topo)
{
    var country = svg.selectAll(".country").data(topo);

    country.enter().insert("path", ".graticule")
           .attr("class", "borders")
           .attr("clip-path", "url(#clip)")
           .attr("d", path)
           .style("fill", function(d){return getColor(d.id)});

    country.on("mousemove", function(d,i) {
        var mouse = d3.mouse(svg.node()).map( function(d) { return parseInt(d); } );

        tooltip
          .classed("hidden", false)
          .attr("style", "left:"+(mouse[0]+25)+"px;top:"+mouse[1]+"px")
          .html(getTip(d.id))
        })
      .on("mouseout",  function(d,i) {
        tooltip.classed("hidden", true)
      });
}

function toComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
