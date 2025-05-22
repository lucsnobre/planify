const abrirCadastroBtn = document.querySelector('btn cadastrar'); 
const fecharCadastroBtn = document.querySelector('#fecharCadastro');
const overlayCadastro = document.querySelector('#cadastro-overlay');

abrirCadastroBtn.addEventListener('click', () => {
    overlayCadastro.classList.remove('hidden');
});

fecharCadastroBtn.addEventListener('click', () => {
    overlayCadastro.classList.add('hidden');
});

// Fechar ao clicar fora do modal
overlayCadastro.addEventListener('click', (e) => {
    if (e.target === overlayCadastro) {
        overlayCadastro.classList.add('hidden');
    }
});

