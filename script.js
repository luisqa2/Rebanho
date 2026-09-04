// Menu Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animar hamburger
        hamburger.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    });
});

// Marcar link ativo baseado na página atual
window.addEventListener('load', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Formulário de contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obter dados do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validar campos
        if (!name || !email || !subject || !message) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
        // Simular envio
        console.log('Formulário enviado:', {
            name,
            email,
            subject,
            message
        });
        
        // Mostrar mensagem de sucesso
        alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
        
        // Limpar formulário
        contactForm.reset();
    });
}

// Suavizar scroll para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animações ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos com classe 'feature-card' e 'project-card'
document.querySelectorAll('.feature-card, .project-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Efeito de digitação para títulos
function typewriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Usar efeito de digitação no hero (opcional)
window.addEventListener('load', () => {
    // Descomentar se quiser usar efeito de digitação
    // const heroTitle = document.querySelector('.hero-content h1');
    // if (heroTitle) {
    //     const originalText = heroTitle.textContent;
    //     typewriter(heroTitle, originalText, 100);
    // }
});

// Contador de estatísticas (opcional)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Função para detectar dispositivo móvel
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Adicionar classe ao body se for mobile
if (isMobileDevice()) {
    document.body.classList.add('mobile-device');
}

// Log de inicialização
console.log('Script carregado com sucesso!');
