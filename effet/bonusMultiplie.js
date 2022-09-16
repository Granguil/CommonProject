export default class BonusMultiplie{
    constructor(pointDeBase,bonus,type){
        this.pointDeBase=Number(pointDeBase);
        this.bonus=bonus;
        this.type=type;
    }

    comptePoints(cartesJ,cartes,index,score){
        score[index-1]+=this.pointDeBase;
        for(let i=0;i<this.type.length;i++){
            if(this.type[i]==cartes[index-1].type){
                score[index-1]+=(this.bonus[i]-1)*cartesJ[index-1].points;
            }
        }        
        return score;
    }
}