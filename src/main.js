const DOLAR = 20.5;
const EURO = 22.7;
export default class App {
    convertir(pesos){
        let resultado;
        if(pesos<2000){
            resultado = pesos/DOLAR;
        }
        else if(pesos >= 2000){
            resultado = pesos/EURO;
        }
        return resultado.toFixed(2);
    }
    costoRenta(kilometros){
        let resultado;
        if(kilometros < 50){
            resultado = kilometros*3;
        }
        else if(kilometros >= 50 && kilometros<100){
            resultado = kilometros*5;
        }
        else if(kilometros >= 100 && kilometros <200){
            resultado = kilometros*6;
        }
        else if(kilometros >= 200){
            resultado = kilometros*6.5;
        }
        return resultado;
    }
    puedeCircular(dia, terminacion){
        let flag;
        switch(dia){
            case 1:
                if(terminacion == 0){
                    flag = true;
                }
                else if(terminacion == 1){
                    flag = false;
                }
                else if(terminacion == 2){
                    flag = false;
                }
            break;
            case 2:
                if(terminacion == 0){
                    flag = false;
                }
                else if(terminacion == 1){
                    flag = true;
                }
                else if(terminacion == 2){
                    flag = false;
                }
            break;
            case 3:
                if(terminacion == 0){
                    flag = false;
                }
                else if(terminacion == 1){
                    flag = false;
                }
                else if(terminacion == 2){
                    flag = true;
                }
            break;
            case 4:
                if(terminacion == 0){
                    flag = false;
                }
                else if(terminacion == 1){
                    flag = false;
                }
                else if(terminacion == 2){
                    flag = true;
                }
            break;
            case 5:
                if(terminacion == 0){
                    flag = false;
                }
                else if(terminacion == 1){
                    flag = false;
                }
                else if(terminacion == 2){
                    flag = false;
                }
            break;
            case 6:
                if(terminacion == 0){
                    flag = false;
                }
                else if(terminacion == 1){
                    flag = false;
                }
                else if(terminacion == 2){
                    flag = false;
                }
            break;
            case 7:
                if(terminacion == 0){
                    flag = false;
                }
                else if(terminacion == 1){
                    flag = false;
                }
                else if(terminacion == 2){
                    flag = false;
                }
            break;
            default: return false;
        }
        return flag;
    }

}

let app = new App();
console.log("Funcion convertir pesos: ");
console.log(app.convertir(1850),"Dolares");
console.log(app.convertir(2000),"Euros");
console.log("");
console.log("Funcion costo por kilometro: ");
console.log(app.costoRenta(40));
console.log(app.costoRenta(80));
console.log(app.costoRenta(150));
console.log(app.costoRenta(200));
console.log("");
console.log("Funcion que dias se pueden circular dependiendo terminacion placa: ");
console.log(app.puedeCircular(1,0));
console.log(app.puedeCircular(2,1));
console.log(app.puedeCircular(3,2));
console.log(app.puedeCircular(4,2));
console.log(app.puedeCircular(5,3));
console.log(app.puedeCircular(6,1));
console.log(app.puedeCircular(7,2));
