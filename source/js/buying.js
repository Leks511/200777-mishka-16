var buyButtons = document.querySelectorAll(".wares__item-buy");
var butWeeklyItemButton = document.querySelector(".weekly-item__button");
var modal = document.querySelector(".modal");
var modalContent = document.querySelector(".modal__content");
var modalSubmit = document.querySelector(".cart-form__submit-button");

function addBuyHandler(item) {
  item.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal--show");
  })
}

for (var i = 0; i < buyButtons.length; i++) {
  addBuyHandler(buyButtons[i]);
}

butWeeklyItemButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal--show");
});

modalSubmit.addEventListener("click", function () {
  modal.classList.remove("modal--show");
});

modal.addEventListener("click", function(evt) {
  if (evt.target === modal) {
    modal.classList.remove("modal--show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {

    if (modal.classList.contains("modal--show")) {
      evt.preventDefault();
      modal.classList.remove("modal--show");
    }
  }
});
