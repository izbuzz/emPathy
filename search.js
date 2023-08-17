const searchbox = document.getElementById("searchbox");
const input = document.getElementById("search-input");

searchbox.addEventListener("submit", (event) => {
  event.preventDefault();
  location.href = "search.html";
});
