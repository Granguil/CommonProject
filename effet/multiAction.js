export default class MultiAction {
  constructor(pointDeBase, type, action) {
    this.pointDeBase = Number(pointDeBase);
    this.type = type;
    this.action = action;
  }

  comptePoints(cartesJ, cartes, index, score, main) {
    score[index - 1] += this.pointDeBase;
    for (let i = 0; i < this.type.length; i++) {
      if (cartesJ[index - 1].type == this.type[i]) {
        score = this.action[i].comptePoints(
          cartesJ,
          cartes,
          index,
          score,
          main
        );
      }
    }
    return score;
  }
}
