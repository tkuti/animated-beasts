let loadingDiv = document.getElementById("loading");
let textDiv = document.getElementById("text");
let loadingNumber = 50;
let mainNumber = 100;

for (let i = 1; i <= loadingNumber; i++) {
    fireflyMaker(loadingDiv);
}

for (let i = 1; i <= mainNumber; i++) {
    fireflyMaker(textDiv);
}


function fireflyMaker (parent) {
    let div = document.createElement("div");
    div.setAttribute("class", "firefly");
    parent.appendChild(div);
}
