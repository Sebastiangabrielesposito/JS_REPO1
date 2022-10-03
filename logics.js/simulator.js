var btc = 20000;
var methods =["Mercado pago", "UALA"]
let operation;
let registrer;
let login;
let age;
let question2;
var typecard;
var typecard1;
var other;
//alert("BIENVENIDO A BLACK RHYNO EXCHANGE")


// localStorage.getItem("userInfo", userInfo);

const userInfo =  JSON.parse(localStorage.getItem('userInfo'));

if(localStorage.getItem('userInfo')){
    const TitleUser = document.getElementById("TitleUser");
    const tituloSimulator = document.createElement("h1");
    const textNode = document.createTextNode(`Bienvenido ${userInfo.usuario}`);
    tituloSimulator.append(textNode);

    TitleUser.append(tituloSimulator);
}

//Inicio moddark()
const container = document.getElementById("container");
const moon = document.getElementById("moon");
let moon1 = document.getElementById("moon1");
let sun1 = document.getElementById("sun1");
let forminput = document.getElementById("forminput");
let formone = document.getElementById("formone");
let formtwo = document.getElementById("formtwo");
let formthree = document.getElementById("formthree");
let formfour = document.getElementById("formfour");
let formfive = document.getElementById("formfive");
let formsix = document.getElementById("formsix");
let formseven = document.getElementById("formseven");
let formeigth = document.getElementById("formeigth");
let amount = document.getElementById("amount");

function moddark1 (){
    if(forminput.style.color != "white"){
        forminput.style.color = "white";
        formone.style.color = "white";
        formtwo.style.color = "white";
        formthree.style.color = "white";
        formfour.style.color = "white";
        formfive.style.color = "white";
        formsix.style.color = "white";
        formseven.style.color = "white";
        formeigth.style.color = "white";
        container.classList.add("lunar",);
        sun1.classList.remove("desaparecer");
        moon1.classList.add("desaparecer");
        paragrap.style.color = "white";
        amount.style.color = "white";
        //forminput.style.background = "azure";
        //moon1.style.color = "white";
    }else {
        forminput.style.color = "#17265F";
        container.classList.remove("lunar");
        sun1.classList.add("desaparecer");
        moon1.classList.remove("desaparecer");
        moon1.style.color = "rgb(5, 5, 53)";
        formone.style.color = "#17265F";
        formtwo.style.color = "#17265F";
        formthree.style.color = "#17265F";
        formfour.style.color = "#17265F";
        formfive.style.color = "#17265F";
        formsix.style.color = "#17265F";
        formseven.style.color = "#17265F";
        formeigth.style.color = "#17265F";
        paragrap.style.color = "#060945";
        amount.style.color = "rgb(5, 5, 53)";
    }
}    

moon1.addEventListener("click", (e) => {
    moddark1();
    if(container.classList.contains("lunar")){
        localStorage.setItem("themeuser","true");
    }else {
        localStorage.setItem("themeuser","false");
    }
    
});
sun1.addEventListener("click", (e) => {
    moddark1();
    if(container.classList.contains("lunar")){
        localStorage.setItem("themeuser","true");
    }else {
        localStorage.setItem("themeuser","false");
    }
    
});


//Inicio Localstorage

if(localStorage.getItem("themeuser") === "true"){
    container.classList.add("lunar",);
    forminput.style.color = "white";
    formone.style.color = "white";
    formtwo.style.color = "white";
    formthree.style.color = "white";
    formfour.style.color = "white";
    formfive.style.color = "white";
    formsix.style.color = "white";
    formseven.style.color = "white";
    formeigth.style.color = "white";
    container.classList.add("lunar",);
    amount.style.color = "white"
    sun1.classList.remove("desaparecer");
    moon1.classList.add("desaparecer");
    paragrap.style.color = "white";
}else {
    container.classList.remove("lunar",);
}


//Inicio conversor de criptomonedas

const form = document.querySelector("#form-search");
const moneda = document.querySelector("#moneda");
const criptomoneda = document.querySelector("#criptomonedas");
const formContainer = document.querySelector(".form-side");
const containerAnswer = document.querySelector(".container-answer");

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptos();

    form.addEventListener('submit', submitForm);
    moneda.addEventListener('change', getValue);
    criptomoneda.addEventListener('change', getValue);
})

function submitForm(e){
    e.preventDefault();
    const {moneda, criptomoneda} = objBusqueda;
    if (moneda === '' || criptomoneda === '') {
        showError('Seleccione ambas monedas...');
        return;
    }
    consultarAPI(moneda, criptomoneda);
    //console.log(moneda);
    //console.log(criptomoneda);
}

function consultarAPI(moneda, criptomoneda){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    fetch(url)
        .then(resultado => resultado.json())
        .then(resultadoJson => {
            mostrarCotizacion(resultadoJson.DISPLAY[criptomoneda][moneda]);
            //console.log(resultadoJson.DISPLAY[criptomoneda][moneda]);
        })
        .catch(error => console.log(error));
}

function mostrarCotizacion(data){
    clearHTML();
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = data;
    const answer = document.createElement('div');
    answer.classList.add('display-info');
    answer.innerHTML = `
    <p class="main-price">Precio: <span>${PRICE}</span></p>
    <p>Precio más alto del día:: <span>${HIGHDAY}</span></p>
    <p>Precio más bajo del día: <span>${LOWDAY}</span></p>
    <p>Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span></p>
    <p>Última Actualización: <span>${LASTUPDATE}</span></p>
    `;
    containerAnswer.appendChild(answer);
}

function showError(mensage){
    const error = document.createElement('p');
    error.classList.add("error");
    error.textContent = mensage;
    formContainer.appendChild(error);
    setTimeout(() => error.remove(), 3000);
}

function getValue(e){
    objBusqueda[e.target.name] = e.target.value; 
}

function consultarCriptos(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(respuestaJson => {
            selectCriptos(respuestaJson.Data);
            //console.log(respuestaJson.Data);
        })
        .catch(error => console.log(error));
}

function selectCriptos(criptos){
    criptos.forEach(cripto => {
        const {FullName, Name} = cripto.CoinInfo;
        const option = document.createElement("option");
        option.value = Name;
        option.textContent = FullName;
        criptomoneda.appendChild(option);
    });
}

function clearHTML(){
    containerAnswer.innerHTML = '';
}



//inicio simulador de conversión
function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    var dolar = 300;
    let resultado = 0
    let euro = 310;
    
    
    if(!valore){
        errorConvertirdivisa.classList.remove("desaparecer")
        errorConvertirdivisa.classList.add("aparecer")  
    }
    setTimeout(() => {
        document.getElementById("errorConvertirdivisa").classList.add('desaparecer');
    }, 5000);
    

    
    const Result = (moneda) => {
        let errorConvertirdivisa = document.getElementById("errorConvertirdivisa")
        let resultado1 = document.getElementById("resultado1");
        
        if(resultado  >= 0.01) {
            document.getElementById("resultado1").innerHTML= moneda + resultado.toFixed(2);
            errorConvertirdivisa.classList.add("desaparecer");
            errorConvertirdivisa.classList.remove("aparecer"); 
            resultado1.classList.add("aparecer");
            resultado1.classList.remove("desaparecer");
            
            fullenter.addEventListener("keyup", () => {
                if(!valore.value) {
                    console.log(valore);
                    resultado1.classList.add("desaparecer");
                    resultado1.classList.remove("aparecer");
                };    
            });
        }    
        else{
            // document.getElementById("resultado1").innerHTML= "Resultado: $0.00"
            errorConvertirdivisa.classList.remove("desaparecer");
            errorConvertirdivisa.classList.add("aparecer");  
            resultado1.classList.remove("aparecer");
            resultado1.classList.add("desaparecer");
        }
        
        setTimeout(() => {
            document.getElementById("errorConvertirdivisa").classList.add('desaparecer');
        }, 5000);  

    }; 
    
    if(document.getElementById("uno").checked) {
        resultado = valore / dolar;
        Result("(USD) ")
    }
    else if (document.getElementById("dos").checked) {
        resultado = valore / euro;
        Result("(EU) ");
    }
    else if (document.getElementById("tres").checked) {
        resultado = dolar * valore;
        Result("($) ");   
    }
    else if (document.getElementById("cuatro").checked) {
        resultado = euro *  valore;
        Result("($) ");
    } 
    else if (document.getElementById("cinco").checked) {
        resultado = valore * 1.05 ;
        Result("(EU) ");
    }
    else if (document.getElementById("seis").checked) {
        resultado =  valore *  0.96 ;
        Result("(USD) ");
    }    
}


function convertirbtc(){
    yuan = 20.41;
    let resultado = 0
    var valore = parseInt(document.getElementById("valor").value);
    console.log(valore);
    function Result (moneda){
        let errorConvertirdivisa = document.getElementById("errorConvertirdivisa")
        let resultado1 = document.getElementById("resultado1");
        let fullenter = document.getElementById("fullenter");
        
        if(resultado  >= 0.01) {
            document.getElementById("resultado1").innerHTML= moneda + resultado.toFixed(2);
            errorConvertirdivisa.classList.add("desaparecer");
            errorConvertirdivisa.classList.remove("aparecer"); 
            resultado1.classList.add("aparecer")
            resultado1.classList.remove("desaparecer")
            
            fullenter.addEventListener("keyup", () => {
                if(!valore.value) {
                    console.log(valore);
                    resultado1.classList.add("desaparecer");
                    resultado1.classList.remove("aparecer");
                };    
            });
        }
        else{
            // document.getElementById("resultado1").innerHTML= "Resultado: $0.00"
            errorConvertirdivisa.classList.remove("desaparecer");
            errorConvertirdivisa.classList.add("aparecer");  
            resultado1.classList.remove("aparecer");
            resultado1.classList.add("desaparecer");
        }
        setTimeout(() => {
            document.getElementById("errorConvertirdivisa").classList.add('desaparecer');
        }, 5000);
        

    };
    if(document.getElementById("siete").checked) {
        resultado = valore / yuan;
        Result("(CNY) ");
    }
    
    if(document.getElementById("ocho").checked) {
        resultado = yuan * valore;
        Result("($) ");    
    } 
}
const cotizar = document.getElementById("cotizador");
cotizar.addEventListener("click", () => convertir() + convertirbtc());





const info = document.getElementById("info")
const btn = document.getElementById("btn")
const paragrap = document.getElementById("paragraph")
paragrap.style.color = "#060945";

btn.addEventListener("click", (e) => {
    (paragrap.classList.contains("desaparecer")) ?  paragrap.classList.remove("desaparecer") : paragrap.classList.add("desaparecer");
    
});


// const opcion1 = "1.Peso ($)/Dólar(U$D)";
// const opcion2 = "2.Peso($)/Euro(EU)";
// const opcion3 = "3.Dólar(U$D)/Peso($)";
// const opcion4 = "4.Euro(EU)/Peso($)";
// const opcion5 = "5.Dólar(U$D)/Bitcoin(BTC)"
// const opcion6 = "6.Peso($)/Bitcoin(BTC)"
// const opcion7 = "7.Bitcoin(BTC)/Dólar(U$D)"
// const opcion8 = "8.Bitcoin(BTC)/Peso($)"
// methods.push("Lemon cash");

// let suscription = [{
//     level: "Init",
//     price: 25
// },
// {
//     level: "Medium",
//     price: 50

// }];

// let expert = {
//     level:"Expert",
//     price: 100
// };
// //Métodos
// suscription.push(expert);
// console.log("Se encuentra Lemon cash en lista methods?:  " + methods.includes("Lemon cash"));
// console.log("Hay alguna suscripción de valor U$D 101?: " + suscription.some(s => s.price > 100));
// console.log(suscription.filter(item => item.level === "Medium" && item.price < 55));
// console.log(suscription.filter(item => item.price > 20));
// console.log(suscription.find(su => su.level === "Init"));
// console.log(methods.find(method => method === "UALA"));
// console.log(suscription.map(item => item.level));
//fin métodos

//Inicio de login
// function log(){
//     login = Number(prompt(" \n Black Rhyno Exchange \n\n 1. Ingresar a la cuenta \n 2. Registrarse "));
// }    
// log();
// while(login >= 3 || login <= 0){
//     log();
// }   
        

// if(login == 1) {   
//     let userlogin = {
//         user : (prompt("Ingrese su nombre de usuario: ")) ,
//         password : (prompt("Ingrese su contraseña: " )),
//     }
//     alert("Bienvenido a Black Rhyno usuario " + userlogin.user + " " + userlogin.password);   
// }    
// else if (login == 2){    
//     age = Number(prompt("Ingrese su edad: "))
    
//     while(age <= 17){
//         alert("Debe ser mayor de 18 años para ingresar")
//         age = Number(prompt("Ingrese su edad: "))    
//     }
    
//     let registrer = {
//         name : prompt("Ingrese su nombre: "),
//         lastname: prompt("Ingrese su apellido: "),
//         mail: prompt("Ingrese su E-Mail:"),
//         country: prompt("Ingrese pais de residencia: "),     
//     }
    
//     alert("Confirme que todos los datos sean correctosv \n \n" + registrer.name + "\n" + registrer.lastname + "\n"
//     + registrer.mail + "\n" + registrer.country);
    
//     question2 = Number(prompt("Ingrese el tipo de subscripción \n0.init: U$D 25 \n1.Medium: U$D 50 \n2.Expert: U$D 100 \n3.En otro momento"));
    
//     if(question2 >= 0 || question2 <= 2){
//         console.log(suscription[question2]);
//     }
//     else{
//         alert("Puede elegir su subscripción en cualquier momento");
//     }
//     alert("Gracias por su registro, Bienvenido a Black Rhyno usuario " + registrer.name + " " + registrer.lastname);
// }
// else{
//     alert("Ingresa nuevamente para identificarte");
// }
// //fin login


// //Inicio elegir operación
// function newoperation(){
//     operation = parseInt(prompt("Ingrese número de la operacion a efectuar: \n"+ opcion1 + "\n" + opcion2 + "\n" + opcion3 + "\n" + opcion4 + "\n"
//     + opcion5 + "\n"  +  opcion6 + "\n" + opcion7 + "\n" + opcion8 ));
// }

// if(login === 1,2){
//     newoperation();
// }
// while (operation >= 9 || operation <= 0) { 
//     newoperation();
// }         
// ///fin elegir operación


// //inicio elegir tipo de transacción
// function payment_type(){
//     typecard = prompt("Ingrese tipo de transacción: \n 1.Tarjeta de debito \n 2.tarjeta de credito \n 3.Otro");
// }
// if ( operation <= 6 && operation >= 1 ) {
//     payment_type();
// }
// while(typecard >=4){
//     payment_type();
// }
// //fin elegir tipo de transacción


// //inicio otros medios de pago
// function other_payment () {
//     other = prompt(" 0. Mercado pago \n 1. UALA  \n 2. Lemon cash")
//         if(methods[other] === "Lemon cash") {
//             alert("10% de descuento en tus comisiones por usar "+  methods[other])
//         }
    
// }
//     if (typecard == 3) {
//     other_payment();
// }
// while(other >= 3) {
//     other_payment();
// }
// //fin otros medios de pago



// //inicio valor a cambiar
// if ( operation <= 6 && operation >= 1 ) {
//     var valore = parseInt(prompt("Ingrese valor a cambiar: "));
// }
// while(valore <= 0){
//     var valore = parseInt(prompt("Ingrese valor a cambiar: "));
// }
// //fin valor a cambiar


// //incio tipo de transacción parte2
// function payment_type2(){
//     typecard1 = prompt("Ingrese tipo de transacción: \n 1.Criptomonedas \n  2.Otro");
// }

// if(operation === 7) {
//     payment_type2();
// }
// else if (operation === 8){
//     payment_type2();
// }
// while(typecard1 >= 3 || typecard1 <= 0){
//     payment_type2();
// }

// if (typecard1 == 2) {
//     other_payment();
// }
// //fin tipo de transacción parte2

//fin simulador conversor


// //inicio transacción efectuada
// if(operation <= 6){
//     switch(typecard) {
//         case  "1":
//             alert("Su operación fue efectuada con éxito mediante una tarjeta de debito")
//             break;
//         case "2":
//             alert("Su operación fue efectuada con éxito mediante una tarjeta de credito");
//             break;
//         case "3":
//             alert("Su operacion fue realizada con éxito mediante el método de pago electronico " + methods[other]);
//             break;    
//         default:
//             alert("Su operación no fue realizada")
//     }
// }

// if(operation >= 7 && operation <= 8){    
//     switch(typecard1) {
//         case "1":
//             alert("Su operación fue efectuada con éxito atraves de criptomonedas");
//             break; 
//         case "2":
//             alert("Su operacion fue realizada con éxito mediante el método de pago electronico " + methods[other]);
//             break;
//         default:
//             alert("Su operación no fue realizada")
//     }       
// } 

//fin transacción efectuada

