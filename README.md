# Ordenação por Chave de Array segundo outro Array

## Descrição

Ordenação de um array de entrada atendendo a ordem estipulada pelos elementos em outro array de ordenação.
O array retornado deve conter todos os elementos do array de entrada na seguinte ordem: todos os elementos com CHAVE (id) de mesmo valor do primeiro elemento do array de ordenação, depois todos com CHAVE(id) de mesmo valor do próximo elemento do array de ordenação e assim sucessivamente.

## Solução
No primeiro passo o programa agrupa os elementos da entrada, de acordo com seu campo CHAVE(id).
No segundo passo o array de saida é produzido na sequência dos elementos do array de ordenção:
para cada elemento do array de ordenação, acrescentamos ao array de saida, os elementos do array de entrada que pertencem ao grupo correspondente a CHAVE(id), de acordo com os grupos gerados no primeiro passo.

## Estrutura dos arquivos
A pasta src contem os arquivos com código:
* sortObjects.js: contém função de ordenação: recebe como parâmetros: array de entradas e o array de ordenação, retorna array ordenado.
* sortObjects.spec.js: contém testes unitários da função em sortObjects.js
* index.js: programa principal que chama sortObjects.js com exemplo de entradas e ordenação e escreve array retorndo na saída padrão.

## Instalação

### Requisitos
Este software é escrito em javascript e depende para sua instalação do nodejs e de um gerenciador de pacotes para o nodejs como yarn ou npm.

### Comandos
Se você utiliza o yarn (recomendado):
* $ yarn  // Instala todas as dependências

Se você utilia o npm:
* $ npm install

## Execução
* $ node src/index.js  // executa com arrays pré-definidos em index.js

## Testes
Se você utiliza o yarn (recomendado):
* $ yarn test  // testa o programa em alguns cenários
* $ yarn test:coverage // testa o programa e verifica a cobertura do código por testes.

Se você utiliza o npm:
* $ npm run test  // testa o programa em alguns cenários
* $ npm run test:coverage // testa o programa e verifica a cobertura do código por testes.


