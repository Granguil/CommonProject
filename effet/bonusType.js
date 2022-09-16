export default class BonusType{
    constructor(pointDeBase,bonus,type,condition){
        this.pointDeBase=Number(pointDeBase);
        this.bonus=bonus,
        this.type=type;
        this.condition=condition;
    }

    comptePoints(cartesJ,cartes,index,score,carteMain,cartesPlateau){
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