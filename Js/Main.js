/*The average between 1951 - 1980 = 13.9333 C
T(t) = T(0)-T(m)e^kt + T(m) --> Newton equation for calculate the temperature in a object
50 C the human body begins to dehydrate
The temperature in the Mesosphere is about the 80C
The temperature in mid of 1990 was 14C(reference point)
The temperature in 2012 (22 years = 11.5632x10^6 minutes later from our reference point) was 14.6C
A year have 525600 minutes
*/
temperature = (year) => {

  t = 11.5632*10**6;
  //K value for the Newton equation
  k = Math.log(65.4/66);
  k = k/t;

  //User input years
  years = year - 1990;
  minutes = years*(525600);

  //Euler Value
  euler = Math.E**(k*(minutes));

  //World temperature in X years
  T = (14 - 80)*euler+80;
  return(Math.round(T*100)/100);
}

document.getElementById("temperatureForm").addEventListener("submit", (e)=>{
  e.preventDefault();
  if(document.getElementById("userYear").value != 0){

  document.getElementById("temperature").innerHTML = temperature(document.getElementById("userYear").value);

  }else{
  alert("Por favor ingresa un valor valido");
}
});

//Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.scrollbarX = new am4core.Scrollbar();

// Add data
chart.data = [{
  "years": "1881 - 1890",
  "temperature": 13.68
},{
  "years": "1891 - 1900",
  "temperature": 13.67
},{
  "years": "1901 - 1910",
  "temperature": 13.59
},{
  "years": "1911 - 1920",
  "temperature": 13.64
},{
  "years": "1921 - 1930",
  "temperature": 13.76
},{
  "years": "1931 - 1940",
  "temperature": 13.89
},{
  "years": "1941 - 1950",
  "temperature": 13.95
},{
  "years": "1951 - 1960",
  "temperature": 13.92
},{
  "years": "1961 - 1970",
  "temperature": 13.93
},{
  "years": "1971 - 1980",
  "temperature": 13.95
},{
  "years": "1981 - 1990",
  "temperature": 14.12
},{
  "years": "1991 - 2000",
  "temperature": 14.26
},{
  "years": "2001 - 2010",
  "temperature": 14.47
},{
  "years": "2011 - 2020",
  "temperature": 14.82
}];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "years";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;
categoryAxis.tooltip.disabled = true;
categoryAxis.renderer.minHeight = 110;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.minWidth = 50;

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.sequencedInterpolation = true;
series.dataFields.valueY = "temperature";
series.dataFields.categoryX = "years";
series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
series.columns.template.strokeWidth = 0;

series.tooltip.pointerOrientation = "vertical";

series.columns.template.column.cornerRadiusTopLeft = 10;
series.columns.template.column.cornerRadiusTopRight = 10;
series.columns.template.column.fillOpacity = 0.8;

// on hover, make corner radiuses bigger
var hoverState = series.columns.template.column.states.create("hover");
hoverState.properties.cornerRadiusTopLeft = 0;
hoverState.properties.cornerRadiusTopRight = 0;
hoverState.properties.fillOpacity = 1;

series.columns.template.adapter.add("fill", (fill, target)=>{
  return chart.colors.getIndex(target.dataItem.index);
})

// Cursor
chart.cursor = new am4charts.XYCursor();
