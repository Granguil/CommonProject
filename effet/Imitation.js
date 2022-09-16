export default class Imitation{
    constructor(pointDeBase,carteCopiee){
        this.pointDeBase=pointDeBase;
        this.carte=carteCopiee;
    }

    comptePoints(cartesJ,cartes,index,score,cartesMain){
        if(index>1){
        cartesJ[index-1]=cartesJ[index-2];
        score=cartesJ[index-1].typeEffet.comptePoints(cartesJ,cartes,index,score,cartesMain);
        }
        return score;
    }
}