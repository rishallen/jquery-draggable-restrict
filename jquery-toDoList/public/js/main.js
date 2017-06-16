$(document).ready(function() {
  $("input[type=checkbox]").removeAttr("checked"); //remove the checkboxes
  $("#projects").tabs(); //tabs
  $("ul").sortable({axis:"x", containment:"#projects"}); //move left/right
  $("ol").sortable({axis:"y", containment:"#projects"}); //move up/down
  $("#projects").on("click", "input[type=checkbox]", function() { //event deligation (diligating responsibility)
    $(this).closest("li").slideUp(function(){ //remove an li element, works only with existing elements
      $(this).remove();
    });
  });
  
  $("#projects").on("click", "span-.ui-icon-close", function() {
    var index = $(this).closest("li").index();
    var id = $("#main li:eq(" + index + ") a").attr("href"); //remove ol from the id
    $("#main li:eq(" + index + ")").remove(); //remove the li from the ol
    $(id).remove();
    $("#projects").tabs("refresh");
  });

  $("#btnAddTask").button()
  .click(function() {
    $("#task-dialog").dialog({width:400, resizable:false, modal:true,
        buttons: {
          "add new task":function() {
            $("#projects").tabs("refresh");
            var activeTab = $("#projects").tabs("options", "active");
            var title = $("#main > li:nth-child("+ (activeTab + 1)+") > a").attr("href");
            $("#projects " + title).append("<li><input type='checkbox'>" + $("#new-task").val() + "</li>");
            $("#new-task").val("");
            $(this).dialog("close");
          },

          "cancel":function(){
            $("#new-task"),val("");
            $(this).dialog("close");
          }
        }
      });
    });

    $("#btnAddProject").button()
    .click(function() {
      $("#project-dialog").dialog({width:400, resizable:false, modal:true,
        buttons: {
          "add new project":function(){ //adds a tab to the list through the add project button
            var projectName = $("#new-project").val();
            var replaceName = projectName.split(" ").join("_");
            $("<li><a href='#" + replaceName + "'>" + projectName  + "</a><span class='ui-icon ui-icon-close'></span></li>")
            .appendTo("#main");
            $("<ol id='" + replaceName + "'></ol>").appendTo("#projects");
            $("#projects").tabs("refresh");
            var tabCount = $("#projects .ui-tabs-nav li").length;
            $("#projects").tabs("options", "active", tabCount-1);
            $("#new-project").val("");
            $this.dialog("close");
          },

          "cancel":function(){
            $("#new-project"),val("");
            $(this).dialog("close");
          },
        }
      });
    });

});
