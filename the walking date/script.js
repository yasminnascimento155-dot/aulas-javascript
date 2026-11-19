console.log("Sobrevivente conectado ao DOM!");


const cabecalho = document.querySelector('header');
console.log(cabecalho);


const btnTema = document.querySelector('#btn-tema');


const boasVindas = document.querySelector('#boas-vindas');


const tituloSite = document.querySelector('header h1');


const listaBeneficios = document.querySelectorAll('ol li');


console.log(listaBeneficios.length);


const campoNome = document.querySelector('input[type="text"]');
const campoEmail = document.querySelector('input[type="email"]');


tituloSite.textContent = "The Walking Date";


const depoimento = document.querySelector('cite');


if (depoimento) {
    depoimento.innerHTML =
        "- <strong>Zezinho da Foice</strong>, Sobreviventes Nível 5";
}


const paragrafoBoasVindas = document.querySelector('#boas-vindas p');


if (paragrafoBoasVindas) {
    const textoBoasVindas = paragrafoBoasVindas.textContent;
    console.log(textoBoasVindas);
}


const aside = document.querySelector('aside');


if (aside) {
    aside.style.borderColor = 'var(--cor-sangue)';
}


if (aside) {
    aside.style.fontSize = '1.1rem';
}


const imagem = document.querySelector('#boas-vindas img');


if (imagem) {
    console.log(imagem.getAttribute('alt'));


    imagem.setAttribute(
        'alt',
        'Casal de zumbis apaixonados ao pôr do sol'
    );
}


if (campoEmail) {
    campoEmail.value = "Sobrevivente Anônimo";
}


const primeiraLinha = document.querySelector('tbody tr');


if (primeiraLinha) {
    primeiraLinha.classList.add('destaque-infectado');
}


const aviso = document.createElement('p');


aviso.textContent =
    "⚠️ ALERTA DE HORDA: Encontros hoje apenas em zonas seguras!";


aviso.style.backgroundColor = "var(--cor-zumbi)";
aviso.style.textAlign = "center";
aviso.style.color = "#ffffff";
aviso.style.padding = "15px";


const barraAlerta = document.querySelector('#barra-alerta');


if (barraAlerta) {
    barraAlerta.appendChild(aviso);
}


const fecharAlerta = document.querySelector('#fechar-alerta');


if (fecharAlerta) {
    fecharAlerta.addEventListener('click', function () {
        document.querySelector('#barra-alerta').remove();
    });
}


const htmlRoot = document.documentElement;


if (btnTema) {


    btnTema.addEventListener('click', function () {


        if (htmlRoot.getAttribute('data-theme') === 'light') {


            htmlRoot.removeAttribute('data-theme');


        } else {


            htmlRoot.setAttribute('data-theme', 'light');


        }


        if (htmlRoot.getAttribute('data-theme') === 'light') {


            btnTema.textContent = "Modo Sombrio 🌙";


        } else {


            btnTema.textContent = "Modo Sobrevivência ☀️";


        }


    });


}


const botaoMatch = document.querySelector('.botao-match');


const placarMatches = document.querySelector('#placar-matches');


let totalMatches = 0;


if (botaoMatch) {


    botaoMatch.addEventListener('click', function (event) {


        event.target.textContent = "Match Confirmado! 💕🧟";


        event.target.disabled = true;


        totalMatches++;


        if (placarMatches) {
            placarMatches.textContent = "Matches: " + totalMatches;
        }


    });


}


const btnCalcular = document.querySelector('#btn-calcular');


if (btnCalcular) {


    btnCalcular.addEventListener('click', function () {


        const diasInfectado =
            document.querySelector('#dias-infectado');


        const diasParceiro =
            document.querySelector('#dias-parceiro');


        const resultado =
            document.querySelector('#resultado-quimica');


        const valor1 = Number(diasInfectado.value);
        const valor2 = Number(diasParceiro.value);


        if (
            diasInfectado.value.trim() === '' ||
            diasParceiro.value.trim() === '' ||
            valor1 < 0 ||
            valor2 < 0
        ) {


            resultado.textContent =
                "Erro: Digite um número válido de dias, humano!";


        } else {


            const soma = valor1 + valor2;


            resultado.textContent =
                "Nível de podridão combinada: " +
                soma +
                " dias! Compatibilidade alta!";


        }


    });


}


if (campoEmail) {


    campoEmail.addEventListener('input', function () {


        const previewCracha =
            document.querySelector('#preview-cracha');


        if (previewCracha) {


            previewCracha.textContent =
                "Crachá de Sobrevivente: " + campoEmail.value;


        }


    });


}


if (imagem) {


    imagem.addEventListener('mouseover', function () {


        console.log("Cuidado! Não chegue muito perto da tela...");


    });


}


const formulario = document.querySelector('form');


if (formulario) {


    formulario.addEventListener('submit', function (event) {


        event.preventDefault();


        alert(
            "Cadastro concluído, " +
            campoEmail.value +
            "! Prepare sua melhor mordida."
        );


        campoNome.value = "";


        campoEmail.value = "";


        const previewCracha =
            document.querySelector('#preview-cracha');


        if (previewCracha) {
            previewCracha.textContent = "Crachá: ...";
        }


    });


}


document.addEventListener('keydown', function (event) {


    if (event.key === 'Escape') {


        const alerta = document.querySelector('#barra-alerta');


        if (alerta) {
            alerta.remove();
        }


    }


});


console.log("Todas as funcionalidades foram carregadas!");