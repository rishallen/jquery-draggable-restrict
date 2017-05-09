// //1. Autocomplete
// var country =["angola", "cambodia", "spain", "russia", "germany", "sweden", "africa", "india", "japan"];
// $(document).ready(function() {
//   $("#countries").autocomplete({source:country});
//
// });
//Autocomplete widget: allows you to set the source as a
// a. array
// b. string
// c. Callback function
// allows you to type in country and have it displayed

// //2. Select One and Display Another
// var currency =[
//   {label:"angola", value:"angola kwanza"},
//   {label:"cambodia", value:"combodian riel"},
//   {label:"zimbabwe", value:"usd"},
//   {label:"russia", value:""},
//   {label:"us", value:"usd"},
//   {label:"sweden", value:"swedish krona"},
//   {label:"liberia", value:"liberian dollar"},
//   {label:"india", value:"indian rupee"},
//   {label:"phillipines", value:"phillipine peso"}
// ];
// $(document).ready(function() {
//   $("#countries").autocomplete({source:currency});
//
// });
//display a set of values. click on and display a set of values associated with it
//useful for currency code

// //3. Set a Callback function as the Source
// var country =[
//   "angola", "cambodia", "zimbabwe", "russia","us", "sweden","liberia", "india", "phillipines"
// ];
// $(document).ready(function() {
//   $("#country").autocomplete({source:function(request, response) { // 2 arguments 1. request (one property is term that will return user input) 2.response (returned response)
//     var filterArray = $.map(country, function(element) { // this will set only names that start with character inputed into text box
//                                                         // get each element in the text box
//       if (element.toUpperCase().indexOf(request.term.toUpperCase()) == 0) //get only the first character [0], convert to uppercase so they match the characters in array
//       {
//         return element;
//       }
//       else
//       {
//         return null;
//       }
//     });
//       response(filterArray);
//   }});
// });
//only character that starts with that character will be displayed
// how to set the source as a Callback function:
// gets two arguments:
// a. request - term(value entered in the text box or input)
// b. reponse
//map method provided ny JS and jQuery
//request.term (input from user)


// //4. Autocomplete: Specify Min Length, And focus
// var country =["angola", "cambodia", "spain", "russia", "germany", "sweden", "africa", "india", "japan"];
// $(document).ready(function() {
//   $("#country").autocomplete({source:countries, minLength:2, autoFocus:true, delay:2000});
// });
//minLength - sets the amount of characters needed to pull up item
//autofocus - set to true the first item in the list will be automatically selected
//delay - add a delay between entering and displaying


// //5. Positioning teh Suggestion List wth respect to Input Element
// var country =["angola", "cambodia", "spain", "russia", "germany", "sweden", "africa", "india", "japan"];
// $(document).ready(function() {
//   $("#country").autocomplete({source:countries, position:{of:"#space", at:"bottom center", collision:"fit"}});
// });
//position:
//a.my
//b.collision
//c.at
//d.of


// //6. Manage Events
var currency =[
  {label:"angola", value:"angola kwanza"},
  {label:"cambodia", value:"combodian riel"},
  {label:"zimbabwe", value:"usd"},
  {label:"russia", value:""},
  {label:"us", value:"usd"},
  {label:"sweden", value:"swedish krona"},
  {label:"liberia", value:"liberian dollar"},
  {label:"india", value:"indian rupee"},
  {label:"phillipines", value:"phillipine peso"}
];
$(document).ready(function() {
  $("#country").autocomplete({source:currency,
    // create:function(){alert("the autocomplete is created");
    // },
    // change:function(){alert("the textbox content is changed");
    // },
    // search:function(){alert("the search is about to begin")
    // },
    // response:function(){alert("the response is created")}
    // open:function(){alert("the suggestion list is displayed")
    // },
    // close:function(){alert("the suggestion list if closed")
    // }
    select:function(event,ui){
      $("#result").text((ui.item.label) + "'s currency is " + (ui.item.value));
    }
  });
});
// 8 Events that get triggered:
// a. create - when you create an autocomplete widget
// b. change - whent the value in the input element gets changed
// c. search - when you enter chararcters into the text box
// d. response - response is ready before the suggetion list appears
// e. open - suggestion list is opened
// f. close - suggestion list is closed
// g. focus - item is focused
// h. selection - item is selected
