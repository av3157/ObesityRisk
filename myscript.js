const obesity = [
  { x: 2007, y: 10.8},
  { x: 2009, y: 10.8},
  { x: 2011, y: 11.0},
  { x: 2013, y: 10.6},
  { x: 2015, y: 13.1},
  { x: 2017, y: 12.4},
  { x: 2019, y: 13.4}
];

const physical = [
  { x: 2007, y: 20.6},
  { x: 2009, y: 23.1},
  { x: 2011, y: 25.1},
  { x: 2013, y: 25.7},
  { x: 2015, y: 23.3},
  { x: 2017, y: 23.2},
  { x: 2019, y: 19.1}
]

const sugardrinks = [
  { x: 2007, y: 24},
  { x: 2009, y: 24.5},
  { x: 2011, y: 21.4},
  { x: 2013, y: 20.4},
  { x: 2015, y: 14.0},
  { x: 2017, y: 13.7},
  { x: 2019, y: 12.9}
]

const tvwatching = [
  { x: 2007, y: 35.3},
  { x: 2009, y: 32.7},
  { x: 2011, y: 30.6},
  { x: 2013, y: 27.4},
  { x: 2015, y: 24.2},
  { x: 2017, y: 20.7},
  { x: 2019, y: 17.8}
]

// make the main SVG container
const margin = { top: 20, right: 20, bottom: 30, left: 50 };
const width = 600 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

const svg = d3.select("#plot").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("text")
.attr("x", width/2)
.attr("y", margin.top/2)
.attr("text-anchor", "middle")
.text("Health & Obesity Rates from 2007-2019 in New York");

// reading each x value as a year
const parseTime = d3.timeParse("%Y");

// create the line
const line = d3.line()
  .x(d => xScale(parseTime(d.x.toString())))
  .y(d => yScale(d.y));

// create the axes scales
const min_data = 2005
const max_data = 2020

const xScale = d3.scaleTime().domain([parseTime(min_data.toString()), parseTime((max_data).toString())]).range([0, width]);
const yScale = d3.scaleLinear().domain([0, 40]).range([height, 0]);

var obesitypath;
var physicalpath;
var sugarpath;
var tvpath;

// adds/removes the obesity data
function obesityData() {

  if(obesitypath) {
    obesitypath.remove();
    obesitypath = null;
  }

  else {
  obesitypath = svg.append("path")
  .data([obesity])
  .attr("d", line)
  .attr("fill", "none")
  .attr("stroke", "blue");

  svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(xScale));

svg.append("g")
  .call(d3.axisLeft(yScale));
  }
}


// adds/removes the physical activity data
function physicalData() {

  if(physicalpath) {
    physicalpath.remove();
    physicalpath = null;
  }

  else {
  physicalpath = svg.append("path")
  .data([physical])
  .attr("d", line)
  .attr("fill", "none")
  .attr("stroke", "red");

  svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(xScale));

  svg.append("g")
  .call(d3.axisLeft(yScale));
  }

}

// adds/removes the sugar drinks data
function sugarData() {

  if(sugarpath) {
    sugarpath.remove();
    sugarpath = null;
  }

  else {
  sugarpath = svg.append("path")
  .data([sugardrinks])
  .attr("d", line)
  .attr("fill", "none")
  .attr("stroke", "green");

  svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(xScale));

  svg.append("g")
  .call(d3.axisLeft(yScale));
  }
}

// adds/removes the tv watching data
function tvData() {

  if(tvpath) {
    tvpath.remove();
    tvpath = null;
  }

  else {
  tvpath = svg.append("path")
  .data([tvwatching])
  .attr("d", line)
  .attr("fill", "none")
  .attr("stroke", "purple");

  svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(xScale));

  svg.append("g")
  .call(d3.axisLeft(yScale));
  }

}

//Sources
//https://stackoverflow.com/questions/14221359/toggle-button-for-d3-js
//https://www.educative.io/answers/how-to-create-a-line-chart-using-d3
//https://d3-graph-gallery.com/graph/line_basic.html
//https://tomordonez.com/d3-convert-string-to-date/
