var func;
var counter = 0;

function count() {
    document.getElementById("output").innerHTML = counter;
    counter++
}


document.getElementById("start").onclick = function () {
    func = setInterval(count, 1000);
}



document.getElementById("stop").onclick = function () {
    func = clearInterval(func);
}



document.getElementById("reset").onclick = function () {
   counter = 0;
   count();
}
