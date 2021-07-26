import data from "./data/rickandmorty/rickandmorty.js"

import {filtrarVivo} from "./data.js"

const characters = data.results // []

let charactersHtml = ''

for (let i = 0; i < characters.length; i++) {
    charactersHtml += `<div class="card">
        <img src="${characters[i].image}">
        <h3>${characters[i].name}</h3>
        <h3>${"Especie:"+ characters[i].species}</h3>
        </div>`
    
}

console.log(charactersHtml);

document.getElementById('root').innerHTML = charactersHtml


let tarjetas = document.getElementById("root")

tarjetas.addEventListener("click", function(){
    alert("deberia mostrar info tarjetas")
})

/*const findNames = characters.name.filter(function(personaje){
    return personaje===characters.name})*/

   // console.log (findNames)

    window.addEventListener('DOMContentLoaded', () => {
        console.log(filtrarVivo(characters,"Dead"))
    });


/*const findRick = characters.find(n) == n.name ==="Rick";
console.log (findRick.name); */
