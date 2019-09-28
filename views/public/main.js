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
    }, 300);
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
window.addEventListener("click", e => {
    let closeBtn = document.querySelector(".close-button");
    let burger = document.querySelector(".header__hamburger");
    if (e.target.classList.contains("header__hamburger") ||
        e.target.classList.contains("hamburger")) {
        console.log(closeBtn);
        console.log(burger);
        burger.classList.add("display-none");
        closeBtn.classList.remove("display-none");
    }
    if (e.target.classList.contains("close-button") ||
        e.target.classList.contains("close-button__btn")) {
        burger.classList.remove("display-none");
        closeBtn.classList.add("display-none");
    }
});
