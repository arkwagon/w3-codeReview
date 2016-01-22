var pingPong = function(inputNumber) {
    var emptyString = "";
    for (var index = 0; index <= inputNumber; index++) {
      emptyString = emptyString + index + ", ";
    }
    var numberString = emptyString.slice(3, emptyString.length-2);
    return numberString;

    var numberArray = [];
    numberArray.push(numberString);
    return numberArray;
}

// var createNumberArray = function(numberString) {
//     var numberArray = [];
//     numberArray.push()
// }
