import { hero ,monster } from "./data.js"




function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(function(){
    return Math.floor(Math.random() * 6) + 1

   })
}
 

 function getDiceHtml(diceCount){
   return getDiceRollArray(diceCount).map(function(num){
    return `<div class="dice">${num}</div>`
   }).join("") 
  }



function renderCharacter(data){
  const { elementId ,name ,avatar ,health ,diceCont} = data
  const diceHtml =getDiceHtml(diceCont)
  
  

    
    document.getElementById(elementId).innerHTML = `
    <div class="character-card">
    <h4 class="name"> ${name} </h4>
    <img src="${avatar}"  class="avatar">
    <p class="health">health: <b> ${health} </b></p>
    <div class="dice-container">
    ${diceHtml}
</div>`
}
renderCharacter(hero)
renderCharacter(monster)



