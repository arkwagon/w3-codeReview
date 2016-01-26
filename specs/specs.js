describe('pingPong', function() {
  it("will count up by 1 to input number", function() {
    expect(pingPong(2)).to.eql([1, 2]);
  });
  it("will replace multiples of 3 with ping", function() {
    expect(pingPong(3)).to.eql([1, 2, "ping"]);
  });
  it("will replace multiples of 5 with pong", function() {
    expect(pingPong(5)).to.eql([1, 2, "ping", 4, "pong"]);
  });
});

// describe('pingPong', function() {
//   it("will convert a string to a number array", function() {
//     expect(pingPong("10")).to.eql([ 10 ]);
//   });
//   it("will count up by 1 to the inputNumber", function() {
//     expect(pingPong("5")).to.equal([1, 2, 3, 4, 5]);
//   });
// });


// describe('pingPong', function() {
//   it("will count up by 1 to inputNumber", function() {
//     expect(pingPong("10")).to.equal([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
//   });
// });

// describe('countUpToNumberArray', function() {
//   it("will count up by 1 to the inputNumber", function() {
//     expect(countUpToNumberArray(10)).to.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//   });
// });


// describe('pingPong', function() {
//   it("will count up by 1 to the inputNumber", function() {
//     expect(pingPong("10")).to.equal([ 1,2,3,4,5,6,7,8,9,10 ]);
//   });
//   // it("will convert string of numbers into a number array", function() {
//   //   expect(pingPong("1, 2, 3")).to.equal([ 1,2,3 ]);
//   // });
// });
//
//
//
//
//
