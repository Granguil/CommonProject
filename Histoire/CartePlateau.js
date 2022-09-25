import Carte from "../classe/CartePlateau.js";
import Somme from "../effet/somme.js";

export default class CartePlateau extends Carte {
  constructor(nom, points, effet, typeEffet, type) {
    super(nom, points, effet, typeEffet, type);
  }

  liste() {
    let liste = new Array();
    
    return liste;
  }
}
