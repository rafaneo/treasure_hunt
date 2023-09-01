username = document.getElementById("username");
password = document.getElementById("password");
login = document.getElementById("login");


login.addEventListener("click", function(){
    if(username.value == "Username" && password.value == "Password"){
        window.location.href = "home.html";
    }
});




