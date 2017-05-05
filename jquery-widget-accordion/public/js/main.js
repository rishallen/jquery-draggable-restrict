//useful when you have space constraints

// //1.Accordion widget
// $(document).ready(function() {
//   $("#details").accordion(); //basic accordion
// });

// //2.Collapse All Panels
// $(document).ready(function() {
//   $("#details").accordion({collapsible: true}); //basic accordion
// });
//collapse all sections at once by clicking header again

//3.Which panel to display
// $(document).ready(function() {
//   // $("#details").accordion({collapsible: true, active: 1}); //second panel is displayed when we open the page
//   $("#details").accordion({collapsible: true, active: false}); //all are closed when page is loaded
//
// });
//is an array: starts with 0
//active: decided which panel is displayed or set to false and none will be open when page is loaded

// //4.Customize the Animation
// $(document).ready(function() {
//   $("#details").accordion({collapsible: true, animate: {duration: 5000, "easeOutBounce"}); //basic accordion
// });
//Customize the animation (the hiding and displaying of panels)
//4 types of values:
//a. string: easings - go to website to see all values for easing
//b. boolean: false,
//c. number: duration
//d. object: {duration: 4000, easing:""}

// //5.HideShow Content Panels
// $(document).ready(function() {
//   $("#details").accordion({collapsible: true, event:"mouse click"});
// });
//event: controls what event the accordion should react

// //6.Set Height of Accordian
// $(document).ready(function() {
//   // $("#details").accordion({heightStyle: "auto"}); //height of the tallest panel
//   $("#details").accordion({heightStyle: "fill", activate:
//     function(event, ui) {
//       alert(($ui.newPanel).height());
//   }}); //height of the panel to register the conent completly without scrollers
//
// });
//auto - default: each panel will get the hieght of the tallest panel
// or fill: same height as well
//Content: the height will have the height of the accordion, will be visible without a scroller

// //7. Set the header of the Accordian
// $(document).ready(function () {
//   $("#details").accordion({header: "h2"});
//
// })

// //8. change the default icons in accordion
//list icons provided in jqueryui
// $(document).ready(function () {
//   $("#details").accordion({icons: {"header": "ui-icon-plusthick", "activeHeader": "ui-icon-minusthick" }});
// })

// //9. Manage Events
//list icons provided in jqueryui
$(document).ready(function () {
  // $("#details").accordion({animation: 5000,
  //   beforeActivate: function() {
  //     alert("Before Activate");
  //   },
  //   activate:function() {
  //     alert("Activate");
  //   }});

  $("#details").accordion({animation: 5000,
    beforeActivate: function(event, ui) {
      alert("Old Header: " + $(ui.oldHeader).text() + "\n" +
            "Old Panel: " + $(ui.oldPanel).text() + "\n" +
            "New Header: " + $(ui.newHeader).text() + "\n" +
            "New Panel: " + $(ui.newPanel).text());
    },
    activate:function(event, ui) {
      alert("Old Header: " + $(ui.oldHeader).text() + "\n" +
            "Old Panel: " + $(ui.oldPanel).text() + "\n" +
            "New Header: " + $(ui.newHeader).text() + "\n" +
            "New Panel: " + $(ui.newPanel).text());
    }});

  });
