$(function() {
  "use strict";
  
  var
    i,
    j,
    result,
    $taget = $("#multiplication");
    
  for(i = 1; i < 10; i++) {
    $taget.append("<tr id='line" + i + "'></tr>");
    for(j = 1; j < 10; j++) {
      result = i * j;
      $("#line" + i).append("<td>" + i + "*" + j + "=" + result + "</td>");
    }
  }
})