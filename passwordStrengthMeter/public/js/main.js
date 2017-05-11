$(document).ready(function() {
  $("#meter").progressbar();
  $("#password").keyup(function() {
    checkPassword($("#password").val());
  });
});

function checkPassword(password) {
  var strength = 0;
  // password contains at least 5 characters
  if (password.length >= 5) {
    strength++;
      // contains small letters as well as capital letters
      if (password.match(/([a-z])/) && password.match(/([A-Z])/)) {
        strength++;
      }
      // contains numbers
      if (password.match(/([a-zA-z])/) && password.match(/([0-9])/)) {
        strength++;
      }
      // contains one special character
      if (password.match(/([!, @, #, $, %, ^, &, *, ~, _, -, ?])/)) {
        strength++
      }
      // contains more than one special character
      if (password.match(/([!, @, #, $, %, ^, &, *, ~, _, -, ?].*[!, @, #, $, %, ^, &, *, ~, _, -, ?])/)) {
        strength++
      }
    }

    if (strength == 0) { //password to small
      $("#meter").progressbar({value:20});
      $(".ui-progressbar-value").css("background", "red");
      $("#result").html("to short").css("color", "red")
    }
    else if (strength < 3 ) {
      $("#meter").progressbar({value:40});
      $(".ui-progressbar-value").css("background", "orange");
      $("#result").html("weak").css("color", "orange")

    }
    else if (strength == 3 ) {
      $("#meter").progressbar({value:70});
      $(".ui-progressbar-value").css("background", "blue");
      $("#result").html("good").css("color", "blue")

    }
    else {
      $("#meter").progressbar({value:100});
      $(".ui-progressbar-value").css("background", "green");
      $("#result").html("strong").css("color", "green")

      }
      if (password.length == 0) {
        $("#meter").progressbar({value:100});
        $(".ui-progressbar-value").css("background", "white");
        $("#result").html("");
      }
    }
