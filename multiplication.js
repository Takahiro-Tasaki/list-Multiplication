$(function() {
  "use strict";
  
  var
    i,
    j,
    result,
    $taget = $("#multiplication");
    
  for(i = 0; i < 10; i++) {
    $taget.append($("<tr>").attr("id", "line" + i));
    for(j = 1; j < 10; j++) {
      if (i === 0) {
        $("#line" + i).append($("<th>").text(j + "の段"));
      } else {
        result = j * i;
        $("#line" + i).append($("<td>").text(j + "*" + i + "=" + result));
      }
    }
  }
});