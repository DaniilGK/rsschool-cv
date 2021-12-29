let summary = document.querySelector("h2");
let skills = document.querySelector("h3");
let code = document.querySelector("h4");
let experiece = document.querySelector("h5");
let education = document.querySelector("h6");
let english = document.querySelector("h7")

function flickers(a) {
    a.style = "animation-duration: 3s; animation-name: flicker;";
    setTimeout(function() {
        a.style.animation = "none"
    }, 3000)
}

document.querySelector("body > header > div > div > ul > li:nth-child(1) > a").addEventListener("click", function backlight(event) {
    flickers(summary);
})

document.querySelector("body > header > div > div > ul > li:nth-child(2) > a").addEventListener("click", function backlight(event) {
    flickers(skills);
})

document.querySelector("body > header > div > div > ul > li:nth-child(3) > a").addEventListener("click", function backlight(event) {
    flickers(code);
})
    
document.querySelector("body > header > div > div > ul > li:nth-child(4) > a").addEventListener("click", function backlight(event) {
    flickers(experiece);
})

document.querySelector("body > header > div > div > ul > li:nth-child(5) > a").addEventListener("click", function backlight(event) {
    flickers(education);
})

document.querySelector("body > header > div > div > ul > li:nth-child(6) > a").addEventListener("click", function backlight(event) {
    flickers(english);
})
