document.addEventListener("DOMContentLoaded", function () {
  const notificationDiv = document.querySelector(".confetti-image");
  const elementWithText = document.querySelector(".element-with-text");

  notificationDiv.addEventListener("animationend", function () {
    elementWithText.classList.add("element-with-text-animation");
  });
});

document.querySelector(".replay-btn").addEventListener("click", () => {
  window.location.reload();
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

document.addEventListener("DOMContentLoaded", function () {
  const phoneScreen = document.querySelector(".Phone-main-div");
  phoneScreen.style.display = "flex";
});

// document.addEventListener("DOMContentLoaded", function () {
//   const elementWithText = document.querySelector(".element-with-text");
//   const phoneMainDiv = document.querySelector(".Phone-main-div");
//   const nextDiv = document.querySelector(".card-main-div");
//   const MainCardDiv = document.querySelector(".card-main-div");
//   const nextDiv2 = document.querySelector(".phone-2-main-div");

//   elementWithText.addEventListener("animationend", () => {
//     setTimeout(() => {
//       phoneMainDiv.style.display = "none";
//       nextDiv.style.display = "flex";
//     }, 2000);
//     setTimeout(() => {
//       MainCardDiv.style.display = "none";
//       nextDiv2.style.display = "flex";
//     }, 13000);
//   });
// });
