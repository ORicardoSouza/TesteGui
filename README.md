# README

![Cypress Logo](https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png)

Este repositório contém testes funcionais automatizados utilizando o framework Cypress. 
Os testes são projetados para verificar a funcionalidade e comportamento de uma api.

## Instalação

Antes de executar os testes, certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina.
Siga os passos abaixo para configurar e executar os testes:

1. Clone este repositório para sua máquina local:

```bash
git clone https://github.com/ORicardoSouza/TesteGui.git
cd nome-do-repositorio
```

2. Instale as dependências do projeto usando o npm:

```bash
npm install
```

## Executando os Testes

Para executar os testes, você pode utilizar os seguintes comandos:

- Executar testes no modo headless (sem interface gráfica):

```bash
npm run deleteResults && npm run deleteScreenshots && npm run cy:run
```

- Executar testes com interface gráfica:

```bash
npm run cy:open
```

Os testes serão executados automaticamente em segundo plano e você verá os resultados no terminal.

---

# Bibliotecas Usadas

### Cypress (v13.6.5)

[Cypress](https://www.cypress.io/) é um framework de teste de front-end que permite escrever e executar testes de forma rápida e fácil no navegador. Ele é usado para realizar testes de integração e de ponta a ponta em aplicações web.

### Mocha JUnit Reporter (v2.2.1)
O [Mocha JUnit Reporter](https://www.npmjs.com/package/mocha-junit-reporter) é um plugin para o Mocha, um framework de testes JavaScript. Ele gera relatórios no formato JUnit XML, facilitando a integração com sistemas de integração contínua e outras ferramentas de análise de testes.

### Cypress Plugin Steps (v1.1.1)
[Cypress Plugin Steps](https://www.npmjs.com/package/cypress-plugin-steps) é uma extensão para o Cypress que adiciona suporte para definir passos de teste reutilizáveis, melhorando a legibilidade e a manutenção dos testes.

### Moment Timezone (v0.5.45)
[Moment Timezone](https://www.npmjs.com/package/moment-timezone) é uma biblioteca para manipulação de datas e horas em JavaScript. Ela fornece funcionalidades para trabalhar com fusos horários e horários de verão.

### Node LocalStorage (v3.0.5)
[Node LocalStorage](https://www.npmjs.com/package/node-localstorage) é uma implementação do armazenamento local do navegador para o Node.js. Ele permite armazenar dados localmente em ambientes Node.js, útil para testes e outras aplicações que necessitam de armazenamento local.

### Open (v10.0.3)
[Open](https://www.npmjs.com/package/open) é uma biblioteca para abrir arquivos, URLs e aplicativos externos em diferentes plataformas. É útil para automatizar a abertura de arquivos ou páginas da web durante testes ou outras tarefas de automação.

### xmldom (v0.6.0)
[xmldom](https://www.npmjs.com/package/xmldom) é uma implementação do DOM (Document Object Model) para Node.js. Ele permite manipular documentos XML utilizando as mesmas APIs disponíveis no navegador.

### Git Repo Name (v1.0.1)
[Git Repo Name](https://www.npmjs.com/package/git-repo-name) é uma biblioteca para obter o nome do repositório Git de um diretório local. É útil para automatizar tarefas que dependem do nome do repositório, como parte de pipelines de integração contínua.

## Como utilizar

1. Instale as dependências do projeto utilizando o comando `npm install`.
2. Utilize as bibliotecas conforme necessário em seu código.
3. Consulte a documentação oficial de cada biblioteca para obter mais informações sobre como utilizá-las e suas funcionalidades específicas.

---

Este README fornece uma visão geral das bibliotecas incluídas no projeto e orienta sobre como utilizá-las. Certifique-se de consultar a documentação oficial de cada biblioteca para obter mais detalhes sobre sua utilização e funcionalidades específicas.
--- 