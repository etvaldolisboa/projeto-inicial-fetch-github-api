const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
                                    <div class="info">
                                    <h1 class="name-user">${user.name ?? 'Não possui nome cadrastado'}</h1>
                                        <img src ="${user.avatarUrl}" alt="Foto de perfil do usario" />
                                        <div class="data">
                                            <p>${user.bio ?? 'Não possui bio cadastrada'}</p>

                                            <div class="follow">
                                                <span>Seguidores: ${user.followers}</span>
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
                                            <span> 
                                            <i class="fa-solid fa-code-fork"></i> ${repo.forks_count}</span> <span> 
                                            <i class="fa-regular fa-star"></i> ${repo.stargazers_count}<span><span> 
                                            <i class="fa-regular fa-eye"></i> ${repo.watchers}</span> 
                                            <i class="fa-regular fa-file-code"></i> ${repo.language ?? "Não possui linguagem"}</span><span> 
                                        </div>
                                    </a>
                                </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories">   
            <h2>Repositorios</h2>
            <ul>${repositoriesItens}</ul>
            </div>`
        } 
        let eventsItens = ''
        user.events.forEach(event => {
            // if (event.type === 'PushEvent' || 'CreateEvent') {
            // }
            // se evento for do tipo 'pushevnt ele far[a a impress'ao de caa eveno na tela
            if (event.type === 'PushEvent') {
                eventsItens += `
                                <li>
                                    <p class="type-event">${event.repo.name}/
                                    <span class="commit">${event.payload.commits[0].message}</span></p>
                                </li>
                                `
                // se nao for do tipo pushevente caira nessa linha de codigo
            } else if (event.type === 'CreateEvent') {
                eventsItens += `
                                <li>
                                   <p class="type-event">${event.repo.name}/
                                   <span class="commit">${event.payload.description ?? `evento do tipo "${event.payload.ref_type}" não possui commits`}</span></p>
                                </li>
                                `
            }
            // console.log(event);
        }
        );

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events">
            <h2>Eventos</h2>
            <ul>${eventsItens}</ul>
            <div>`
        }
        // if ()
    },
    renderNotFound() {
        this.userProfile.innerHTML = `
        <style>
            .container .profile-data {
                display: block;
            }
        </style>
        <h3>Usuário não encontrado <i class="fa-regular fa-face-sad-cry"></i></h3>`
    }
}

export { screen }