let uc = /[A-Z]/;
let lc = /[a-z]/;
let nc = /[0-9]/;
let sc = /[^0-9, a-z, A-Z]/;
let inp = document.querySelector("#inp");

let l1 = document.querySelector(".l1");
let l2 = document.querySelector(".l2");
let l3 = document.querySelector(".l3");
let l4 = document.querySelector(".l4");
let l5 = document.querySelector(".l5");

let btn1 = document.querySelector("#btn");
function input() {
  if (inp.value.match(uc)) {
    l1.style.color = "blue";
  } else {
    l1.style.color = "red";
  }
  if (inp.value.match(lc)) {
    l2.style.color = "blue";
  } else {
    l2.style.color = "red";
  }
  if (inp.value.match(nc)) {
    l3.style.color = "blue";
  } else {
    l3.style.color = "red";
  }
  if (inp.value.match(sc)) {
    l4.style.color = "blue";
  } else {
    l4.style.color = "red";
  }
  if (inp.value.length >= 8) {
    l5.style.color = "blue";
  } else {
    l5.style.color = "red";
  }
}

const valid = () => {
  if (
    l1.style.color === "blue" &&
    l2.style.color === "blue" &&
    l3.style.color === "blue" &&
    l4.style.color === "blue" &&
    l5.style.color === "blue"
  ) {
    alert("your form is submit");
    inp.value = "";
    input();

    // btn1.classList.remove ('disabled')
    // console.log('hi')
  } else {
    // btn1.classList.add ('disabled')
    // console.log('k');
    alert("your form is incomplete");
  }
};
input();
function show() {
  if (inp.type == "password") {
    inp.type = "text";
    document.querySelector("#open").classList.add("d-none");
    document.querySelector("#close").classList.remove("d-none");
  }
}
function hide() {
  // alert('hello');
  if (inp.type == "text") {
    inp.type = "password";
    document.querySelector("#close").classList.add("d-none");
    document.querySelector("#open").classList.remove("d-none");
  }
}
