
		var count=0;
		var imagesData;
		var imgurllist =[]
			
			var gridData = gridData();	
			// I like to log the data to the console for quick debugging
			console.log(gridData);

			var grid = d3.select("#grid")
				.append("svg")
				.attr("width","1000px")
				.attr("height","1000px");
				
			var row = grid.selectAll(".row")
				.data(gridData)
				.enter().append("g")
				.attr("class", "row");
				
			var column = row.selectAll(".square")
				.data(function(d) { return d; })
				.enter().append("rect")
				.attr("class","square")
				.attr("x", function(d) { return d.x; })
				.attr("y", function(d) { return d.y; })
				.attr("width", function(d) { return d.width; })
				.attr("height", function(d) { return d.height; })
				.style("fill", "#fff")
				//.style("stroke", "#222")
				//.append('text').text('This is some information about whatever')
							//.attr('x', 50)
							//.attr('y', 150)
							//.attr('fill', 'black');
			
		});



function gridData() {
	var data = new Array();
	var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
	var ypos = 1;
	var width = 200;
	var height = 200;
	var click = 0;
	
	// iterate for rows	
	for (var row = 0; row < 4; row++) {
		data.push( new Array() );
		// iterate for cells/columns inside rows
		for (var column = 0; column < 4; column++) {
			data[row].push({
				x: xpos,
				y: ypos,
				width: width,
				height: height,
				click: click
			})
			// increment the x position. I.e. move it over by 50 (width variable)
			xpos += width;
		}
		// reset the x position after a row is complete
		xpos = 1;
		// increment the y position for the next row. Move it down 50 (height variable)
		ypos += height;	
	}
	return data;
}

