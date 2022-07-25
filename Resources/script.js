function doForm() {
    var data = new FormData();
    data.append("name", document.getElementsByName("name").value)
    data.append("email", document.getElementsByName("email").value)
    data.append("message", document.getElementsByName("message").value)
    
    document.getElementById("name").innerHTML= data.name[0]
    document.getElementById("email").innerHTML= data.email[0]
    document.getElementById("message").innerHTML= data.name[0]
};

document.getElementById("SUbmit").addEventListener("click", doForm);