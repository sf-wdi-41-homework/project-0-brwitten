console.log("I'm linked!");

$(document).ready(function(){

  var c = document.getElementById('racetrack');
  var ctx = c.getContext("2d");
  var car1 = ctx.fillRect(10,10,15,10);
  var car1x = 10;
  var car1y = 10;
  var car2 = ctx.fillRect(10,50,15,10);
  var car2x = 10;
  var car2y = 50;

  $(document).on('keypress', function(event) {
    if (event.keyCode == 13) {
      console.log("you pressed a key!");
      ctx.clearRect(0,0,800,500);
      car1x = car1x+5;
      car1 = ctx.fillRect(car1x,car1y,15,10);
      car2 = ctx.fillRect(car2x,car2y,15,10);
    }
  });


// create pieces
// move pieces
// need to determine winning position
// need to determine tie position


});
