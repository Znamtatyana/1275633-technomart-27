var linkPopup = document.querySelector(".link-popup");
var popup = document.querySelector(".modal-feedback");

var form = popup.querySelector("form");
var nameFeedback = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=email]");
var close = popup.querySelector(".modal-close");
var inputs = popup.querySelectorAll("input");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("nameFeedback");
} catch (err) {
  isStorageSupport = false;
}


linkPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
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
  for (input of inputs) {
    input.classList.remove("feedback-input-error");
  }
});

form.addEventListener("submit", function (evt) {
  if (!nameFeedback.value || !mail.value) {
    evt.preventDefault();
    for (input of inputs) {
      input.classList.remove("feedback-input-error");
      input.offsetWidth = input.offsetWidth;
      input.classList.add("feedback-input-error");
    }
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
      for (input of inputs) {
        input.classList.remove("feedback-input-error");
      }
   }
  }
});
