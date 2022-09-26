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

let consigna = null;
// let prueba = Swal.fire({
//     title: 'No te olvides de visitar nuestro generador QR'
//     ,
//     showClass: {
//     popup: 'animate__animated animate__fadeInDown'
//     },
//     hideClass: {
//     popup: 'animate__animated animate__fadeOutUp'
//     }
// });
let prueba = Swal.fire({
    title: '<strong>No te olvides de visitar nuestro generador QR de web page</strong>',
    icon: 'info',
    /*imageUrl: '../image/imagefooter.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Imagen publicidad QR',*/
    html:
        'Ingresa a este </b> ' +
        '<a href="../index.html#1">links</a> ' +
        'para probarlo',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
        '<a class="genialbotonsweet" href="../index.html#1"> <i class="fa fa-thumbs-up"></i> Genial!</a> '  ,
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
})




consigna ?? prueba;

let prueba1 = [10,20,30]
let prueba2 = [30,40,50]
let prueba3 = ([...prueba1,...prueba2]);
console.log(prueba3);

let objetoprueba = {
    user: "pepe",
    id: 1
}
let {user,id} = objetoprueba
console.log(user);
console.log(id);

let objetoprueba1 ={
    ...objetoprueba,
    clase:1
};
console.log(objetoprueba1);