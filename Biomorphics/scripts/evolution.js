require(["src/vendor/svg"], function(svg) {


// http://stackoverflow.com/questions/572897/how-does-javascript-prototype-work

	var draw = SVG('canvas').size(800, 800)
	//var rect = draw.rect(100, 100).attr({ fill: '#f06' })
	var path = draw.path('M 100 100 L 300 100 L 200 300 z').fill('none').stroke({ width: 1 })


});


