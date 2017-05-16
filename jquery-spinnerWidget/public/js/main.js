// //1. Intro to Spinners
// $(document).ready(function() {
//   $("#mySpinner").spinner({step:5, page:2,
//                           icons:{up:"ui-icon-plus", down:"ui-icon-minus"},
//                           min:0, max:100});
//   $("btnStepUp").click(function() {
//     $("#mySpinner").spinner("stepUp", 3)
//   });
//   $("btnStepDown").click(function() {
//     $("#mySpinner").spinner("stepDown", 2)
//   });
//   $("#btnIsValid").click(function() {
//     var isValid = $("#mySpinner").spinner("isValid");
//     alert(isValid);
//   });
//   $("#btnPageUp").click(function() {
//     var isValid = $("#mySpinner").spinner("pageUp", 2);
//   });
//   $("#btnPageDown").click(function() {
//     var isValid = $("#mySpinner").spinner("pageDown", 4);
//   });
// });

// //2. Spinner for Currencies
$(document).ready(function() {
  $("mySpinner").spinner({numberFormat:"C", culture:"ja-JP", step:10});
});
//options:
// number format: "C"
//culture
// file can be found in jquery.com/resources/demos/externalglobalized...
