// function calcularPromedio(lista){

//     // function sumarTodosElementos(valorAcumulado, nuevoValor){
//     //     return valorAcumulado + nuevoValor;
//     // }

//     // const sumarTodosElementos = (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;

//     const sumaLista = lista.reduce((valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor);
//     const promedio = sumaLista / lista.length;
//     console.log(promedio);
//     return promedio;
//};

// function parImpar(array){
//     if (array.length % 2 === 0){
//         return 'este arreglo es par';
//     } else{
//         return 'este arreglo es impar';
//     };
// }

// const parImpar = (array) => {
//     return (array.length % 2 === 0) ? "Es par" : "No es par"
// }


// la mia que no funciona

// function par(listita){
//     return !(listita.length % 2);
// };

// // function impar(listita){
// //      return listita.length % 2;
// // };

// function calcularMediana(listita){
//     const listaEsPar = par(listita);

//     if (listaEsPar) {
//         const indexMitad1 = (listita.length / 2) - 1;
//         const indexMitad2 = listita.lenght / 2;

//         const listaMitades = [];
//         listaMitades.push(listita[indexMitad1]);
//         listaMitades.push(listita[indexMitad2]);
//         const medianaListaPar = calcularPromedio(listaMitades);
//         return medianaListaPar;
//     } else {
//         const indexMitadListaImpar = Math.floor(listita.length / 2);
//         const medianaListaImpar = listita[indexMitadListaImpar];
//         console.log(indexMitadListaImpar);
//         console.log(medianaListaImpar);
//         return medianaListaImpar;
//     }
// }

// la que si funciona
function esPar(lista) {
  return !(lista.length % 2);
}
function esImpar(lista) {
  return lista.length % 2;
}

function calcularModa(lista) {
  const listaCount = {};

  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];

    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  }

  const listaArray = Object.entries(listaCount);
  const listaOrdenada = ordenarListaBidimensional(listaArray, 1)
  const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
  const moda = listaMaxNumber[0];
  // console.log({listaCount, listaArray, listaOrdenada, listaMaxNumber});
  // console.log('La moda es: ' + listaMaxNumber[0]);
  return moda;
}

function calcularMediana(listaDesordenada) {
  const lista = ordenarLista(listaDesordenada);
  const listaEsPar = esPar(lista);

  if (listaEsPar) {
    const indexMitad1ListaPar = (lista.length / 2) - 1;
    const indexMitad2ListaPar = lista.length / 2;
    const listaMitades = [];
    listaMitades.push(lista[indexMitad1ListaPar]);
    listaMitades.push(lista[indexMitad2ListaPar]);

    const medianaListaPar = calcularPromedio(listaMitades);
    return medianaListaPar;
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const medianaListaImpar = lista[indexMitadListaImpar];
    console.log(indexMitadListaImpar);
    console.log(medianaListaImpar);
    return medianaListaImpar;
  }
}

function calcularPromedio(lista) {
  function sumarTodosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  const sumaLista = lista.reduce(sumarTodosElementos);  
  const promedio = sumaLista / lista.length;
  // console.log(promedio);
  return promedio;
}

function ordenarLista(listaDesordenada) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado - nuevoValor;
  }
  
  // const lista = listaDesordenada.sort((a,b) => a-b);
  const lista = listaDesordenada.sort(ordenarListaSort);
  
  return lista;
}

// [ [0,1],  [0,1],  [0,1] ]
function ordenarListaBidimensional(listaDesordenada, i) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado[i] - nuevoValor[i];
  }
  
  const lista = listaDesordenada.sort(ordenarListaSort);
  return lista;
}

// playground

//En este desafío debes convertir las llaves y valores de un objeto en propiedades (id y name) de un objeto dentro de un array.

//Input

const obj = {
  123: 'Juanito Alcachofa',
  456: 'Juanita Alcaparra',
};

solution(obj);

//Output

[
  {
    id: "123",
    name: 'Juanito Alcachofa',
  },
  {
    id: "456",
    name: 'Juanita Alcaparra',
  },
]

export function solution(obj) {
  const array = Object.entries(obj).map(([id, name]) => ({ id, name }));
  return array;
}