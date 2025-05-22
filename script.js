'use strict'

//Funções pra requisitar os bglh
document.getElementById('form-cadastro').addEventListener('submit', async function (event) {
    event.preventDefault()
  
    const email = document.getElementById('email').value.trim()
    const senha = document.getElementById('senha').value.trim()
    const nome = document.getElementById('nome').value.trim()
    const nickname = document.getElementById('nickname').value.trim()
  
  
    const novoUsuario = {
      email: email,
      senha: senha,
      nome: nome,
      nickname: nickname
    }
  
    try {
      const resultado = await postUsuario(novoUsuario)
      console.log('Usuário cadastrado:', resultado)
      alert('Cadastro realizado com sucesso!')
  
      // Fecha o modal e limpa o formulário
      document.getElementById('cadastro-overlay').classList.add('hidden')
      document.getElementById('form-cadastro').reset()
  
    } catch (error) {
      console.error('Erro ao cadastrar:', error)
      alert('Erro ao cadastrar usuário. Verifique os dados e tente novamente.')
    }
  })
  



//FunçõesAPI
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

