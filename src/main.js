import data from "./data/rickandmorty/rickandmorty.js"
import { filtrarVivo } from "./data.js"

// eslint-disable-next-line no-console

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
