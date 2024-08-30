window.addEventListener("DOMContentLoaded", init); // Når alt i DOMMEN er loadet starter funktionen init.
//Gør vi for at være sikre på, at alt er klar inden vi kalder andet/arbejder på det. Hvis ikke det er loadet bliver siden ustabilt.

console.log("going");

const teacherURI = "teachers.json";

let teacherList;
let teacherTemplate;

function init() {
  teacherList = document.querySelector("#teacher_list");
  console.log("teacherList", teacherList);

  teacherTemplate = document.querySelector("template").content;
  console.log("teacherTemplate", teacherTemplate);

  fetch(teacherURI)
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then(logJSON);
}

function logJSON(json) {
  console.log("json", json);
  json.forEach(showTeacher);
}

function showTeacher(teacher) {
  const kopi = teacherTemplate.cloneNode(true);
  kopi.querySelector("h3").textContent = teacher.name + " " + teacher.surname;
  kopi.querySelector("p").textContent = teacher.topics;
  teacherList.appendChild(kopi);
}
