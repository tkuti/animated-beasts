let countDown = document.getElementById("count-down");
let landingPage = document.getElementById("landing-page");
let button = document.querySelector("button");
let interval;
let loading = document.getElementById("loading");
let content = document.querySelector("#content");
let text = document.getElementById("text");
let imgDiv = document.querySelector("#img-container");
let loadingDot = document.querySelector("#loading-dot");
let mouseCursor = document.querySelector(".cursor");
let fadeClasses = document.querySelectorAll(".fade");

window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

button.addEventListener("click", function () {
    text.style.animationName = "color";
    text.style.animationDuration = "8s";
    imgDiv.style.animationName = "color";
    imgDiv.style.animationDuration = "8s";
    console.log(imgDiv);
    console.log(text);
})

const init = function () {
    if (interval) clearInterval(interval)
    seconds = 5;
    countDown.innerHTML = seconds
}
const start = function () {
    interval = setInterval(function () {
        if (seconds <= 2) {
            //clearInterval(interval);
            for (let fadeClas of fadeClasses) {
                fadeClas.style.animationName = "colorReverse";
                fadeClas.style.animationDuration = "2s";
            }
            setTimeout(function () {
                loading.style.display = "none";
                landingPage.style.display = "block";
            }, 1800)

        }
        seconds--;
        countDown.innerHTML = seconds
    }, 1000);
}
init();
dotMaker();
window.onload = start();

function dotMaker() {
    let dots = "";
    let dotInterval = setInterval(function () {
        if (dots.length < 5) {
            dots = dots + ".";
        } else {
            dots = "";
        }
        loadingDot.innerHTML = dots;
    }, 1000);
}
