/** @format */
/*const minKnap1 = document.getElementById("alkohol");
const minKnap2 = document.getElementById("alkoholfri");

function funktionDerKaldesVedKlik() {
  console.log("funktionDerKaldesVedKlik");

  if (image == document.getElementById("alkohol")) {
    console.log(alkohol);
  } else {
    console.log(alkoholfri);
  }
}

minKnap1.addEventListener("click", funktionDerKaldesVedKlik);
minKnap2.addEventListener("click", funktionDerKaldesVedKlik);*/

const alkohol1 = document.querySelector("#snaps");
const alkohol2 = document.querySelector("#beer");
const alkofri1 = document.querySelector("#cola");
const alkofri2 = document.querySelector("#fanta");

alkohol1.addEventListener("click", klikAlkohol);
alkohol2.addEventListener("click", klikAlkohol);
alkofri1.addEventListener("click", klikAlkoholFri);
alkofri2.addEventListener("click", klikAlkoholFri);

function klikAlkohol() {
  console.log("indeholder alkohol");
}

function klikAlkoholFri() {
  console.log("indeholder alkohol");
}

if (this == klikAlkohol) {
  console.log("indeholder alkohol");
} else {
  console.log("alkoholfri");
}
