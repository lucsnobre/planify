// Controle dos botões de ingresso
document.addEventListener('DOMContentLoaded', () => {
    const ingressoBtns = document.querySelectorAll('.ingresso-btn-modern');
    
    ingressoBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove classe active de outros botões
            ingressoBtns.forEach(otherBtn => {
                if (otherBtn !== btn && otherBtn.classList.contains('active')) {
                    otherBtn.classList.remove('active');
                    // Reset da transformação
                    otherBtn.style.transform = '';
                }
            });
            
            // Toggle da classe active com animação
            if (!btn.classList.contains('active')) {
                btn.classList.add('active');
                
                // Efeito de ripple melhorado
                const ripple = document.createElement('div');
                ripple.classList.add('ripple');
                
                const rect = btn.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height) * 2.5;
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                // Remove ripple anterior se existir
                const oldRipple = btn.querySelector('.ripple');
                if (oldRipple) {
                    oldRipple.remove();
                }
                
                btn.appendChild(ripple);
                
                // Remove o ripple após a animação
                setTimeout(() => {
                    ripple.remove();
                }, 750);
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Efeito de hover 3D suave
        btn.addEventListener('mousemove', (e) => {
            if (!btn.classList.contains('active')) {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calcula a distância do mouse ao centro do botão
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const deltaX = (x - centerX) / centerX; // -1 to 1
                const deltaY = (y - centerY) / centerY; // -1 to 1
                
                // Aplica uma rotação 3D suave baseada na posição do mouse
                const rotation = 4; // Graus máximos de rotação
                const lift = 2; // Pixels de elevação
                
                btn.style.transform = `
                    perspective(1000px)
                    rotateX(${-deltaY * rotation}deg)
                    rotateY(${deltaX * rotation}deg)
                    translateY(-${lift}px)
                    scale(1.02)
                `;
            }
        });
        
        // Reset suave da transformação
        btn.addEventListener('mouseleave', () => {
            if (!btn.classList.contains('active')) {
                btn.style.transform = `
                    perspective(1000px)
                    rotateX(0deg)
                    rotateY(0deg)
                    translateY(0)
                    scale(1)
                `;
            }
        });
    });

    // Efeito de fumaça que segue o mouse
    const mainBg = document.querySelector('.main-bg');
    let isMouseMoving = false;
    let mouseTimeout;

    function updateMousePosition(e) {
        // Calcula a posição relativa do mouse
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        // Atualiza as variáveis CSS
        mainBg.style.setProperty('--mouse-x', `${x}%`);
        mainBg.style.setProperty('--mouse-y', `${y}%`);
        
        // Ativa o efeito
        if (!mainBg.classList.contains('active')) {
            mainBg.classList.add('active');
        }
        
        // Reset do timeout
        clearTimeout(mouseTimeout);
        
        // Define novo timeout para remover o efeito
        mouseTimeout = setTimeout(() => {
            mainBg.classList.remove('active');
        }, 150); // Ajuste este valor para controlar quanto tempo o efeito permanece após o mouse parar
    }

    // Adiciona o listener de movimento do mouse
    mainBg.addEventListener('mousemove', updateMousePosition);
    
    // Remove o efeito quando o mouse sai da área
    mainBg.addEventListener('mouseleave', () => {
        mainBg.classList.remove('active');
    });
});

// Função para criar partículas
function createParticles(e, btn) {
    const particles = btn.querySelector('.particles');
    particles.innerHTML = ''; // Limpa partículas anteriores
    
    // Número de partículas
    const particleCount = 12;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Posição inicial no ponto de clique
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Tamanho aleatório
        const size = Math.random() * 3 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Posição inicial
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        // Direção aleatória
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 50 + 50;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--x', `${tx}px`);
        particle.style.setProperty('--y', `${ty}px`);
        
        // Aplica animação
        particle.style.animation = `particleAnimation 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
        
        particles.appendChild(particle);
        
        // Remove a partícula após a animação
        setTimeout(() => {
            particle.remove();
        }, 800);
    }
} 