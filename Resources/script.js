const menubars =document.getElementById("menubars");
const menu = document.getElementById("menu");
const menucontact = document.getElementById("menucontact");


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
})

menubars.addEventListener("click", function() {
    menucontact.style.borderRight = "white solid thin";
    menucontact.style.transform = "translateX(-150px)";
    menucontact.style.background = "black";
})

menubars.addEventListener("click", function() {
    menuprojects.style.borderRight = "white solid thin";
    menuprojects.style.transform = "translateX(-100px)";
    menuprojects.style.background = "black";
})

 /*menubars.addEventListener("click", function() {
        menu.style.borderRight = "none";
        menu.style.transform = "translateX(-250px)";
        menu.style.background = "none";
    });*/
