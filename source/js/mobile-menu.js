var buttonToggleMenu = document.querySelector(".main-nav__toggle");
var mainNavigation = document.querySelector(".page-header__main-nav");
var pagesList = document.querySelector(".main-nav__pages-list");
var userInterface = document.querySelector(".main-nav__user-interface");

mainNavigation.classList.remove("main-nav--opened");
mainNavigation.classList.add("main-nav--closed");

buttonToggleMenu.addEventListener("click", function(evt){
  evt.preventDefault();

  if (mainNavigation.classList.contains("main-nav--closed")) {
    mainNavigation.classList.remove("main-nav--closed");
    mainNavigation.classList.add("main-nav--opened");
  } else {
    mainNavigation.classList.remove("main-nav--opened");
    mainNavigation.classList.add("main-nav--closed");
  }

});
