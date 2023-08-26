const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
                                    <div class="info">
                                        <img src ="${user.avatarUrl}" alt="Foto de perfil do usario" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadrastado'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada'}</p>

                                            <div class="follow">
                                                </i> <span>Seguidores: ${user.followers} </span>
                                                <span>Seguindo: ${user.following}</span>
                                            </div>
                                        </div>
                                    </div> `
        let repositoriesItens = ''
        user.repositories.forEach(repo =>
            repositoriesItens += `<li>
                                    <a href="${repo.html_url}" target="_blank">
                                        <h3 class="name-repo"> <i class="fa-solid fa-book"></i> ${repo.name}</h3>
                                        <p>${repo.description ?? "Não possui descrição"}</p>
                                       
                                        <div>
                                            <span> ☆ ${repo.stargazers_count}</span>
                                            <span> ♡ ${repo.language ?? "Não possui linguagem"}</span>
                                        </div>
                                    </a>
                                </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">   
                                        <h2>Repositorios</h2>
                                        <ul>${repositoriesItens}</ul>
                                        </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = `<h3>Usuario nao encontrado</h3>`
    }
}

export { screen }