/*
D3 Exercise 3
---------------
Time to rock, do a awesome visualization!
Experiment with delay, transition and the callback function

1.) Move it to the middle!
2.) Create a green sin wave and switch to a red cos wave, use transitions!
---------------
*/

d3.selectAll("circle").attr("cy","50%");

d3.selectAll("circle")
  .transition()
  .delay(function(d, i) {
    return i * 20;
  })
  .duration(2000)
  .attr("r", function(d, i) {
    return ((Math.sin(i / 5) + 1.1) * 3) + "%";
  })
  .attr("fill","green");

d3.selectAll("circle")
  .transition()
  .delay(function(d, i) {
    return i * 100;
  })
  .duration(2000)
  .attr("r", function(d, i) {
    return ((Math.cos(i / 5) + 1.1) * 3) + "%";
  })
  .attr("fill","red");