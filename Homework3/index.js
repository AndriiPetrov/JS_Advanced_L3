var pattern = /\d{1,2} [+*/-] \d{1,2}/
var text = "20 + 30"
var res = text.match(pattern);
document.write(res + "<br>");

var res1 = text.match(/\d{1,2}/g);
document.write(res1 + "<br>");
document.write(res1.length + "<br>");
document.write(parseInt(res1[0]) + parseInt(res1[1]));


