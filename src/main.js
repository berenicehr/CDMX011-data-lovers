import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// eslint-disable-next-line no-console
console.log(example, data);
const characters = data.results
let characterHtml = ""
characters.forEach((character=> {
  characterHtml += `<div class= "card">
           <img src = "${character.image}"> 
          <div class="info">   
          <h3>${character.name} </h3>
          <p>Status: ${character.status}</p>
          <p>Specie: ${character.species}</p>
          <p>Gender: ${character.gender}</p>
          <p>Type: ${character.type}</p>
          <p>Origin: ${character.origin.name}</p>
      
        </div>
       </div> `
}))
document.getElementById("data").innerHTML = characterHtml
