export default class HistoryAssociation {
  constructor(pointDeBase, stat) {
    this.pointDeBase = Number(pointDeBase);
    this.stat = stat;
  }

  comptePoints(cartesJ,cartes,index,score,carteMain,cartesPlateau) {
    score[index - 1] += this.pointDeBase;
    
    return score;
  }
}
