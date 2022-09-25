export default class Effet{
    constructor(pointDeBase){
        this.pointDeBase=Number(pointDeBase);       
    }

    comptePoints(index,score){
        score[index-1]+=this.pointsDeBase;
        return score;
    }
}