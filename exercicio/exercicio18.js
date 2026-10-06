const mapearStatus = listaBooleans => {
    const novoArray = [];
    for (const booleano of listaBooleans) {
        novoArray.push(booleano ? "concluido" : "pendente");
    }
    return novoArray;
};

console.log(mapearStatus([true, false, true]));