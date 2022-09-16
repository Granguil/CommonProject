import CarteMain from './CarteMain.js';
import CartePlateau from './CartePlateau.js';

export default class Serie{
    constructor(){
        this.selection=new Array();
    }
    carteMain() {
        let liste=new CarteMain().liste();
    
        let main=new Array();
        for(let i=0;i<5;i++){
            let alea=Math.floor(Math.random()*liste.length);
            this.selection.push(alea);
            main.push(liste[alea]);
            main[i].couleur=this.getCouleur(main[i].type);
            liste.splice(alea,1);
        }
        main.sort((a,b)=>{
            let ordre=Math.random()*2;
            if(ordre<=1){
                return -1;
            }else{
                return 1;
            }
        })
        return main;
    }

    cartePlateau(){
        let liste=new CartePlateau().liste();
        let plateau=new Array();
        for(let i=0;i<5;i++){
            let alea=this.selection[i];
            plateau.push(liste[alea]);
            plateau[i].couleur=this.getCouleur(plateau[i].type);
            liste.splice(alea,1);
        }
        plateau.sort((a,b)=>{
            let ordre=Math.random()*2;
            if(ordre<=1){
                return -1;
            }else{
                return 1;
            }
        })
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
        return ["lightgreen","black"];
    }

    affichageMain(carte){
        let div=$("<div>");
        div.attr("class","carte");
        div.css("background-color",carte.couleur[0]);
        div.css("color",carte.couleur[1]);
        let nom=$("<span>");
        nom.text(carte.nom);
        let img=$("<img>");
        img.attr("src",carte.image);
        let type=$("<span>");
        type.text(carte.type);
        let points=$("<span>");
        points.text("Points : "+carte.points);
        div.append(nom);
        div.append(img);
        div.append(type);
        div.append(points);
        
        return div;
    }

    affichageCP(div,carte,index,nbCarteJoue){
        div.css("background-color",carte.couleur[0]);
        div.css("color",carte.couleur[1]);
        let nom=$("<span>");
        nom.text(carte.nom);
        let image=$("<img>");
        image.attr("src",carte.image);
        let type=$("<span>");
        type.text(carte.type);
        let points=$("<span>");
        points.text("Points : "+carte.points);
        
        if(index>nbCarteJoue){
            nom.css("display","none");
            type.css("display","none");
            points.css("display","none");
            
        }
        div.append(nom);
        div.append(image);
        div.append(type);
        div.append(points);
        
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
        $("#CP"+index+" img").attr("src",carte.image);
        div.css("background-color",carte.couleur[0]);
        div.css("color",carte.couleur[1]);

    }
}