import Carte from "../classe/CarteMain.js";
import Somme from "../effet/somme.js";

export default class CarteMain extends Carte {
  constructor(nom, points, effet, typeEffet, type) {
    super(nom, points, effet, typeEffet, type);
  }

  liste() {
    let liste = new Array();
    
    return liste;
  }

  getCarte() {
    let liste = this.liste();
    let alea = Math.floor(Math.random() * liste.length);
    let carte = liste[alea];
    return carte;
  }
}
