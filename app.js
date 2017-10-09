$(document).ready(function(){

// code to create board and initial pieces
  var c = document.getElementById('racetrack');
  var ctx = c.getContext("2d");
  var car1 = ctx.fillRect(10,20,20,40);
  var car1x = 10;
  var car1y = 20;
  var car2 = ctx.fillRect(10,90,20,40);
  var car2x = 10;
  var car2y = 90;
// using arrays because event timestamp for finish keeps updating; should eventually fix this issue
  var car1finishTime = [];
  var car2finishTime = [];


// code to move pieces with the return and D keypress
  $(document).on('keypress', function(event) {
  // code to move the top object -- car1
    if (event.keyCode == 107 && car1x < 280 && car2x < 280) { // this is K and making sure not end of track
      ctx.clearRect(0,0,800,500);
      car1x = car1x+5;
      car1 = ctx.fillRect(car1x,car1y,20,40);
      car2 = ctx.fillRect(car2x,car2y,20,40);
    };

  // code to move the bottom object -- car 2
    if (event.keyCode == 100 && car2x < 280 && car2x < 280) { // this is D and making sure not end of track
      ctx.clearRect(0,0,800,500);
      car2x = car2x+5;
      car2 = ctx.fillRect(car1x,car1y,20,40);
      car1 = ctx.fillRect(car2x,car2y,20,40);
    };

// code to determine winner and if there was a tie
    if (car1x === 280 && car2x != 280) {
      alert("Top car wins! Hit Reset to play again.");
      car1finishTime.push(event.timeStamp);
      };
    if (car2x === 280 && car1x != 280) {
      alert("Bottom car wins! Hit Reset to play again.");
      car2finishTime.push(event.timeStamp);
    };
    if (car1x === 280 && car2x === 280) {
      if (car1finishTime[0] > car2finishTime[0]) {
        alert("Top car wins! Hit Reset to play again.");
      } else {
        alert("Bottom car wins! Hit Reset to play again.");
      }
    }
  });

});
