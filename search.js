const searchbox = document.getElementById("searchbox");
const input = document.getElementById("search-input");

console.log("test");
searchbox.addEventListener("submit", () => {
  console.log("test");
  location.href = "search.html";
  return false;
});
