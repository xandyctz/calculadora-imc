function calcular() {
    var altura, peso, altura2, imc, resultado, visible;
    altura = document.querySelector('#altura').value;
    peso = document.querySelector('#peso').value;
    //calculo
    if(altura == '' || peso == '') {
        alert('O campo ALTURA ou PESO precisa ser preenchido!');
    } else {
    altura2 = altura * altura;
    // deixar o numero decimal 2 caracteres ex: 2.72
    altura2 = parseFloat(altura2.toFixed(2));

    imc = peso / altura2;

    imc = parseFloat(imc.toFixed(1));

    console.log(imc);

    resultado = document.querySelector('.seuimc');
    resultado.innerHTML = "SEU IMC: " + imc;
    resultado.style.visibility = 'visible';

}
    
}