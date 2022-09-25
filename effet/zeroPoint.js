import Effet from "../classe/Effet.js";

export default class ZeroPoint extends Effet{

    comptePoints(index,score){
        score[index-1]=0;
        return score;
    }
}