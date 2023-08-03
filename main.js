const form = document.getElementById('formcontato');
const nomes = [];
const numeros = [];


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nomecontato');
    const inputNumeroContato = document.getElementById('numerocontato');

    if (nomes.includes(inputNomeContato.value)){
        alert(`O contato ${inputNomeContato.value} ja existe`)
    } else if (numeros.includes(inputNumeroContato.value)){
        alert(`O numero ${inputNumeroContato.value} ja existe`)
    } else {
        
        nomes.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        inputNomeContato.value = '';
        inputNumeroContato.value = '';
    }
};

function atualizaTabela() {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
};