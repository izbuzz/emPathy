const searchbox = document.getElementById("searchbox");
const input = document.getElementById("search-input");

searchbox.addEventListener("submit", () => {
  location.href = "search.html";
  return false;
});
