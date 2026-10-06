const frete = (valorCompra) => valorCompra > 150 ? `Frete grátis` : `cobrar frete`;
console.log(frete(200));