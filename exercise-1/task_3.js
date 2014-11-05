/*
Exercise 2 - 
Testing Sequence Alignment Statistics
-------------
1.) Require exported functions from task_1.js and task_2.js
2.) Build this file with browserify
3.) Generate 100 random sequences and give them as input to your statistic functions from task_2
-------------
*/

randomSeq = require("./task_1");

stats = require("./task_2");

//console.log(random(1000));

//console.log(stats.variations("acgt","acct"));
//console.log(stats.variations(randomSeq(1000),randomSeq(1000)));
console.log(stats.totalNumberOf1(randomSeq(1000),100));