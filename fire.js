document.getElementById("ship-name").innerText = `${localStorage.getItem("race")} Ship`;

let voyagerHealth = 100;
let enemyHealth = 100;

function phasers() {
    enemyHealth -= 5;

    const audio = document.createElement("audio");
    audio.src = "audio/phaser.mp3";
    audio.play();
}

function torpedo() {
    enemyHealth -= 10;

    const audio = document.createElement("audio");
    audio.src = "audio/torpedo.mp3";
    audio.play();
}

setInterval(() => {
    document.getElementById("voyager-health").style.width = `${voyagerHealth}%`;
    document.getElementById("enemy-health").style.width = `${enemyHealth}%`;

    if (voyagerHealth <= 0) {
        window.location = "death.html?victor=enemy";
    }

    else if (enemyHealth <= 0) {
        window.location = "death.html?victor=voyager";
    }
}, 250);

setInterval(() => {
    voyagerHealth -= 10;

    const audio = document.createElement("audio");
    audio.src = `audio/${localStorage.getItem("race")}.mp3`;
    audio.play();
}, 2000);