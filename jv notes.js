/*console.log("Hi from JS!");

console.log("This is great!");
alert("OMG!");

const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

//change content of page
document.body.interHTML = "this is so "
//replace everything with ^

let list_id="fourthy";

document.getElementById(list_id).innerHTML = "Fourth element";
document.getElementById(list_id).style.background = 'red';
*/
/*
ask(){
var answer = window.prompt("a word to describe your quarantine life");

if (answer == null) {
  answer = "rest";
}
}
*/
//document.querySelector('h4').innerHTML= "NEW headline'"
let x=0;
let words = ["coffee.", "friends.", "eat.", "recharge.", "books.","family.","sleep.","recharge.","video games.", "myself.", "repeat.", "reconnect."];
//document.getElementById("words").innerHTML = words[0];

setInterval(function() {
  var rand = Math.floor(Math.random() * 4);
  document.getElementById("words").innerHTML = words[x];
  x++;
  if(x==words.length-1){
    x=0;
  }
}, 2000);


/*
let words = ["coffee", "friends", "eat", "recharge", "books","family","sleep","recharge","video games", "myself", "repeat", "reconnect"];
changeword(){
for(i=0;i<words.length;i++){
    document.querySelector('h4').innerHTML= words[i];
    setTimeout(, 5000);
  if(i==words.length-1){
    i=0;
  }
}}
//document.querySelector('.hurricane').innerHTML= "something"
//can match with CSS

/*change background of all paragraphs
document.querySelector('p').style.backgroundColor = "green";
document.querySelector('body').style.backgroundColor = "red";

let our_button = document.querySelector("button");
function turnButtonRed() {
  our_button..style.backgroundcolor - "rd
}*/
