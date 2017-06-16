// //1. Different Effects
// $(document).ready(function() {
//   $("#overlay").dialog({
//      hide:{effect:"pulsate", easing:"swing", duration:3000,
//      show:{effect:"fold", duration:3000}
//     }
//    });
// });

// //2. Add and Remove Toggle
$(document).ready(function() {
  $("#btnAdd").click({
    $("div").addClass("changing", 5000, "linear", function(){alert("i am a circle now!!");
    });
    $("#btnRemove").click({
      $("div").addRemove("changing", 5000, "linear", function(){alert("i am a square again!!");
      });

    $("#btnToggle").click({
      $("div").addToggle("changing", 5000);
    });

  });
});
