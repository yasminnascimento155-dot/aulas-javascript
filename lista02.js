const elementosFake = [
  {
    tagName: 'DIV',
    style: { color: 'blue', display: 'flex' },
    classList: ['container', 'active']
  },
  {
    tagName: 'H1',
    style: { color: 'red', display: 'block' },
    classList: ['title']
  },
  {
    tagName: 'BUTTON',
    style: { color: 'white', display: 'inline-block' },
    classList: ['btn', 'btn-primary']
  }
];


// atividade 1 
  const primeiroElemento = elementosFake[0];
for (let chave in primeiroElemento) {
  console.log(chave, primeiroElemento[chave]);
}

 
// atividade 2
 for (let elemento of elementosFake) {
   if (elemento.style.color === 'blue') {
console.log(elemento.tagName + ' o elemento é azul!');

   }   

}

// atividade 3
elementosFake.forEach(elemento => {
  console.log(`Nome da tag: ${elemento.tagName}`);
});

//atividade 4 
elementosFake.forEach(elemento => {
  console.log(`Nome da tag: ${elemento.tagName} - Quantidade de classes: ${elemento.classList.length}`);
});

// atividade 5
elementosFake.forEach(elemento => {
const quatidadeClasses = elemento.classList.length;
const nomesClasses = elemento.classList.join(', ');
console.log('nome da tag: ${elemento.tagName} - Quantidade de classes: ${quantidadeClasses} - Classes: ${nomesClasses}');


});