

var data_1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10];
var data_2 = [1,2,3,4,5,6,7,8,16,17,18,19,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


var svg = d3.select("svg");

/*
D3 Exercise 2
----------------
1.)Select all circles and join them with data_1
2.)Exit() should remove all circles without data points
3.)Now join the circles with data_2
4.)Create new circles with red filling for missing data points in data_2
5.)Adjust the vertical coordinates of the circles according to the data
----------------
*/

d3.selectAll("circle")
	.data(data_1)
	.exit()
	.remove();


svg.selectAll("circle")
	.data(data_2)
	.enter()
	.append("circle")
	.attr("fill","red")
	.attr("r","1%")
	.attr("cx",function(d,i){return i + "%"} )
	.attr("cy",function(d,i){return d + "%"} );