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



  function Character (data){
  this.elementId = data.elementId;
  this.name = data.naem;
  this.avatar = data.avatar;
  this.health = data.health;
  this.diceCount = data.diceCount;
  this.getCharacterHtml = function(){
    const { elementId ,name ,avatar ,health ,diceCount} = this;
    const diceHtml =getDiceHtml(diceCount)
      
      document.getElementById(elementId).innerHTML = `
      <div class="character-card">
      <h4 class="name"> ${name} </h4>
      <img src="${avatar}"  class="avatar">
      <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container">
      ${diceHtml}
  </div>`;
  }
  
} 
const wizard = new Character(hero)
const orc = new Character(monster)

wizard.getCharacterHtml()
orc.getCharacterHtml()

