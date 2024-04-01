const headerTogglerBtn = document.querySelector(".toggler-btn");
const headerTogglerBtnImg = document.querySelector(".toggler-img");
console.log(headerTogglerBtnImg);
const hiddenNav = document.querySelector(".sitenav-hidden");
const overlay = document.querySelector(".overlay");

headerTogglerBtn.addEventListener("click", () => {
  hiddenNav.classList.toggle("show-nav");
  overlay.classList.toggle("show-nav");

  if (hiddenNav.classList.contains("show-nav")) {
    headerTogglerBtnImg.src = "../images/toggler-close.svg";
  } else {
    headerTogglerBtnImg.src = "../images/toggler-open.svg";
  }
});
