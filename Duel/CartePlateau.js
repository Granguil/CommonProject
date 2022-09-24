import AucunEffet from "../effet/aucunEffet.js";
import Carte from "../classe/CartePlateau.js";

export default class CartePlateau extends Carte {
  constructor(nom, points, effet, typeEffet, type) {
    super(nom, points, effet, typeEffet, type);
  }

  liste() {
    let liste = new Array();
    liste.push(
      new CartePlateau("Guerrier", 1, "t", new AucunEffet(1), "Corps-à-corps")
    );
    liste.push(
      new CartePlateau("Archer", 1, "t", new AucunEffet(1), "De Loin")
    );
    liste.push(
      new CartePlateau("Cavalier", 1, "t", new AucunEffet(1), "Cavalier")
    );
    liste.push(new CartePlateau("Mage", 1, "t", new AucunEffet(1), "Mage"));
    liste.push(
      new CartePlateau("Canon", 1, "t", new AucunEffet(1), "Artillerie")
    );
    return liste;
  }
}
