import Carte from '../classe/CarteMain.js';
import BonusSimple from '../effet/bonusSimple.js';
import BonusVoisin from '../effet/bonusVoisin.js';
import Imitation from '../effet/Imitation.js';
import BonusSuivant from '../effet/BonusSuivant.js';
import BonusPlateau from '../effet/bonusPlateau.js';
import bonusMain from '../effet/bonusMain.js';
import Pioche from '../effet/pioche.js';
import AucunEffet from '../effet/aucunEffet.js';
import CateAleatoireDeck from '../effet/carteAleatoireDeck.js';

export default class CarteMain extends Carte{
    constructor(nom,points,effet,typeEffet,type){
        super(nom,points,effet,typeEffet,type);
        
        
    }

    liste(){
        let liste=new Array();
        for(let i=0;i<4;i++){
        liste.push(new CarteMain("Boule de Feu",2,"Aucun Effet",new AucunEffet(2),"Feu"));
        liste.push(new CarteMain("Epée de Glace",2,"Pioche si Feu",new Pioche(2,"Feu"),"Glace"));
        }
        for(let i=0;i<3;i++){
        liste.push(new CarteMain("Pilier de Flamme",4,"+1 si une carte voisine du plateau est Feu, + 2 si Arcane",new BonusVoisin(4,[1,2],["Feu","Arcane"]),"Feu"));
        }
        for(let i=0;i<2;i++){
        liste.push(new CarteMain("Miroir des Arcanes",0,"Imite la Carte Jouée Avant",new Imitation(0,-1),"Arcane"));
        }
        liste.push(new CarteMain("Lance de Feu",0,"+1 pour les cartes plateaux Feu, -1 pour les Arcanes et Glace, sauf carte associée",new BonusPlateau(0,[1,-1,-1],["Feu","Arcane","Glace"]),"Feu"));
        liste.push(new CarteMain("Armure de Givre",0,"+3 si carte suivante jouée est Glace",new BonusSuivant(0,new BonusSimple(3,[4],["Glace"]),1),"Glace"));
        
        liste.push(new CarteMain("Blizzard",5,"+3 si Glace, -1 si Feu",new BonusSimple(5,[3,-1],["Glace","Feu"]),"Glace"));
        liste.push(new CarteMain("Portail des Arcanes",0,"Remplacé par une carte du deck",new CateAleatoireDeck(0),"Arcane"));
        
        liste.push(new CarteMain("Pouvoir des Arcanes",3,"+1 si Arcane,-1 pour Feu et Glace pour cartes dans la main si carte Plateau Arcane",new bonusMain(3,[1,-1,-1],["Arcane","Glace","Feu"],"Arcane"),"Arcane"));
        return liste;
    }

    getCarte(){
        let liste=this.liste();
        let alea=Math.floor(Math.random()*liste.length);
        let carte=liste[alea];
        return carte;
    }
}