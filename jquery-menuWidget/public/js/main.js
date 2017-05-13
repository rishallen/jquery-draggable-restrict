// //1. Intro
// $(document).ready(function() {
//   $("#myMenu").menu();
// });


// //2. Change and Add Icons
// $(document).ready(function() {
//   $("#myMenu").menu({icons:{submnu:"ui-icon-circle-triangle-e"}});
// });

// // //3.Positioning the Menu
// $(document).ready(function() {
//   $("#myMenu").menu({icons:{submnu:"ui-icon-circle-triangle-e"},
//   position:{of:"#parent", at:"left+200 top+50"}
//   });
// });

// //.4 Dividers and Categories
// $(document).ready(function() {
//   $("#myMenu").menu({
//     items:"> :not(.ui-widget-header)"
//   });
// });


// //.5 Manage Events
// $(document).ready(function() {
//   $("#myMenu").menu({focus:function(event,ui){$("#result").text("focus is on: " + ui.item.find("ui-state-active"));},
//                      select:function(){$("#result").text("you clicked on: " + ui.item.find("ui-state-active").text);},
//                      blur:function(){$("#lost").text("Focus lost")}});
//
// });


// //.6 / 7 Different Methods
$(document).ready(function() {
  var item;
  $("#myMenu").menu( {
    focus:function(event,ui) {
      item = ui.item.find(".ui-state-active").text();
    }
  });
  $("#btnRefresh").click(function() {
    $("#myMenu").append("<li><a href='#'>New Item</li>");
    // $("#myMenu").menu("refresh");
  });
  $("#btnExpand").click(function() {
    $("#myMenu").menu("focus", null, $("myMenu > li:nth-child(2)"));
    $("#myMenu").menu("expand");
    $("#myMenu").menu("previous");

  });
  $("#btnCollapse").click(function() {
    $("#myMenu").menu("collapseAll");
  });
  $("#btnIsLast").click(function() {
    $("#myMenu").menu("focus", null, $("myMenu > li:nth-child(2)"));
    $("#myMenu").menu("expand");

    $("#myMenu").menu("focus", null, $("myMenu > li:nth-child(2) > ul > li:nth-child(1)"));
    $("#myMenu").menu("expand");

    $("#myMenu").menu("focus", null, $("myMenu > li:nth-child(2) > ul > li:nth-child(1) > ul > li:nth-child(2)"));
    $("#myMenu").menu("expand");

    var isFirst = $("#myMenu").menu("isLastItem");
    var msg;
    if (isFirst == true) {
      msg = " is the last menu item"
    } else {
      msg = " is not the last menu item"
    }
    alert(item + msg);
  });
});
