

export default class View{
    constructor(theme){
            this.theme=theme;
            this.carteMain=theme.carteMain();
            this.cartePlateau=theme.cartePlateau();
            this.carteJoue=new Array();
            this.points=0;
            this.score=this.theme.getFormatScore();
        
        while(this.cartePlateau[0].typeEffet.hasOwnProperty("actionAutomatique")){
            
            this.score=this.cartePlateau[0].typeEffet.comptePoints(this.carteJoue,this.cartePlateau,this.carteJoue.length,this.score,this.carteMain,this.cartePlateau);
           
            this.score=this.carteJoue[0].typeEffet.comptePoints(this.carteJoue,this.cartePlateau,this.carteJoue.length,this.score,this.carteMain,this.cartePlateau);
           
            for(let i=1;i<=5;i++){
                $("#score span").eq(i).text("Score n°"+i+" : "+this.score[i-1]);
            }
            $("#score span").eq(0).text("Totale : "+this.points);
            $("#CP"+this.carteJoue.length+" span").css("display","block");
            if(this.carteJoue.length==5){
                alert("Votre Score est de "+this.points+" points.");
                $("#main .carte").off();
            }
        }
        this.affichageMain();
        this.affichagePlateau();
        
        
    }

    affichageMain(){
        $("#main").empty();
        let h=$("<h4>");
        h.text("Votre Main :");
        $("#main").append(h);
        for(let i=0;i<this.carteMain.length;i++){
            let div=this.theme.affichageMain(this.carteMain[i]);
            let that=this;
            $("#main").append(div);
                div.on("click",function(){
                if(div.attr("id")=="carteSelect"){
                    let index=$("#main .carte").index(this);
                    that.carteJoue.push(that.carteMain[index]);
                    that.carteMain.splice(index,1);
                    
                    that.score=that.carteJoue[that.carteJoue.length-1].typeEffet.comptePoints(that.carteJoue,that.cartePlateau,that.carteJoue.length,that.score,that.carteMain,that.cartePlateau);
                    
                    that.score=that.cartePlateau[that.carteJoue.length-1].typeEffet.comptePoints(that.carteJoue,that.carteJoue,that.carteJoue.length,that.score,that.carteMain,that.cartePlateau);
                    
                    for(let i=0;i<that.carteJoue.length-1;i++){
                        
                        if(that.carteJoue[i].typeEffet.hasOwnProperty("bonusSuivant")){
                            
                            if(that.carteJoue[i].typeEffet.decalage==that.carteJoue.length){
                                
                                
                                that.score=that.carteJoue[i].typeEffet.bonusSuivant.comptePoints(that.carteJoue,that.cartePlateau,that.carteJoue.length,that.score,that.carteMain,that.cartePlateau);
                                
                            }
                        }
                    }
                    
                    if(that.carteJoue.length<5){
                        while(that.cartePlateau[that.carteJoue.length].typeEffet.hasOwnProperty("actionAutomatique")){
                            
                            that.score=that.carteJoue[that.carteJoue.length-1].typeEffet.comptePoints(that.carteJoue,that.cartePlateau,that.carteJoue.length,that.score,that.carteMain,that.cartePlateau);
                            
                            
                            for(let i=0;i<that.carteJoue.length-1;i++){
                        
                                if(that.carteJoue[i].typeEffet.hasOwnProperty("bonusSuivant")){
                                    
                                    if(that.carteJoue[i].typeEffet.decalage==that.carteJoue.length){
                                        
                                        that.score=that.carteJoue[i].typeEffet.bonusSuivant.comptePoints(that.carteJoue,that.cartePlateau,that.carteJoue.length,that.score,that.carteMain,that.cartePlateau);
                                        
                                    }
                                }
                            }
                           
                            that.score=that.cartePlateau[that.carteJoue.length].typeEffet.comptePoints(that.carteJoue,that.cartePlateau,that.carteJoue.length,that.score,that.carteMain,that.cartePlateau);
                            
                        }
                    }

                    
                    
                    
                    
                    that.affichageMain();
                    that.affichagePlateau();
                    that.points=that.theme.affichageScore(that.score,that.carteJoue);
                    
                }else{
                    $("#main .carte").removeAttr("id");
                    div.attr("id","carteSelect");
                }
            })
        }
    }

    affichagePlateau(){
        $("#plateau").empty();
        let h=$("<h4>");
        h.text("Plateau :");
        $("#plateau").append(h);
        for(let i=0;i<this.cartePlateau.length;i++){
            let div=$("<div>");
            div.attr("class","carte");
            div.attr("id","CP"+i);
            $("#plateau").append(div);
            let carte=this.cartePlateau[i];
            if(this.carteJoue.length>i){
                carte=this.carteJoue[i];
                let span=$("<span>");
                span.text("Carte Jouée");
                div.append(span);
                div.css("cursor","pointer");
                let that=this;
                div.on("click",function(){
                    if($("#CP"+i+" span").eq(0).text()=="Carte Jouée"){
                        that.theme.affichagePJ(that.cartePlateau[i],div,i,0);
                    }else{
                        that.theme.affichagePJ(that.carteJoue[i],div,i,1);
                        
                    }
                })
            }
            this.theme.affichageCP(div,carte,i,this.carteJoue.length);
            
            
        }
    }


}