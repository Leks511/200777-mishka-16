var buttonToggleMenu = document.querySelector(".main-nav__toggle");
var mainNav = document.querySelector(".main-nav__menu-wrapper");

mainNav.classList.remove("main-nav__menu-wrapper--nojs");
mainNav.classList.add("main-nav__menu-wrapper--closed");

console.log("привет");


buttonToggleMenu.addEventListener("click", function(evt){
  evt.preventDefault();

  if (this.classList.contains("main-nav__toggle--inactive")) {
    this.classList.remove("main-nav__toggle--inactive");
    this.classList.add("main-nav__toggle--active");

    mainNav.classList.remove("main-nav__menu-wrapper--closed");
    mainNav.classList.add("main-nav__menu-wrapper--opened");
  } else {
    this.classList.remove("main-nav__toggle--active");
    this.classList.add("main-nav__toggle--inactive");

    mainNav.classList.remove("main-nav__menu-wrapper--opened");
    mainNav.classList.add("main-nav__menu-wrapper--closed");
  }

});
