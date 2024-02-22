document.getElementById('submitButton').addEventListener('click', function() {
    var campoA = parseInt(document.getElementById('campoA').value);
    var campoB = parseInt(document.getElementById('campoB').value);

    if (campoB > campoA) {
        document.getElementById('mensagem').innerText = 'Formulário válido! B é maior que A.';
        document.getElementById('mensagem').className = 'mensagem-positiva';
    } else {
        document.getElementById('mensagem').innerText = 'Formulário inválido! B deve ser maior que A.';
        document.getElementById('mensagem').className = 'mensagem-negativa';
    }
});