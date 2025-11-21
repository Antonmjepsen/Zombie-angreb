console.log("instruction.js loaded");

document
  .querySelector(".info-graphic button:nth-of-type(1)")
  .addEventListener("click", tyven);
function tyven() {
  console.log("tyven clicked");
  document.querySelector(".info-text h2").textContent =
    "Beskrivelse af væsenet";
  document.querySelector(".info-text p").textContent =
    "Væsnet er omtrent på størrelse med et voksent menneske, men ligner alt andet end et. Dets dybblå skal glinser som våd sten, og de to store kløer foran kroppen er lange, buede og dødeligt skarpe. Hovedet er en foruroligende blanding af krabbe og rovdyr, med mørke, glasagtige øjne og en bred mund fyldt med sylespidse tænder. En salt, havagtig lugt omgiver det, som om det bærer dybets kulde med sig.";
}

document
  .querySelector(".info-graphic button:nth-of-type(2)")
  .addEventListener("click", instruktion);
function instruktion() {
  console.log("instruktion clicked");
  document.querySelector(".info-text h2").textContent =
    "Væsenets klør er dødelige";
  document.querySelector(".info-text p").textContent =
    "Væsenets kløer er dets mest frygtede våben. De buede, blålige blade kan flænse gennem både træ og metal med en lethed, der virker helt uvirkelig. Vidner fortæller, at et enkelt slag fra kløerne efterlader dybe, rene snit, som om materialet aldrig havde haft modstandskraft. Selv på afstand udstråler de en næsten levende energi, som om de hele tiden er klar til at hugge ud mod alt, der kommer for tæt på.";
}

document
  .querySelector(".info-graphic button:nth-of-type(3)")
  .addEventListener("click", konsekvenser);
function konsekvenser() {
  console.log("konsekvenser clicked");
  document.querySelector(".info-text h2").textContent =
    "Væsenets tænder er dødelige";
  document.querySelector(".info-text p").textContent =
    "Væsenets tænder er mindst lige så skræmmende som dets kløer. Den brede mund er fyldt med tætsiddende, sylespidse tandrækker, der klikker let, som om den konstant vurderer sit næste bytte. Hver tand er skarp som en nål og kurver en smule indad, perfekt til at rive kød løs og forhindre noget i at slippe fri. Et enkelt glimt af det gab er nok til at få selv de modigste til at træde et skridt tilbage.";
}
// Get all buttons and hotspots
const buttons = document.querySelectorAll(".info-graphic button");
const hotspot1 = document.querySelector("#hotspot circle");
const hotspot2 = document.querySelector("#hotspot_2 ellipse");
const hotspot4 = document.querySelector("#hotspot_4 circle");

// Map buttons to hotspots
const buttonHotspotMap = [
  { button: buttons[0], hotspot: hotspot1 }, // "Væsenet fra rummet" -> head hotspot
  { button: buttons[1], hotspot: hotspot4 }, // "Pas på hans klo" -> body hotspot
  { button: buttons[2], hotspot: hotspot2 }, // "Pas også på hans tænder" -> right hotspot
];

// Add click event listeners
buttonHotspotMap.forEach(({ button, hotspot }) => {
  button.addEventListener("click", () => {
    // Remove highlight from all hotspots
    [hotspot1, hotspot2, hotspot4].forEach((h) => {
      h.classList.remove("active");
    });

    // Add highlight to clicked hotspot
    hotspot.classList.add("active");
  });
});
