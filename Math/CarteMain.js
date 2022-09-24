import Carte from "../classe/CarteMain.js";
import Somme from "../effet/somme.js";

export default class CarteMain extends Carte {
  constructor(nom, points, effet, typeEffet, type) {
    super(nom, points, effet, typeEffet, type);
  }

  liste() {
    let liste = new Array();
    liste.push(new CarteMain("Zero", 0, "Aucun", new Somme(0), "Normal"));
    liste.push(new CarteMain("Un", 1, "Aucun", new Somme(1), "Normal"));
    liste.push(new CarteMain("Deux", 2, "Aucun", new Somme(2), "Normal"));
    liste.push(new CarteMain("Trois", 3, "Aucun", new Somme(3), "Normal"));
    liste.push(new CarteMain("Quatre", 4, "Aucun", new Somme(4), "Normal"));
    liste.push(new CarteMain("Cinq", 5, "Aucun", new Somme(5), "Normal"));
    liste.push(new CarteMain("Six", 6, "Aucun", new Somme(6), "Normal"));
    liste.push(new CarteMain("Sept", 7, "Aucun", new Somme(7), "Normal"));
    liste.push(new CarteMain("Huit", 8, "Aucun", new Somme(8), "Normal"));
    liste.push(new CarteMain("Neuf", 9, "Aucun", new Somme(9), "Normal"));
    liste.push(new CarteMain("Dix", 10, "Aucun", new Somme(10), "Normal"));
    return liste;
  }

  getCarte() {
    let liste = this.liste();
    let alea = Math.floor(Math.random() * liste.length);
    let carte = liste[alea];
    return carte;
  }
}
