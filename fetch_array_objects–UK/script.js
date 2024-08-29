const sange = [
  {
    Titel: "Overleve",
    Kunstner: "Ukendt kunstner",
    Udgivelsesår: "2016",
    Album: "Den anden side",
    Streamingstjenester: ["Spotify", " Tidal"],
    Billede: "uk.jpeg",
  },
  {
    Titel: "Neonlys",
    Kunstner: "Ukendt kunstner",
    Udgivelsesår: "2013",
    Album: "Neonlys",
    Streamingstjenester: ["Spotify", " Tidal", " Youtube", " Apple Music"],
    Billede: "uk.jpeg",
  },
  {
    Titel: "Uden Dig",
    Kunstner: "Ukendt kunstner",
    Udgivelsesår: "2023",
    Album: "Dansktop",
    Streamingstjenester: [" Tidal", " Apple Music"],
    Billede: "uk.jpeg",
  },
  {
    Titel: "Gennem Byen",
    Kunstner: "Ukendt kunstner",
    Udgivelsesår: "2014",
    Album: "Forbandede Ungdom",
    Streamingstjenester: [" Tidal", " Apple Music", "Spotify"],
    Billede: "uk.jpeg",
  },
  {
    Titel: "Langt Væk",
    Kunstner: "Ukendt kunstner",
    Udgivelsesår: "2013",
    Album: "Neonlys",
    Streamingstjenester: [" Tidal", " Apple Music"],
    Billede: "uk.jpeg",
  },
];

sange.forEach(visSange);

function visSange(element) {
  console.log(element);
  const skabelon = document.querySelector("template").content;
  const kopi = skabelon.cloneNode(true);

  kopi.querySelector("img").src = "uk.jpeg";
  kopi.querySelector("h2 span").textContent = element.Titel;
  kopi.querySelector("h3 span").textContent = element.Kunstner;
  kopi.querySelector("p span").textContent = element.Udgivelsesår;
  kopi.querySelector("div span").textContent = element.Streamingstjenester;

  const parent = document.querySelector(".grid_1-1-1");
  parent.appendChild(kopi);
}
