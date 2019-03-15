// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{
  "years": "1880 - 1890",
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
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "temperature";
series.dataFields.dateX = "years";
series.tooltipText = "{years}"
series.strokeWidth = 2;
series.minBulletDistance = 15;

// Drop-shaped tooltips
series.tooltip.background.cornerRadius = 20;
series.tooltip.background.strokeOpacity = 0;
series.tooltip.pointerOrientation = "vertical";
series.tooltip.label.minWidth = 40;
series.tooltip.label.minHeight = 40;
series.tooltip.label.textAlign = "middle";
series.tooltip.label.textValign = "middle";

// Make bullets grow on hover
var bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.circle.strokeWidth = 2;
bullet.circle.radius = 4;
bullet.circle.fill = am4core.color("#fff");

var bullethover = bullet.states.create("hover");
bullethover.properties.scale = 1.3;

// Make a panning cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panXY";
chart.cursor.xAxis = dateAxis;
chart.cursor.snapToSeries = series;

// Create vertical scrollbar and place it before the value axis
chart.scrollbarY = new am4core.Scrollbar();
chart.scrollbarY.parent = chart.leftAxesContainer;
chart.scrollbarY.toBack();

// Create a horizontal scrollbar with previe and place it underneath the date axis
chart.scrollbarX = new am4charts.XYChartScrollbar();
chart.scrollbarX.series.push(series);
chart.scrollbarX.parent = chart.bottomAxesContainer;
