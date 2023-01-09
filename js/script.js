let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) /2 * criancas);


    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} g de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de cerveja </p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de bebidas </p>`

}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}
function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}