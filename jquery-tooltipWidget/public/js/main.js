// // 1. Intro to Tooltip
// $(document).ready(function() {
//   $(document).tooltip(); //adds tool tips to all elements
// });

// 2. Animate Hiding and Showing Tooltip
// $(document).ready(function() {
  //boolean
  // $(document).tooltip({hide:false, show:false});

//number
// $(document).tooltip({hide:5000, show:3000});

//string
// $(document).tooltip({hide:"explode", show:"fold"});

//object
// $(document).tooltip({hide:{effect:"explode", duration:5000, easing:"linear"}, show:"fold"}});
// });

// 4 types:
// boolean
// string
// number - duration
// object

// // 3. Position the Tooltip
// $(document).ready(function() {
//   // $(document).tooltip({track:true});
//   $(document).tooltip({position:{my:"left top"}});
//
// });


// // 4. Customize the look and feeol of tooltip
// $(document).ready(function() {
//   $(document).tooltip({position:{my:"left top"}});
//
// });

// // 5. Customize the look and feel of tooltip
// $(document).ready(function() {
//   $(document).tooltip({items:"a",
//                         content:function() {
//                           return "<img src='http://demandware.edgesuite.net/sits_pod38/dw/image/v2/ABAQ_PRD/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dw82e235f0/Images/Product%20Images/prod099809/prod099809.jpg?sw=322&sh=380&sm=fit' />"
//                         }});
//
// });

// // 6. Customize the look and feel of tooltip
$(document).ready(function() {
  $("a").tooltip({position:{at:"left + 100 center"},
                  items:"a",
                  content:function() {
                    return "<img src='http://demandware.edgesuite.net/sits_pod38/dw/image/v2/ABAQ_PRD/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dw82e235f0/Images/Product%20Images/prod099809/prod099809.jpg?sw=322&sh=380&sm=fit' />"
                  },
                  open:function() {alert("tooltip is open")},
                  close:function(){alert("tooltip is closed")}
                });
  $("#btnEnable").click(function() {
    $("a").tooltip("enable");
  });
  $("#btnDisable").click(function() {
    $("a").tooltip("disable");
  });
});
