console.log("instruction.js loaded");

document
  .querySelector(".info-graphic button:nth-of-type(1)")
  .addEventListener("click", tyven);
function tyven() {
  console.log("tyven clicked");
  document.querySelector(".info-text h2").textContent =
    "Beskrivelse af væsenet";
}

document
  .querySelector(".info-graphic button:nth-of-type(2)")
  .addEventListener("click", instruktion);
function instruktion() {
  console.log("instruktion clicked");
  document.querySelector(".info-text h2").textContent =
    "Væsenets klør er dødelige";
}

document
  .querySelector(".info-graphic button:nth-of-type(3)")
  .addEventListener("click", konsekvenser);
function konsekvenser() {
  console.log("konsekvenser clicked");
  document.querySelector(".info-text h2").textContent =
    "Væsenets tænder er dødelige";
}
