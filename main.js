/*const MAX = 100;
const MIN = 0;
const ATTEMPTS_NUMBER = 10;*/
const settings= {
    max:100,
    min:10,
    attemptsNumber:10
};
const RANDOM_NUMBER = getRandomNumber();
const PLAYER_NAME = getPlayerName();

console.log(settings.attemptsNumber);
console.log(settings['max']);

// const getRandomNumber = ()=>{}
function getRandomNumber(){
    const randomNumber = Math.round(Math.random()*100);
    return randomNumber
}
function getPlayerName(){
    const playerName = prompt('what is your name?', '')
    return playerName
}
function game(min, max, attemptsNumber, randomNumber, playerName){
    alert(`Hello ${playerName}!
    I take int from ${min} to ${max}! 
    find it. You have ${attemptsNumber} attempts`);

    for (let i = 0; i <=attemptsNumber; i++) {
        const playerAnswer =  prompt('name int','')
        if (playerAnswer > randomNumber){
            alert(`my number less than your. your attempts ${attemptsNumber - i}`)
        }else if(playerAnswer < randomNumber){
            alert(`my number more than your. your attempts ${attemptsNumber - i}`)
        }else{
            alert('You right');
           return
        }
        alert('Sorry. You lost')
    }
}
game(settings.min, settings.max, settings.attemptsNumber, RANDOM_NUMBER, PLAYER_NAME)