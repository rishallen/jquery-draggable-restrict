// //1.Intro to Datepicker Widget
// $(document).ready(function() {
//   $("#calendar").datepicker();
// })

// //2.Dates in a Range Selectable
// $(document).ready(function() {
  //number
  // $("#calendar").datepicker({minDate:7});
    // $("#calendar").datepicker({minDate:10});
  //string
  // $("#calendar").datepicker({minDate:"1w"});
  //object
  // $("#calendar").datepicker({minDate: new Date(2016, 8, 26)});
  //combo
  //after one month and 3 days from today.
    // $("#calendar").datepicker({minDate:"+1m +3d"});

//   $("#calendar").datepicker({minDate: new Date(),
//                              maxDate:"+10" //dates in this range will be selectable
//                             });
//
//
// })
// you can set up dates using:
//a. objects: different ways to implement dates
  //new Date(2016, 8, 26)
  // new Date("09/26/2016")
  // new Date("2016-09-26")
  // new Date("2016/08/26")
  // new Date("26 Sep 2016")
  // new Date("Sep 26 2016")
//b. numbers
//c. string(d, w, m, y)
//d. date object
//maxDate - max selectable date
//minDate - min selectable date

// //3.Weekends Weekdays Non-Selectable
// $(document).ready(function() {
//   // $("#calendar").datepicker({beforeShowDay: $.datepicker.noWeekends});//weekends are disabled
//   $("#calendar").datepicker({
//     beforeShowDay: function(date) {
//     var weekEnds = $.datepicker.noWeekends(date); //weekdays are disabled
//     var weekDays = [!weekEnds[0]]; //first value of the array is true or false
//     return weekDays; //weekdays none selectable
//     }
//   });
// });

// //4.Specific Dates Non-Selectable
// $(document).ready(function() {
//   var holidays = ["1-1-2016", "4-7-2016", "24-11-2016", "25-12-2016"]; //collect date object that we do not want selected
//
//   $("#calendar").datepicker({beforeShowDay: function(date) {
//     var d = date.getDate();
//     var m = date.getMonth();
//     var y = date.getFullYear();
//     //m+1 is used because it starts with zero
//     var nonSelectableDate = d + "-" + (m+1) + "-" + y;
//     //check to see if date is in the array
//     // run the loop 4 times
//     for (var i=0; i<holidays.length; i++) {
//       //inArray is a jQuery function that checks the array
//       // if item is present, if returns false and makes it nonSelectable
//       if ($.inArray(nonSelectableDate, holidays) != -1) {
//         return [false];
//       }
//     }
//     return [true]; //all other dates that are not in the array return true and return the date as selectable
//   //  var day = date.getDay();//disable all fridays
//     //   if (day==5)
//     //   {
//     //     return [false]; //first item in the array
//     //   }
//     //   else
//     //   {
//     //     return [true];
//     //   }
//     // }
//     }
//   })
// });

// //5.Style Holidays in Calendar
// $(document).ready(function() {
//   var holidays = ["1-1-2016", "4-7-2016", "24-11-2016", "25-12-2016"]; //collect date object that we do not want selected

  // $("#calendar").datepicker({beforeShowDay: function(date) {
//     var d = date.getDate();
//     var m = date.getMonth();
//     var y = date.getFullYear();
//     //m+1 is used because it starts with zero
    // var nonSelectableDate = $.datepicker.formatDate("d-m-yy", date);
//     //check to see if date is in the array
//     // run the loop 4 times
    // for (var i=0; i<holidays.length; i++) {
//       //inArray is a jQuery function that checks the array
//       // if item is present, if returns false and makes it nonSelectable
      // if ($.inArray(nonSelectableDate, holidays) != -1) {
        // return [false];
      // }
    // }
    // return [true]; //all other dates that are not in the array return true and return the date as selectable
//   //  var day = date.getDay();//disable all fridays
//     //   if (day==5)
//     //   {
//     //     return [false]; //first item in the array
//     //   }
//     //   else
//     //   {
//     //     return [true];
//     //   }
    // }

//      var day = date.getDay();
//      var nonSelectableDate = $.datepicker.formatDate("d-m-yy", date);
//
//      if (day == 0) { //sunday
//         return [true, "styleHoliday"]; //make it selectable
//       } else if (holidays.indexOf(nonSelectableDate) != -1) {
//        return [false, holidays.indexOf(nonSelectableDate == -1)?"":"styleHoliday"]; //check if value is in array, if not add -1(no style)
//      } else {
//        return [true];
//      }
//     }
//   });
// });
//beforeShowDay to style:
// need to add a class in the array as a second item
//Utility function:
//formatDate: offered by jquery
//mark all Sundays red

// //6.Intro to Datepicker Widget
// $(document).ready(function() {
//   $("#calendar").datepicker({duration: 3000, showAnim:"explode", showOptions: {pieces:16}});
// })
//duration - time animation should be completed
//showAnim - name of the effect
  //default is no show , set to ""(empty string)
//showOptions - used to change default options of the effect

// //7.Format Date and Alternate Field
// $(document).ready(function() {
  // $("#calendar").datepicker({appendText: "dd/mm/yyyy", dateFormat: "dd-mm-yy"});
  // $("#calendar").datepicker({appendText: "dd/mm/yyyy", dateFormat: "dd-mm-yy"});
  // $("#calendar").datepicker({appendText: "dd/mm/yyyy", dateFormat: $.datepicker.ATOM});
  // $("#calendar").datepicker({appendText: "dd/mm/yyyy",
  //                           dateFormat:  "Selecte'd D'ate: dd/mm/yy",
  //                           autoSize:    true
  //                         });
//   $("#calendar").datepicker({appendText: "Select your nirthday to see the magic",
//                             autoSize:    true,
//                             altFiled:    "#birthday",
//                             altFormat:   "Y'o'u were b'o'rn 'o'n a DD"
//                           });
//
//
//
// })
//dateFormat - allows you specify how to display date
//jqueryui has many more formats to pick from

// //8.Display Datepicker in Different Ways
// $(document).ready(function() {
  // $("#calendar").datepicker({onSelect:function(dateString, datePiocker) {
    //display inline:
    // $("#result").html("you selected " + dateString); //display as an inline element

    //display with button:
  // $("#calendar").datepicker({showOn: "button", buttonText: "Open Calendar"});
// });

// //9. Localize the Datepicker Part 1
// $(document).ready(function() {
//   $("#calendar").datepicker();
// })

// //10. Localize the Datepicker Part 2
// $(document).ready(function() {
//   $("#calendar").datepicker({dateFormat: "D",
    // firstDay:5,
    // isRTL:true
    // showWeek: true,
    // weekHeader: "W No:",
    // yearSuffix: "AD",
    // showMonthAfterYear: true,
    // showButtonPanel: true,
    // currentText: "Now",
    // closeText: "Close",
    // gottoCurrent: true,
//     prevText: "Previous",
//     nextText: "Next"
//    });
// })

// //11.Change Default Datepicker Options
// $(document).ready(function() {
//   $("#calendar").datepicker({
                            // changeMonth:true, - display month as a drop down
                            // changeYear:true, - display year as a drop down
                            // yearRange:"c-100:c+1" - change the number of years to be displayed
                            // showOtherMonths:true,
                            // selectOtherMonths: true
                            // defaultDate: +7,
                            // numberOfMonths: 3
                            // numberOfMonths: [2,3],
                            // showCurrentAtPos: 3
//                             stepMonths: 2
//                             });
// })

// //12.Widget: Datepicker
$(document).ready(function() {
  $("#calendar").datepicker({onSelect:function(dateString) {
    var selectDate = $("#calendar").datepicker("getDate");
    alert("the date selected is " + dateString);
  },
  onClose:function(){alert("the datepicker is about to close");
  },
  onChangeMonthYear:function(year, month, datepicker) {
    var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    alert("Month: " + monthArr[month-1] + "\n" + year);
  }});
  $("#calendar").datepicker("setDate", "08/21/2016");
  $("#btnShow").click(function(){
    $("#calendar").datepicker("show");
  });
  $("#btnHide").click(function(){
    $("#calendar").datepicker("hide");
  });
});
