const container = document.getElementById("container");
const moon = document.getElementById("moon");
const username = document.getElementById("username");
const password = document.getElementById("password");
const moon1 = document.getElementById("moon1")
const Mobile_validation = document.getElementById("Mobile_validation")
const moonicon = document.getElementsByClassName("moonicon")

moon1.addEventListener("click", (e) => {
    if(username.style.color != "white"){
        username.style.color = "white";
        password.style.color = "white";
        container.classList.add("lunar");
        Mobile_validation.style.color = "silver";
        moon1.style.color = "white";
    }else {
        username.style.color = "black";
        password.style.color = "black";
        container.classList.remove("lunar")
        Mobile_validation.style.color = "black";
        moon1.style.color = "rgb(5, 5, 53)";
        //Mobile_validation.style = "#2CA0CE"
    }
});