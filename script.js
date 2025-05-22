"use strict";

const sixDivBody = document.querySelectorAll(".six-div-body");
const container6 = document.querySelectorAll(".container6-div");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.querySelector(".submit").addEventListener("click", function () {
  const recivedEmail = document.querySelector(".recived-email").value;
  const accessKey = regex.test(recivedEmail);
  if (accessKey) {
    document.querySelector(".info-form").classList.add("hidden");
    document.querySelector(".info-body").classList.remove("hidden");
  } else {
    document.querySelector(".recived-email").classList.add("invalid");
    document.querySelector(".email-help").classList.add("invalid-text");
    document.querySelector(".email-help").textContent = "Invalid email.";
  }
});
for (let i = 0; i < sixDivBody.length; i++) {
  const toggleBody = document.querySelectorAll(".toggle-body");
  toggleBody[i].addEventListener("click", function () {
    if (sixDivBody[i].classList.contains("hidden")) {
      sixDivBody[i].classList.remove("hidden");
      toggleBody[i].textContent = "⯅ VIEW LESS";
      container6[i].style.height = "auto";
    } else {
      sixDivBody[i].classList.add("hidden");
      toggleBody[i].textContent = "⯆ VIEW MORE";
      container6[i].style.height = "128.2px";
    }
  });
}
