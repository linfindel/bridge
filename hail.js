const video = document.getElementById("hail-screen");

const response = Math.round(Math.random());

setTimeout(() => {
    if (response == 0 || (localStorage.getItem("race") == "Hirogen" || localStorage.getItem("race") == "Romulan")) {
        document.getElementById("title").innerHTML = "No response";
        document.getElementById("fire").style.opacity = "1";
        document.getElementById("hail-again").style.opacity = "1";
    }

    else {
        document.getElementById("title").innerHTML = "Frequencies open";

        video.src = `video/${localStorage.getItem("race")}.mp4`;

        video.play();

        video.onended = () => {
            document.getElementById("title").innerHTML = "Frequencies closed";
            video.style.opacity = "0";
            document.getElementById("fire").style.opacity = "1";
        }
    }
}, 3000);