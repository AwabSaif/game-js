import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js"




function Character(data) {
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)


    this.takeDamage = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce( (total, num) => total + num)
        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
    }
    this.getDiceHtml =  () => {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map( num => `<div class="dice">${num}</div>` ).join('')

    }
    this.getCharacterHtml =  () => {
        const { elementId, name, avatar, health, diceCount, diceArray } = this;
        const diceHtml = this.getDiceHtml(diceCount);
     
        return `
          <div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img src="${avatar}"  class="avatar">
          <p class="health">health: <b> ${health} </b></p>
          <div class="dice-container">
          ${diceArray}
      </div>`;
    }

}


export default Character  