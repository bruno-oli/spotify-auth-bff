<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">🚀 spotify-auth-bff</h3>

  <p align="center">
    Essa aplicação construida em NodeJS + Express + Typescript facilita a autenticação dos serviços da API do Spotify.
  </p>
</div>

### Tecnologias usadas

* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

### Setup

1. Clone o repositório
   ```sh
   git clone https://github.com/bruno-oli/spotify-auth-bff.git
   ```
2. Instale as dependências
   ```sh
   // NPM
   npm install

   // Yarn
   yarn
   ```
3. Crie um arquivo `.env` na raiz do projeto com as suas configurações
   ```sh
   PORT=3001
   CLIENT_ID='client id do seu aplicativo Spotify'
   CLIENT_SECRET='client secret do seu aplicativo Spotify'
   REDIRECT_FRONT_END='página de autenticação do front-end'
   REDIRECT_URI='redirect uri do seu aplicativo Spotify'
   ```

4. No seu front end, crie um link para a rota de login
   ```sh
   <a href="http://localhost:3001/login">Login com o Spotify</a>
   ```

5. Trate os dados que serão enviados através de parametros na rota definida em `REDIRECT_FRONT_END` no passo 3

## Contato

Email - brunomax84411@gmail.com

Linkedin - [Bruno Max](https://www.linkedin.com/in/bruno-max-3665b3223/)

Project Link: [https://github.com/bruno-oli/spotify-auth-bff](https://github.com/bruno-oli/spotify-auth-bff)