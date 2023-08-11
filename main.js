const galleryContainer = document.getElementById("gallery-container");
const gallery = document.getElementById("gallery");

const buttonPrevious = document.getElementById("gallery-prev");
const buttonNext = document.getElementById("gallery-next");

let current = 0;
const galleryLength = gallery.children.length;

buttonPrevious.addEventListener("click", () => {
  current--;
  if (current < 0) {
    current = galleryLength - 1;
  }

  galleryContainer.style.setProperty('--current-slide', current);
});

buttonNext.addEventListener("click", () => {
  current++;
  if (current > galleryLength) {
    current = 0;
  }

  galleryContainer.style.setProperty('--current-slide', current);
});
