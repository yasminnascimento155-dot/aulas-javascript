function verificarEstoque(quantidade) {
    if (quantidade < 5 ) {
        return "Estoque Crítico";
    } else {
        return "Estoque Normal";
    }
}

console.log(verificarEstoque(3));
console.log(verificarEstoque(5));
