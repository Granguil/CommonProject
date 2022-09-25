import Effet from "../classe/Effet.js";
import CarteMain from "../Magie/CarteMain.js";
import Magie from "../Magie/Magie.js";

export default class CarteAleatoireDeck extends Effet{
    constructor(pointDeBase){
        super(pointDeBase);
    
    }

    comptePoints(index,score,cartes,cartesJ,cartesMain){
        let carteDeck=new CarteMain().getCarte();
        cartesJ[index-1]=carteDeck;
        cartesJ[index-1].couleur=new Magie().getCouleur(carteDeck.type);
        score=cartesJ[index-1].typeEffet.comptePoints(index,score,cartes,cartesJ,cartesMain);
        return score;
    }
}