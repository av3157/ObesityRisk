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

// Set up the SVG container
const margin = { top: 20, right: 20, bottom: 30, left: 50 };
const width = 600 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

const svg = d3.select("#plot").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Create the line
const line = d3.line()
  .x(d => xScale(d.x))
  .y(d => yScale(d.y));

// Create scales
const min_data = 2000, max_data = 2020
const xScale = d3.scaleLinear().domain([min_data, max_data]).range([0, width]);
const yScale = d3.scaleLinear().domain([0, 40]).range([height, 0]);


function obesityData() {

  svg.append("path")
  .data([obesity])
  .attr("d", line)
  .attr("fill", "none")
  .attr("stroke", "blue");

  // Add axes
  svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(xScale));

svg.append("g")
  .call(d3.axisLeft(yScale));
}


function physicalData() {

  svg.append("path")
  .data([physical])
  .attr("d", line)
  .attr("fill", "none")
  .attr("stroke", "red");

  // Add axes
  svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(xScale));

  svg.append("g")
  .call(d3.axisLeft(yScale));

}
