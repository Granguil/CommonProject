import Effet from "../classe/Effet.js";

export default class BonusMain extends Effet{
    constructor(pointDeBase,bonus,type,condition){
        super(pointDeBase);
        this.bonus=bonus;
        this.type=type;
        this.condition=condition;
    }

    comptePoints(index,score,cartes,cartesJ,cartesMain){
        score[index-1]+=this.pointDeBase;
        if(cartes[index-1].type==this.condition){
            for(let i=0;i<this.type.length;i++){
                for(let j=0;j<cartesMain.length;j++){
                    if(this.type[i]==cartesMain[j].type){
                        cartesMain[j].points+=this.bonus[i];
                        cartesMain[j].typeEffet.pointDeBase+=this.bonus[i];
                    }
                }
            }
        }        
        return score;
    }
}