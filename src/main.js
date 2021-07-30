import data from "./data/rickandmorty/rickandmorty.js"

import {filtrarVivo} from "./data.js"
/*
import {filtrarGenero} from "./data.js" 

import {filtrarEspecie} from "./data.js" 
*/

const characters = data.results // []

let charactersHtml = ''

for (let i = 0; i < characters.length; i++) {
    charactersHtml += `<div class="card">
        <img src="${characters[i].image}">
        <h3>${characters[i].name}</h3>
        <h3>${"Especie:"+ characters[i].species}</h3>
        </div>`
    
}

// eslint-disable-next-line no-console
console.log(charactersHtml);

/*document.getElementById('root').innerHTML = charactersHtml */


let tarjetas = document.getElementById("root")

tarjetas.addEventListener("click", function(){
    alert("deberia mostrar info tarjetas")
})



    window.addEventListener('DOMContentLoaded', () => {
        // eslint-disable-next-line no-console
        console.log(filtrarVivo(characters,"Dead"))
    });

/*const container1= document.getElementById("categoriesContainer");
let aliveCharacters= document.createElement("div")
aliveCharacters.innerHTML="Alive characters cards"
Container1.appendChild(aliveCharacters);

const container2= document.getElementById("categoriesContainer");
let deadCharacters= document.createElement("div")
deadCharacters.innerHTML="Dead characters cards"
Container2.appendChild(deadCharacters);

const container3= document.getElementById("categoriesContainer");
let unknownStatusCharacters= document.createElement ("div", "class=c3")
unknownStatusCharacters.innerHTML=`Not dead or alive (to be confirmed)
<br>${charactersHtml}`
Container3.appendChild(unknownStatusCharacters);
*/

document.getElementById("category1").addEventListener("change", function(){

    const statusDead = document.getElementById("dead").value
    const personajesFiltrados= filtrarVivo(characters, statusDead)
    // eslint-disable-next-line no-console
    console.log (personajesFiltrados)

    /*
    const container3= document.getElementById("categoriesContainer");
    let unknownStatusCharacters= document.createElement ("div", "class=c3")
    unknownStatusCharacters.innerHTML=`Not dead or alive (to be confirmed)
    <br>${personajesFiltrados}`
    container3.appendChild(unknownStatusCharacters);
*/
}
)
