import  {getDiceRollArray ,getDicePlaceholderHtml} from "./utils.js"




function Character (data){
    Object.assign(this, data)

   this.diceArray =getDicePlaceholderHtml(this.diceCount)
    

     this.getDiceHtml = function(diceCount){
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(function(num){
            return  `<div class="dice">${num}</div>`

        }).join('')
      
     }
     this.getCharacterHtml = function(){
        const { elementId ,name ,avatar ,health ,diceCount ,diceArray} = this;
        const diceHtml = this.getDiceHtml(diceCount);  
       return  `
          <div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img src="${avatar}"  class="avatar">
          <p class="health">health: <b> ${health} </b></p>
          <div class="dice-container">
          ${diceArray}
      </div>`;
      }
    
    } 
  

  export  default Character  