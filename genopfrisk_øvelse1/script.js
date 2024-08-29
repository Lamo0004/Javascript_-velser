// Opretter konstant
const img = document.querySelectorAll("img");

// Tilføjer funktion (alkoholTjek) til hver click på img
img.forEach((img) => {
  img.addEventListener("click", alkoholTjek);
});

// Funktionen
function alkoholTjek() {
  if (this.alt === "øl" || this.alt === "snaps") {
    console.log("Indeholder alkohol");
  } else if (this.alt === "cola" || this.alt === "sport") {
    console.log("Alkoholfri");
  }
}
