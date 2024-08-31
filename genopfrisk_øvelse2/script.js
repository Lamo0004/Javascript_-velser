// Henter hvad klokken er
const timetal = new Date().getHours();

// Funktion der udskriver hilsen baseret på tidspunktet
if (timetal < 5) {
  console.log("Godnat");
} else if (timetal < 10) {
  console.log("Godmorgen");
} else if (timetal < 18) {
  console.log("Goddag");
} else {
  console.log("Godaften");
}

// if (timetal > 5 && timetal < 10) {
//   console.log("Godmorgen");
// } else if (timetal > 10 && timetal < 18) {
//   console.log("Goddag");
// } else if (timetal > 18 && timetal < 24) {
//   console.log("Godaften");
// } else {
//   console.log("Godnat");
// }
