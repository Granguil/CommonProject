import Carte from './CarteMain.js';

export default class CartePlateau{
    constructor(nom,points,effet,typeEffet,type){
        this.nom=nom;
        this.points=points;
        this.effet=effet;
        this.type=type;
        this.typeEffet=typeEffet;
    }

    comptePoints(carteJoue){
        let score=this.points+carteJoue.points;
        let compteur=0;
        let mot="";
        let evol;
        let element;
        for(let i=0;i<this.effet.length;i++){
            if(this.effet[i]!=" "){
                mot+=this.effet[i];
                
            }else{
                if(compteur==0){
                    evol=mot;
                }
                mot="";
                compteur++;
            }
        }
        element=mot;
        
        let evolution=evol.substr(0,1);
        let valeur=Number(evol.substr(1));
        if(element==carteJoue.type){
            if(evolution=="+"){
                score+=valeur;
            }else{
                score-=valeur;
            }
        }
        compteur=0;
        mot="";
        evol="";
        element="";
        for(let i=0;i<carteJoue.effet.length;i++){
            if(carteJoue.effet[i]!=" "){
                mot+=carteJoue.effet[i];
            }else{
                if(compteur==0){
                    evol=mot;
                }
                mot="";
                compteur++;
            }
        }
        element=mot;
        evolution=evol.substr(0,1);
        valeur=Number(evol.substr(1));
        if(element==this.type){
            if(evolution=="+"){
                score+=valeur;
            }else{
                score-=valeur;
            }
        }
        return score;
    }
}