console.log("I'm linked!");

$(document).ready(function(){

  var c = document.getElementById('racetrack');
  var ctx = c.getContext("2d");
  var car1 = ctx.fillRect(10,20,20,40);
  var car1x = 10;
  var car1y = 20;
  var car2 = ctx.fillRect(10,90,20,40);
  var car2x = 10;
  var car2y = 90;

  $(document).on('keypress', function(event) {
    if (event.keyCode == 13) {
      console.log("you pressed a key!");
      ctx.clearRect(0,0,800,500);
      car1x = car1x+5;
      car1 = ctx.fillRect(car1x,car1y,20,40);
      car2 = ctx.fillRect(car2x,car2y,20,40);
    };
    if (event.keyCode == 100) {
      console.log("you pressed a different key!");
      ctx.clearRect(0,0,800,500);
      car2x = car2x+5;
      car2 = ctx.fillRect(car1x,car1y,20,40);
      car1 = ctx.fillRect(car2x,car2y,20,40);
    };
  });


// create pieces
// move pieces
// need to determine winning position
// need to determine tie position


});
