import Effet from "../classe/Effet.js";

export default class MultiAction extends Effet {
  constructor(pointDeBase, type, action) {
    super(pointDeBase);
    this.type = type;
    this.action = action;
  }

  comptePoints(index,score,cartes, cartesJ, main) {
    score[index - 1] += this.pointDeBase;
    for (let i = 0; i < this.type.length; i++) {
      if (cartesJ[index - 1].type == this.type[i]) {
        score = this.action[i].comptePoints(
          index,
          score,
          cartes,
          cartesJ,
          main
        );
      }
    }
    return score;
  }
}
