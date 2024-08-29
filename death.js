const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const victor = urlParams.get('victor');

if (victor == "enemy") {
    document.getElementById("title").innerText = `USS Voyager was destroyed`;
}

else if (victor == "voyager") {
    document.getElementById("title").innerText = `${localStorage.getItem("race")} ship was destroyed`;
}