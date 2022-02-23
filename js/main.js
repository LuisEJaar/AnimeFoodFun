const content = document.querySelector(".content")
const  tvOn = document.querySelector('.tvStatus')

const knob = document.getElementById("knob")
knob.onclick = knobControl

let rotation = 0;

function knobControl () {
  let increment = 51
  rotation = rotation + increment
  console.log(rotation);
  console.log("its knobberin time")
  knob.style.transform = `rotate(${rotation}deg)`
  if (rotation === increment) {
    meat()
  } else if (rotation === increment*2){
    pancake()
  } else if (rotation === increment*3){
    ramen()
  } else if (rotation === increment*4){
    ooze()
  } else if (rotation === increment*5){
    omurice() 
  } else if (rotation === increment*6){
    omlette() 
  } else if (rotation === increment*7){
    off()
    rotation = 0
  }
}

function common () {
  tvOn.src = "./img/Old-Tube-Vector-Tv-EmptyScreen.png"
  content.style.backgroundImage = "url(./img/static.gif)"
}

function meat() {
  common()
  setTimeout(() => {content.style.backgroundImage = "url(./img/Meat.gif)"}, 600);
}

function pancake () {
  common()
  setTimeout(() => {content.style.backgroundImage = "url(./img/Pancake.gif)"}, 600);
}

function ramen () {
  common()
  setTimeout(() => {content.style.backgroundImage = "url(./img/Ramen.gif)"}, 600);
}

function ooze () {
  common()
  setTimeout(() => {content.style.backgroundImage = "url(./img/Ooze.gif)"}, 600);
}

function omurice() {
  common()
  setTimeout(() => {content.style.backgroundImage = "url(./img/Omurice.gif)" }, 600);
}

function omlette () {
  common()
  setTimeout(() => {content.style.backgroundImage = "url(./img/Omlette.gif)" }, 600);
}

function off () {
  tvOn.src = "./img/Old-Tube-Vector-Tv-4684771.png"
}