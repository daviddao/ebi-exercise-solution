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


