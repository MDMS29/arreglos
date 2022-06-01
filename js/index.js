console.log("Conectado con Index");
var array = [];
const formulario1 = document.querySelector("#formulario1");
const result = document.querySelector("#resultado");
const inv = document.querySelector("#renviar");
const limp = document.querySelector("#limpiar");
const guardar = document.querySelector("#guardar");
const all = document.querySelector("#todos");

function solution(array) {
    for(let i = 0; i < array.length; i++){
        let palabra = array[i].split('').reverse().join('')
        let label = document.createElement("label");
        label.textContent = i + " "+ palabra;
        formulario1.appendChild(label);
    }
}


inv.addEventListener("click" , function(e){
    e.preventDefault();
    const palabra = document.querySelector(".palabra").value;
    let invertir = palabra.split('').reverse().join('');
    console.log(invertir);
    result.textContent = invertir;
});

limp.addEventListener("click" , function(){
    
});

guardar.addEventListener("click" , function(e){
    e.preventDefault();
    const palabra = document.querySelector(".palabra").value;
    array.push(palabra);
    console.log(array);
    console.log(array.length);
    formulario1.reset();
});

document.addEventListener("click" , function(e){
    if (array.length==2){
        all.setAttribute("class", "visible");
    }
})

all.addEventListener("click" , function(e){
    e.preventDefault();
    solution(array);
})


