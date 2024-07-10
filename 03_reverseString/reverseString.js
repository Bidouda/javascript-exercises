const reverseString = function(phrase) {
  phrase = phrase.split("");
  phrase = phrase.reverse();
  phrase = phrase.join("");
  return phrase;
};

// Do not edit below this line
module.exports = reverseString;
