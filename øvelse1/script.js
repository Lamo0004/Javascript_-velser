const minKnap = document.querySelector("#knapElement");
const billeder = document.querySelectorAll("img");

billeder.forEach((billede) => {
  billede.addEventListener("click", alkoholTjek);
});

minKnap.addEventListener("click", alkoholTjek);
function alkoholTjek() {
  if (this.alt === "øl" || this.alt === "snaps") {
    console.log("Indeholder alkohol");
  } else if (this.alt === "cola" || this.alt === "sport") {
    console.log("Alkoholfri");
  }
}
