var num = document.querySelectorAll(".drum").length;

var sound = new Audio("sounds/tom-1.mp3");
for (var i = 0 ; i < num ; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", sound.play)
}

