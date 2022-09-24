import Carte from "../classe/CartePlateau.js";
import CarteAleatoire from "../effet/carteAleatoire.js";
import MultiAction from "../effet/multiAction.js";
import ZeroPoint from "../effet/zeroPoint.js";
import BonusMultiplie from "../effet/bonusMultiplie.js";
import Pioche from "../effet/pioche.js";
import BonusMain from "../effet/bonusMain.js";
import AucunEffet from "../effet/aucunEffet.js";
import Absorbeur from "../effet/absorbeur.js";
import BonusType from "../effet/bonusType.js";

export default class CartePlateau extends Carte {
  constructor(nom, points, effet, typeEffet, type) {
    super(nom, points, effet, typeEffet, type);
  }

  liste() {
    let liste = new Array();
    for (let i = 0; i < 4; i++) {
      liste.push(
        new CartePlateau(
          "Sol de Glace",
          1,
          "Aucun Effet",
          new AucunEffet(1),
          "Glace"
        )
      );
      liste.push(
        new CartePlateau(
          "Flammèche",
          1,
          "Aucun Effet",
          new AucunEffet(1),
          "Feu"
        )
      );
      liste.push(
        new CartePlateau(
          "Magie Arcanique",
          1,
          "Aucun Effet",
          new AucunEffet(1),
          "Arcane"
        )
      );
    }
    for (let i = 0; i < 3; i++) {}
    for (let i = 0; i < 2; i++) {
      liste.push(
        new CartePlateau(
          "Absorbeur des Arcanes",
          1,
          "Points de la carte associée",
          new Absorbeur(0),
          "Arcane"
        )
      );
      liste.push(
        new CartePlateau(
          "Reflet de Glace",
          1,
          "x3 carte associée si Glace",
          new BonusMultiplie(1, [3], ["Glace"]),
          "Glace"
        )
      );
    }
    liste.push(
      new CartePlateau(
        "Cellule des Arcanes",
        3,
        "S'associe avec une carte aléatoire",
        new CarteAleatoire(3),
        "Arcane"
      )
    );
    liste.push(
      new CartePlateau(
        "Trou Noir",
        0,
        "Annule les points",
        new ZeroPoint(),
        "Néant"
      )
    );
    liste.push(
      new CartePlateau(
        "Grand Vide",
        0,
        "Pioche si Feu, x3 si Arcane, bonus Main si glace",
        new MultiAction(
          0,
          ["Feu", "Arcane", "Glace"],
          [
            new Pioche(0, "Feu"),
            new BonusMultiplie(0, [3], ["Arcane"]),
            new BonusMain(0, [1, 2, 1], ["Arcane", "Glace", "Feu"], "Glace"),
          ]
        ),
        "Néant"
      )
    );
    liste.push(
      new CartePlateau(
        "Cercle de Feu",
        0,
        "+1 pour toutes les cartes Feu si Feu",
        new BonusType(0, 1, "Feu", "Feu"),
        "Feu"
      )
    );
    liste.push(
      new CartePlateau(
        "Grimoire",
        5,
        "+2 aux cartes de la main si Arcane",
        new BonusMain(5, [2, 2, 2], ["Feu", "Glace", "Arcane"], "Arcane"),
        "Arcane"
      )
    );
    return liste;
  }
}
