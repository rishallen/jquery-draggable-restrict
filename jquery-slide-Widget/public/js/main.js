// //1. Slider
// $(document).ready(function() {
//   $("#mySlider").slider();
// });
//

// //2. Minimum Maximum and Current Value
// $(document).ready(function() {
//   $("#mySlider").slider({min:50, max:200, value:30,
//                         change:function() {
//                         $("#current").text(ui.value);
//                         }});
//   var min = $("#mySlider").slider("option", "min");
//   var max = $("#mySlider").slider("option", "max");
//   var current = $("mySlider").slider("option", "value");
//   $("current").text(current);
//   alert("Min: " + min + "Max " + max);
// });

// //3. Range Slider
// $(document).ready(function() {
//   $("#range").slider({value:50, range:true, values:[25,75],
//                         change:function(event, ui) {
//                         $("#current").text("$" ui.value[0] + "- $" + ui.values[1]);
//                         }});
//   var min     = $("#range").slider("option", "min");
//   var max     = $("#range").slider("option", "max");
//   var current = $("range").slider("option", "value");
//   $("current").text("$" + current[0] + " - $" + current[1]);
// });

// //4. Miscellaneous Options
// $(document).ready(function() {
//   $("#range").slider({ orientation: "vertical",
//                         //animate:10000, //value: boolean, string, number
//                         //step:50,  // make sure divisible bw min and max
//                         change:function(event, ui) {
//                         $("#current").text(ui.value);
//                         }});
//   var current = $("range").slider("option", "value");
//   $("current").text(current);
// });


// //5. Manage Events
$(document).ready(function() {
  $("#mySlider").slider({change:function(event, ui) {
                      $("#current").text(ui.value);
                     },
                     slide:function(event, ui) {
                       $("#changing").text(ui.value);
                     },
                     start:function(){
                       alert("sliding started!");
                     },
                     stop:function(){
                       alert("sliding stopped!");
                     }});
  var current = $("myslider").slider("option", "value");
  $("current").text(current);
});
