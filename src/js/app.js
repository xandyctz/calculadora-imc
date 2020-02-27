function calcular() {
    // variaveis globais da function
    var altura, peso, altura2, imc, resultado;

    // pega o que o usuario escreveu no campo altura
    altura = document.querySelector('#altura').value;
    // pega o que o usuario escreveu no campo peso
    peso = document.querySelector('#peso').value;

    //verifica se tem letra
    let regex = /[a-z]/gi;
    let regexAltura = altura.match(regex);
    let refexPeso = peso.match(regex);
   

    //verifica se tem virgula nos inputs
    let virculaInput = new RegExp('(,)');
    let virgulaAltura = altura.match(virculaInput);
    let virgulaPeso = peso.match(virculaInput);
    
    //se tiver letra mostra mensagem de erro
    if (regexAltura || refexPeso) {
        window.alert('ALTURA/PESO INVALIDO');
        return;
    }
    //se tiver virgula mostra mensagem de erro
    else if(virgulaAltura || virgulaPeso) {
        window.alert('NAO PODE TER VIRGULA');
        return;
    }  

    
    
    

    // se deixar o campo vazio mostrar erro
    else if (altura == '' || peso == '') {
        alert('O campo ALTURA ou PESO precisa ser preenchido!');
    } else {
        
        // calculo imc
        altura2 = altura * altura;
        // deixar o numero decimal 2 caracteres ex: 2.72
        altura2 = parseFloat(altura2.toFixed(2));

        imc = peso / altura2;

        imc = parseFloat(imc.toFixed(1));

        resultado = document.querySelector('.seuimc');

        // edita o element span no html
        resultado.innerHTML = "SEU IMC: " + imc;

        // deixa o span visivel no html
        resultado.style.visibility = ('visible');
        
        
    }
}
