var link = document.querySelector(".contacts__btn");
var popupFeedback = document.querySelector(".modal-feedback");
var closeFeedback = popupFeedback.querySelector(".btn-close");
var fullname = popupFeedback.querySelector("[name=fullname]");
var form = popupFeedback.querySelector("form");
var email = popupFeedback.querySelector("[name=email]");
var storage = localStorage.getItem("fullname");

var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".js-map-close");

mapOpen.addEventListener("click", function(event){
  event.preventDefault();
  mapPopup.classList.add("modal-map-show");
});

mapClose.addEventListener("click", function(event){
  event.preventDefault();
  mapPopup.classList.remove("modal-map-show");
})

window.addEventListener("keydown", function(event){
  event.preventDefault();
  if (event.keyCode === 27) {
    if(mapPopup.classList.contains("modal-map-show")){
      mapPopup.classList.remove("modal-map-show");
    }
  }
})

link.addEventListener("click", function(event) {
  event.preventDefault();
  popupFeedback.classList.add("modal-feedback-show");
  if (storage) {
    fullname.value = storage;
    email.focus();
  } else {
  fullname.focus();
}
});

closeFeedback.addEventListener("click", function(event){
  event.preventDefault();
  popupFeedback.classList.remove("modal-feedback-show");
  popupFeedback.classList.remove(".modal-feedback-error");
});

form.addEventListener("submit", function(event){
  if (!fullname.value || !email.value) {
  event.preventDefault();
  popupFeedback.classList.remove("modal-feedback-error");
  popupFeedback.offsetWidth = popupFeedback.offsetWidth;
  popupFeedback.classList.add("modal-feedback-error");
} else {
  localStorage.setItem("fullname", fullname.value);
}
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popupFeedback.classList.contains("modal-feedback-show")) {
      popupFeedback.classList.remove("modal-feedback-show");
      popupFeedback.classList.remove(".modal-feedback-error");
    }
  }
});
