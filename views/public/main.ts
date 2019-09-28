const contentDiv = <HTMLElement>document.querySelector(".content-container");

let toUrl: string;
let fromUrl: string;

navigateTo("main");

window.addEventListener("click", e => {
  let target = <HTMLElement>e.target;
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

function navigateTo(to: string) {
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

function buttonAnimation(target: HTMLElement) {
  let button = document.querySelectorAll<HTMLElement>(".nav__cursor");
  button.forEach(btn => {
    btn = <HTMLElement>btn;
    if (btn === target) {
      btn.classList.add(`btn-animation__click`);
      setTimeout(() => {
        btn.classList.remove(`btn-animation__click`);
      }, 300);
    }
  });
}
