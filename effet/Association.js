import Effet from "../classe/Effet.js";

export default class Association extends Effet{
    constructor(pointDeBase,numero){
        super(pointDeBase);
        this.numero=numero;
    }

    comptePoints(index,score,cartes){
        if(this.numero==cartes[index-1].typeEffet.numero){
        score[index-1]+=this.pointDeBase;
        }
               
        return score;
    }
}