function makeDonut(url,divID,language,level) {
	//initial code below is from d3 example. I made it modifiable by a function so it can be easily reused with different data
	var width = 200,    //set dimensions
	    height = 200,
	    radius = Math.min(width, height) / 2;

	var color = d3.scale.ordinal()			//set colors to match palette
	    .range(["#0D7689", "#8aae26", "#f5684c", "#52cfe2", "#E6BC17", "#d0743c", "#ff8c00"]);

	var arc = d3.svg.arc()
	    .outerRadius(radius - 10)
	    .innerRadius(radius - 70);

	var pie = d3.layout.pie()
	    .sort(null)
	    .value(function(d) { return d.level; });

	var svg = d3.select(divID).append("svg")  //now appends chart to divID set in function
	    .attr("width", width)
	    .attr("height", height)
	  .append("g")
	    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	d3.csv(url, function(error, data) {  //now gets data csv in url set in function.

	  data.forEach(function(d) {
	    d.level = +d.level;              //level is set in function so can later be set to match at different csv with different variables
	  });

	  var g = svg.selectAll(".arc")
	      .data(pie(data))
	    .enter().append("g")
	      .attr("class", "arc");

	  g.append("path")
	      .attr("d", arc)
	      .style("fill", function(d) { return color(d.data.language); }); //same for language

	  g.append("text")
	      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
	      .attr("dy", ".35em")
	      .style("text-anchor", "middle")
	      .style('fill', '#fff')
	      .text(function(d) { return d.data.language; });

	});


}