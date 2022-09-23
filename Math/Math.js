import Theme from "../classe/Theme.js";
import CarteMain from "./CarteMain.js";
import CartePlateau from "./CartePlateau.js";

export default class Math10 extends Theme {
  carteMain() {
    let liste = new CarteMain().liste();
    return this.carteMainParent(liste);
  }

  cartePlateau() {
    let liste = new CartePlateau().liste();
    return this.cartePlateauParent(liste);
  }
}
