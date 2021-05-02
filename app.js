const boiteAvis = document.querySelector(".content-boite");
const avis = Array.from(document.querySelectorAll(".boite"));
const avisNombre = avis.length;
const formulaire = document.querySelector("form");
const textAvis = document.getElementById("avis");
const textUsername = document.getElementById("username");
// Slider
const precedent = document.querySelectorAll(".precedent");
const suivant = document.querySelectorAll(".suivant");
let count = 0;

formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    let infoName = textUsername.value;
    let infoAvis = textAvis.value;

    const newAvis = document.createElement("div");
    newAvis.classList.add("yourRate");
    newAvis.classList.add("boite");
    newAvis.innerHTML = `<img src="image/perso.svg" alt="user image" />
    <span>${infoName}</span>
    <p class="rate-text">
        “ ${infoAvis} ”
    </p>
   `;

    boiteAvis.appendChild(newAvis);
    console.log(newAvis);
});

// Slider

function slidePrecedent() {
    avis[count].classList.remove("active");

    if (count > 0) {
        count--;
    } else {
        count = avisNombre - 1;
    }

    avis[count].classList.add("active");
}

function slideSuivant() {
    avis[count].classList.remove("active");

    if (count < avisNombre - 1) {
        count++;
    } else {
        count = 0;
    }

    avis[count].classList.add("active");
}

suivant.forEach((suiv) => suiv.addEventListener("click", slideSuivant));
precedent.forEach((preced) => preced.addEventListener("click", slidePrecedent));
