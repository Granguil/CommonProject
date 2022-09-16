export default class BonusPlateau{
    constructor(pointDeBase,bonus,type){
        this.pointDeBase=Number(pointDeBase);
        this.bonus=bonus;
        this.type=type;
    }

    comptePoints(cartesJ,cartes,index,score){
        for(let i=0;i<cartes.length;i++){
            for(let j=0;j<this.bonus.length;j++){
                if(cartes[i].type==this.type[j] && i!=index-1){
                    cartes[i].points+=this.bonus[j];
                    cartes[i].typeEffet.pointDeBase+=this.bonus[j];
                    if(i<index-1){
                    score[i]+=this.bonus[j];
                    }
                }
            }
        }
        score[index-1]+=this.pointDeBase;
        return score;
    }
}