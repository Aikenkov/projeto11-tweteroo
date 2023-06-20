# Projeto11 - Tweteroo

O projeto "projeto11-tweteroo" simula uma API de criação e listagem de tweets. Foi desenvolvido com o propósito de treinar requisições HTTP utilizando Node.js e JavaScript. Este projeto proporcionou a oportunidade de aprimorar os conhecimentos relacionados à construção de APIs e manipulação de dados.

## Descrição do Projeto

O Tweteroo é uma aplicação que permite aos usuários criar e listar tweets. Utilizando a API desenvolvida, é possível enviar requisições para criar novos tweets e também recuperar a lista de tweets existentes.

É importante ressaltar que o Tweteroo não possui persistência de dados. Os tweets criados e listados são armazenados apenas em memória durante a execução do servidor. Ao reiniciar o servidor, todos os dados serão perdidos.

O projeto foi desenvolvido utilizando Node.js e JavaScript. Foram utilizadas bibliotecas e ferramentas comuns para construção de APIs, como o Express.js para criação do servidor e o Nodemon para reiniciar o servidor automaticamente durante o desenvolvimento.

## Utilização do Projeto

Para rodar o projeto localmente, siga as instruções abaixo:

1. Faça o clone do projeto para o seu ambiente de desenvolvimento.
2. Abra o terminal e navegue até o diretório do projeto.
3. Execute o comando `npm install` para instalar as dependências do projeto.
4. Após a instalação das dependências, execute o comando `nodemon index.js` para iniciar o servidor.
5. Acesse o projeto no navegador utilizando o endereço `http://localhost:5000`.

Certifique-se de ter o Node.js instalado em sua máquina antes de executar os comandos acima.

## Rotas

A seguir, um resumo das rotas disponíveis no Tweteroo:

### Criação de Tweets

Endpoint: `POST /tweets`

- Descrição: Cria um novo tweet.
- Parâmetros:
  - `username`: Nome de usuário do autor do tweet.
  - `tweet`: Conteúdo do tweet.
- Respostas:
  - `200 OK`: Tweet criado com sucesso.
  - `400 Bad Request`: Erro ao criar o tweet. É necessário enviar todos os campos obrigatórios.

### Listagem de Tweets

Endpoint: `GET /tweets`

- Descrição: Recupera os últimos 10 tweets.
- Respostas:
  - `200 OK`: Retorna uma lista com os últimos 10 tweets.
  - `404 Not Found`: Não foram encontrados tweets.


## Recursos Utilizados

- Node.js
- JavaScript

## Conclusão

O Tweteroo é uma aplicação que simula uma API de criação e listagem de tweets. Embora não haja persistência de dados, foi um projeto importante para o aprendizado e aprimoramento dos conhecimentos em requisições HTTP e construção de APIs utilizando Node.js. Através dessa experiência, pude consolidar os conceitos de manipulação de dados e serviços web. Espero que você aproveite e se divirta utilizando o Tweteroo!

