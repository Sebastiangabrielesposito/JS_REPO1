
const container = document.getElementById("container");
const moon = document.getElementById("moon");
const username = document.getElementById("username");
const password = document.getElementById("password");
let moon1 = document.getElementById("moon1")
const Mobile_validation = document.getElementById("Mobile_validation")
const moonicon = document.getElementsByClassName("moonicon")
let main = document.getElementById("main")


let change1 = document.createElement("span");
let change = () => {
    change1.style.color = "white";
    main.append(change1);
    change1.innerHTML = '<i class="fa-solid fa-sun"></i>' 
}
function moddark (){
    if(username.style.color != "white"){
        username.style.color = "white", username;
        password.style.color = "white";
        container.classList.add("lunar",);
        Mobile_validation.style.color = "silver";
        moon1.classList.add("desaparecer");
        change1.classList.remove("desaparecer")
        change1.classList.add("sun");
        change1.classList.add("sunicoon")
        change();
    }else {
        username.style.color = "black";
        password.style.color = "black";
        container.classList.remove("lunar")
        Mobile_validation.style.color = "black";
        moon1.classList.remove("desaparecer");
        moon1.style.color = "rgb(5, 5, 53)";
        change1.classList.add("desaparecer")
    }
}    

moon1.addEventListener("click", (e) => {
    moddark();
    if(container.classList.contains("lunar")){
        localStorage.setItem("themeuser","true");
    }else {
        localStorage.setItem("themeuser","false");
    }
});
change1.addEventListener("click", (e) => {
    moddark();
    if(container.classList.contains("lunar")){
        localStorage.setItem("themeuser","true");
    }else {
        localStorage.setItem("themeuser","false");
    }
});

if(localStorage.getItem("themeuser") === "true"){
    container.classList.add("lunar",);
    username.style.color = "white", username;
    password.style.color = "white";
    Mobile_validation.style.color = "silver";
    moon1.classList.add("desaparecer");
    change1.classList.remove("desaparecer")
    change1.classList.add("sun");
    change1.classList.add("sunicoon")
    change();
}else {
    container.classList.remove("lunar",);
}



// let wrapper = document.querySelector(".wrapper"),
// qrinput =wrapper.querySelector(".formG .inputg"),
// generateBtn = wrapper.querySelector(".formG .btn11"),
// qrimg =wrapper.querySelector(".qr-code img");
// let generate = document.getElementById("generate");


// generateBtn.addEventListener("click", () => {
//         let qrvalue = qrinput.value;
//         if(!qrvalue) return;
//         generateBtn.value = "Generating QR Code...";
//         qrimg.src =  `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue}`;
//         qrimg.addEventListener("load", () => {
//             wrapper.classList.add("active1");
//             generateBtn.value = "Generate QR ";
//             console.log(generate.value);
//         });
//     });

//     qrinput.addEventListener("keyup", () => {
//         if(!qrinput.value){
//             wrapper.classList.remove("active1");
//         }
//     })