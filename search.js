const searchbox = document.getElementById("searchbox");
const input = document.getElementById("search-input");

searchbox.addEventListener("submit", () => {
  location.href = input.value + ".html";
  return false;
});
