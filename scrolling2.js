var positions = [
	{	'skill' : 'programming',
		'startingX' : 12,
		'x' : 12,
		'y' : 100,
		'targetY' : 48,
		'targetX' : 150,
		'color' : '#01BBD4',
		'r' : 5
	},
	{	'skill' : 'engineering',
		'startingX' : 14,
		'x' : 14,
		'y' : 200,
		'targetY' : 47,
		'targetX' : 140,
		'color' : '#900C3E',
		'r' : 4
	}
]
var canvas = d3.select("#canvas")
var deltaSum = 0

update();

function update(){
	var bubble = canvas.selectAll('.bubble').data(positions, function(el) {return el.skill});

	bubble.enter().append("circle")
    	.attr("class", "bubble")
    	.attr("cx", function(d){ return d.x})
    	.attr("cy", function(d) { return d.y})
    	.attr("r", function(d) { return d.r })
    	.style("fill", function(d){ return d.color});

	bubble.transition().ease("linear").duration(200)
	                .attr("cx", function(d) { return d.x })
	                .attr("cy", function(d) { return d.y });
}

document.getElementById("canvas").addEventListener("wheel", myFunction);

function myFunction(e) {
		positions.forEach(function(el){
			deltaSum = deltaSum + e.deltaY;
			console.log(deltaSum)
			if (el.y > el.targetY)
				{		el.y = el.y + e.deltaY/50;
				}
			else if (el.y < el.targetY)
				{		el.x = el.targetX;
						el.y = el.targetY;
						el.pos = deltaSum;
				}
			else if (el.pos < deltaSum){
				el.y = el.y + e.deltaY/50;
				el.x = el.startingX;
			}
		})
    update()
}

