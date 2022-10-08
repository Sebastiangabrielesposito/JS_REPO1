//("BIENVENIDO A BLACK RHYNO EXCHANGE")


//Inicio Localstorage-usuario
const userInfo =  JSON.parse(localStorage.getItem('userInfo'));

// localStorage.getItem("userInfo", userInfo);

if(localStorage.getItem('userInfo')){
    const TitleUser = document.getElementById("TitleUser");
    const tituloSimulator = document.createElement("h1");
    const textNode = document.createTextNode(`Bienvenido ${userInfo.usuario}`);
    tituloSimulator.append(textNode);

    TitleUser.append(tituloSimulator);
}

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


const info = document.getElementById("info")
const btn = document.getElementById("btn")
const paragrap = document.getElementById("paragraph")
paragrap.style.color = "#060945";

btn.addEventListener("click", (e) => {
    (paragrap.classList.contains("desaparecer")) ?  paragrap.classList.remove("desaparecer") : paragrap.classList.add("desaparecer");
    
});


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
        $reloj.style.color = "white";
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
        $reloj.style.color = "#0f3854";
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


//Inicio Localstorage-Moddark

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
    $reloj.style.color = "white";
}else {
    container.classList.remove("lunar",);
    $reloj.style.color = "#0f3854";
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
    
    if(!valore || Number(valore)){
        errorConvertirdivisa.classList.remove("desaparecer")
        errorConvertirdivisa.classList.add("aparecer")  
    }
    setTimeout(() => {
        document.getElementById("errorConvertirdivisa").classList.add('desaparecer');
    }, 5000);
            
    const Result = (moneda) => {
        let resultado1 = document.getElementById("resultado1");
        let errorConvertirdivisa = document.getElementById("errorConvertirdivisa");
            
        if(resultado  >= 0.01) {
            document.getElementById("resultado1").innerHTML= moneda + resultado.toFixed(2);
            errorConvertirdivisa.classList.add("desaparecer");
            errorConvertirdivisa.classList.remove("aparecer"); 
            resultado1.classList.add("aparecer");
            resultado1.classList.remove("desaparecer");
            
            fullenter.addEventListener("keyup", () => {
                if(!valore.value) {
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
    // console.log(valore);
    function Result (moneda) { 
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




