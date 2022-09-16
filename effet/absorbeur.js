export default class Absorbeur{
    constructor(pointDeBase){
        this.pointDeBase=Number(pointDeBase);
        
    }

    comptePoints(cartesJ,cartes,index,score){
        this.pointDeBase=cartesJ[index-1].typeEffet.pointDeBase;
        score[index-1]+=this.pointDeBase;
               
        return score;
    }
}