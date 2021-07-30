import data from "./data/rickandmorty/rickandmorty.js"
import { filterStatus, filterGender, filterSpecie } from "./data.js"




const characters = data.results
let characterHtml = ""
characters.forEach((character=> {
  characterHtml += `<div class= "card">
           <img src = "${character.image}"> 
          <div class="info">   
          <h3>${character.name.toUpperCase()} </h3>
          <p>Status: ${character.status}</p>
          <p>Specie: ${character.species}</p>
          <p>Gender: ${character.gender}</p>
          <p>Type: ${character.type}</p>
          <p>Origin: ${character.origin.name}</p>
      
        </div>
       </div> `
}))
document.getElementById("root").innerHTML = characterHtml



  /*  window.addEventListener('DOMContentLoaded', () => {
        // eslint-disable-next-line no-console
        console.log(filtrarVivo(characters,"Dead"))
    });
  */


//Filtrar por Status
    document.getElementById("status").addEventListener("change", function(){
      const statusHtml = document.getElementById("status").value
      const characterStatus= filterStatus(characters, statusHtml)
    
      let mostrarFiltro=""
      characterStatus.forEach((filtrado=> {
        mostrarFiltro += `<div class= "card">
                 <img src = "${filtrado.image}"> 
                <div class="tarjeta">   
                <h3>${filtrado.name.toUpperCase()} </h3>
                <p>Status: ${filtrado.status}</p>
                <p>Specie: ${filtrado.species}</p>
                <p>Gender: ${filtrado.gender}</p>
                <p>Type: ${filtrado.type}</p>
                <p>Origin: ${filtrado.origin.name}</p>
            
              </div>
             </div> `
      }))
        // eslint-disable-next-line no-console
      //console.log(characterStatus)
      document.getElementById("root").innerHTML = mostrarFiltro

    })

//Filtar pos Género
document.getElementById("gender").addEventListener("change", function(){
  const genderHtml = document.getElementById("gender").value
  const characterGender= filterGender(characters, genderHtml)
  
  let mostrarFiltro=""
characterGender.forEach((filtrado=> {
  mostrarFiltro += `<div class= "card">
           <img src = "${filtrado.image}"> 
          <div class="tarjeta">   
          <h3>${filtrado.name.toUpperCase()} </h3>
          <p>Status: ${filtrado.status}</p>
          <p>Specie: ${filtrado.species}</p>
          <p>Gender: ${filtrado.gender}</p>
          <p>Type: ${filtrado.type}</p>
          <p>Origin: ${filtrado.origin.name}</p>
      
        </div>
       </div> `
}))

// eslint-disable-next-line no-console
  //console.log(characterGender)
document.getElementById("root").innerHTML = mostrarFiltro
})



//Filtrar por Especie

document.getElementById("species").addEventListener("change", function(){
  const specieHtml = document.getElementById("species").value
  const characterSpecie= filterSpecie(characters, specieHtml)
  let mostrarFiltro=""
  characterSpecie.forEach((filtrado=> {
    mostrarFiltro += `<div class= "card">
             <img src = "${filtrado.image}"> 
            <div class="tarjeta">   
            <h3>${filtrado.name.toUpperCase()} </h3>
            <p>Status: ${filtrado.status}</p>
            <p>Specie: ${filtrado.species}</p>
            <p>Gender: ${filtrado.gender}</p>
            <p>Type: ${filtrado.type}</p>
            <p>Origin: ${filtrado.origin.name}</p>
        
          </div>
         </div> `
  }))
  
  document.getElementById("root").innerHTML = mostrarFiltro

  // eslint-disable-next-line no-console
  //console.log(characterSpecie)
})


/* //Filtrar por Alfabeto
document.getElementById("order").addEventListener("change", function(){
  const orderHtml = document.getElementById("order").value
  const orderAlphabet= filterName(characters, orderHtml)
  // eslint-disable-next-line no-console
  console.log(orderAlphabet)
})
 */

    
    




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





 
