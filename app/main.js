import app from './app.js';
import View from './../view.js';

function selectionTheme(){
    let alea=Math.floor(Math.random()*app.sujets.length);
    //alea=0;
    app.themeJeu=app.sujets[alea][0];
    $("h2").text(app.themeJeu);
    $("h5").text("Objectif : "+app.sujets[alea][2]);
    new View(app.sujets[alea][1]);
}


$(document).on("DOMContentLoaded",()=>{
    selectionTheme();
})