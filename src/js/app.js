function calcular() {
    // variaveis globais da function
    var altura, peso, altura2, imc, resultado;

    // pega o que o usuario escreveu no campo altura
    altura = document.querySelector('#altura').value;

    // pega o que o usuario escreveu no campo peso
    peso = document.querySelector('#peso').value;

    // se deixar o campo vazio mostrar erro
    if (altura == '' || peso == '') {
        alert('O campo ALTURA ou PESO precisa ser preenchido!');
    } else {
        //calculo imc
        altura2 = altura * altura;
        // deixar o numero decimal 2 caracteres ex: 2.72
        altura2 = parseFloat(altura2.toFixed(2));

        imc = peso / altura2;

        imc = parseFloat(imc.toFixed(1));

        console.log(imc);

        resultado = document.querySelector('.seuimc');

        //edita o element span no html
        resultado.innerHTML = "SEU IMC: " + imc;

        // deixa o span visivel no html
        resultado.style.visibility = 'visible';
    }
}