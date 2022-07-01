/*const MAX = 100;
const MIN = 0;
const ATTEMPTS_NUMBER = 10;*/
const settings= {
    max:100,
    min:10,
    attemptsNumber:10
};
const RANDOM_NUMBER = getRandomNumber();
console.log(settings.attemptsNumber);
console.log(settings['max']);

// const getRandomNumber = ()=>{}
function getRandomNumber(){
    const randomNumber = Math.round(Math.random()*100);
    return randomNumber
}