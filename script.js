'use strict'


//Funções
async function getUsuarios(){
    const url = `http://10.107.134.19:8080/v1/planify/usuario`

    const response = await fetch(url)

    const data = await response.json()

    return data
}

async function getUsuario(id){
    const url = `http://10.107.134.19:8080/v1/planify/usuario/${id}`

    const response = await fetch(url)

    const data = await response.json()

    return data
}

async function postUsuario(usuario){
    const url = `http://10.107.134.19:8080/v1/planify/usuario`

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }

    const response = await fetch(url, options)

    const data = await response.json()

    return data
}

async function putUsuario(usuario, id){
    const url = `http://10.107.134.19:8080/v1/planify/usuario`

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }

    const response = await fetch(url, options)

    const data = await response.json()

    return data
}

async function deleteUsuario(id){
    const url = `http://10.107.134.19:8080/v1/planify/usuario/:search_id`

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }

    const response = await fetch(url, options)

    const data = await response.json()
    
    return data
}



//Cadastro Pop-up

const abrirCadastroBtn = document.querySelector('#botaoCadastrar')
const fecharCadastroBtn = document.querySelector('#fecharCadastro')
const overlayCadastro = document.querySelector('#cadastro-overlay')

abrirCadastroBtn.addEventListener('click', () => {
    overlayCadastro.classList.remove('hidden')
})

fecharCadastroBtn.addEventListener('click', () => {
    overlayCadastro.classList.add('hidden')
})

// Fechar ao clicar fora do modal
overlayCadastro.addEventListener('click', (cadastro) => {
    if (cadastro.target === overlayCadastro) {
        overlayCadastro.classList.add('hidden')
    }
})

