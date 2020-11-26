export default class App {
    convertir(pesos) {
        if (pesos < 2000) {
            return pesos*20.5;
        }
        else if (pesos >= 2000) {
            return pesos*22.7;
        }
    }

    costoRenta(kilometros) {
        if (kilometros<50) {
            return kilometros*3;
        }
        else if (kilometros>=50 && kilometros<100) {
            return kilometros*5;
        }
        else if (kilometros>=100 && kilometros<200) {
            return kilometros*6;
        }
        else if (kilometros>=200) {
            return kilometros*6.5;
        }
    }
    
    puedeCircular(dia, terminacion) {
        switch (dia) {
            case 1:
                if (terminacion===0){
                    return true;
                }
                else if (terminacion != 1 && terminacion != 2) {
                    return true;
                }
                else {
                    return false;
                }
                break;
            case 2:
                if (terminacion===1){
                    return true;
                }
                else if (terminacion!=0 && terminacion!=2) {
                    return true;
                }
                else {
                    return false;
                }
                break;
            case 3:
                if (terminacion===2){
                    return true;
                }
                else if (terminacion!=0 && terminacion!=1) {
                    return true;
                }
                else {
                    return false;
                }
                break;
            case 4:
                if (terminacion===2){
                    return true;
                }
                else if (terminacion!=0 && terminacion!=1) {
                    return true;
                }
                else {
                    return false;
                }
                break;
            case 5:
                if (terminacion!=0 && terminacion!=1 && terminacion!=2){
                    return true;
                }
                else {
                    return false;
                }
                break;
            case 6:
                if (terminacion!=0 && terminacion!=1 && terminacion!=2){
                    return true;
                }
                else {
                    return false;
                }
                break;
            case 7:
                if (terminacion!=0 && terminacion!=1 && terminacion!=2){
                    return true;
                }
                else {
                    return false;
                }
                break;
                default:
                    return false;
        }
    }

}