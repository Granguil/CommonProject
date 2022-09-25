import Effet from "../classe/Effet.js";

export default class BonusType extends Effet{
    constructor(pointDeBase,bonus,type,condition){
        super(pointDeBase);
        this.bonus=bonus,
        this.type=type;
        this.condition=condition;
    }

    comptePoints(index,score,cartes,cartesJ,carteMain,cartesPlateau){
        if(cartesJ[index-1].type==this.condition){
            for(let i=0;i<cartesJ.length;i++){
                if(cartesJ[i].type==this.type){
                    cartesJ[i].points+=this.bonus;
                    cartesJ[i].typeEffet.pointDeBase+=this.bonus;
                    score[i]+=this.bonus;
                }
                if(cartesPlateau[i].type==this.type){
                    cartesPlateau[i].points+=this.bonus;
                    cartesPlateau[i].typeEffet.pointDeBase+=this.bonus;
                    score[i]+=this.bonus;
                }
                
            }
            for(let i=cartesJ.length;i<5;i++){
                if(cartesPlateau[i].type==this.type){
                    cartesPlateau[i].points+=this.bonus;
                    cartesPlateau[i].typeEffet.pointDeBase+=this.bonus;
                }
            }
            for(let i=0;i<carteMain.length;i++){
                if(carteMain[i].type==this.type){
                    carteMain[i].points+=this.bonus;
                    carteMain[i].typeEffet.pointDeBase+=this.bonus;
                }
            }
        }
        return score;
    }
}