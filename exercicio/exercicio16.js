const buscarNome = (nomes,nomeBuscado) => {
for (const nome of nomes) {
    if (nome === nomeBuscado) {
        return true;
    }
}

return false;
};

const listaVip = ["Ana", "Paulo", "João"];
console.log(buscarNome(listaVip, "Ana"));
console.log(buscarNome(listaVip, "Paulo"));
