import Effet from "../classe/Effet.js";

export default class BonusSuivant extends Effet{
    constructor(pointDeBase,bonusSuivant,decalage){
        super(pointDeBase);
        this.decalage=decalage;
        this.bonusSuivant=bonusSuivant;
        this.index=0;
    }

    comptePoints(index,score){
        this.decalage=index+this.decalage;
        this.index=index;
        score[index-1]+=this.pointDeBase;
        return score;
    }
}