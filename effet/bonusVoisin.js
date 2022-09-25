import Effet from "../classe/Effet.js";

export default class BonusVoisin extends Effet{
    constructor(pointDeBase,bonus,type){
        super(pointDeBase);
        this.bonus=bonus;
        this.type=type;
    }

    comptePoints(index,score,cartes){
        score[index-1]+=this.pointDeBase;
        let debut;
        if(index>1){
            debut=index-2;
        }else{
            debut=index;
        }
        let fin;
        if(index<5){
            fin=index+1;
        }else{
            fin=index;
        }
        for(let j=debut;j<fin;j=j+2){
        for(let i=0;i<this.type.length;i++){
            if(this.type[i]==cartes[j].type){
                score[index-1]+=Number(this.bonus[i]);
            }
        }
        }
        return score;
    }
}