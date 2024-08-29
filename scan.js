const title = document.getElementById("title");
const schematics = document.getElementById("schematics");
const hailButton = document.getElementById("hail");

const races = ["Klingon", "Romulan", "Borg", "Hirogen"];

let selectedRace = races[Math.floor(Math.random() * (races.length))];
schematics.src = `images/${selectedRace.toLowerCase()}.jpg`;

setTimeout(() => {
    title.innerText = `${selectedRace} ship detected`;
    schematics.style.opacity = "1";
    hailButton.style.opacity = "1";
}, 1000);

localStorage.setItem("race", selectedRace);