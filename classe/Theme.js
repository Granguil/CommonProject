import { config } from "../config/config.js";

export default class Theme {
  constructor() {
    this.selection = new Array();
  }
  carteMainParent(liste, withMatch) {
    let main = new Array();
    for (let i = 0; i < 5; i++) {
      let alea = Math.floor(Math.random() * liste.length);
      if (withMatch != undefined && withMatch) {
        this.selection.push(alea);
      }
      main.push(liste[alea]);
      main[i].couleur = this.getCouleur(main[i].type);
      liste.splice(alea, 1);
    }
    main.sort((a, b) => {
      let ordre = Math.random() * 2;
      if (ordre <= 1) {
        return -1;
      } else {
        return 1;
      }
    });
    return main;
  }

  cartePlateauParent(liste, withMatch) {
    let plateau = new Array();
    for (let i = 0; i < 5; i++) {
      let alea =
        withMatch != undefined && withMatch
          ? this.selection[i]
          : Math.floor(Math.random() * liste.length);
      plateau.push(liste[alea]);
      plateau[i].couleur = this.getCouleur(plateau[i].type);
      liste.splice(alea, 1);
    }
    plateau.sort((a, b) => {
      let ordre = Math.random() * 2;
      if (ordre <= 1) {
        return -1;
      } else {
        return 1;
      }
    });
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
        c.addEventListener("click", () => {});
      }
    }
    return points;
  }

  getCouleur(type) {
    return ["lightblue", "black"];
  }

  affichageMain(carte) {
    const withEffect = carte.effet != undefined && carte.effet != "Aucun";
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
    if (withEffect) {
      effet.textContent = carte.effet;
    }
    if (carte.image != undefined && config.withImage) {
      fetch(carte.image)
        .then((response) => {
          if (response.status == "200") {
            return response.blob();
          } else {
            throw "Fail";
          }
        })
        .then((data) => {
          let img = document.createElement("img");
          img.src = carte.image;
          div.appendChild(img);
        })
        .catch(() => console.log("Fail"));
    }
    div.appendChild(nom);
    div.appendChild(type);
    div.appendChild(points);
    if (withEffect) {
      div.appendChild(effet);
    }
    return div;
  }

  affichageCP(div, carte, index, nbCarteJoue) {
    const withEffect = carte.effet != undefined && carte.effet != "Aucun";
    div.style.backgroundColor = carte.couleur[0];
    div.style.color = carte.couleur[1];
    let nom = document.createElement("span");
    nom.textContent = carte.nom;
    let type = document.createElement("span");
    type.textContent = carte.type;
    let points = document.createElement("span");
    points.textContent = "Points : " + carte.points;
    let effet = document.createElement("span");
    if (withEffect) {
      effet.textContent = carte.effet;
    }
    let img = document.createElement("img");
    if (carte.image != undefined && config.withImage) {
      fetch(carte.image)
        .then((response) => {
          if (response.status == "200") {
            return response.blob();
          } else {
            throw "Fail";
          }
        })
        .then((data) => {
          img.src = carte.image;
          div.appendChild(img);
        })
        .catch(() => console.log("Fail"));
    }
    if (index > nbCarteJoue) {
      nom.classList.add("d-none");
      type.classList.add("d-none");
      points.classList.add("d-none");
      if (withEffect) {
        effet.classList.add("d-none");
      }
      img.classList.add("d-none");
    }
    div.appendChild(nom);
    div.appendChild(type);
    div.appendChild(points);
    if (withEffect) {
      div.appendChild(effet);
    }
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
    if (carte.image != undefined && config.withImage) {
      fetch(carte.image)
        .then((response) => {
          if (response.status == "200") {
            return response.blob();
          } else {
            throw "Fail";
          }
        })
        .then((data) => {
          document.querySelector("#CP" + index + " img").src = carte.image;
        })
        .catch(() => console.log("Fail"));
    }
    div.style.backgroundColor = carte.couleur[0];
    div.style.color = carte.couleur[1];
  }
}
