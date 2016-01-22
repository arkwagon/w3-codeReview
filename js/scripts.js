var pingPong = function(inputNumber) {
  var emptyString = "";
  for (var index = 0; index <= inputNumber; index++) {
    emptyString = emptyString + index + ", ";
  }
  var numberString = emptyString.slice(3, emptyString.length-2);
  var numberArray = [parseInt(numberString[i], 10)];
  return numberArray;

}

//
// var pingPong = function(inputNumber) {
//     var emptyArray = [];
//     for (var index = 0; index <= inputNumber; index++) {
//     emptyArray = emptyArray + index + ", ";
//   }
//     var numberArray = emptyArray.slice(3, emptyArray.length-2);
//     return numberArray;
//
// }
//
//
//
//
