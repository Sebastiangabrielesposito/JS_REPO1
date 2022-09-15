const container = document.getElementById("container");
const moon = document.getElementById("moon");
let moon1 = document.getElementById("moon1");
let sun1 = document.getElementById("sun1");
let main_contacto = document.getElementById("main_contacto");
let nuestas_oficinas = document.getElementById("nuestas_oficinas");

function moddark2 (){
    if(main_contacto.style.color != "white"){
        main_contacto.style.color = "white";
        container.classList.add("lunar",);
        nuestas_oficinas.style.color = "white";
        sun1.classList.remove("desaparecer");
        moon1.classList.add("desaparecer");
        //moon1.style.color = "white";
    }else {
        main_contacto.style.color = "#17265F";
        container.classList.remove("lunar");
        nuestas_oficinas.style.color = "#17265F";
        moon1.classList.remove("desaparecer");
        sun1.classList.add("desaparecer");
        moon1.style.color = "rgb(5, 5, 53)";
    }
}    

moon1.addEventListener("click", (e) => {
    moddark2();
    if(container.classList.contains("lunar")){
        localStorage.setItem("themeuser","true");
    }else {
        localStorage.setItem("themeuser","false");
    }
});
sun1.addEventListener("click", (e) => {
    moddark2();
    if(container.classList.contains("lunar")){
        localStorage.setItem("themeuser","true");
    }else {
        localStorage.setItem("themeuser","false");
    }
});

if(localStorage.getItem("themeuser") === "true"){
    container.classList.add("lunar",);
    main_contacto.style.color = "white";
    nuestas_oficinas.style.color = "white";
    sun1.classList.remove("desaparecer");
    moon1.classList.add("desaparecer");
}else {
    container.classList.remove("lunar",);
}