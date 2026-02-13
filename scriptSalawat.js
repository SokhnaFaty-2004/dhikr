let count = 0;

const compteur = document.getElementById("compteur");
const message = document.getElementById("message");
const btnPlus = document.getElementById("btnPlus");
const btnReset = document.getElementById("btnReset");

function animerCompteur() {
  compteur.classList.add("animate"); // ajoute la classe → animation démarre

  setTimeout(() => {
    compteur.classList.remove("animate"); // retire la classe → permet de relancer l’animation
  }, 300); // 0.3s = durée de l’animation
}
function condition() {

  if (count > 1947) {
    count = 0;
    compteur.style.color = "red";
    message.textContent = "Bravo ! Salawat complété, compteur remis à zéro !";
  }

  else if (count >= 1500) {
    compteur.style.color = "orange";
    message.textContent = "";
  }

  else if (count >= 1000) {
    compteur.style.color = "yellow";
    message.textContent = "";
  }

  else if (count >= 500) {
    compteur.style.color = "green";
    message.textContent = "";
  }

  else if (count >= 100) {
    compteur.style.color = "blue";
    message.textContent = "";
  }

  else {
    compteur.style.color = "white";
    message.textContent = "";
  }
}
function incrementer() {
  count++;
  condition()
  compteur.textContent = String(count);
  animerCompteur();
}

function reset() {
  count = 0;
  compteur.textContent = String(count);
}

btnPlus.addEventListener("click", incrementer);
btnReset.addEventListener("click", reset);
