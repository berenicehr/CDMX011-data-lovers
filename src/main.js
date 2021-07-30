//import { filterStatus } from './data.js';
// import data from './data/lol/lol.js';
import data from "./data/rickandmorty/rickandmorty.js"

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

//Filtrar por Status
/* function filterStatus(characters, status){
  let result = characters.filter(character=>character.status==status)
  return result
} */

// eslint-disable-next-line no-console
//console.log(filterStatus(characters,"Alive"))

const filtersName=document.getElementById("name");
  filtersName.addEventListener("click",filter)
    function filter (){
     characters.sort(function(a, b){
    if (a.name < b.name) //sort string ascending
     return -1;
    else if  (a.name > b.name)
     return 1;
     return 0
   })
   
 
  }
  document.getElementById("name").innerHTML= filter.value
  
// eslint-disable-next-line no-undef
// eslint-disable-next-line no-console
console.log(filter)