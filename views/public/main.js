"use strict";
const contentDiv = document.querySelector(".content-container");
let toUrl;
let fromUrl;
navigateTo("main");
window.addEventListener("click", e => {
    let target = e.target;
    if (target.classList.contains("nav__cursor")) {
        buttonAnimation(target);
    }
    setTimeout(() => {
        if (target.classList.contains("nav-main")) {
            navigateTo("main");
        }
        if (target.classList.contains("nav-about")) {
            navigateTo("about");
        }
        if (target.classList.contains("nav-projects")) {
            navigateTo("projects");
        }
        if (target.classList.contains("nav-contact")) {
            navigateTo("contact");
        }
    }, 300);
});
window.addEventListener("keyup", e => {
    let textinput = document.querySelector("#contact-form__texta");
    if (textinput.textLength < 1) {
        textinput.style.width = `100%`;
        textinput.style.height = `100%`;
        textinput.style.background = `url("images/cat2.webp")`;
        textinput.style.backgroundRepeat = `no-repeat`;
        textinput.style.backgroundSize = `25%`;
        textinput.style.maxWidth = `500px`;
        textinput.style.maxHeight = `300px`;
        textinput.style.backgroundPositionX = `50%`;
        textinput.style.backgroundPositionY = `50%`;
        textinput.style.fontSize = `115%`;
        textinput.style.resize = `none`;
        textinput.style.transition = `2.5s;`;
    }
    if (textinput.textLength >= 1) {
        textinput.style.transition = `2.5s`;
        textinput.style.backgroundPosition = `-100%`;
    }
    console.log(textinput.textLength);
});
function navigateTo(to) {
    fetch(`/${to}`)
        .then(res => {
        toUrl = to;
        return res.text();
    })
        .then(content => {
        contentDiv.classList.remove(`content-container__${fromUrl}`);
        contentDiv.classList.add(`content-container__${toUrl}`);
        contentDiv.innerHTML = content;
        fromUrl = toUrl;
    });
}
function buttonAnimation(target) {
    let button = document.querySelectorAll(".nav__cursor");
    button.forEach(btn => {
        btn = btn;
        if (btn === target) {
            btn.classList.add(`btn-animation__click`);
            setTimeout(() => {
                btn.classList.remove(`btn-animation__click`);
            }, 300);
        }
    });
}
