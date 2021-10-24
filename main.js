const linksSocialMedia = {
    github: "LeticiaSerafim",
    youtube: "channel/UCqpxvxiNGmfOTO9db6qtLlg",
    facebook: "leticia.serafim.184",
    instagram: "missallsundayss",
    twitter: "TwitterBrasil"
}

function changeName(){
    //Uma forma de fazer, funciona com classes tbm
    //document.getElementById('userName').textContent ="Letícia Serafim"

    //usando ID é possível puxar o conteudo e trocar ele  de uma forma mais simples - não funciona com classes
    userName.textContent = "Letícia Serafim" 
}
changeName();
// const dentro do for só existe dentro do for, enquanto o for existir - variável de escopo
function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        
        // só pega o que precisa do linksSocialMedia - não usa o github

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    } 
}

changeSocialMediaLinks();


// Ir no github e pegar as informações de lá, para substituiu o HTML

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    //bate na url da API, vai pegar o que a API responde e vai trazer pra dentro
    // promise é um recurso do JavaScrip para poder pegar as respostas de alguma coisa
    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()


