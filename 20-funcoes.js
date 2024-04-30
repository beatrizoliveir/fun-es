function calculaMedia(avaliacoes){
    for (let i = 0; i < avaliacoes.legenth; i++){
        soma += avaliacoes[i];
    }
    return soma / avaliacoes.legenth;
}
let  avaliacoes = [7.8, 9.2, 6.5, 8.1, 7.3];

let mediaArredondada = Math.round(calcularMedia(avaliacoes));
console.log("Média arredondada:", mediaArredondada);

let mediaArredondadaParacima = Math.ceil(calcularMedia(avaliacoes));
console.log("Média arredondada para cima,"), mediaArredondada