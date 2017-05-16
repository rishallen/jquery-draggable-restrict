// //1. Buttons Widget:
// $(document).ready(function() {
//   $("#btnButton, #btnSubmit, #btnlink").button();
//   $("#btnButton, #btnSubmit, #btnlink").click(function() {
//     alert("you clicked the element with id " + $(this).attr("id"));
//   });
//   $("#btnButton").button({icon:"ui-icon-tag", iconPosition:"end", label:"Using Option"});
//   $("#btnSubmit").button({disabled:true});
//   $("#btnLink").button({icon:"ui-icon-note", showLabel:false});
//
// });

// //2. CheckBoxRadio Widget:
// $(document).ready(function() {
//   $("input").checkboxradio();
// });

// // //3. Select Menu Widget:
// $(document).ready(function() {
//   $("#jquerys").selectmenu({icons:{button:"ui-icon-plus"}, width: 200,
//                             positin:{at:"left+100 top+200"}});
//   $("#btnOpen").click(function() {
//     $("#jquerys").selectmenu("open");
//   });
//   $("#btnClose").click(function() {
//     $("#jquerys").selectmenu("close");
//   });
// });

// //4.Control Group
$(document).ready(function() {
  $("#group").controlgroup({
    direction:"vertical",
    items:{"button": "input[type=button], input[type=submit], input[type=reset], button",
    "controlgrouplabel": ".ui-controlgroup-label",
    "checkboxradio": "input[type='checkboxradio'], input[type='radio']",
    "selectmenu":"select",
    "spinnner":".ui-spinner-input"
    }
  });
});
