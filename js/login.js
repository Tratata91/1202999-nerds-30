const popupOpen = document.querySelector(".button-popup");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".button-close")

popupOpen.addEventListener("click", function(evt){
  popup.classList.add("popup-visible");
});

popupClose.addEventListener("click", function(evt){
  popup.classList.remove("popup-visible");
});
