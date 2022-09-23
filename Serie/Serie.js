import CarteMain from "./CarteMain.js";
import CartePlateau from "./CartePlateau.js";

export default class Serie {
  constructor() {
    this.selection = new Array();
  }
  carteMain() {
    let liste = new CarteMain().liste();

    let main = new Array();
    for (let i = 0; i < 5; i++) {
      let alea = Math.floor(Math.random() * liste.length);
      this.selection.push(alea);
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

  cartePlateau() {
    let liste = new CartePlateau().liste();
    let plateau = new Array();
    for (let i = 0; i < 5; i++) {
      let alea = this.selection[i];
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
    const scoreSpan = document.querySelectorAll("#score span");
    for (let i = 1; i <= 5; i++) {
      scoreSpan[i].textContent = "Score n°" + i + " : " + score[i - 1];
    }
    scoreSpan[0].textContent = "Totale : " + points;
    const cpSpan = document.querySelectorAll("#CP" + cartes.length + " span");
    for (const cs of cpSpan) {
      cs.classList.add("d-block");
    }
    if (cartes.length == 5) {
      alert("Votre Score est de " + points + " points.");
      const cartesMain = document.querySelectorAll("#main .carte");
      for (const cm of cartesMain) {
        cm.removeEventListener();
      }
    }
    return points;
  }

  getCouleur(type) {
    return ["lightgreen", "black"];
  }

  affichageMain(carte) {
    let div = document.createElement("div");
    div.classList.add("carte");
    div.style.backgroundColor = carte.couleur[0];
    div.style.color = carte.couleur[1];
    let nom = document.createElement("span");
    nom.textContent = carte.nom;
    if (carte.image != undefined) {
      fetch(carte.image)
        .catch(() => console.log("Fail"))
        .then((response) => {
        if(response.status=="200"){
          return response.blob()
        }else{
          throw "Fail";
        }})
        .then((data) => {
          let img = document.createElement("img");
          img.src = carte.image;
          div.appendChild(img);
        });
    }
    let type = document.createElement("span");
    type.textContent = carte.type;
    let points = document.createElement("span");
    points.textContent = "Points : " + carte.points;
    div.appendChild(nom);
    div.appendChild(type);
    div.appendChild(points);

    return div;
  }

  affichageCP(div, carte, index, nbCarteJoue) {
    div.style.backgroundColor = carte.couleur[0];
    div.style.color = carte.couleur[1];
    let nom = document.createElement("span");
    nom.textContent = carte.nom;
    let img = document.createElement("img");
    if (carte.image != undefined) {
      fetch(carte.image)
        .catch(() => console.log("Fail"))
        .then((response) => {
        if(response.status=="200"){
          return response.blob()
        }else{
          throw "Fail";
        }})
        .then((data) => {
          img.src = carte.image;
          div.appendChild(img);
        });
    }
    let type = document.createElement("span");
    type.textContent = carte.type;
    let points = document.createElement("span");
    points.textContent = "Points : " + carte.points;

    if (index > nbCarteJoue) {
      nom.classList.add("d-none");
      type.classList.add("d-none");
      points.classList.add("d-none");
      img.classList.add("d-none");
    }
    div.appendChild(nom);
    div.appendChild(type);
    div.appendChild(points);
  }

  affichagePJ(carte, div, index, num) {
    const cpSpan = document.querySelectorAll("#CP" + index + " span");
    if (num == 1) {
      cpSpan[0].textContent = "Carte Jouée";
    } else {
      cpSpan[0].textContent = " ";
    }
    cpSpan[1].textContent = carte.nom;
    cpSpan[2].textContent = carte.type;
    cpSpan[3].textContent = "Points : " + carte.points;
    document.querySelector("#CP" + index + " img").src = carte.image;
    div.style.backgroundColor = carte.couleur[0];
    div.style.color = carte.couleur[1];
  }
}
