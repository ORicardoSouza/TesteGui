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

Este projeto requer o uso das seguintes bibliotecas:

## Cypress (^13.6.5)

O Cypress é um framework de teste de front-end de código aberto que permite escrever e executar testes de forma rápida e fácil em navegadores modernos. Ele fornece uma API poderosa para interagir com sua aplicação e testar seu comportamento.

## Mocha JUnit Reporter (^2.2.1)

O Mocha JUnit Reporter é um reporter do Mocha que gera relatórios no formato JUnit XML. Ele é útil para integrar o Cypress com ferramentas de integração contínua (CI) que suportam o formato JUnit, como Jenkins, TeamCity e Bamboo. Esses relatórios podem fornecer informações detalhadas sobre a execução dos testes, incluindo resultados, falhas e tempo de execução.

## Cypress-plugin-steps (^1.1.1")
O plugin cypress-plugin-steps irá automaticamente capturar os passos dos seus testes e exibi-los no relatório Cypress. Certifique-se de escrever seus testes de forma que eles expressem claramente as etapas do processo de teste.
--- 