console.log("Main JS loaded");

const html = document.querySelector("html");
const btn = document.querySelector("#toggle");

function toggleTheme() {
  console.log("toggleTheme clicked");

  html.classList.toggle("dark");
}

btn.addEventListener("change", toggleTheme);
