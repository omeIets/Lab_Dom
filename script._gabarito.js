/* ====================================================================
   DOM LAB - SCRIPT DE APRESENTAÇÃO COMPLETO (COM REMOÇÃO)
   ==================================================================== */

// --------------------------------------------------------------------
// PESSOA 2: OS RASTREADORES (Seletores)
// Missão: Capturar os elementos principais da tela.
// --------------------------------------------------------------------
const btnTema = document.getElementById('btn-tema');
const iconeTema = document.getElementById('tema-icone');
const textoTema = document.getElementById('tema-texto');
const btnAdicionar = document.getElementById('btn-adicionar');
const gridElementos = document.getElementById('grid-elementos');


// --------------------------------------------------------------------
// PESSOA 3: OS MODIFICADORES (Conteúdo e Atributos)
// Missão: Alterar os textos e os ícones do tema.
// --------------------------------------------------------------------
function alternarTextosTema() {
    const isDark = document.body.classList.contains('dark-theme');
    
    if (isDark) {
        textoTema.textContent = "Modo Claro";
        iconeTema.textContent = "🌙";
    } else {
        textoTema.textContent = "Modo Escuro";
        iconeTema.textContent = "☀️";
    }
}


// --------------------------------------------------------------------
// PESSOA 4: A ESTÉTICA DINÂMICA (Manipulando CSS)
// Missão: Alternar a classe do corpo da página para ativar o Dark Mode.
// --------------------------------------------------------------------
//btnAdicionar.style.backgroundColor = "#00ff66";
//btnAdicionar.style.color = "#0a0f1d";

function alternarVisualTema() {
    document.body.classList.toggle('dark-theme');
}


// --------------------------------------------------------------------
// PESSOA 5: OS CONSTRUTORES (Criando Elementos)
// Missão: Injetar novos blocos no grid, incluindo um botão de fechar.
// --------------------------------------------------------------------
let contadorModulos = 3; 

function adicionarNovoModulo() {
    contadorModulos++;

    // 1. Criar o card principal
    const novoCard = document.createElement('div');
    novoCard.classList.add('card');
    novoCard.setAttribute('data-id', contadorModulos);

    // 2. Criar o botão de exclusão interna do card
    const btnDeletar = document.createElement('button');
    btnDeletar.textContent = "×";
    btnDeletar.classList.add('btn-deletar'); 
    btnDeletar.setAttribute('title', 'Remover este módulo');

    // 3. Criar os elementos de texto
    const titulo = document.createElement('h3');
    titulo.textContent = `Trilha de Estudo ${contadorModulos}`;
    
    const descricao = document.createElement('p');
    descricao.textContent = "Novo módulo rastreado gerado dinamicamente via JavaScript sem recarregar a página.";

    // 4. Montar a estrutura (Anexar o botão e os textos dentro do card)
    novoCard.appendChild(btnDeletar);
    novoCard.appendChild(titulo);
    novoCard.appendChild(descricao);

    // 5. Injetar o card completo no Grid
    gridElementos.appendChild(novoCard);
}


// --------------------------------------------------------------------
// PESSOA 6: A AÇÃO (Eventos, Delegação e Navegação no DOM)
// Missão: Controlar os fluxos de interação e gerenciar a exclusão.
// --------------------------------------------------------------------

// Fluxo 1: Alternar Tema (Clique no botão de tema)
btnTema.addEventListener('click', function(evento) {
    evento.preventDefault(); 
    alternarVisualTema();
    alternarTextosTema();
});

// Fluxo 2: Adicionar Elemento (Clique no botão principal)
btnAdicionar.addEventListener('click', function(evento) {
    evento.preventDefault();
    adicionarNovoModulo();
    
    // Feedback visual temporário no botão
    btnAdicionar.textContent = "Adicionado!";
    setTimeout(() => {
        btnAdicionar.textContent = "+ Adicionar Novo Bloco";
    }, 1000);
});

// Fluxo 3: Delegação de Eventos para Exclusão
// Em vez de monitorar cada botão individualmente, monitoramos o GRID inteiro!
gridElementos.addEventListener('click', function(evento) {
    // Descobre exatamente qual sub-elemento foi clicado pelo usuário
    const alvoClicado = evento.target;

    // Se o elemento clicado contiver a classe 'btn-deletar'
    if (alvoClicado.classList.contains('btn-deletar')) {
        
        // DOM TRAVERSING: Sobe na árvore de nós para encontrar o card correspondente
        const cardPai = alvoClicado.closest('.card');
        
        if (cardPai) {
            // Aplica uma animação ou efeito simples antes de remover (opcional)
            cardPai.style.opacity = '0';
            cardPai.style.transform = 'scale(0.9)';
            
            // Aguarda o tempo da transição visual e remove o nó do DOM permanentemente
            setTimeout(() => {
                cardPai.remove();
            }, 200);
        }
    }
});