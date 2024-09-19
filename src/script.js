function calcularIMC(event){
    event.preventDefault();

    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    let IMC = peso / (altura * altura)

    if (IMC < 18.5) {
        document.getElementById('saida').innerText = "O seu IMC é: " + IMC.toFixed(2) + " está abaixo do peso";
    } if(IMC >= 18.5 && IMC < 25) {
        document.getElementById('saida').innerText = "O seu IMC é: " + IMC.toFixed(2) + " está com o peso ideal";
    } if(IMC >= 25 && IMC < 30) {
        document.getElementById('saida').innerText = "O seu IMC é: " + IMC.toFixed(2) + " está com sobrepeso";
    } if(IMC >= 30 && IMC < 35) {
        document.getElementById('saida').innerText = "O seu IMC é: " + IMC.toFixed(2) + " está com obesidade grau 1";
    } if(IMC >= 35 && IMC < 40) {
        document.getElementById('saida').innerText = "O seu IMC é: " + IMC.toFixed(2) + " está com obesidade grau 2";
    } if(IMC >= 40) {
        document.getElementById('saida').innerText = "O seu IMC é: " + IMC.toFixed(2) + " está com obesidade grau 3";
    }


}

let menuExpansivo = false;

function expandir() {
    const menuMobile = document.getElementById('menuMobile');
    if (!menuExpansivo) {
        menuMobile.style.height = '110px'; 
        menuExpansivo = true;
    } else {
        menuMobile.style.height = '30px'; 
        menuExpansivo = false;
    }
}

function recolherMenu() {
    const menuMobile = document.getElementById('menuMobile');
    menuMobile.style.height = '30px'; 
    menuExpansivo = false; 
}

