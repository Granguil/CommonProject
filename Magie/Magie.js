import Theme from "../classe/Theme.js";
import CarteMain from "./CarteMain.js";
import CartePlateau from "./CartePlateau.js";

export default class Magie extends Theme {
  carteMain() {
    let liste = new CarteMain().liste();
    return this.carteMainParent(liste);
  }

  cartePlateau() {
    let liste = new CartePlateau().liste();
    return this.cartePlateauParent(liste);
  }

  getCouleur(type) {
    if (type == "Feu") {
      return ["red", "white"];
    } else if (type == "Glace") {
      return ["#dffffe", "black"];
    } else if (type == "Arcane") {
      return ["darkblue", "white"];
    } else if (type == "Néant") {
      return ["black", "white"];
    }
  }
}
