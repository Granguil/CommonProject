export default class bonusSimple{
    constructor(pointDeBase,numero){
        this.pointDeBase=Number(pointDeBase);
        this.numero=numero;
    }

    comptePoints(cartesJ,cartes,index,score){
        if(this.numero==cartes[index-1].typeEffet.numero){
        score[index-1]+=this.pointDeBase;
        }
               
        return score;
    }
}