// //1. Widget Tabs
// $(document).ready(function() {
//   $("#details").tabs();
// })
//need to have an unordered list to link to the contents

// //2. External Content
// $(document).ready(function() {
//   $("#details").tabs();
// })
// tabs can fetch external data in other file and display in different panels
// make sure to specify the links to the other files

// //3. Animate Hiding and Showing of Panels
// $(document).ready(function() {
//   // $("#details").tabs({hide:3000, show:6000});
//   $("#details").tabs({hide:{duration:3000, duration:5000, easing: "easeInOutBounce", effect:"explode", delay:3000}
//                     ,show:{duration:3000, easing:"easeOutBounce", effect:"highlight"}});
//
// })
// Hide and Show:
// 4 values:
// boolean (true), number, string and object
//defualt - no animation affect
// 4 values for Hide and Show:
// a. duration
// b. easing(speed at which animation should be completed)
// c. effect
// d. delay

// //4. Miscellaneous Options
// $(document).ready(function() {
  // $("#details").tabs({active:false, collapsible:true});
  // $("#details").tabs({event:"mouseover"});
  // $("#details").tabs({heightStyle:"auto"});
// })
//tabs wdiget:
// a. active - which panel should be displayed when page is loaded [0] index
// b. collapsible - you can collapse all the tabs, but you need set the value of active to false
// c. event - to change to which event the panel should react to
//  1. dbclick - you have to  double click to see displaye panel
//  2. mouseover - panel becomes active
// d. heightStyle - controll height of tabs
    // 1.auto
    // 2.fill
    // 3.content
    //accordion widget - default (auto)
    //tabs widget - default(content)

    // //5. Manage Events
    $(document).ready(function() {
      $("#details").tabs({hide:{duration:2000, effect:"explode"}
                        ,show:{duration:2000, effect:"highlight"}
                        ,beforeActivate:function(event, ui) {
                          alert("BEFORE ACTIVATE Old Tab: " + $(ui.oldTab).text() + "\n" +
                                "New Tab: " + $(ui.newTab).text() + "\n" +
                                "Old Panel: " + $(ui.oldPanel).text() + "\n" +
                                "New Panel: " + $(ui.newTab).text());
                        },
                        activate:function() {
                          alert("ACTIVATE New tab is activated");
                        },
                        beforeLoad:function(event, ui) {
                          alert("BEFORE LOAD");
                          ui.jqXHR.fail(function() {
                            $(ui.panel).html("error in loading tab");
                          });
                        },
                        load:function(event, ui) {
                          alert("LOAD Tab: " + $(ui.tab).text() + "\n" +
                                "Panel: " + $(ui.panel).text());
                        }});
    });
    //hide and show event
    //beforeActivate event - gets triggered when a tab is about to be activated
    // different items:
      // a. create
      // b. beforeActivate
      //     ui -- newTab, oldTab, newPanel, oldPanel
      // c. activate - only gets triggered once event has been activated
      //     ui -- newTab, oldTab, newPanel, oldPanel
      // d. beforeLoad (related to ajax)
      //     ui -- tab, panel, jqXHR (object giving info regarding ajax call), ajaxSettings
      // e. load
      //     ui -- tab, panel
