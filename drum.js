
function drum1Play(){
  drum1.play();
  setTimeout(() => {
    drum1.pause();
    drum1.currentTime = 0
  }
             , 5000);
}
function drum2Play(){
  drum2.play();
  setTimeout(() => {
    drum2.pause();
    drum2.currentTime = 0
  }
             , 5000);
}
function drum3Play(){
  drum3.play();
  setTimeout(() => {
    drum3.pause();
    drum3.currentTime = 0
  }
             , 5000);
}
function drum4Play(){
  drum4.play();
  setTimeout(() => {
    drum4.pause();
    drum4.currentTime = 0
  }
             , 5000);
}
function drum5Play(){
  drum5.play();
  setTimeout(() => {
    drum5.pause();
    drum5.currentTime = 0
  }
             , 5000);
}
function drum6Play(){
  drum6.play();
  setTimeout(() => {
    drum6.pause();
    drum6.currentTime = 0
  }
             , 5000);
}
function drum7Play(){
  drum7.play();
  setTimeout(() => {
    drum7.pause();
    drum7.currentTime = 0
  }
             , 5000);
}
function drum8Play(){
  drum8.play();
  setTimeout(() => {
    drum8.pause();
    drum8.currentTime = 0
  }
             , 5000);
}
var drum1 = new Audio();
drum1.src = "accordion.mp3";
var drum2 = new Audio();
drum2.src = "flute.mp3";
var drum3 = new Audio();
drum3.src = "piano.mp3";
var drum4 = new Audio();
drum4.src = "s4.mp3.mp3";
var drum5 = new Audio();
drum5.src = "sitar.mp3";
var drum6 = new Audio();
drum6.src = "Trumpet.mp3";
var drum7 = new Audio();
drum7.src = "violin.mp3";
var drum8 = new Audio();
drum8.src = "s8.mp3.mp3";
const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')
const b4 = document.getElementById('b4')
const b5 = document.getElementById('b5')
const b6 = document.getElementById('b6')
const b7 = document.getElementById('b7')
const b8 = document.getElementById('b8')
document.onkeypress = function(e)
{
  console.log(e.key)
  if(e.key == 'a' || e.key == "A"){
    b1.click();
  }
  else if(e.key == 'l' || e.key == "L"){
    b2.click();
  }
  else if(e.key == 'm' || e.key == "M"){
    b3.click();
  }
  else if(e.key == 'b' || e.key == "B"){
    b4.click();
  }
  else if(e.key == 's' || e.key == "S"){
    b5.click();
  }
  else if(e.key == 'f' || e.key == "F"){
    b6.click();
  }
  else if(e.key == 'e' || e.key == "E"){
    b7.click();
  }
  else if (e.key == 'h' || e.key == "H"){
    b8.click();
  }
};

function drum1Volume(e){
  drum1.volume = e.target.value*0.1
}
function drum1Volume(e){
    drum2.volume = e.target.value*0.1
  }
  function drum1Volume(e){
    drum3.volume = e.target.value*0.1
  }
  function drum1Volume(e){
    drum4.volume = e.target.value*0.1
  }
  function drum1Volume(e){
    drum5.volume = e.target.value*0.1
  }
  function drum1Volume(e){
    drum6.volume = e.target.value*0.1
  }
  function drum1Volume(e){
    drum7.volume = e.target.value*0.1
  }
  function drum1Volume(e){
    drum8.volume = e.target.value*0.1
  }
