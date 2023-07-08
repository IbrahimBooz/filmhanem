
const arrowRight = document.querySelectorAll(".arrow");
const arrowLeft = document.querySelectorAll(".arrow-left");
const containerCards = document.querySelectorAll(".container-cards");

arrowRight.forEach((arrowRight, i) => {
  const widthRatio = Math.floor(window.innerWidth / 300);
  const itemNumber = containerCards[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrowRight.addEventListener("click", function () {
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (5 - widthRatio) >= 0) {
      containerCards[i].style.transform = `translateX(${containerCards[i].computedStyleMap().get("transform")[0].x.value - 390
        }px)`;
    } else {
      containerCards[i].style.transform = `translateX(0)`;
      clickCounter = 0;
    }
  });


});
arrowLeft.forEach((arrowLeft, i) => {
  const widthRatio = Math.floor(window.innerWidth / 300);
  const itemNumber = containerCards[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrowLeft.addEventListener("click", function () {
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (2 - widthRatio) >= 1 ) {
      containerCards[i].style.transform = `translateX(${containerCards[i].computedStyleMap().get("transform")[0].x.value + 390
        }px)`;
    } else {
      containerCards[i].style.transform = `translateX(0)`;
      clickCounter = 0;
    }
  });


});
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".header,.header-menu a,.arrow,.home,.aside,.arrow-left,.aside i,.slc-type,.card-flow,.toggle,.type,.header-right span,.header-right i,.card-flow h1"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
