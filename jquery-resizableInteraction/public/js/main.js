// //1. Resizable Intro
// $(document).ready(function() {
//   $("img, div").resizable(); //makes the elements resizable
//
// })

// //2. DragToResize
// N = north
// S = south
// E = east
// W = west
// NE, SE, NW, SW  - allows you drag on corners
// ALL
// defaults are S, E, SE
// $(document).ready(function() {
//   // $("div").resizable({handles: "all"});  // all the directions
//   // $("div").resizable({handles: "n,s,e,w"});  // only the sides can be dragged
//   $("div").resizable({handles: "nw, ne, sw, se", autoHide: true});  // only drag the corners
//
// })
// a. Handles: used to decide where the user needs to drag to resize elements
// the tag for dragging is always at the bottom right.

// you can use icons at the points you need for the user to know what is resizable
// b. autoHide to true the icon will appear only when you over over the resizable element
// the better option is adding the images for the user


// //3. Synchronous Resizing
// $(document).ready(function() {
//   $("#box").resizable({alsoResize: "#box2"});
// })
// resizes all elements at the same time


// //4. Restrict Resizing
// $(document).ready(function() {
//   $("#box3").resizable({minHeight: 50, containment: "#main"}); // do not resize beyond #main boundaries (parent element)
//   $("#box4").resizable({minHeight: 150, maxHeight: 300, minWidth: 150, maxWidth: 200});
//
// })
//min height - allowed min
//max height - allowed max
//max width - restrict max width
//min width - restrict min width
//containment - set the boundary of the resizable element
// to use containment, you need to remove maxValue.

// //5. Ghost Helper
// $(document).ready(function() {
//   $("#box").resizable({ghost: true}); // do not resize beyond #main boundaries (parent element)
//   $("#box2").resizable({ghost: true, helper: "customer-helper"});
// })
//a. Ghost: set value to true, see original size
//b. Helper:

// // 6. Aspect Ratio
// $(document).ready(function() {
//   //set ratio
//   $("#box5").resizable({aspectRatio: true, stop: function() {
//     alert("Height: " + $(this).css("height") + "\n Width: " + $(this).css("width"))
//   }});
//
//   // set a specific ratio
//   $("#box6").resizable({aspectRatio: 3, stop: function() {
//     alert("Height: " + $(this).css("height") + "\n Width: " + $(this).css("width"))
//   }});
// })


// // 8. Options Already discussed
// $(document).ready(function() {
//   $("#box").resizable({ghost: true});
  // $("#box2").resizable({"option": "delay", 500}); // canceled the box element
  // $("#box2").resizable("option", "disabled", true});
  // $("#box").resizable("option", "grid", [20,50]); // move 20 pixels in the x direction and 50 pixels in the y direction, it will resize to the specified the pixels
// })
//a. Cancel: specify for which all elements needed to cancel the reziablility
// and b. Disable: use to particular item for which we need to cancel the functionality
//c. Grid: how many pixels the element should be resized each time
//d. Distance
// and e. Delay

// // 9. Manage Events
$(document).ready(function() {
  $("box").resizable({create: function() {
    $("#status").text("Resizable created!!")
  },
  start:function() {
    $(this).css("background", "blue")

  },
  resize:function() {
    $("#status").text("Getting resized!!")

  },
  stop:function() {
    $("#status").text("Resizable stopped!!")
  },
  });
})
//triggered Events
//a. Create: triggered when we create a resizable
//b. Start: triggered when start resizing
//c. Stop: triggered when we stop resizing
//d. Resizing: triggered during the resizing, drag the resize handler
