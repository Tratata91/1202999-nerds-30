const popupOpen = document.querySelector(".button-popup");
const popupMain = document.querySelector(".popup");
const popupClose = document.querySelector(".button-close");
const popupForm = document.querySelector(".submit-form");
const userName = document.querySelector(".js-name");
const userEmail = document.querySelector(".js-email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

popupOpen.addEventListener("click", function(evt){
  popupMain.classList.add("popup-visible");

  if (storage) {
    userName.value = storage;
    userEmail.focus();
  } else {
    userName.focus();
  }
});

popupClose.addEventListener("click", function(evt){
  popupMain.classList.remove("popup-visible");
  popupMain.classList.remove("popup-error");
});

popupForm.addEventListener("submit", function(evt){

  if (!userName.value) {
    console.log(userName)
  }
  // userName.classList.add("invalid");
});

popupForm.addEventListener("submit", function(evt){
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    popupMain.classList.remove("popup-error");
    popupMain.offsetWidth = popupMain.offsetWidth;
    popupMain.classList.add("popup-error");
  } else {
    if (isStorageSupport){
    localStorage.setItem("Name", userName.value);
    }
  }
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupMain.classList.contains("popup-visible")) {
      evt.preventDefault();
      popupMain.classList.remove("popup-visible");
      popupMain.classList.remove("popup-error");
    }
  }
});
