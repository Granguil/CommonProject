import Carte from "../classe/CarteMain.js";
import Association from "../effet/Association.js";

export default class CarteMain extends Carte {
  constructor(nom, points, effet, typeEffet, type, img) {
    super(nom, points, effet, typeEffet, type);

    this.image = "/img/" + img;
  }

  liste() {
    let liste = new Array();
    liste.push(
      new CarteMain(
        "Clarke Griffin",
        3,
        null,
        new Association(3, 1),
        "Meneuse par Obligation",
        "cg.jpg"
      )
    );
    liste.push(
      new CarteMain(
        "Richard Castle",
        1,
        null,
        new Association(1, 2),
        "Ecrivain Enquêteur",
        "rc.jpg"
      )
    );
    liste.push(
      new CarteMain(
        "Piper Halliwell",
        3,
        null,
        new Association(3, 3),
        "Pouvoir des Trois",
        "ph.jpg"
      )
    );
    liste.push(
      new CarteMain(
        "Adalind Schade",
        3,
        null,
        new Association(3, 4),
        "Sorcière et Mère",
        "as.jpg"
      )
    );
    liste.push(
      new CarteMain(
        "Oliver Queen",
        2,
        null,
        new Association(2, 5),
        "Fils Prodigue",
        "oq.jpg"
      )
    );
    liste.push(
      new CarteMain(
        "Nicolette Nevin",
        3,
        null,
        new Association(3, 6),
        "Infirmière",
        "nn.jpg"
      )
    );
    liste.push(
      new CarteMain(
        "Mozzie",
        3,
        null,
        new Association(3, 7),
        "Voleur pour toujours ?",
        "mozzie.jpg"
      )
    );
    liste.push(
      new CarteMain(
        "Stacy Barret",
        3,
        null,
        new Association(3, 8),
        "Top Model et Meilleure Amie",
        "sb.jpg"
      )
    );
    liste.push(
      new CarteMain(
        "Teal'C",
        2,
        null,
        new Association(2, 9),
        "Un Jaffa sur la Terre",
        "tealc.jpg"
      )
    );
    liste.push(
      new CarteMain(
        "Diana Bishop",
        2,
        null,
        new Association(2, 10),
        "Sorcière rétive à la Magie",
        "db.jpg"
      )
    );
    return liste;
  }
}
