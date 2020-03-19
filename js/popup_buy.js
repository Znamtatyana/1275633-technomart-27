var linkBuys = document.querySelectorAll(".buy-link");
var popupBuy = document.querySelector(".modal-buy");
var linkConinue = popupBuy.querySelector(".continue-buy");
var closeBuy = popupBuy.querySelector(".modal-close");



for (var linkBuy of linkBuys) {
  linkBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBuy.classList.add("modal-buy-show");
    popupBuy.classList.remove("modal-buy-show-close");
  });
}

linkConinue.addEventListener ("click", function (evt) {
  evt.preventDefault();
  popupBuy.classList.remove("modal-buy-show");
  popupBuy.classList.add("modal-buy-show-close");
});

closeBuy.addEventListener ("click", function (evt) {
  evt.preventDefault();
  popupBuy.classList.remove("modal-buy-show");
  popupBuy.classList.add("modal-buy-show-close");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if(popupBuy.classList.contains("modal-buy-show")) {
      evt.preventDefault();
      popupBuy.classList.remove("modal-buy-show");
      popupBuy.classList.add("modal-buy-show-close");
    }
  }
});
