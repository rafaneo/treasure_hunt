passwords_list = [1452,3329,7186];

document.getElementById("login_2").addEventListener("click", function(){
    if(passwords_list.includes(parseInt(document.getElementById("password_2").value))){
        window.location.href = "cords.html";
    }
});