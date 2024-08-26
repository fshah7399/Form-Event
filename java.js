let target = document.querySelectorAll("#fname");

target.forEach((e) => {
  e.addEventListener("focus", () => {
    e.style.backgroundColor = "red";
  });

  e.addEventListener("blur", () => {
    e.style.backgroundColor = "";
  });

  e.addEventListener("input", () => {
    let x = e.value;
    document.querySelector("#test").innerHTML = x;
  });

  e.addEventListener("invalid", () => {
    alert("Please valid The Input");
  });
});

let selecte = document.querySelector("#selected");

selecte.addEventListener("change", () => {
  let b = selecte.value;
  document.querySelector("#test").innerHTML = b;
});

let submite = document.querySelector("form");
submite.addEventListener("submit", () => {
  alert("Form Submited");
});
