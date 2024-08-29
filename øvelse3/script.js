document.querySelector("button").addEventListener("click", tjekTal);
let forsoeg = 0;
const randomNum = Math.floor(Math.random() * 11); //Beregner et helt tal mellem 0 og 10

function tjekTal() {
  forsoeg++;
  const brugerTal = document.querySelector("#tal").value;

  // Hvis det random nummer er større end brugertallet/gættet, udskriver den nedenstående alert
  if (randomNum > brugerTal) {
    alert("Øv! " + brugerTal + " var for lavt. Prøv igen :)");
    // Hvis det random nummer er mindre end brugertallet/gættet, udskriver den nedenstående alert
  } else if (randomNum < brugerTal) {
    alert("Øv! " + brugerTal + " var for højt. Prøv igen :)");
    // Hvis ingen af ovenstående er gældende (opsamling). Altså når gættet er rigtigt
  } else {
    alert(brugerTal + " er rigtigt!" + " Du brugte " + forsoeg + " forsøg. Prøv igen med et nyt tal :)");
    location.reload();
  }
}
