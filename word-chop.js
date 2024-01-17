/* 
auto page reload fixed, create div(guess box) with id and class attached,css for div's guess box

10/22
*/
toGuess = "";
guessWord = [''] ;
wordChecker = [''];
let life = 5;

function wordGenerator(){

const inputElement = document.querySelector(".Word-Choice");
const inputElement2 = document.querySelector(".hint");
let Word = inputElement.value;
Word = Word.replace(" ", "");
Word = Word.toUpperCase();
const Hint =inputElement2.value;
toGuess = Word;
for (let i = 0; i < Word.length; i++) {
const a = Word.slice(i, (i+1));
guessWord.push(a);
const element = document.createElement('div'); //div creator(creates a container for each letter)
element.id = `${i+1}`;
element.className = 'letterBox';
element.innerHTML = '_';
document.getElementById("guessBox").appendChild(element);
}
document.querySelector(".Print").innerHTML = Hint;
document.getElementById("letters").classList.replace("off", "letters");
document.getElementById("word").classList.replace("word", "off")
document.getElementById("tbanner").classList.replace("tbanner", "off")

document.getElementById("hintBox").classList.replace("off", "hintBox")
for(i=1; i<6; i++ ){
  document.getElementById(`l${i}`).classList.remove("off");
  console.log(`${i}`);
}
}





function reset(){
  guessWord =[''];
  wordChecker = [''];
  life = 5;
  location.reload(true);
}

function test(){
let testing = ""
/*
test1 =['today', false, 4];
test2 =['today', false, 5];


if(test1.toString() === test2.toString()){
testing = 'Correct';
}else {
testing = 'wrong';
}
*/
testing = guessWord;
document.querySelector(".Print").innerHTML = testing;


}
function guess(letter){
let c = 0; //counter to help right n wrong
 

for(i=0; i != -1;) {
i = guessWord.indexOf(letter, i+1); // +1 so it starts after the letter it finds

if(i === -1 && c ===0){
  document.getElementById(`l${life}`).classList.add("disable");
  life--
  //alert(`wrong \n You have ${life} tries left`)
  
}else{
  //console.log(guessWord[i]);
  wordChecker[i] = guessWord[i];
  c++;
  if(i>0){
  document.getElementById(`${i}`).innerHTML = `${guessWord[i]}`;//adds right guesses to guess box
  }
}
document.getElementById(`${letter}`).classList.add("disable");

if(wordChecker.toString() === guessWord.toString()){ //win condition
  document.getElementById("letters").classList.replace("letters", "off");
  document.getElementById("hintBox").classList.replace("hintBox", "off");
  document.getElementById("winstatementbox").classList.replace("off", "letters");
  document.getElementById("winstatement").innerHTML = `You win! Good Job Guessing the word ${toGuess}. Wait to Play again`;
  //alert("You Win!")
  //reset();
  setTimeout(function(){
    reset();
 }, 5000);
  //location.reload(true);
  

}else if (life ===0){ //lose condition
  document.getElementById("letters").classList.replace("letters", "off");
  document.getElementById("hintBox").classList.replace("hintBox", "off");
  document.getElementById("winstatementbox").classList.replace("off", "letters");
  document.getElementById("winstatement").innerHTML = `You Lose! The word was ${toGuess}. Wait to try again`;
  //alert(`You Lose! The word was ${aRandomWord}`)
  setTimeout(function(){
    reset();
 }, 5000);
  //location.reload(true)
}
}

}

function directHome(){

  window.location.href= 'index.html';
}