window.onload = function print() {

    var args = getElements();
    var count = 0;
    var e = document.getElementById("output");

    for(var i = 0; i < args.length; i++){
        count+=args[i];
    }

    e.innerHTML = "Переданное значение " + count;
}
function getElements() {
// Пустой массив
var e = [];
var elements = location.search.substring(1);
var arr = elements.split("&");

for (var i = 0; i < arr.length; i++) {
    var pos = arr[i].indexOf('=');
    if (pos == -1) {
        continue;
    }
    var value = arr[i].substring(pos + 1);

    e[i] = parseFloat(value);

}

return e;
}