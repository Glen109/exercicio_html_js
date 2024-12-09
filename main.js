const form = document.getElementById('form-deposito');
const numeroB = document.getElementById('valor-B');
let formEValido = false;

function validaNumero(numeroB, numeroA) {
    return numeroB > numeroA;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numeroA = document.getElementById('valor-A');
    const numeroB = document.getElementById('valor-B');
    const mensagemSucesso = `<b>${numeroB.value}</b> é maior que <b>${numeroA.value}</b>`;

    formEValido = validaNumero(Number(numeroB.value), Number(numeroA.value));

    if (formEValido === true) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
        numeroB.classList.preventDefault;
    } else {
        numeroB.style.border = '1px solid red';
        document.querySelector(".erro-message").style.display = 'block';
    }
});

numeroB.addEventListener('change', function (e) {
    const numeroA = document.getElementById('valor-A');
    formEValido = validaNumero(Number(e.target.value), Number(numeroA.value));

    if (formEValido === false) {
        numeroB.classList.add('error');
        document.querySelector(".erro-message").style.display = 'block';
    } else {
        numeroB.classList.remove('error');
        document.querySelector(".erro-message").style.display = 'none';
    }
});
