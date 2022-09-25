import Effet from "../classe/Effet.js";

export default class Somme extends Effet{
    constructor(pointDeBase){
        super(pointDeBase);
        
    }

    comptePoints(index,score){
        
        if(score[index-1]==0){
            score[index-1]+=this.pointDeBase;
        }else{
            let total=score[index-1]+this.pointDeBase;
            score[index-1]=Math.abs(total-10)*2;
        }

               
        return score;
    }
}