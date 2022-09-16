import CarteMain from './CarteMain.js';
import CartePlateau from './CartePlateau.js';

export default class Math10{

    carteMain() {
        let liste=new CarteMain().liste();
    
        let main=new Array();
        for(let i=0;i<5;i++){
            let alea=Math.floor(Math.random()*liste.length);
            main.push(liste[alea]);
            main[i].couleur=this.getCouleur(main[i].type);
            liste.splice(alea,1);
        }
        return main;
    }

    cartePlateau(){
        let liste=new CartePlateau().liste();
        let plateau=new Array();
        for(let i=0;i<5;i++){
            let alea=Math.floor(Math.random()*liste.length);
            plateau.push(liste[alea]);
            plateau[i].couleur=this.getCouleur(plateau[i].type);
            liste.splice(alea,1);
        }
        return plateau;
    }

    getFormatScore(){
        let score=[0,0,0,0,0];
        for(let i=0;i<6;i++){
            let span=$("<span>");
            if(i==0){
                span.text("Totale : 0");
            }else{
                span.text("Score n°"+i);
            }
            $("#score").append(span);
        }
        return score;
    }

    affichageScore(score,cartes){
        let points=score.reduce((acc,cv)=>acc+cv);
        for(let i=1;i<=5;i++){
            $("#score span").eq(i).text("Score n°"+i+" : "+score[i-1]);
        }
        $("#score span").eq(0).text("Totale : "+points);
        $("#CP"+cartes.length+" span").css("display","block");
        if(cartes.length==5){
            alert("Votre Score est de "+points+" points.");
            $("#main .carte").off();
        }
        return points;
    }

    getCouleur(type){
       return ["lightblue","black"];
    }

    affichageCP(div,carte,index,nbCarteJoue){
        div.css("background-color",carte.couleur[0]);
        div.css("color",carte.couleur[1]);
        let nom=$("<span>");
        nom.text(carte.nom);
        let type=$("<span>");
        type.text(carte.type);
        let points=$("<span>");
        points.text("Points : "+carte.points);
        let effet=$("<span>");
        effet.text(carte.effet);
        if(index>nbCarteJoue){
            nom.css("display","none");
            type.css("display","none");
            points.css("display","none");
            effet.css("display","none");
        }
        div.append(nom);
        div.append(type);
        div.append(points);
        div.append(effet);
    }

    affichageMain(carte){
        let div=$("<div>");
        div.attr("class","carte");
        div.css("background-color",carte.couleur[0]);
        div.css("color",carte.couleur[1]);
        let nom=$("<span>");
        nom.text(carte.nom);
        let type=$("<span>");
        type.text(carte.type);
        let points=$("<span>");
        points.text("Points : "+carte.points);
        let effet=$("<span>");
        effet.text(carte.effet);
        div.append(nom);
        div.append(type);
        div.append(points);
        div.append(effet);
        return div;
    }

    affichagePJ(carte,div,index,num){
        if(num==1){
            $("#CP"+index+" span").eq(0).text("Carte Jouée");
        }else{
            $("#CP"+index+" span").eq(0).text("");
        }
        $("#CP"+index+" span").eq(1).text(carte.nom);
        $("#CP"+index+" span").eq(2).text(carte.type);
        $("#CP"+index+" span").eq(3).text("Points : "+carte.points);
        $("#CP"+index+" span").eq(4).text(carte.effet);
        div.css("background-color",carte.couleur[0]);
        div.css("color",carte.couleur[1]);

    }
}