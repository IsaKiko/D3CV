var positions = [
	{	'skill' : 'programming',
		'startingX' : 12,
		'startingY' : 50,
		'finalX' : 30,
		'finalY' : 40,
		'color' : 'blue'
	},
	{	'skill' : 'engineering',
		'startingX' : 10,
		'startingY' : 80,
		'finalX' : 32,
		'finalY' : 88,
		'color' : 'red'
	}
]
var canvas = d3.select("#canvas")

update();


function update(){
	var bubble = canvas.selectAll('.bubble').data(positions, function(el) {return el.skill});

	bubble.enter().append("circle")
    	.attr("class", "bubble")
    	.attr("cx", function(d){ return d.x})
    	.attr("cy", function(d) { return d.y})
    	.attr("r", 2)
    	.style("fill", function(d){ return d.color});

	bubble.transition().ease("linear").duration(200)
	                .attr("cx", function(d) { return d.x })
	                .attr("cy", function(d) { return d.y });
}


setInterval(move_bubble,100);

function move_bubble(){
	if(window.scrollY>400) {
		positions.forEach(function(el){
			el.x = el.finalX;
			el.y = el.finalY;
		})
	}

	if(window.scrollY<400) {
		positions.forEach(function(el){
			el.x = el.startingX;
			el.y = el.startingY;
		})
	}



	update()
}

