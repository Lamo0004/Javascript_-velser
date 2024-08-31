document.querySelector("button").addEventListener("click", tjekTal); // Tilføjer en event listener til knappen, som kalder funktionen tjekTal ved klik
let forsoeg = 0; // Initialiserer tæller for antal forsøg
const randomNumber = Math.floor(Math.random() * 11); //Genererer et random helt tal mellem 0 og 10

function tjekTal() {
  forsoeg++; // Øger antallet af forsøg med 1 hver gang funktionen kaldes
  const brugerTal = document.querySelector("#tal").value; // Henter brugerens gæt fra input-feltet med id'et 'tal'

  // Hvis det random nummer er større end brugertallet/gættet, udskriver den nedenstående alert
  if (randomNumber > brugerTal) {
    alert("Øv! " + brugerTal + " var for lavt. Prøv igen :)");
    // Hvis det random nummer er mindre end brugertallet/gættet, udskriver den nedenstående alert
  } else if (randomNumber < brugerTal) {
    alert("Øv! " + brugerTal + " var for højt. Prøv igen :)");
    // Hvis ingen af ovenstående er gældende (opsamling). Altså når gættet er rigtigt
  } else {
    alert(randomNumber + " er rigtigt!" + " Du brugte " + forsoeg + " forsøg. Prøv igen med et nyt tal :)");
    location.reload(); // Genindlæser siden for at starte spillet forfra
  }
}
