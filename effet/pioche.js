import CarteMain from "../Magie/carteMain.js";
import Magie from "../Magie/Magie.js";

export default class Pioche{
    constructor(pointDeBase,type){
        this.pointDeBase=pointDeBase;
        this.type=type;
        
    }

    comptePoints(cartesJ,cartes,index,score,cartesMain){
        if(this.type==cartes[index-1].type){
            let carte=new CarteMain().getCarte()
            carte.couleur=new Magie().getCouleur(carte.type);
            cartesMain.push(carte);
        }
        score[index-1]+=this.pointDeBase;
        return score;
    }
}