import AucunEffet from "../effet/aucunEffet.js";
import Carte from "../classe/CarteMain.js";

export default class CarteMain extends Carte {
  constructor(nom, points, effet, typeEffet, type) {
    super(nom, points, effet, typeEffet, type);
  }

  liste() {
    let liste = new Array();
    liste.push(
      new CarteMain("Guerrier", 1, "t", new AucunEffet(1), "Corps-à-corps")
    );
    liste.push(new CarteMain("Archer", 1, "t", new AucunEffet(1), "De Loin"));
    liste.push(
      new CarteMain("Cavalier", 1, "t", new AucunEffet(1), "Cavalier")
    );
    liste.push(new CarteMain("Mage", 1, "t", new AucunEffet(1), "Mage"));
    liste.push(new CarteMain("Canon", 1, "t", new AucunEffet(1), "Artillerie"));
    return liste;
  }
}
