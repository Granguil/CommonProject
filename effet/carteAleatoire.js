export default class CarteAleatoire{
    constructor(pointDeBase){
        this.pointDeBase=pointDeBase;
        this.actionAutomatique=true;
    }

    comptePoints(cartesJ,cartes,index,score,cartesMain){
       let alea=Math.floor(Math.random()*cartesMain.length);
        cartesJ.push(cartesMain[alea]);
        cartesMain.splice(alea,1);
        index=cartesJ.length;
        score[index-1]+=this.pointDeBase;
        return score;
    }
}