const missions = ["Energise casuality to sick bay", "Fix the ship", "Leave the system"];
const actions = ["Energise", "Call B'Elanna", "Engage"];
const links = ["casualty.html", "engineer.html", "engage.html"];

const randomIndex = Math.floor(Math.random() * missions.length);

const mission = missions[randomIndex];

document.getElementById("mission").innerText = mission;
document.getElementById("action").innerText = actions[randomIndex];
document.getElementById("action").href = links[randomIndex];