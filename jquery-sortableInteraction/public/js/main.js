// // 1. Sortable Interaction
$(document).ready(function() {
  $("#fruits").sortable(); //basic functionality
})

//allows you to move elements around in the order you prefer

// // 2. White Space
$(document).ready(function() {
  $("#fruits").sortable({placeholder: "myholder"});
})
// removes the whitespace when you move an elements

// // 3. Between Sortable
$(document).ready(function() {
  //connectWith
  // $("#fruits").sortable({connectWith: "#vegetables"}); //items from the foods list can move to the vegetables list, not the other way around
  // $("#vegetables").sortable({connectWith: "#fruits"}); //items from the vegetables list can move to the foods list, not the other way around

  dropOnEmpty
  $("#fruits").sortable({connectWith: "#vegetables", dropOnEmpty: false});
  // $("#vegetables").sortable({connectWith: "#fruits"}); //items from the vegetables list can move to the foods list, not the other way around
})
//connectWith: allow items from one list to move to the other
// dropOnEmpty - true by default

// // 4. Some Items Sortable
$(document).ready(function() {
  $("ol").sortable({items: ".yes"}); //only items with yes will be sortable
  $("ol").sortable({cancel: ".no"}); 
})
//items: what needs to be sortable
//cancel: sortability on a specifc items that do not need to be sortable
//disable the sortable functionality on the complete list


// // 5. Miscellaneous Options
$(document).ready(function() {
  // axis and containment
  $("#fruits").sortable({axis: "y"});
  $("#vegetables").sortable({containment: "#right"});

  // cursor and cursorAt
  $("#fruits").sortable({cursor: "grab", cursorAt:{left: 10, top:10}});
  $("#vegetables").sortable({cursor: "move", cursorAt:{bottom: 10}});

  //grid
  $("#fruits").sortable({helper: function(event, ui) { //get values of the sorted item
    return $("<div style='background:blue; border:4px dotted white; font-size:20px; color:white; text-align:center;'>" + $(ui).text() + "</div>")
  }, opacity: .5});
  $("#vegetables").sortable({cursor: "move", cursorAt:{bottom: 10}});

  // //handle
  $("#fruits").sortable({handle: "img"}); //click the image and drag
  $("#vegetables").sortable({revert: "fast"});

  //tolerance
  //handle
  $("#fruits").sortable({tolerance: "pointer"}); //click the image and drag
  $("#vegetables").sortable({revert: "fast"});

})
//a. axis: specify the direction of movement (x, y)
//b. containment: restrict the movability of the item within the container, the item will not move outside of that

//c. cursor: set the style of cursor
  //grab, move
//d. cursorAt: set the position of the cursorAt
  //left, top, right, bottom

//e. grid: add jumping effect
  //whenyou specify item of grid in an array
//f. helper: add a helper when you move
  //g. opacity: make the item transparent

//h. handle: sortability will work only when you click on that particular handle and drag
//i. revert: add a smooth animation when it moves to new position

//j. tolerance: to decide when it should be considered as moving over the other item
  // 2 values:
  //a. intersect - by default
  //b. pointer
