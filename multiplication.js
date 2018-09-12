$(function() {
  "use strict";
  
  var
    i,
    j,
    result,
    $taget = $("#multiplication");
    
  for(i = 1; i < 10; i++) {
    $taget.append($("<tr>").attr("id", "line" + i));
    for(j = 1; j < 10; j++) {
      result = i * j;
      $("#line" + i).append($("<td>").text(i + "*" + j + "=" + result));
    }
  }
})