function calcularIMC() {
    let mensagem = document.getElementById("mensagem");
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let imc = peso / (altura * altura);
         let imc = 18.6;
         
        if(imc < 18.5) {
            mensagem.innerText = "baixo peso";

        } else if (imc >= 18.5 && imc <= 24.9) {
            mensagem.innerText = "peso Normal";
        } else if (imc >= 25 && imc <= 29.9) {
            mensagem.innerText = "Sobrepeso";
        }else if (imc >= 30 && imc <= 34.9) {
            mensagem.innerText = "Obesidade Grau 1";
        } else if (imc >= 35 && imc <= 39.9) {
            mesagem.innerText = "Obesidade Grau 2";
        } else if (imc >= 40) {
            mensagem.innerText = "Obesidade Grau 3 'MOrbida'";
        }

        }
}