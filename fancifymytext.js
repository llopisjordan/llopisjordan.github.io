function enlargeText(){
  document.getElementById('userText').style.fontSize ='24px';
}
function Fancify(){
  document.getElementById('userText').style.fontWeight='bold';
  document.getElementById('userText').style.color = "blue";
  document.getElementById('userText').style.textDecoration="underline";
}
function BoringBetty(){
  document.getElementById('userText').style.fontWeight='400';
  document.getElementById('userText').style.color = "black";
  document.getElementById('userText').style.textDecoration="none";
}

function Moo(){
  document.getElementById('userText').style.textTransform="uppercase";
  var userInput = document.getElementById('userText').value;
  userInput = userInput.split(".");
  userInput = userInput.join("-moo.")
  document.getElementById('userText').value = userInput;

}