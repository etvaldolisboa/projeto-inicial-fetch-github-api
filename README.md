# DevQuest - Desafio: Consumo API GitHub

## Sobre o Desafio 🚀

Neste desafio do curso DevQuest, foi proposto criar um campo de busca com um botão para buscar os dados de usuário do github usando os conhecimentos adquirido na aulas de Html, CSS, JS e consumo de API com fetch.

## Layout do Projeto em execução 📄
<img src='./src/design/chrome-capture-2023-8-4.gif'>

## Tecnologias Utilizadas 💻

- HTML
- CSS
- JavaScript
- Fetch API

## Funcionalidades ✨

No app de busca foram desenvolvido as seguintes funcionalidades:

1. Exibir uma mensagem de erro caso o campo de busca esteja em branco;
2. Exibir uma mensagem de que o usario nao existe se for escrito seu nome de forma incorreta; 
3. Exibir Dados do usaario, Repositorios e Eventos realizados;
### se o usuário existir
4. Exibir o nome do Usuário, a foto de perfil, a bio e a quantidade de seguidores/seguindo. Se o usuário não tiver nome será exibido a mensagem 'usuario não possi nome cadastrado', se o usuário não tiver bio será exibido a mensagem 'bio não cadastrada', se o usuário não tiver foto de perfil será exibido a imagem padrão do github.
2. Exibir os repositorios que o usuário possui, se o usuário não possui nenhum repositório, não será exibido a seção. Em cada repositório será buscado da API o seu nome, a sua descrição e a quantidade de forks, star, views e a linguagem mais usada.
3. Exibir os eventos de 'PushEvent' e 'CreateEvent' e descartando os demais eventos. Nos eventos se for um 'PushEvent' será exibido o caminho do repositório e o ultimo commit realizado, nos eventos do tipo 'CreateEvent' será exibido a mensagem 'evento do tipo "tipo-do-evento" não possui commits'
4. O layout se torna responsivos graças as medias queries e ao display flex, juntamente com o flex-grow, flex-basis e flex-shrink.

## Instruções para Execução 🛠️

1. Clone o repositório do projeto em sua máquina local.
2. Abra o arquivo "index.html" em seu navegador de preferência.
3. Faça a busca pos um usuário do GitHub.

## Pagina do projeto

- [Acessar página do projeto](https://etvaldolisboa.github.io/projeto-inicial-fetch-github-api/)