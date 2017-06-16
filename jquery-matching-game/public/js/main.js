
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
  //drag function
  shuffle(fruitsArr);
  $.each(fruitsArr, function(index, value) {
    var fruit = value.slice(9,-4); // characters at index, not the best programming way

    $("<div><img src=" + value + " /></div>")
    .appendTo("#fruits") //param
    .draggable({revert:true, scope:fruit});
  });
  //drop function
  shuffle(namesArr);
  $.each(namesArr, function(index, value) {
    $("<div>" + value + "</div>")
    .appendTo("#droparea")
    .droppable({scope:value.toLowerCase(), //match the fruit
    drop:function(event, ui){
    $(ui.draggable).append($(this).text());
    score++
    $(this).hid("puff", "fast");

    if (score==namesArr.length) {
      $("<div><p>Congratulations!! Do you want to play again?</p></div")
      .dialog({modal:true,
        buttons:[{text:"yes",
                click:function() {
                window.location.reload();
                }},
                {text: "no",
                click:function() {
                  $(this).dialog("close");
                }}]
            });

        }}
      })
  });
});
  // Shuffle function
  function shuffle(arr) {
    return arr.sort(function() { // this will be sorted in alphabetical order
        return .5 - Math.random(); //specify sorting: Math.random arr will be sorted in a different order each time = shuffeled
    });
  };
