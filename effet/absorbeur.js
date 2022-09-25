import Effet from "../classe/Effet.js";

export default class Absorbeur extends Effet{
    
    comptePoints(index,score,cartes,cartesJ){
        this.pointDeBase=cartesJ[index-1].typeEffet.pointDeBase;
        score[index-1]+=this.pointDeBase;
        return score;
    }
}