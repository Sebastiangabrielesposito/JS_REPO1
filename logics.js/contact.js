//Inicio sweet alert

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
let consigna;

consigna ?? prueba;



// Inicio Moddark()

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
        $reloj.style.color = "white";
        //moon1.style.color = "white";
    }else {
        main_contacto.style.color = "#17265F";
        container.classList.remove("lunar");
        nuestas_oficinas.style.color = "#17265F";
        moon1.classList.remove("desaparecer");
        sun1.classList.add("desaparecer");
        moon1.style.color = "rgb(5, 5, 53)";
        $reloj.style.color = "#0f3854";
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

//Inicio Localstorage

if(localStorage.getItem("themeuser") === "true"){
    container.classList.add("lunar",);
    main_contacto.style.color = "white";
    nuestas_oficinas.style.color = "white";
    sun1.classList.remove("desaparecer");
    moon1.classList.add("desaparecer");
}else {
    container.classList.remove("lunar",);
}



//Inicio formulario contacto

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
// const go__To = document.getElementById("go__To");
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
        break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		// document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		// document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		// document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		// document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	// const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.correo && campos.telefono){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 3000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
			icono.classList.remove('formulario__grupo-correcto');
			// go__To.classList.add("aparecer");
			// go__To.classList.remove("desaparecer");
			const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            
            Toast.fire({
                icon: 'success',
                title: 'Mensaje enviado con exito'
            })
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 3000);

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        
        Toast.fire({
            icon: 'error',
            title: 'El mensaje no se ha enviado'
        })
    }	
});



//Inicio Reloj
const $tiempo = document.querySelector(".tiempo"),
$fecha = document.querySelector(".fecha");
const $reloj = document.querySelector(".reloj");

function digitalClock() {
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth() + 1,
    anio = f.getFullYear(),
    diasemana= f.getDay();

    dia = ("0" + dia).slice(-2);
    mes = ("0" + mes).slice(-2);

    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;

    let semana =["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let showsemana = (semana[diasemana]);

    $fecha.innerHTML = `${anio}-${mes}-${dia} ${showsemana}`;
}
setInterval(() => {
    digitalClock();
},1000)



// let prueba1 = [10,20,30]
// let prueba2 = [30,40,50]
// let prueba3 = ([...prueba1,...prueba2]);
// console.log(prueba3);

// let objetoprueba = {
//     user: "pepe",
//     id: 1
// }
// let {user,id} = objetoprueba
// console.log(user);
// console.log(id);

// let objetoprueba1 ={
//     ...objetoprueba,
//     clase:1
// };
// console.log(objetoprueba1);
