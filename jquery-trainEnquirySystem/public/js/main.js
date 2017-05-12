//2 arrays:
// details of stations: array of objects
var stations = [
  {label:"tyriyandrum", value:"TVN"},
  {label:"Vellore", value:"VLR"},
  {label:"Kottayam", value:"KYM"},
  {label:"Hyderabad", value:"HDB"},
  {label:"Ernakulam", value:"ERK"},
  {label:"Thrissur", value:"THR"},
  {label:"Mangalore", value:"MNG"},
  {label:"Coimbattore", value:"CMT"}
];
//details of trains: array of objects
var trains = [
  {
    name:"venad express",
    number: 12652349,
    stops: ["THR", "ERK", "KYM", "VLR"]
  },
  {
    name:"trivandrum chennai express",
    number: 021974,
    stops: ["HDB", "ERK", "TVN", "MNG"]
  },
  {
    name:"coimbatore express",
    number: 248394,
    stops: ["MNG", "CMT", "TVN", "MNG"]
  },
  {
    name:"mangalore special",
    number: 50932,
    stops: ["HDB", "MNG", "TVN", "MNG"]
  },
];

$(document).ready(function(){
  $("#from, #to, #calendar").val("");
  $("#btnSearch").click(function(){
  var fromStation = $("#from").val().split(" - ")[1];
  var toStation = $("#to").val().split(" - ")[1];
  var trainsArr = [];
  $.each(trains, function(index, value){
    for(key in value)
    {
      if (key == "stops")
      {
        if (jQuery.inArray(fromStation, value[key]) != -1 &&
        jQuery.inArray(toStation, value[key]) != -1)
        {
          trainsArr.push(value["number"]);
          trainsArr.push(value["name"]);
        }
      }
    }
  });
    var content;
      if (trainsArr.length == 0)
      {
        content = "<p><b>Sorry!!! There is no train in this route!!!</b></p>";
      }
      else
      {
        content = "<table><tr><th>Train No:</th><th>Train Name:</th></tr>";
        for( var j=0;j<trainsArr.length;)
        {
          var k = 1;
          content += "<tr><td>" + trainsArr[j] + "</td><td>" + trainsArr[j+k] + "</td></tr>";
          j = j + 2;
        }
        content += "</table>";
      }
        $("#result").html(content);
        $("#table").css("display", "block");
      });
        $("#calendar").datepicker({dateFormat:"dd MM yy (DD)", minDate:new Date(), maxDate:"+2m"});
        $("#btnSearch").button();
        $("#from, #to").autocomplete({source:stations,
        select:function(event, ui){
          $(this).val(ui.item.label + " - " + ui.item.value);
          return false;
  }});
});
