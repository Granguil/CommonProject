import CarteMain from "./CarteMain.js";
import CartePlateau from "./CartePlateau.js";

export default class Math10 {
  carteMain() {
    let liste = new CarteMain().liste();

    let main = new Array();
    for (let i = 0; i < 5; i++) {
      let alea = Math.floor(Math.random() * liste.length);
      main.push(liste[alea]);
      main[i].couleur = this.getCouleur(main[i].type);
      liste.splice(alea, 1);
    }
    return main;
  }

  cartePlateau() {
    let liste = new CartePlateau().liste();
    let plateau = new Array();
    for (let i = 0; i < 5; i++) {
      let alea = Math.floor(Math.random() * liste.length);
      plateau.push(liste[alea]);
      plateau[i].couleur = this.getCouleur(plateau[i].type);
      liste.splice(alea, 1);
    }
    return plateau;
  }

  getFormatScore() {
    let score = [0, 0, 0, 0, 0];
    for (let i = 0; i < 6; i++) {
      let span = document.createElement("span");
      if (i == 0) {
        span.textContent = "Totale : 0";
      } else {
        span.textContent = "Score n°" + i;
      }
      document.getElementById("score").appendChild(span);
    }
    return score;
  }

  affichageScore(score, cartes) {
    let points = score.reduce((acc, cv) => acc + cv);
    const scoresSpan = document.querySelectorAll("#score span");
    for (let i = 1; i <= 5; i++) {
      scoresSpan[i].textContent = "Score n°" + i + " : " + score[i - 1];
    }
    scoresSpan[0].textContent = "Totale : " + points;
    const spans = document.querySelectorAll("#CP" + cartes.length + " span");
    for (const s of spans) {
      s.classList.add("d-block");
    }
    if (cartes.length == 5) {
      alert("Votre Score est de " + points + " points.");
      const cartesFinally = document.querySelectorAll("#main .carte");
      for (const c of cartesFinally) {
        c.removeEventListener();
      }
    }
    return points;
  }

  getCouleur(type) {
    return ["lightblue", "black"];
  }

  affichageCP(div, carte, index, nbCarteJoue) {
    div.style.backgroundColor = carte.couleur[0];
    div.style.color = carte.couleur[1];
    let nom = document.createElement("span");
    nom.textContent = carte.nom;
    let type = document.createElement("span");
    type.textContent = carte.type;
    let points = document.createElement("span");
    points.textContent = "Points : " + carte.points;
    let effet = document.createElement("span");
    effet.textContent = carte.effet;
    if (index > nbCarteJoue) {
      nom.classList.add("d-none");
      type.classList.add("d-none");
      points.classList.add("d-none");
      effet.classList.add("d-none");
    }
    div.appendChild(nom);
    div.appendChild(type);
    div.appendChild(points);
    div.appendChild(effet);
  }

  affichageMain(carte) {
    let div = document.createElement("div");
    div.classList.add("carte");
    div.style.backgroundColor = carte.couleur[0];
    div.style.color = carte.couleur[1];
    let nom = document.createElement("span");
    nom.textContent = carte.nom;
    let type = document.createElement("span");
    type.textContent = carte.type;
    let points = document.createElement("span");
    points.textContent = "Points : " + carte.points;
    let effet = document.createElement("span");
    effet.textContent = carte.effet;
    div.appendChild(nom);
    div.appendChild(type);
    div.appendChild(points);
    div.appendChild(effet);
    return div;
  }

  affichagePJ(carte, div, index, num) {
    const cartesElt = document.querySelectorAll("#CP" + index + " span");
    if (num == 1) {
      cartesElt[0].textContent = "Carte Jouée";
    } else {
      cartesElt[0].textContent = " ";
    }
    cartesElt[1].textContent = carte.nom;
    cartesElt[2].textContent = carte.type;
    cartesElt[3].textContent = "Points : " + carte.points;
    cartesElt[4].textContent = carte.effet;
    div.style.backgroundColor = carte.couleur[0];
    div.style.color = carte.couleur[1];
  }
}
