# DOM_LAB // Manipulação Avançada de DOM ⚡

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📌 Sobre o Projeto

O **DOM_LAB** é um projeto interativo desenvolvido como material de apoio para uma aula invertida sobre **Manipulação de DOM com JavaScript** para a disciplina de Web. Desenvolvido por estudantes do 4º período de Engenharia de Software do IFPE Campus Belo Jardim, o projeto demonstra o ciclo completo de manipulação do *Document Object Model* (Criar, Ler, Atualizar e Deletar).

Para tornar a apresentação mais imersiva, a aplicação inicia em um visual limpo e claro (White Mode) e, através da manipulação de propriedades dinâmicas, transforma-se em uma estética *dark retro-minimalista* (Tech-Noir), evidenciando o poder do JavaScript na alteração de classes e variáveis CSS.

## 🚀 Funcionalidades

- **Alternância Dinâmica de Tema:** Manipulação de `classList` e variáveis CSS para transição instantânea de layout sem recarregar a página.
- **Injeção de Elementos:** Criação de nós (`Nodes`) complexos na memória e inserção no DOM de forma otimizada.
- **Remoção Interativa:** Exclusão de elementos gerados dinamicamente utilizando *Event Delegation* e *DOM Traversing*.
- **Prevenção de XSS:** Uso rigoroso de `textContent` em detrimento de `innerHTML` para demonstrar boas práticas de segurança na modificação de conteúdo.

## 🧠 Conceitos Técnicos Abordados na Aula

1. **Fundamentos da Árvore DOM:** Diferença entre BOM e DOM, e compreensão do *Critical Rendering Path*.
2. **Seletores e Rastreadores:** Análise de performance entre `getElementById` vs `querySelector`, e distinção entre *Live Collections* (`HTMLCollection`) e *Static Collections* (`NodeList`).
3. **Modificadores e Atributos:** Manipulação segura de texto e gerenciamento de `data-attributes`.
4. **Estética Dinâmica:** Arquitetura limpa para manipulação de CSS via JS, evitando estilos *inline*.
5. **Construtores e Otimização:** Técnicas de `createElement` e discussões sobre *Reflow* e *Repaint*.
6. **Arquitetura de Eventos:** Compreensão de *Event Bubbling*, interceptação de ações com `preventDefault`, navegação pela árvore (`closest()`) e o padrão de Delegação de Eventos.

## 🛠️ Como Executar o Projeto

Como este projeto utiliza apenas tecnologias nativas do navegador (Vanilla JS, HTML e CSS), não há necessidade de instalação de pacotes ou servidores complexos.

1. Clone este repositório:
   ```bash
   git clone https://github.com/omeIets/Lab_Dom.git