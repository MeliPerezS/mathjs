
const form = document.querySelector('#calculadora');
const input1 = document.querySelector('#precio');
const input2 = document.querySelector('#descuento');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', porcentaje);

function porcentaje(event) {
    event.preventDefault();

    if (!precio.value || !descuento.value) {
        pResult.innerText = "Por favor completa el formulario";
        return
    }
    if (descuento.value > 100) {
        pResult.innerText = "Estas siendo avaro, ingresa el descuento que marca el articulo, gracias!"; 
    } else {
    const precioxPagar = parseInt(precio.value) * (100 - parseInt(descuento.value)) / 100;
    pResult.innerText = "Con el descuento usted debe pagar " + precioxPagar;
    }
}