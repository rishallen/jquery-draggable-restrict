
var fruitsArr = [ "public/img/apple.png",
                   "public/img/avacoda.png",
                   "public/img/banana.png",
                   "public/img/lemon.png",
                   "public/img/papaya.png",
                   "public/img/pear.png",
                   "public/img/strawberry.png",
                   "public/img/watermelon.png" ];
var namesArr = ["Apple", "Avacado", "Banana", "Lemon", "Papaya", "Pear", "Strawberry", "Watermelon"];
$(document).ready(function() {
  shuffle(fruitsArr);
  $.each(fruitsArr, function(index, value) {
    $("<div><img src=" + value + " /></div>")
    .appendTo("#fruits"); //param
  });
  shuffle(namesArr);
  $.each(namesArr, function(index, value) {
    $("<div>" + value + "</div>")
    .appendTo("#droparea");
  });
});
//   // Shuffle function
  function shuffle(arr) {
    return arr.sort(function() { // this will be sorted in alphabetical order
        return .5 - Math.random(); //specify sorting: Math.random arr will be sorted in a different order each time = shuffeled
    });
  };
