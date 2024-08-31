// Tilføjer funktion (alkoholTjek) til hver click på img
document.querySelector("#snaps").addEventListener("click", alkoholTjek);
document.querySelector("#øl").addEventListener("click", alkoholTjek);
document.querySelector("#cola").addEventListener("click", alkoholTjek);
document.querySelector("#sport").addEventListener("click", alkoholTjek);

// Funktionen
function alkoholTjek() {
  if (this.alt === "øl" || this.alt === "snaps") {
    console.log("Indeholder alkohol");
  } else {
    console.log("Alkoholfri");
  }
}
