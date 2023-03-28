console.group('cuadrado')

function calcularCuadrado(lado) {
    return {
        perimetroCuadrado: lado * 4,
        areaCuadrado: lado * lado
    }
}

console.groupEnd('cuadrado')

console.group('triangulo')

function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
};

console.groupEnd('triangulo')

console.group('circulo')

function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,
    };
};

console.groupEnd('circulo')

console.group('Isosceles')

function calcularIsosceles(lados, base){
    if (lados == base) {
        console.warn('Este no es un triangulo isosceles');
    } else {
        return Math.sqrt((lados ** 2) - ((base ** 2)) / 4);
    }
}

console.groupEnd('Isosceles')

console.group('Escaleno')

function calcularEscaleno(ladoA, ladoB, ladoC) {
    const semiperimetro = ((ladoA + ladoB + ladoC) / 2);

    return {
        altura: (
            (2 / ladoA)
            *
            Math.sqrt(
                semiperimetro * (semiperimetro - ladoA) * (semiperimetro - ladoB) * (semiperimetro - ladoC)
            )
        )
    }
}

console.groupEnd('Escaleno')

/*PLAYGROUND */ 

function solution(lado1, lado2, lado3) {
    if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
      return false;
    } else {
      const semiperimetro = ((lado1 + lado2 + lado3) / 2);
      const altura = (
        (2 / lado1)
        *
        Math.sqrt(
          semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - lado3)
        )
      )
      return Math.round(altura);
    }
  }