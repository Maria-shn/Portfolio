const menubars =document.getElementById("menubars");
const menu = document.getElementById("menu");


/*let appear = function() {
    menu.style.borderRight = "white solid thin";
    menu.style.transform = "translate(195px)";
};

const disappear = function() {
    menubars.style.borderRight = "none";
    menubars.style.transform = "translate(-195px)";
    appear = false;
}; */

menubars.addEventListener("click", function() {
    menu.style.borderRight = "white solid thin";
    menu.style.transform = "translateX(-50px)";
    menu.style.background = "black";
});
