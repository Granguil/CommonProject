import Theme from "../classe/Theme.js";
import { config } from "../config/config.js";
import CarteMain from "./CarteMain.js";
import CartePlateau from "./CartePlateau.js";

export default class Serie extends Theme {
  carteMain() {
    let liste = new CarteMain().liste();
    return this.carteMainParent(liste, true);
  }

  cartePlateau() {
    let liste = new CartePlateau().liste();
    return this.cartePlateauParent(liste, true);
  }

  getCouleur(type) {
    return ["lightgreen", "black"];
  }
}
