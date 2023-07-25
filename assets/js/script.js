"use strict";

/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
let date = new Date().toLocaleDateString().split("/")[2];
let html = `&copy; ${date} <a class="copyright-link">RISE</a>. All Right
Reserved`;
document.querySelector(".copyright").innerHTML = html;
document.querySelector(".copyright").style= "font-family: 'beIN Black', sans-serif;"


let numbers = document.querySelectorAll(".stats-title");
for (let numElment of numbers) {
  countAnimtion(numElment);
}
function countAnimtion(numElment) {
  let counts = setInterval(updated, 100);
  let finalNumber = parseInt(numElment.innerText);
  let upto = 0;
  function updated() {
    let count = numElment;
    count.innerHTML = ++upto;
    if (upto === finalNumber) {
      clearInterval(counts);
    }
  }
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

(function(){
  emailjs.init("LC59vneQ0j99KJqAj");
})();

function sendEmail(){
  var params={
   name :document.getElementById('name').value,
   email:document.getElementById('email').value,
   message: document.getElementById('message').value
  }
  const serviceID = 'service_rpaya2e'
  const templateID = 'template_mf159eu'
  
  emailjs.send(serviceID, templateID, params)
  .then(res=>{
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Your message sent successfully!!")
    
  })
  .catch(err=>console.log(err));
  
}


/// cookies 

function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded .split('; ');
  let res;
  cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res;
}

function setCookie(clang, cValue, expDays) {
  // if(!getCookie('lang')){
  let date = new Date();
  date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = clang + "=" + cValue + "; " + expires + "; path=/";
  // }
}


