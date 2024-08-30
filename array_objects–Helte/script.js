const helte = [
  {
    Navn: "Supermand",
    Fjender: ["Mand", " Ko"],
  },
  {
    Navn: "Spider-man",
    Fjender: ["Mand", " Ko", " Mariehønen"],
  },
  {
    Navn: "Batman",
    Fjender: ["Mand", " Mariehønen"],
  },
  {
    Navn: "Hulk",
    Fjender: ["Mand", " Mariehønen", " Wonder Woman"],
  },
];

helte.forEach(visHelte);

function visHelte(helt) {
  console.log(helt);
  const skabelon = document.querySelector("template").content;
  const kopi = skabelon.cloneNode(true);

  kopi.querySelector("h3").textContent = helt.Navn;
  kopi.querySelector("p span").textContent = helt.Fjender;

  const parent = document.querySelector("section");
  parent.appendChild(kopi);
}
