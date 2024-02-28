/* Atividade 02 - OBJETIVO DA ATV: Reproduzir questionario OBRIGATORIAMENTE EM JavaScript

ALUNO: Miguel Rodrigues Carneiro
TURMA: P2-B | Noite
CURSO: Sistemas Para Internet

REQUISITOS DO SISTEMA: 

Obtenha d altura e o sexo (M ou F) de 15 pessoas e mostre os seguintes dados:

- A maior e a menor altura do grupo;
- A média de altura dos homens;
- O número de mulheres.


*/

// Criando Variaveis e Listas para uso futuro do codigo //

let pergunta_altura = [];
let pergunta_sexo = [];
let altura_homens = [];
let altura_mulheres = [];
var quantidade_pessoas = 0;
let quantidade_homens = 0;
let quantidade_mulheres = 0;

// ___________________________________________________________________ //


// Criação de função "adicionar_pessoa" contendo armazenamento de dados vindos do FORM no HTML //

function adicionar_pessoa(event) {
    event.preventDefault();

    // LINHA 36 A 41 = Variaveis guardando dados Obtidos no HTML pela identificação do ID
    const input_altura = document.getElementById('pergunta_altura');
    const input_sexo = document.getElementById('pergunta_sexo');

    const altura = parseFloat(input_altura.value);
    const sexo = input_sexo.value;

    pergunta_sexo.push(sexo);
    pergunta_altura.push(altura);

    // LINHA 48 A 54 

    if (sexo === 'M') {
        quantidade_homens++;
        altura_homens.push(altura);
    } else {
        quantidade_mulheres++;
        altura_mulheres.push(altura);
    }

    quantidade_pessoas++;

    if (quantidade_pessoas === 2) {
        resultados();
        quantidade_pessoas = 0;
    }
}

function resultados() {


    const max_altura = Math.max(...pergunta_altura);
    const min_altura = Math.min(...pergunta_altura);
    const med_homens = altura_homens.reduce((sum, height) => sum + height, 0) / quantidade_homens;


    document.getElementById('resultados').innerText = `Resultado da Pesquisa: `;
    document.getElementById('pesq_altura_max').innerText = `A Maior Altura Dentre as 15 Pessoas foi de: ${max_altura.toFixed(2)} m`;
    document.getElementById('pesq_altura_min').innerText = `A Menor Altura Dentre as 15 Pessoas foi de: ${min_altura.toFixed(2)} m`;
    document.getElementById('med_homens').innerText = `A Média de Altura dos Homens foi de: ${med_homens.toFixed(2)} m`;
    document.getElementById('quantidade_mulheres').innerText = `O Número de Mulheres Total de mulheres foi de: ${quantidade_mulheres}`;
    document.getElementById('todas_alturas').innerText = {pergunta_altura}
}