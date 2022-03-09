
var soma = 0;
var cont = 0;
var total = 0;
var num = [];
var t;
var n;

var r = window.document.querySelector('#result');
function proxima() {
    if (cont == 4) {
        let resposta = window.confirm("Voce deseja informar mais de 4 notas?");
        if (resposta == false) {
            resultado();
        }
    }
    var nota = window.document.querySelector('#nota');
    n = Number(nota.value)
    if(n==0){
       var awnser =window.confirm('deseja enviar um valor nulo?'); 
        if(awnser== true)
        {
            contar();
        }
        else{
            resultado();
        }
    }
    else{
        contar();
    }

}
function contar(){
    num.push(n);
    soma += n;
    nota.value = "";
    cont++;
}
function resultado() {
    if (cont == 0) {
        window.alert('Digite os Numeros');
    }
    else {
        total = 0;
        total = soma / cont;
        for (var index = 0; index < num.length; index++) {
            var itens = window.document.createElement('p');
            itens.innerHTML = `teste ${num[index]}`;
            r.appendChild(itens);
        }
        var media = window.document.createElement('p');
        media.innerHTML = `A media: ${total}`;
        r.appendChild(media);
    }

}

function limpar() {
    nota = 0;
    soma = 0;
    window.document.getElementById('nota').value = "";
    r.innerHTML = "";
    while (cont > 0) {
        num.pop();
        cont--;
    }
    cont = 0;
}