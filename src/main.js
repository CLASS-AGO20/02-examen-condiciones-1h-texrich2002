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
}

let app = new App();
console.log("Funcion convertir pesos: ");
console.log(app.convertir(1850),"Dolares");
console.log(app.convertir(2000),"Pesos");