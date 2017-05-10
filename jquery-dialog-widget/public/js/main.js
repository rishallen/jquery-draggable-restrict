// //1. Intro to Dialog Widget
// $(document).ready(function() {
//   $("#overlay").dialog();
// })
//basic Dialog


// //2. Intro to Dialog Widget
//boolean
// $(document).ready(function() {
  // $("#overlay").dialog({hide:true, show:true});
//number
  // $("#overlay").dialog({hide:3000, show:3000});
//string
  // $("#overlay").dialog({hide:"fide", show:"pulsate"});
//obejct
  // $("#overlay").dialog({hide:{effect:"pulsate", easing:"swing", duration:3000}})
// });
//Hide and Show:
//a. boolean
//b. number
//c. string
//d. object - four values: effect, duration, easing, delay


// //3. Intro to Dialog Widget
// $(document).ready(function() {
//   // $("#overlay").dialog({height: "auto", width:200, minHeight:50, minWidth:50, maxWidth:400, maxHeight:400});
//   $("#overlay").dialog({position:{of:"#attach"}});
//                       // position:{at:"right center"}});
//
// });
// 7 options
// height: auto, or numbers
// width: auto, or numbers
// minHeight
// maxHeight
// minWidth
// maxwidth
// position - 3 values: at, my, of

// // //4. Intro to Dialog Widget
// $(document).ready(function() {
//   // $("#overlay").dialog({draggable:false, resizable:false, autoOpen:false});
//   $("#overlay").dialog({closeOnEscape:false, resizable:false});
//
// });
// 4 options that can be used to change the default functionality of dialog
//draggable false - no dragging
//resizable false - no resizing
//autoOpen to false - can not see the box
//closeOnEscape to false - cannnot close with the escape key

// //5. Modal Behaviour
// $(document).ready(function() {
//   $("#overlay").dialog({modal:true});
//   $("#btnSubmit").click(function() {
//     alert("Hi " + $("#first").val() + " " + $("#last").value());
//   });
// });

// //6. Add Buttons to the Dialog
// $(document).ready(function() {
  // $("#overlay").dialog({buttons:{Yes:function() {alert("Yes, We are going to proceed!!!")},
  //                               No:function() {alert("ok, We will not proceed");}
  //                     }});
//   $("#overlay").dialog({buttons:[
//                                 {
//                                   text: "Cancel",
//                                   icons: {primary:"ui-icon-closethick"},
//                                   click:function(){$(this).dialog("close");},
//                                   mouseover:function(){alert("mouseover");}
//                                 },
//                                 {
//                                   text: "Delete",
//                                   icons:{primary:"ui-icon-check"},
//                                   click:function(){alert("all the items are deleted!!!");}
//                                 }
//                               ]
//                             });
// });
//buttons object set up as an array
// you can add icons and primary and secoundary options

// //7. Manage Events
// $(document).ready(function() {
//   $("#overlay").dialog(
//                     {
//                       create:function(){alert("this dialog is created");
//                     },
//                       open:function(){alert("this dialog is opened");
//                     },
//                       focus:function(){alert("this dialog is focused");
//                     },
//                       dragStart:function(){$("#status1").text("draggin started");
//                     },
//                       drag:function(){$("#status2").text("This dialog is moving");
//                     },
//                       dragStop:function(){$("#status1").text("draggin stopped");
//                       $("#status2").text("");
//                     },
//                       resizeStart:function(){$("#status1").text("resize started");
//                     },
//                       resize:function(){$("#status2").text("The size is changing");
//                     },
//                       resizeStop:function(){$("#status1").text("resize stopped");
//                     },
//                       beforeClose:function(){alert("this dialog is about to close");
//                     },
//                       close:function(){$("#status1").text("the dialog is closed");
//                     },
//
//                   });
//                 });


//11 Events:
//a. create - create dialog
//b. focus
//c. open

//d. dragStart
//e. drag
//f. dragStop

//g. resizeStart
//h. resize
//i. resizeStop

//j. beforeClose
//k. close

// //8. Different Method
// $(document).ready(function() {
//   $("#first").dialog({position:{at:"center top"}});
//   $("#second").dialog({position:{at:"center center"}, autoOpen:false});
//   $("#toggle").click(function() {
//     if ($("#first").dialog("isOpen"))
//     {
//       $("#first").dialog("close");
//     }
//     else
//     {
//       $("#first").dialog("open");
//     },
//     if  ($("#second").dialog("isOpen"));
//     {
//       $("#first").dialog("close");
//     }
//     else
//     {
//       $("#first").dialog("open");
//     }
//   });
//   $("top").click(function() {
//     $("#first").dialog("moveToTop");
//   });
// });
//moveToTop method
