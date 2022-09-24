import Theme from "../classe/Theme.js";
import CarteMain from "./CarteMain.js";
import CartePlateau from "./CartePlateau.js";

export default class Duel extends Theme {
  carteMain() {
    let liste = new CarteMain().liste();
    return this.carteMainParent(liste);
  }

  cartePlateau() {
    let liste = new CartePlateau().liste();
    return this.cartePlateauParent(liste);
  }

  getCouleur(type) {
    if (type == "Corps-à-corps") {
      return ["slategray", "white"];
    } else if (type == "De Loin") {
      return ["darkgreen", "lightgreen"];
    } else if (type == "Cavalier") {
      return ["brown", "red"];
    } else if (type == "Mage") {
      return ["black", "silver"];
    } else if (type == "Artillerie") {
      return ["red", "black"];
    }
  }
}
