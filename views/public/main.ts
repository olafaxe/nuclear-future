let mainBody = document.querySelector(".grid-container");

mainBody.addEventListener("click", e => {
  if (e.target.classList.contains("btn-nav")) {
    console.log("click");

    let xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:3000/about`);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
    xhr.onload = function() {
      if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
      } else {
        console.log("success");
      }
    };
  }
});
