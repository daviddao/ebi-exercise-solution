

d3.select("body")
  .text("BioJS loves EBI")
  .append("svg")
  .attr("width","100%")
  .attr("height","100%")

//Your Task is now:
//Create an SVG and create 100 circles with radius 1% aligned in a horizontal axis

for(var i = 0; i<100; i++){
	d3.select("svg")
		.append("circle")
		.attr("fill","steelblue")
		.attr("r","1%")
		.attr("cx",i + "%")
		.attr("cy","0")
}

