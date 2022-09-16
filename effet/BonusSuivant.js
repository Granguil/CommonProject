export default class BonusSuivant{
    constructor(pointDeBase,bonusSuivant,decalage){
        this.pointDeBase=Number(pointDeBase);
        this.decalage=decalage;
        this.bonusSuivant=bonusSuivant;
        this.index=0;
    }

    comptePoints(cartesJ,cartes,index,score){
        this.decalage=index+this.decalage;
        this.index=index;
        score[index-1]+=this.pointDeBase;
        return score;
    }
}