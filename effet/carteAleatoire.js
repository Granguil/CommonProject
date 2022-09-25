import Effet from "../classe/Effet.js";

export default class CarteAleatoire extends Effet{
    constructor(pointDeBase){
        super(pointDeBase);
        this.actionAutomatique=true;
    }

    comptePoints(index,score,cartes,cartesJ,cartesMain){
       let alea=Math.floor(Math.random()*cartesMain.length);
        cartesJ.push(cartesMain[alea]);
        cartesMain.splice(alea,1);
        index=cartesJ.length;
        score[index-1]+=this.pointDeBase;
        return score;
    }
}