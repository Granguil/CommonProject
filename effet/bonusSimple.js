import Effet from "../classe/Effet.js";

export default class BonusSimple extends Effet{
    constructor(pointDeBase,bonus,type){
        super(pointDeBase);
        this.bonus=bonus;
        this.type=type;
    }

    comptePoints(index,score,cartes){
        score[index-1]+=this.pointDeBase;
        for(let i=0;i<this.type.length;i++){
            if(this.type[i]==cartes[index-1].type){
                score[index-1]+=this.bonus[i];
            }
        }        
        return score;
    }
}