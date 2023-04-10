const form = document.querySelector('#calculadora');
const input1 = document.querySelector('#precio');
const input2 = document.querySelector('#cupon');
const btnCalcular = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#pResult');

btnCalcular.addEventListener('click', calcularPrecio);

const listaCupon = [];
listaCupon.push({
    name: 'Winter',
    discount: 30,
});
listaCupon.push({
    name: 'Summer',
    discount: 50,
});
listaCupon.push({
    name: 'Autumn',
    discount: 60,
});
listaCupon.push({
    name: 'Spring',
    discount: 20,
});

function calcularPrecio(event){
    event.preventDefault();
    const precio = Number(input1.value);
    const cupon = input2.value;

    if (!precio || !cupon) {
        pResult.innerText = 'Debes llenar el formulario';
        return;
    }

    let discount;

    function isCuponInArray(cuponElement) {
        return cuponElement.name == cupon;
    }

const cuponInArray = listaCupon.find(isCuponInArray); // {}

if (cuponInArray) {
  discount = cuponInArray.discount;
} else {
  pResult.innerText = 'El cupón no es válido';
  return;
}

console.log({
  cupon, 
  discount,
  cuponInArray,
  listaCupon,
});

const nuevoPrecio = (precio * (100 - discount)) / 100;

pResult.innerHTML ='El nuevo precio con descuento es $' + nuevoPrecio;
}


