
var pingPong = function(inputNumber) {
  var output = [];

  for (var index = 1; index <= inputNumber; index++) {
    if (index % 15 === 0) {
      output.push("pingpong");
    } else if (index % 5 === 0) {
      output.push("pong");
    } else if (index % 3 === 0) {
      output.push("ping");
    } else {
      output.push(index);
    }
  }
  return output;
}


$(document).ready(function() {
  $("form#user-number").submit(function(event) {
    event.preventDefault();
    
    var inputNumber = parseInt( $("input#user-number").val() );


  });
});
