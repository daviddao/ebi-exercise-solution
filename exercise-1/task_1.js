
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