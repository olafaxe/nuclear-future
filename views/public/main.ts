const contentDiv = document.querySelector(".content-container");

let toUrl: string;
let fromUrl: string;

fetch("/main")
  .then(res => {
    toUrl = res.url.slice(22, 26);
    return res.text();
  })
  .then(data => {
    contentDiv.classList.add(`content-container__${toUrl}`);
    contentDiv.innerHTML = data;
    fromUrl = toUrl;
  });

window.addEventListener("click", e => {
  let button = document.querySelectorAll(".nav__cursor");

  // console.log(e.target.value);

  if (e.target.classList.contains("nav__cursor")) {
    button.forEach(btn => {
      if (btn === e.target) {
        btn.classList.add(`btn-animation__click`);
        setTimeout(() => {
          btn.classList.remove(`btn-animation__click`);
        }, 300);
      }
    });
  }
  setTimeout(() => {
    if (e.target.classList.contains("nav-home")) {
      console.log(fromUrl);
      fetch("/main")
        .then(res => {
          toUrl = res.url.slice(22, 26);
          return res.text();
        })
        .then(data => {
          contentDiv.classList.remove(`content-container__${fromUrl}`);
          contentDiv.classList.add(`content-container__${toUrl}`);
          contentDiv.innerHTML = data;
          fromUrl = toUrl;
        });
    }
    if (e.target.classList.contains("nav-about")) {
      console.log(fromUrl);
      fetch("/about")
        .then(res => {
          toUrl = res.url.slice(22, 27);
          return res.text();
        })
        .then(data => {
          contentDiv.classList.remove(`content-container__${fromUrl}`);
          contentDiv.classList.add(`content-container__${toUrl}`);
          contentDiv.innerHTML = data;
          fromUrl = toUrl;
        });
    }
  }, 300);
});
