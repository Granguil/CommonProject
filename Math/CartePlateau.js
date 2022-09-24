import Carte from "../classe/CartePlateau.js";
import Somme from "../effet/somme.js";

export default class CartePlateau extends Carte {
  constructor(nom, points, effet, typeEffet, type) {
    super(nom, points, effet, typeEffet, type);
  }

  liste() {
    let liste = new Array();
    liste.push(new CartePlateau("Zero", 0, "Aucun", new Somme(0), "Normal"));
    liste.push(new CartePlateau("Un", 1, "Aucun", new Somme(1), "Normal"));
    liste.push(new CartePlateau("Deux", 2, "Aucun", new Somme(2), "Normal"));
    liste.push(new CartePlateau("Trois", 3, "Aucun", new Somme(3), "Normal"));
    liste.push(new CartePlateau("Quatre", 4, "Aucun", new Somme(4), "Normal"));
    liste.push(new CartePlateau("Cinq", 5, "Aucun", new Somme(5), "Normal"));
    liste.push(new CartePlateau("Six", 6, "Aucun", new Somme(6), "Normal"));
    liste.push(new CartePlateau("Sept", 7, "Aucun", new Somme(7), "Normal"));
    liste.push(new CartePlateau("Huit", 8, "Aucun", new Somme(8), "Normal"));
    liste.push(new CartePlateau("Neuf", 9, "Aucun", new Somme(9), "Normal"));
    liste.push(new CartePlateau("Dix", 10, "Aucun", new Somme(10), "Normal"));
    return liste;
  }
}
