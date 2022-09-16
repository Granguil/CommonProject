export default class Somme{
    constructor(pointDeBase){
        this.pointDeBase=Number(pointDeBase);
        
    }

    comptePoints(cartesJ,cartes,index,score){
        
        if(score[index-1]==0){
            score[index-1]+=this.pointDeBase;
        }else{
            let total=score[index-1]+this.pointDeBase;
            score[index-1]=Math.abs(total-10)*2;
        }

               
        return score;
    }
}