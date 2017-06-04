// //2. Current and Maximum Value of Progress Bar
// $(document).ready(function() {
//   $("#bar").progressbar({value:10, max:50});
//   $("#bar2").progressbar({value:false})
//   // alert($("#bar").progressbar("option", "max"));
// })
// max - set max value
// false

// //3. Customize the progressbar
// $(document).ready(function() {
//   $("#bar").progressbar({value:20, max:50});
//     var maximum = $("#bar").progressbar("option", "max");
//   $("#maximum").text(maximum + "%");
//     var current = $("#bar").progressbar("option", "value");
//   $(".ui-progressbar-value").text(current + "%");
//
// });

// //4. Customize the progressbar
$(document).ready(function() {
  var newValue;
  $("#bar").progressbar({value:20, max:50});
  var maximum = $("#bar").progressbar("option", "max");
  $("#maximum").text(maximum + "%");
   current = $("#bar").progressbar("option", "value");
  $(".ui-progressbar-value").text(current + "%");
  $("button").click(function() {
    var current = $("#bar").progressbar("option", "value");
    var id = $(this).attr("id");

    if  (id == "btnIncrement") {
      newValue = current + 10;
    } else {
      newValue = current - 10;
    }
    displayValue();
  });
    function displayValue()
    {
      $("#bar").progressbar("value", newValue);
      if (newValue == maximum) {
        $("ui-progressbar-value").text("");
      } else {
        $("ui-progressbar-value").text(newValue + "%");
      }
    }
});
