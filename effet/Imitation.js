import Effet from "../classe/Effet.js";

export default class Imitation extends Effet{
    constructor(pointDeBase,carteCopiee){
        super(pointDeBase);
        this.carte=carteCopiee;
    }

    comptePoints(index,score,cartes,cartesJ,cartesMain){
        if(index>1){
        cartesJ[index-1]=cartesJ[index-2];
        score=cartesJ[index-1].typeEffet.comptePoints(index,score,cartes,cartesJ,cartesMain);
        }
        return score;
    }
}