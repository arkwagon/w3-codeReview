var countUp = function(inputNumber) {
    answer = "";
    for (var index = 0; index <= inputNumber; i++) {
      answer = answer + index + ", ";
    }
    answer = answer.slice(2, answer.length-1);
  return answer;
}
