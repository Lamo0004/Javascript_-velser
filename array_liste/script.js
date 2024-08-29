const sange = ["Two of us", "Bla bla blaa bla", "Blue", "Ko ko ko", "Jef the", "Kos", "Sjovt", "Tro"];

const liste = document.querySelector("ul");

sange.forEach(lavPlayliste);

function lavPlayliste(element) {
  liste.innerHTML += "<li>" + element;
}
