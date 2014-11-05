(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/*
Exercise 0 - 
Random Sequence Generator
-------------
1.) Write a function returning a random dna sequence of length l
2.) Export this function

Hint: Use str1.concat(str2) to concatenate strings
-------------
*/

function randomSeq(length) {
	
	var returnStr = "";

	for(var i = 0; i < length; i++){
		var gamble = Math.random();

		if ( gamble < 0.25 ){
			returnStr = returnStr.concat('a');
		}
		else if(gamble < 0.5){
			returnStr = returnStr.concat('c');
		}
		else if(gamble < 0.75){
			returnStr = returnStr.concat('g');
		}
		else {
			returnStr = returnStr.concat('t');
		}
	}

	return returnStr;
}

module.exports = randomSeq;
},{}],2:[function(require,module,exports){
var dna_human_1 = "gcatcgatagagaagcatcgtacgtcagcccctgcccatgttagctagctatatattagctaaaaatttttcgcctaggaacacgactacgtcgatcgtagctacgtagctgactagctcgatcgatgcatgatgagagactagctagctagctgactgactgcatgctagctagctagctagctgactagctagctagtataataaagaggagaggaggctagctgactgtagatgatgctagtaggcaaaa"
var dna_human_2 = "gcatcgatggagacgcatcgtacgtcagcccctgcccatgttaggtagctatatattagctaaaaatttttcgcctaggaacacgactacgtcgatcgtagctacgtagctgactagctcgatcgatgcatgatgagagactagctagctagctgactggctgcatgctagctagctagccagctgactagctagctagtattataaagaggagaggaggctagctgactgtagatgacgctagtaggcaata"


/*
Exercise 1 - 
Basic Sequence Alignment Statistics
-------------
1.) Write a function returning the total number of a,c,g and t in a given dna sequence
2.) Improve the function, it should return the proportion of a,c,g and t till index i
3.) Write a function which compares two dna strands (human_1 and human_2) and returning the index of variations

Hint: Use CharAt(index) to access the char in a string at a specific index
Hint: Use push(element) to push an additional element to an array
-------------
*/

function totalNumberOf1(dna){
  var number_of_a = 0;
  var number_of_c = 0;
  var number_of_g = 0;
  var number_of_t = 0;

  for(var i = 0; i < dna.length; i++) {
    if(dna.charAt(i) === 'a') {
      number_of_a++;
    }
    if(dna.charAt(i) === 'c') {
      number_of_c++;
    }
    if(dna.charAt(i) === 'g') {
      number_of_g++;
    }
    if(dna.charAt(i) === 't') {
      number_of_t++;
    }
  }

  return [number_of_a,number_of_c,number_of_g,number_of_t];
}

function totalNumberOf2(dna,index){
  var number_of_a = 0;
  var number_of_c = 0;
  var number_of_g = 0;
  var number_of_t = 0;

  for(var i = 0; i < index; i++) {
    if(dna.charAt(i) === 'a') {
      number_of_a++;
    }
    if(dna.charAt(i) === 'c') {
      number_of_c++;
    }
    if(dna.charAt(i) === 'g') {
      number_of_g++;
    }
    if(dna.charAt(i) === 't') {
      number_of_t++;
    }
  }

  var total = number_of_a + number_of_t + number_of_c + number_of_g;

  return [number_of_a / total,number_of_c / total,number_of_g /total,number_of_t /total];
}

function variations(dna1,dna2){

  var variations = [];

  for(var i = 0; i < dna1.length; i++) {
    if(dna1.charAt(i) !== dna2.charAt(i)) {
      variations.push(i);
    }
  }

  return variations
}

exports.variations = variations;
exports.totalNumberOf1 = totalNumberOf1;
exports.totalNumberOf1 = totalNumberOf2;



},{}],3:[function(require,module,exports){
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
},{"./task_1":1,"./task_2":2}]},{},[3]);
