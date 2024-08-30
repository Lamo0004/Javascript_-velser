window.addEventListener("DOMContentLoaded", init); // Når alt i DOMMEN er loadet starter funktionen init.
//Gør vi for at være sikre på, at alt er klar inden vi kalder andet/arbejder på det. Hvis ikke det er loadet bliver siden ustabilt.

console.log("going");

const productURI = "https://kea-alt-del.dk/t7/api/products";

let productList;
let productTemplate;

function init() {
  productList = document.querySelector("#product_list");
  console.log("product_list", productList);

  productTemplate = document.querySelector("template").content;
  console.log("productTemplate", productTemplate);

  fetch(productURI)
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then(logJSON);
}

function logJSON(json) {
  console.log("json", json);
  json.forEach(showProduct);
}

function showProduct(product) {
  const kopi = productTemplate.cloneNode(true);
  kopi.querySelector("h3").textContent = product.articletype;
  kopi.querySelector("h4").textContent = product.gender;
  kopi.querySelector("h5").textContent = product.season;
  kopi.querySelector("p").textContent = product.brandname;
  productList.appendChild(kopi);
}
