/**
 * consultar a api do github
 * buscar o dados do usuario
 *
 * objetivo. sempre que for clicado no btn acessar as infomrmacoes do usuario
 * 
 */


import { baseUrl, repositoriesQuantity } from '/src/scripts/variables'

// pegando o elemento do botao e adicinando o evento de clique e a funcao que sera execultada
document.getElementById('btn-search').addEventListener('click', () => {
    // quando for clicado ele ira atribuir a varivel 'userName' o valor do input
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)
})
// funcao que sera chamado quando o usuario apertar 'enter' no teclado
document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        getUserProfile(userName)
    }

})

// funcao com o fetch para buscar o dados do usario
async function user(userName) {
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

// funca para buscar os repositorios
async function repos(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

function getUserProfile(userName) {


    // 'quando' terminar de buscar os repositorios ele nos dara a resposta atraves dessa funcao
    repos(userName).then(reposData => {
        console.log(reposData);
    })






    // funcao que irar pegar os dados da funcao 'user' e adicionar ao HTML
    // function getUserProfile(userName) {
    user(userName).then(userData => {
        let userInfo = `
            <div class="info">
                         <img src ="${userData.avatar_url}" alt="Foto de perfil do    usario" />
                         <div class="data">
                            <h1>${userData.name ?? 'Não possui nome cadrastado'}</h1>
                            <p>${userData.bio ?? 'Não possui bio cadastrada'}</p>
                         </div>
                         </div>
                       `

        // pegar a class do HTML e adicionando com as informacacoes da varivel 'userInfo'
        document.querySelector('.profile-data').innerHTML = userInfo
        getUserRepositories(userName)

    })
}


function getUserRepositories(userName) {
    repos(userName).then(reposData => {
        let repositoriesItens = ""
        reposData.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        });
        document.querySelector('.profile-data').innerHTML += `
                                                                 <div class="repositories section">   
                                                                 <h2>Repositorios</h2>
                                                                 <ul>${repositoriesItens}</ul>
                                                                 </div>
                                                                 `
    })
}
