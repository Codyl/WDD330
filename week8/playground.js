var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "green";
context.fillRect(10,10,100,50);

var para = document.getElementById("para");
para.addEventListener("dragover", function(event) {
    event.preventDefault();
});
para.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", this.id); 
});
var canvas = document.getElementById("myCanvas");
canvas.addEventListener("dragover", function(event) {
    event.preventDefault();
    console.log("NOoo! Don't put your block of text on me!!!")
});
var bottomElem = document.getElementById("bottom");
bottomElem.addEventListener("drop", function(event) {
    event.preventDefault();
    console.log("Whew! You made it." + event.dataTransfer.getData());
    bottomElem.innerText = para.innerText;
    para.remove();
});
var container = Raphael(document.getElementById("circ"),125,125);
var spinner = container.image("dance.png",0,0,125,125);
var attrsToAnimate = { transform: "r720" }; 
spinner.animate(attrsToAnimate, Infinity);