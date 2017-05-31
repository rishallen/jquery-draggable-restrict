// collapsible content panels
//useful when you have space constraints

// //1.Accordion widget
// $(document).ready(function() {
//   $("#details").accordion(); //basic accordion
// });

// //2.Collapse All Panels
// $(document).ready(function() {
//   $("#details").accordion({collapsible: true});
// });
// // collapse all sections at once
// // close currently open section by clicking header

// // 3.Which panel to display
// $(document).ready(function() {
//   $("#details").accordion({collapsible: true, active: 1}); //second panel is displayed when we open the page
//   //$("#details").accordion({collapsible: true, active: false}); //all are closed when page is loaded
// });
// //collapsible:true & active:false, all panels will be closed when page loads
// //is an array: starts with 0
// //active: decides which panel is open by default when page loaded

// //4.Customize the Animation
// $(document).ready(function() {
//   // $("#details").accordion({collapsible: true, animate:5000}); //takes 5 seconds when clicked to display content
//   // $("#details").accordion({collapsible: true, animate:"easeOutBounce"});
//   $("#details").accordion({collapsible: true, animate:{duration:5000, ease:"easeOutBounce"}
//   });
// });
// Customize the animation (the hiding and displaying of panels)
// 4 types of values:
// a. string: easings - go to website to see all values for easing
// b. boolean: false,
// c. number: duration
// d. object: {duration: 4000, easing:""}

// //5.HideShow Content Panels
// $(document).ready(function() {
//   $("#details").accordion({collapsible: true, event:"mouseover"});
//   $("#details").accordion({collapsible: true, event:"mouseover click"}); //you can have more then one event. seperate with a space
// });
//the headers react to click event by default
//event: controls what event the accordion should react

// //6.Set Height of Accordian
// $(document).ready(function() {
//   // $("#details").accordion({heightStyle: "auto"}); //height of the tallest panel
//   // $("#details").accordion({heightStyle: "fill"  }); // set hieght
//   $("#details").accordion({heightStyle: "content", activate:
//     function(event, ui) {
//       alert(($ui.newPanel).height());
//   }});
// });
//auto(default): each panel will get the hieght of the tallest panel
//fill: same height as what is specified in css
//Content: the height will have the height of the accordion content amount, will be visible without a scroller

// //7. Set the header of the Accordian
// $(document).ready(function () {
//   $("#details").accordion({header: "h2"});
// })
//first child is the header
//sibling is the next content
//the header option allows you to specify what the header is

//8. change the default icons in accordion
// $(document).ready(function () {
//   $("#details").accordion({icons: {"header": "ui-icon-plusthick", "activeHeader": "ui-icon-minusthick" }});
// })
//list of icons provided in jquery-ui
//change icons if you want

// //9. Manage Events
// $(document).ready(function () {
//   // $("#details").accordion({animate: 5000,
//   //                         beforeActivate: function() {
//   //                         alert("Before Activate");
//   //                         },
//   //                         activate:function() {
//   //                           alert("Activate");
//   //                         }});
  //
  // $("#details").accordion({animation: 5000,
  //   beforeActivate: function(event, ui) {
  //     alert("Old Header: " + $(ui.oldHeader).text() + "\n" +
  //           "Old Panel: " + $(ui.oldPanel).text() + "\n" +
  //           "New Header: " + $(ui.newHeader).text() + "\n" +
  //           "New Panel: " + $(ui.newPanel).text());
  //   },
  //   activate:function(event, ui) {
  //     alert("Old Header: " + $(ui.oldHeader).text() + "\n" +
  //           "Old Panel: " + $(ui.oldPanel).text() + "\n" +
  //           "New Header: " + $(ui.newHeader).text() + "\n" +
  //           "New Panel: " + $(ui.newPanel).text());
  //   }});
  //
  // });
//3 events that get triggered:
// 1. create
// 2. before activate - before a panel is activated
// 3. activate - after the panel is activated
