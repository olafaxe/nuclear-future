"use strict";
const contentDiv = document.querySelector(".content-container");
let toUrl;
let fromUrl;
navigateTo("main");
window.addEventListener("click", e => {
    let target = e.target;
    if (target.classList.contains("form__send-btn")) {
        sendMessage(target.parentElement.children);
    }
    if (target.classList.contains("send-confirm_btn")) {
        target.parentElement.remove();
    }
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
        textinput.classList.remove("contact-form__nomation");
        textinput.classList.add("contact-form__animation");
    }
    if (textinput.textLength >= 1) {
        textinput.classList.remove("contact-form__animation");
        textinput.classList.add("contact-form__nomation");
    }
});
function navigateTo(to) {
    fetch(`/${to}`)
        .then(res => {
        toUrl = to;
        return res.text();
    })
        .then(content => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
        contentDiv.classList.remove(`content-container__${fromUrl}`);
        contentDiv.classList.add(`content-container__${toUrl}`);
        contentDiv.innerHTML = content;
        fromUrl = toUrl;
    });
}
function sendMessage(e) {
    if (e[1].value === "" || e[2].value === "" || e[3].value === "") {
        event.preventDefault();
    }
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
