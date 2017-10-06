console.log("I'm linked!");

$(document).ready(function(){

  $('#redball').on('click', moveBall);

  function moveBall(event) {
    var id = event.currentTarget; // identifying DOM object that was clicked
    var square = event.currentTarget.id; // storing specific ID that was clicked
    console.log(event);
    console.log(id);
    console.log(square);
    alert("hello!");
  }

});

// need to create an object and place it on the screen
// need to determine and update the objects position through event listeners
// need to determine winning position
// need to determine tie position
