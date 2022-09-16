import CarteMain from "../Magie/CarteMain.js";
import Magie from "../Magie/Magie.js";

export default class CarteAleatoireDeck{
    constructor(pointDeBase){
        this.pointDeBase=pointDeBase;
    
    }

    comptePoints(cartesJ,cartes,index,score,cartesMain){
        let carteDeck=new CarteMain().getCarte();
        cartesJ[index-1]=carteDeck;
        cartesJ[index-1].couleur=new Magie().getCouleur(carteDeck.type);
        score=cartesJ[index-1].typeEffet.comptePoints(cartesJ,cartes,index,score,cartesMain);
        return score;
    }
}