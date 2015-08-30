function makeDonut(url,divID) {
	var width = 200,
	    height = 200,
	    radius = Math.min(width, height) / 2;

	var color = d3.scale.ordinal()
	    .range(["#0D7689", "#8aae26", "#f5684c", "#52cfe2", "#E6BC17", "#d0743c", "#ff8c00"]);

	var arc = d3.svg.arc()
	    .outerRadius(radius - 10)
	    .innerRadius(radius - 70);

	var pie = d3.layout.pie()
	    .sort(null)
	    .value(function(d) { return d.level; });

	var svg = d3.select(divID).append("svg")
	    .attr("width", width)
	    .attr("height", height)
	  .append("g")
	    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	d3.csv(url, function(error, data) {

	  data.forEach(function(d) {
	    d.level = +d.level;
	  });

	  var g = svg.selectAll(".arc")
	      .data(pie(data))
	    .enter().append("g")
	      .attr("class", "arc");

	  g.append("path")
	      .attr("d", arc)
	      .style("fill", function(d) { return color(d.data.language); });

	  g.append("text")
	      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
	      .attr("dy", ".35em")
	      .style("text-anchor", "middle")
	      .style('fill', '#fff')
	      .text(function(d) { return d.data.language; });

	});


}