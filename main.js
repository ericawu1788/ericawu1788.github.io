
let x=0;
let words = ["Coffee.", "Friends.", "Eat.", "Recharge.", "Books.","Family.","Sleep.","Recharge.","Code.", "Myself.", "Repeat.", "Reconnect."];
setInterval(function() {
  var rand = Math.floor(Math.random() * 4);
  document.getElementById("words").innerHTML = words[x];
  x++;
  if(x==words.length-1){
    x=0;
  }
}, 2000);
