# Criando uma Rede Social

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Objetivos de aprendizagem](#2-objetivos-de-aprendizagem)
* [3. Histórias de usuário](#3-histórias-de-usuário)
* [4. Testes unitários](#4-testes-unitários)
* [5. Considerações gerais](#5-considerações-gerais)
* [6. Tecnologias utilizadas](#6-tecnologias-utilizadas)
* [7. Contato](#7-contato)

***

## 1. Prefácio

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. As redes sociais
invadiram nossas vidas. Nós as amamos ou odiamos, e muitas pessoas não conseguem
viver sem elas. Redes sociais contém vários tipos de nichos diferentes de acordo com as necessidades do usuário.
## 2. Resumo do projeto

Neste projeto nós construímos uma Rede Social sobre defesa pessoal para mulheres. É direcionado para mulheres que desejam receber dicas de como se defender de possíveis ataques e violências, contando com uma rede de apoio disposta a ajudar independente do nível de conhecimento (iniciante, intermediário ou avançado), que também fica exposto nas postagens de cada usuário. Nossa Rede Social permite à qualquer usuário criar uma conta de acesso, logar-se com ela, criar, editar e deletar publicações.

## 3. Objetivos de aprendizagem

O objetivo principal de aprendizagem deste projeto foi construir uma Single-page Application (SPA) responsiva (com mais de uma tela/ página) na qual seja possível ler e escrever dados.

Neste projeto o _boilerplate_ não foi incluído, portanto tivemos que organizar e definir nossa própria estrutura de pastas e escrevemos nossos próprios testes unitários.

Os principais objetivos de aprendizagem atingidos foram:

### Centrado no usuário, Design de produto

- [X] **Desenhar e desenvolver um produto ou serviço colocando as usuárias no centro**
- [X] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**
- [X] **Criar protótipos para obter feedback e iterar**

**Protótipos de baixa e alta fidelidade:**

![baixa-fidelidade1](https://github.com/amandascam03/SAP010-social-network/assets/131325234/ea1bc505-1b32-4294-b89e-1e8aae42799d)
![baixa-fidelidade2](https://github.com/amandascam03/SAP010-social-network/assets/131325234/b30c8f04-b782-44b1-8f4e-6240f21c4463)
![alta-fidelidade](https://github.com/amandascam03/SAP010-social-network/assets/131325234/9178abcc-2db0-4841-939e-a06737ca3f63)

### HTML

- [X] **Uso de HTML semântico**

### CSS

- [X] **Uso de seletores de CSS**
- [X] **Modelo de caixa (box model): borda, margem, preenchimento**
- [X] **Uso de flexbox em CSS**

### Web APIs

- [X] **Uso de seletores de DOM**
- [X] **Manipulação de eventos de DOM (listeners, propagação, delegação)**
- [X] **Manipulação dinâmica de DOM**
- [X] **Routing (History API, evento hashchange, window.location)**

### JavaScript

- [X] **Arrays (arranjos)**
- [X] **Objetos (key, value)**
- [X] **Diferenciar entre tipos de dados primitivos e não primitivos**
- [X] **Variáveis (declaração, atribuição, escopo)**
- [x] **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**
- [x] **Funções (params, args, return)**
- [x] **Testes unitários (unit tests)**
- [x] **Uso de mocks e espiões**
- [x] **Módulos de ECMAScript (ES modules)**
- [x] **Uso de linter (ESLINT)**
- [x] **Uso de identificadores descritivos (Nomenclatura e Semântica)**
- [x] **Diferença entre expressões (expressions) e declarações (statements)**
- [x] **Callbacks**
- [x] **Promessas**



### Controle de Versões (Git e GitHub)

- [x] **Git: Instalação e configuração**
- [x] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**
- [x] **Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)**
- [x] **GitHub: Criação de contas e repositórios, configuração de chave SSH**
- [x] **GitHub: Implantação com GitHub Pages**
- [x] **GitHub: Colaboração pelo Github (branches | forks | pull requests | code review)**


### Firebase

- [x] **Firebase Auth**
- [x] **Firestore**

### 4. Histórias de usuário

**Foi feita uma pesquisa pelo Google Forms para obter informações do que os usuários precisavam para o site e selecionamos as opções mais relevantes e que estavam ao nosso alcance para entregar os melhor para os usuários.**

![respostas](https://github.com/amandascam03/SAP010-social-network/assets/131325234/361705e3-350d-493f-b55a-abb24dd02f13)
![respostas](https://github.com/amandascam03/SAP010-social-network/assets/131325234/c663a19f-1699-4613-a47d-fa2b8554be55)
![respostas](https://github.com/amandascam03/SAP010-social-network/assets/131325234/8eab028d-cc75-4675-953e-b5a21b2d27da)
![respostas](https://github.com/amandascam03/SAP010-social-network/assets/131325234/6db11872-5a40-4d8d-9dfd-579af290feeb)


**Para organizar as histórias de usuário, utilizamos o Trello.**

**História 1: Eu como interessado na proposta do app quero me cadastrar com uma nova conta para obter uma conta de usuário.**

**História 2: Eu como usuário registrado quero fazer o login para acessar o feed.**

**História 3: Eu como usuário já registrado no app, após realizar o login quero interagir com outros usuários para obter e compartilhar conhecimento em defesa pessoal.**

**Todas as nossas histórias de usuário incluem:**
  - SPA.
  -  _responsividade_.
  -  _tests_ unitários.
  - Testes manuais buscando erros e imperfeições simples.
  - Testes de usabilidade.

### 5. Testes unitários

* Os testes de unidade cobriram 100% de _statements_, _functions_,
  _lines_ e _branches_.

  ![testes-unitários](https://github.com/amandascam03/SAP010-social-network/assets/131325234/cf809263-cbe6-4e6c-b430-aa64e61fcaa9)


### 6. Considerações gerais

* Este projeto foi desenvolvido em dupla.

* A lógica do projeto foi implementada completamente em JavaScript
  (ES6+), HTML e CSS. Para este projeto não foi permitido o uso de
  _frameworks_ ou bibliotecas de CSS e JS.

### 7. Tecnologias utilizadas

<div>
<img title="HTML5" alt="Favicon do HTML5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" / width="40" height="40">  
<img title="CSS3" alt="Favicon do CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" / width="40" height="40">  
<img title="JavaScript" alt="Favicon do JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" / width="40" height="40">  
<img title="Git" alt="Favicon do Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" /width="40" height="40">  
<img title="GitHub" alt="Favicon do Github" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" / width="40" height="40"> 
<img title="Figma" alt="Favicon do Figma" src="https://github.com/devicons/devicon/blob/v2.15.1/icons/figma/figma-original.svg" / width="40" height="40"> 
<img title="Trello" alt="Favicon do Trello" src="https://github.com/devicons/devicon/blob/v2.15.1/icons/trello/trello-plain.svg" / width="40" height="40"> 
<img title="Firebase" alt="Favicon do Firebase" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" / width="40" height="40"/>
</div>

### 8. Contato

  <div>
  Amanda Araujo <br>
<a href = "mailto:amandascam03@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/amanda-scam03" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
  
  Anara Martins <br>
<a href = "mailto:anaramartins31@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/anara-martins-4740b0108/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</div>
