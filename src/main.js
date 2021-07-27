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

document.getElementById('root').innerHTML = charactersHtml


let tarjetas = document.getElementById("root")

tarjetas.addEventListener("click", function(){
    alert("deberia mostrar info tarjetas")
})



    window.addEventListener('DOMContentLoaded', () => {
        // eslint-disable-next-line no-console
        console.log(filtrarVivo(characters,"Dead"))
    });


let opcionesStatus = document.getElementById("status");
 opcionesStatus = document.createElement("option");
 document.write(opcionesStatus);
 


 /*function filterBy(){
    let optionsSelected = document.getElementById("category");
    let finalOption = optionsSelected.value;
    return finalOption
    }

 document.getElementById("categoriesContainer").innerHTML = "opcionesFiltradas";
    
*/

  /*   let optionStatus = document.getElementById("status") (filtrarVivo(characters, "Dead" || "Alive"))
     let optionGender = document.getElementById("gender")(filtrarGenero(characters, "Female" || "Male"))
     let optionSpecies =document.getElementById("species")(filtrarEspecie(characters, "Human" || "Alien"))
*/
