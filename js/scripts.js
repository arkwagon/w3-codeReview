
var pingPong = function(inputNumber) {
  var output = [];

  for (var index = 1; index <= inputNumber; index++) {
    if (index % 3 === 0) {
      output.push("ping");
    } else if (index % 5 === 0) {
      output.push("pong");
    } else {
      output.push(index);
    }
  }
  return output;

}

// output.push(index);
// return output;
// var pingPong = function(inputNumber) {
//   var countToNumber = "";
//   for (var index = 0; index <= countToNumber.length; index++) {
//     countToNumber = countToNumber + countToNumber[index] + ", ";
//   }
//   return countToNumber;
// }



// var pingPong = function(inputNumber) {
//   var emptyString = inputNumber;
//   var initialArray = [parseInt(emptyString)];
//   var countToNumberArray = initialArray;
//     for (var index = 0; index <= initialArray.length; index++) {
//       countToNumberArray = countToNumberArray + index + 'i';
//     }
//     return countToNumberArray;
// }



//
// var pingPong = function(inputNumber) {
//   var emptyString = inputNumber;
//   var initialArray = [parseInt(emptyString)];
//   return initialArray;
// }
  // var countUpTo = initialArray;
  // for (var i = 0; i <= initialArray.length; i++) {
  //   countUpTo = initialArray + initialArray[i] + ",";
  //   console.log(countUpTo);
  // }





// var pingPong = function(inputNumber) {
//   var inputNumberArray = [];
//   for (var index = 0; index <= inputNumberArray.length; index++) {
//   inputNumberArray = inputNumberArray + inputNumberArray[index] + ",";
//
//     return inputNumberArray;
//   }
// }



// var countUpToNumberArray = function(inputNumber) {
//   var multiNumberArray = convertToNumberArray;
//     for (index = 0, index = multiNumberArray, index++) {
//       multiNumberArray = multiNumberArray + index + ", ";
//     }
//     var numberArray = countUpTo.slice(3, emptyArray.length-2);
//     return numberArray;
// }



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
