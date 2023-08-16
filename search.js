const searchbox = document.getElementById("searchbox");
const input = document.getElementById("search-input");

console.log("test");
searchbox.addEventListener("submit", (event) => {
  event.preventDefault();
  location.href = "search.html";
  return false;
});
