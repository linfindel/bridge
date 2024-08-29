const video = document.getElementById("video");

function warp() {
    video.style.opacity = 1;
    video.play();

    video.onended = () => {
        location.href = "index.html";
    }
}