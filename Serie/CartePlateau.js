import Carte from "../classe/CartePlateau.js";
import Association from "../effet/Association.js";

export default class CartePlateau extends Carte {
  constructor(nom, points, effet, typeEffet, type, image) {
    super(nom, points, effet, typeEffet, type);
    this.image = "/image/" + image;
  }

  liste() {
    let liste = new Array();
    liste.push(
      new CartePlateau(
        "The 100",
        5,
        null,
        new Association(5, 1),
        "Post-Apocalyptique, Initiatique",
        "100.jpg"
      )
    );
    liste.push(
      new CartePlateau(
        "Castle",
        1,
        null,
        new Association(1, 2),
        "Policier",
        "castle.jpg"
      )
    );
    liste.push(
      new CartePlateau(
        "Charmed",
        2,
        null,
        new Association(2, 3),
        "Des soeurs sorcières",
        "charmed.jpg"
      )
    );
    liste.push(
      new CartePlateau(
        "Grimm",
        4,
        null,
        new Association(4, 4),
        "Policier Fantastique",
        "grimm.jpg"
      )
    );
    liste.push(
      new CartePlateau(
        "Arrow",
        3,
        null,
        new Association(3, 5),
        "Super-Héros DC",
        "arrow.jpg"
      )
    );
    liste.push(
      new CartePlateau(
        "The Resident",
        2,
        null,
        new Association(2, 6),
        "Médical",
        "resident.jpg"
      )
    );
    liste.push(
      new CartePlateau(
        "FBI : Duo très Spécial",
        3,
        null,
        new Association(2, 7),
        "Un Voleur Repenti ?",
        "fbidts.jpg"
      )
    );
    liste.push(
      new CartePlateau(
        "Drop Dead Diva",
        4,
        null,
        new Association(4, 8),
        "De Top-Model à Avocate",
        "ddd.jpg"
      )
    );
    liste.push(
      new CartePlateau(
        "Stargate SG-1",
        2,
        null,
        new Association(2, 9),
        "Un portail vers l'inconnu",
        "sg1.jpg"
      )
    );
    liste.push(
      new CartePlateau(
        "Discovery of Witches",
        5,
        null,
        new Association(5, 10),
        "Sorcière et Vampire",
        "dow.jpg"
      )
    );
    return liste;
  }
}
