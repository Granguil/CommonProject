import Magie from './../Magie/Magie.js';
import Serie from './../Serie/Serie.js';
import Math10 from './../Math/Math.js';

let app={
    sujets:[["Magie",new Magie(),"Marquer le plus de points"],["Serie",new Serie(),"Associer le personnage à sa série"],["Math",new Math10(),"Arriver à dix pour chaque association, avoir le score le plus bas au total"]],
    themeJeu:"",
};

export default app;