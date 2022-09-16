export default class AucunEffet{
    constructor(pointsDeBase){
        this.pointsDeBase=pointsDeBase;
    }

    comptePoints(cartesJ,cartes,index,score,cartesMain){
        score[index-1]+=this.pointsDeBase;
        return score;
    }
}