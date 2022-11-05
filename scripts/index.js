function calcularIMC() {
    let mensagem = document.getElementById("mensagem");
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    //let imc = peso / (altura * altura);
         let imc = 18.6;
        if(imc < 18.5) {
            mensagem.innerText = "baixo peso";

        } else if (imc >= 18.5 && imc <= 24.9) {
            mensagem.innerText = "peso Normal";
        } else {

        }
}