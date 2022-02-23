document.getElementById('meat').onclick = meat
document.getElementById('pancake').onclick = pancake
document.getElementById('ramen').onclick = ramen
document.getElementById('ooze').onclick = ooze
document.getElementById('omurice').onclick = omurice
document.getElementById('omlette').onclick = omlette
const content = document.querySelector(".content")

const  tvOn = document.querySelector('.tvStatus')

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