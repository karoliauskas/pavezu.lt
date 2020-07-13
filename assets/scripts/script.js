console.log('connected');

var ctrl = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: ".contact-us-img"
})
.setClassToggle(".contact-us-img","car-slide")
.addTo(ctrl);

var scene2 = new ScrollMagic.Scene({
  triggerElement: ".cargo-content"
})
.setClassToggle(".cargo-content", "cargoShow")
.addTo(ctrl);


var burger = document.querySelector(".bars");
var nav = document.querySelector(".main-nav ul");
var navLi = document.querySelectorAll(".main-nav a");

burger.addEventListener('click', function(e){
  e.preventDefault();
  nav.classList.toggle("show");
});

navLi.forEach(function(el){
  el.addEventListener('click', function(e){
    nav.classList.toggle("show");
  })
});