document.getElementById('calc').addEventListener('click', calcImc)

function validate(p, a, cimc) {

    if (p == '' | a == '') {
        alert('É necessário preencher todos os campos para continuar')
    } else if (p < 0 | a < 0) {
        alert('Os números informados são menores que 0. É necessário informar números positivos')
    }
    else {
        cimc()
    }
}

function calcImc() {

    let p = Number(document.getElementById('peso').value);
    let a = Number(document.getElementById('altura').value);

    validate(p, a, cimc)

    function cimc() {

        let imc = p / (Math.pow(a, 2))
        alert(`SEU IMC É DE: ${imc.toFixed(2)}`)


        if (imc < 20) {
            alert('ABAIXO DO PESO')

        } else if (imc >= 20 && imc <= 25) {
            alert('NORMAL')

        } else if (imc > 25 && imc < 30) {
            alert('SOBREPESO')

        } else if (imc >= 30 && imc <= 35) {
            alert('OBESIDADE 1')

        } else if (imc > 35 && imc < 40) {
            alert('OBESIDADE 2')

        } else if (imc > 40) {
            alert('OBESIDADE 3')

        }
    }
}