var linkBuys = document.querySelectorAll(".buy-link");
var popupBuy = document.querySelector(".modal-buy");
var linkCheckout = popupBuy.querySelector(".link-checkout");
var linkConinue = popupBuy.querySelector(".continue-buy");
var closeBuy = popupBuy.querySelector(".modal-close");

for (linkBuy of linkBuys) {
  linkBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBuy.classList.add("modal-show");
  });
}

linkConinue.addEventListener ("click", function (evt) {
  evt.preventDefault();
  popupBuy.classList.remove("modal-show");
})

closeBuy.addEventListener ("click", function (evt) {
  evt.preventDefault();
  popupBuy.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if(popupBuy.classList.contains("modal-show")) {
      evt.preventDefault();
      popupBuy.classList.remove("modal-show");
    }
  }
});
