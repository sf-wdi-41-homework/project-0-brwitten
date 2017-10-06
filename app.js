console.log("I'm linked!");

$(document).ready(function(){

  var c = document.getElementById('racetrack');
  var ctx = c.getContext("2d");
  var car1 = ctx.fillRect(10,10,15,10);
  var car1x = 10;
  var car1y = 10;

  $('canvas').on('click', moveCar);

  function moveCar(event) {
    // var id = event.currentTarget; // identifying DOM object that was clicked
    // var square = event.currentTarget.id; // storing specific ID that was clicked
    // console.log(event);
    // console.log(id);
    // console.log(square);
    alert("hello!");
    ctx.clearRect(0,0,800,500);
    car1x = car1x+5;
    car1 = ctx.fillRect(car1x,car1y,15,10);
  }



// create pieces
// move pieces
// need to determine winning position
// need to determine tie position


});
