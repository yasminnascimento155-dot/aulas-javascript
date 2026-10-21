
// atividade 1 
const usuarios = [
    { nome: 'Ana', ativo: true },
    { nome: 'Beto', ativo: false },
    { nome: 'Caio', ativo: true },
    { nome: 'Duda', ativo: false }
];
const usuariosAtivos = usuarios.filter(usuario => usuario.ativo);
console.log(usuariosAtivos);

// atividade 2
const produtos = [
    { nome: 'teclado' , preco: 100 },
     { nome: 'mouse' , preco: 50 },
];
const produtosDesconto = produtos.map(p => ({
    ...p,
     preco: p.preco* 0.9
}));
console.log(produtosDesconto);

// atividade 3
const carrinho = [25.50, 10.00, 100.00, 5.00];
const total = carrinho.reduce((soma,valor) => soma + valor, 0);
console.log(total);

// atividade 4
const nomesRepetidos = ['joão', 'maria', 'joão', 'pedro', 'maria'];
function limparLista(nomes) {
    return [... new Set(nomesRepetidos)];
}
 console.log(limparLista(nomesRepetidos));

 // atividade 5
const apiProdutos = [ 
    { id: 101, nome: 'monitor led', preco: 899.9 }, 
    { id: 102, nome: 'teclado mecanico', preco: 250.0 }, 
    { id: 103, nome: 'mouse gamer', preco: 125.45 } 
];

const produtosFormatados = apiProdutos.map(produto => ({
    ...produto,
    nome: produto.nome.charAt(0).toUpperCase() + produto.nome.slice(1),
    precoFormatado: `R$ ${produto.preco.toFixed(2)}`
}));
