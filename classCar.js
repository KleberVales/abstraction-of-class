/* Create a class to represent cars.

Cars have a brand, a color and an average fuel consumption per kilometer driven.

Create a method that, given the number of kilometers and the price of fuel, gives us the amount spent in reais to complete this route. */

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('fiat', 'Prata', 1/12);
console.log(uno.calcularGastoDePercurso(70, 5));
const palio = new Carro('Fiat', 'Preto', 1/10);
console.log(palio.calcularGastoDePercurso(70, 5));