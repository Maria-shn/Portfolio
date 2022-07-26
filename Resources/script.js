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

if (menu.style.transform = "translateX(-250px)") {
menubars.addEventListener("click", function() {
    menu.style.borderRight = "white solid thin";
    menu.style.transform = "translateX(-50px)";
    menu.style.background = "black";
});
} else if(menu.style.transform = "translateX(-50px)") {
    menubars.addEventListener("click", function() {
        menu.style.borderRight = "none";
        menu.style.transform = "translateX(-250px)";
        menu.style.background = "none";
    });

}
