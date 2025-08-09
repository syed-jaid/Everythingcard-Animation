document.addEventListener("DOMContentLoaded", function () {
  const notificationDiv = document.querySelector(".confetti-image");
  const elementWithText = document.querySelector(".element-with-text");

  notificationDiv.addEventListener("animationend", function () {
    elementWithText.classList.add("element-with-text-animation");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const elementWithText = document.querySelector(".element-with-text");
  const phoneScreen = document.querySelector(".phone-screen");
  const phoneFrame = document.querySelector(".phone-frame-1");

  elementWithText.addEventListener("animationend", function () {
    phoneScreen.style.display = "none";
    phoneFrame.style.opacity = 0;
  });
});
