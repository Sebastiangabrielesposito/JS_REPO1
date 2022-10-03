
const container = document.getElementById("container");
const moon = document.getElementById("moon");
const username = document.getElementById("username");
const password = document.getElementById("password");
let moon1 = document.getElementById("moon1")
const Mobile_validation = document.getElementById("Mobile_validation")
const moonicon = document.getElementsByClassName("moonicon")
let main = document.getElementById("main")

//Inicio Moddark()
let change1 = document.createElement("span");
let change = () => {
    change1.style.color = "white";
    main.append(change1);
    change1.innerHTML = '<i class="fa-solid fa-sun"></i>' 
}
function moddark (){
    if(grupo__usuario.style.color != "white"){
        grupo__usuario.style.color = "white",
        grupo__password.style.color = "white";
        container.classList.add("lunar",);
        Mobile_validation.style.color = "silver";
        moon1.classList.add("desaparecer");
        change1.classList.remove("desaparecer")
        change1.classList.add("sun");
        change1.classList.add("sunicoon");
        $reloj.style.color = "white";
        change();
    }else {
        grupo__usuario.style.color = "black";
        grupo__password.style.color = "black";
        container.classList.remove("lunar")
        Mobile_validation.style.color = "black";
        moon1.classList.remove("desaparecer");
        moon1.style.color = "rgb(5, 5, 53)";
        change1.classList.add("desaparecer")
        $reloj.style.color = "#0f3854";
    }
}    

moon1.addEventListener("click", (e) => {
    moddark();
    (container.classList.contains("lunar")) ? localStorage.setItem("themeuser","true") : localStorage.setItem("themeuser","false");
    
});
change1.addEventListener("click", (e) => {
    moddark();
    if(container.classList.contains("lunar")){
        localStorage.setItem("themeuser","true");
    }else {
        localStorage.setItem("themeuser","false");
    }
});

//Inicio Localstorage

if(localStorage.getItem("themeuser") === "true"){
    container.classList.add("lunar",);
    grupo__usuario.style.color = "white", username;
    grupo__password.style.color = "white";
    Mobile_validation.style.color = "silver";
    moon1.classList.add("desaparecer");
    change1.classList.remove("desaparecer")
    change1.classList.add("sun");
    change1.classList.add("sunicoon");
    change();
    // $reloj.style.color = "white";
}else {
    container.classList.remove("lunar",);
}

//Inicio formulario index

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const go__To = document.getElementById("go__To");
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{4,12}$/, // 4 a 12 digitos.
}

const campos = {
	usuario: false,
	password: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
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

	
	if(campos.usuario && campos.password){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
            icono.classList.remove('formulario__grupo-correcto');
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
                title: 'Signed in successfully'
            })
            // 	go__To.classList.add("aparecer");
		// 	go__To.classList.remove("desaparecer");
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
            title: 'Authentication Error'
        })
    }	
});


//Inicio Creador QR

let wrapper = document.querySelector(".wrapper"),
qrinput =wrapper.querySelector(".formG .inputg"),
generateBtn = wrapper.querySelector(".formG .btn11"),
qrimg =wrapper.querySelector(".qr-code img");
let generate = document.getElementById("generate");


generateBtn.addEventListener("click", () => {
        let qrvalue = qrinput.value;
        if(!qrvalue) return;
        generateBtn.value = "Generating QR Code...";
        qrimg.src =  `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue}`;
        qrimg.addEventListener("load", () => {
            wrapper.classList.add("active1");
            generateBtn.value = "Generate QR ";
            console.log(generate.value);
        });
    });

    qrinput.addEventListener("keyup", () => {
        !qrinput.value && wrapper.classList.remove("active1");  
    });




//Inicio reloj

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