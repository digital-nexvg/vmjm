// ===================================
// VMJM SERVIÇOS AUTOMOTIVOS
// JavaScript Principal
// ===================================

// Objetos e Constantes
const SITE_CONFIG = {
    whatsappNumber: '+55XXXXXXXXXXX', // Atualizar com número real
    animationDelay: 300,
    headerScrollThreshold: 100
};

// Estados da Aplicação
const appState = {
    menuOpen: false,
    carouselCurrentIndex: 0,
    carouselItemsPerPage: {
        desktop: 3,
        tablet: 2,
        mobile: 1
    }
};

// ===================================
// INICIALIZAÇÃO
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMenuToggle();
    initSmoothScroll();
    initAnimationsOnScroll();
    initCarousel();
    setupAccessibility();
    preloadImages();
});

// ===================================
// HEADER E NAVEGAÇÃO
// ===================================

function initHeader() {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-desktop a, .mobile-link');
    
    // Efeito de header transparente/sólido ao scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > SITE_CONFIG.headerScrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Fechar menu mobile ao clicar em link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenuMobile();
        });
    });
}

function initMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const navMobile = document.getElementById('navMobile');
    
    menuToggle.addEventListener('click', () => {
        appState.menuOpen = !appState.menuOpen;
        
        if (appState.menuOpen) {
            navMobile.classList.add('active');
            menuToggle.setAttribute('aria-expanded', 'true');
        } else {
            navMobile.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
        if (!e.target.closest('header')) {
            closeMenuMobile();
        }
    });
}

function closeMenuMobile() {
    const menuToggle = document.getElementById('menuToggle');
    const navMobile = document.getElementById('navMobile');
    appState.menuOpen = false;
    navMobile.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
}

// ===================================
// SMOOTH SCROLL
// ===================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Pular para links internos válidos
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// ANIMAÇÕES AO SCROLL (Intersection Observer)
// ===================================

function initAnimationsOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos que devem animar
    const animatableElements = document.querySelectorAll(
        '.section-header, .servico-item, .diferencial-item, .info-item'
    );
    
    animatableElements.forEach(el => {
        observer.observe(el);
    });
}

// ===================================
// BOTÕES E AÇÕES
// ===================================

function setupActionButtons() {
    const contactButtons = document.querySelectorAll('[data-action="contact"]');
    
    contactButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            openWhatsApp();
        });
    });
}

function openWhatsApp() {
    const message = 'Olá! Gostaria de solicitar um atendimento na VMJM Serviços Automotivos.';
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener');
}

// ===================================
// GALERIA DE IMAGENS
// ===================================

function initGaleria() {
    const galeriaItems = document.querySelectorAll('.galeria-item:not(.placeholder-galeria)');
    
    galeriaItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('.galeria-img').src;
            const imgAlt = this.querySelector('.galeria-img').alt;
            openImageModal(imgSrc, imgAlt);
        });
    });
}

function openImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img src="${src}" alt="${alt}" />
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.style.display = 'flex';
    
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Estilos para modal de imagem
const style = document.createElement('style');
style.textContent = `
    .image-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 2000;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease-out;
    }
    
    .modal-content {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
    }
    
    .modal-content img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }
    
    .modal-close {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        font-weight: bold;
        background: none;
        border: none;
        padding: 0;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .modal-close:hover {
        color: #FFD000;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// CARROSSEL DE AVALIAÇÕES
// ===================================

function initCarousel() {
    const carousel = document.getElementById('avaliacoesCarousel');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    
    if (!carousel) return;
    
    const carouselCards = carousel.querySelectorAll('.avaliacao-card:not(.placeholder-avaliacao)');
    const totalCards = carouselCards.length;
    
    // Criar indicadores
    createIndicators(totalCards, indicatorsContainer);
    
    // Event listeners
    prevBtn.addEventListener('click', () => scrollCarousel(-1));
    nextBtn.addEventListener('click', () => scrollCarousel(1));
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') scrollCarousel(-1);
        if (e.key === 'ArrowRight') scrollCarousel(1);
    });
    
    // Atualizar indicadores ao scrollar
    carousel.addEventListener('scroll', () => {
        updateIndicators(carousel, indicatorsContainer, carouselCards.length);
    });
    
    // Touch para mobile
    let touchStartX = 0;
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) {
            scrollCarousel(1);
        } else if (touchEndX - touchStartX > 50) {
            scrollCarousel(-1);
        }
    });
}

function createIndicators(count, container) {
    container.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'carousel-indicator' + (i === 0 ? ' active' : '');
        indicator.addEventListener('click', () => goToCarouselCard(i));
        container.appendChild(indicator);
    }
}

function scrollCarousel(direction) {
    const carousel = document.getElementById('avaliacoesCarousel');
    const cardWidth = carousel.querySelector('.avaliacao-card').offsetWidth;
    const gap = 20;
    const scrollAmount = cardWidth + gap;
    
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

function goToCarouselCard(index) {
    const carousel = document.getElementById('avaliacoesCarousel');
    const cardWidth = carousel.querySelector('.avaliacao-card').offsetWidth;
    const gap = 20;
    const scrollAmount = (cardWidth + gap) * index;
    
    carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

function updateIndicators(carousel, container, totalCards) {
    const cardWidth = carousel.querySelector('.avaliacao-card').offsetWidth;
    const gap = 20;
    const scrollLeft = carousel.scrollLeft;
    const currentIndex = Math.round(scrollLeft / (cardWidth + gap));
    
    const indicators = container.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// ===================================
// ACESSIBILIDADE
// ===================================

function setupAccessibility() {
    // Adicionar skip link
    if (!document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Pular para conteúdo principal';
        skipLink.className = 'skip-link';
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
    
    // Garantir que todos os botões sejam acessíveis
    const buttons = document.querySelectorAll('button, a');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent.trim()) {
            button.setAttribute('aria-label', 'Botão sem rótulo');
        }
    });
}

// ===================================
// PRELOAD DE IMAGENS
// ===================================

function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src) {
            const preload = new Image();
            preload.src = src;
        }
    });
}

// ===================================
// FUNÇÕES UTILITÁRIAS
// ===================================

// Debounce para funções de resize/scroll
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle para melhor performance
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Verificar se elemento está em viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ===================================
// EVENT LISTENERS ADICIONAIS
// ===================================

// Atualizar carrinho/funcionalidades conforme necessário
window.addEventListener('resize', debounce(() => {
    // Ajustar layout se necessário
}, 250));

// Tratamento de erros
window.addEventListener('error', (e) => {
    console.error('Erro não capturado:', e.error);
});

// Inicializar funcionalidades adicionais
document.addEventListener('DOMContentLoaded', () => {
    setupActionButtons();
    initGaleria();
});
