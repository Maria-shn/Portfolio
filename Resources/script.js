const menubars =document.getElementById("menubars")
const menu =document.getElementById("menu")

let appear = function() {
    menu.style.borderRight = "white thin";
    menu.style.transform = "translate(195px)";
};

const disappear = function() {
    menubars.style.borderRight = "none";
    menubars.style.transform = "translate(-195px)";
    appear = false;
};

menubars.addEventListener("click", appear);

document.getElementById("presentation").innerHTML= "hi"