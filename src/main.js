import data from "./data/rickandmorty/rickandmorty.js"
import { filterStatus, filterGender, filterSpecie,filterName } from "./data.js"




const characters = data.results
let characterHtml = ""
characters.forEach((character=> {
  characterHtml += `<div class= "card">
           <img src = "${character.image}"> 
          <div class="info">   
          <h3>${character.name} </h3>
          <p><b>Status:</b> ${character.status}</p>
          <p><b>Specie:</b> ${character.species}</p>
          <p><b>Gender:</b> ${character.gender}</p>
          <p><b>Type:</b> ${character.type}</p>
          <p><b>Origin:</b> ${character.origin.name}</p>
      
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
                <div class="info">   
                <h3>${filtrado.name} </h3>
                <p><b>Status:</b> ${filtrado.status}</p>
                <p><b>Specie:</b> ${filtrado.species}</p>
                <p><b>Gender:</b> ${filtrado.gender}</p>
                <p><b>Type:</b> ${filtrado.type}</p>
                <p><b>Origin:</b> ${filtrado.origin.name}</p>
            
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
          <div class="info">   
          <h3>${filtrado.name} </h3>
          <p><b>Status:</b> ${filtrado.status}</p>
          <p><b>Specie:</b> ${filtrado.species}</p>
          <p><b>Gender: </b>${filtrado.gender}</p>
          <p><b>Type: </b>${filtrado.type}</p>
          <p><b>Origin: </b>${filtrado.origin.name}</p>
      
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
            <div class="info">   
            <h3>${filtrado.name} </h3>
            <p ><b>Status:</b>${filtrado.status}</p>
            <p><b>Specie:</b>${filtrado.species}</p>
            <p><b>Gender: </b>${filtrado.gender}</p>
            <p><b>Type:</b> ${filtrado.type}</p>
            <p><b>Origin:</b> ${filtrado.origin.name}</p>
        
          </div>
         </div> `
  }))
  
  document.getElementById("root").innerHTML = mostrarFiltro

  // eslint-disable-next-line no-console
  //console.log(characterSpecie)
})


 //Filtrar por Alfabeto
document.getElementById("order").addEventListener("change", function(){
  const orderHtml = document.getElementById("order").value
  const orderAlphabet=filterName(characters, orderHtml)
  let mostrarOrden=""
  orderAlphabet.forEach((orden=> {
     mostrarOrden+= `<div class= "card">
             <img src = "${orden.image}"> 
            <div class="info">   
            <h3>${orden.name} </h3>
            <p><b>Status:</b> ${orden.status}</p>
            <p><b>Specie:</b> ${orden.species}</p>
            <p><b>Gender: </b>${orden.gender}</p>
            <p><b>Type: </b>${orden.type}</p>
            <p><b>Origin: </b>${orden.origin.name}</p>
        
          </div>
         </div> `
  }))
  
  document.getElementById("root").innerHTML = mostrarOrden
})

 