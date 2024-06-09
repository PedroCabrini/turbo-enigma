/*
objetivo 1 - quando clicar na seta de avançar, mostrar próximo cartão
    -passo 1 - dar um jeito de pegar o elemento html da seta avançar
    -passo 2 - dar um jeito de identificar o clique do usuário nessa seta
    -passo 3 - fazer aparecer próximo cartão da lista
    -passo 4 - buscar o cartão que está selecionado e esconder

    objetivo 2 - quando clicar na seta de voltar, mostrar cartão anterior
        -passo 1 - dar um jeito de pegar o elemento html da seta voltar
        -passo 2 - dar um jeito de identificar o clique do     usuário nessa seta
        -passo 3 - fazer aparecer cartão anterior da lista
        -passo 4 - buscar o cartão que está selecionado e esconder
*/

console.log(document.getElementById("btn-avancar"));
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao"); //query = buscar Selector = seletore(s) All = todos busque todos os seletores
const btnAvancar = document.getElementById("btn-avancar");

btnAvancar.addEventListener("click", function(){

    if(cartaoAtual === cartoes.length - 1) return;

    esconderCartoesSelecionados();

    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");
});


console.log(document.getElementById("btn-voltar"));
const btnVoltar = document.getElementById("btn-voltar")

btnVoltar.addEventListener("click", function () {

    if(cartaoAtual === 0) return;

    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
});

function esconderCartoesSelecionados() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}