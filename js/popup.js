var linkPopup = document.querySelector(".link-popup");
var popup = document.querySelector(".modal-feedback");

var form = popup.querySelector("form");
var nameFeedback = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=email]");
var close = popup.querySelector(".modal-close");
var inputs = popup.querySelectorAll(".feedback-input");

var isStorageSupport = true;
var storage = "";

var linkMap = document.querySelector(".link-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close");

var linkBuys = document.querySelectorAll(".buy-link");
var popupBuy = document.querySelector(".modal-buy");
var linkConinue = popupBuy.querySelector(".continue-buy");
var closeBuy = popupBuy.querySelector(".modal-close");


try {
  storage = localStorage.getItem("nameFeedback");
} catch (err) {
  isStorageSupport = false;
}


linkPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show-close");
  popup.classList.add("modal-show");
  if (storage) {
    nameFeedback.value = storage;
    mail.focus();
  } else {
    nameFeedback.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.add("modal-show-close");
  for (var input of inputs) {
    input.classList.remove("feedback-input-error");
  };
});

form.addEventListener("submit", function (evt) {
  if (!nameFeedback.value || !mail.value) {
    evt.preventDefault();
    for (var input of inputs) {
      input.classList.remove("feedback-input-error");
      input.offsetWidth = input.offsetWidth;
      input.classList.add("feedback-input-error");
    };
  } else {
    if (isStorageSupport){
      localStorage.setItem("nameFeedback", nameFeedback.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.add("modal-show-close");
      for (var input of inputs) {
        input.classList.remove("feedback-input-error");
      }
   }
  }
});

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
  popupMap.classList.remove("modal-show-close");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
  popupMap.classList.add("modal-show-close");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("modal-show")) {
      evt.preventDefault();
      popupMap.classList.remove("modal-show");
      popupMap.classList.add("modal-show-close");

    }
  }
});

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

