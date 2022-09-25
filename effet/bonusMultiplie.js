import Effet from "../classe/Effet.js";

export default class BonusMultiplie extends Effet{
    constructor(pointDeBase,bonus,type){
        super(pointDeBase);
        this.bonus=bonus;
        this.type=type;
    }

    comptePoints(index,score,cartes,cartesJ){
        score[index-1]+=this.pointDeBase;
        for(let i=0;i<this.type.length;i++){
            if(this.type[i]==cartes[index-1].type){
                score[index-1]+=(this.bonus[i]-1)*cartesJ[index-1].points;
            }
        }        
        return score;
    }
}