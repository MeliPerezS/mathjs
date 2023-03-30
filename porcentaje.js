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

const div = document.querySelector('#cupones');
const input3 = document.querySelector('#valorCupon');
const discountNames = document.querySelector('#discount-names');
const btnCupon = document.querySelector('#btnCalcularCupon');
const result = document.querySelector('#resultCupon');

btnCupon.addEventListener("click", total);

function total(event) {
    event.preventDefault();
    if (!input3 || !discountNames.value) {
        result.innerText = "Por favor completa el formulario";
        return
    }
    const porcentajeDescuentoSeleccionado = Number(discountNames.value);
  
    const resultDiscount = parseInt(input3.value) * (100 - porcentajeDescuentoSeleccionado) / 100;
    result.innerText = "Con el descuento usted debe pagar " + resultDiscount;
}


/* const nameInput = document.querySelector("input");

nameInput.addEventListener("input", () => {
  nameInput.setCustomValidity("");
  nameInput.checkValidity();
});

nameInput.addEventListener("invalid", () => {
  if (nameInput.value === "") {
    nameInput.setCustomValidity("Enter your username!");
  } else {
    nameInput.setCustomValidity(
      "Usernames can only contain upper and lowercase letters. Try again!"
    );
  }
}); */